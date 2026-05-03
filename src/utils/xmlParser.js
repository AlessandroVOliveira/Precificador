/**
 * Utility to parse NFe XML files (v4.00)
 * Focuses on extracting products and their associated costs/taxes.
 */

export const parseNFeXML = (xmlString) => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, "text/xml");
  
  // NFe Namespace
  const ns = "http://www.portalfiscal.inf.br/nfe";
  
  // Check for parse errors
  const parseError = xmlDoc.getElementsByTagName("parsererror");
  if (parseError.length > 0) {
    throw new Error("Erro ao processar o XML. Verifique se o arquivo é uma NFe válida.");
  }

  const items = [];
  const detElements = xmlDoc.getElementsByTagName("det");

  // Helper to find a tag value recursively within a parent
  const findValue = (parent, tagName, defaultValue = "0") => {
    const el = parent.getElementsByTagName(tagName)[0];
    if (el) return el.textContent;
    
    // Search in children if not found directly
    for (let child of parent.children) {
      const found = findValue(child, tagName, null);
      if (found !== null) return found;
    }
    return defaultValue;
  };

  // Total invoice values (for proportional distribution if needed)
  const totalNode = xmlDoc.getElementsByTagName("total")[0];
  const globalFrete = parseFloat(findValue(totalNode, "vFrete", "0"));
  const globalSeg = parseFloat(findValue(totalNode, "vSeg", "0"));
  const globalOutro = parseFloat(findValue(totalNode, "vOutro", "0"));
  const globalVProd = parseFloat(findValue(totalNode, "vProd", "0"));

  for (let i = 0; i < detElements.length; i++) {
    const det = detElements[i];
    const prod = det.getElementsByTagName("prod")[0];
    const imposto = det.getElementsByTagName("imposto")[0];

    // Basic product info
    const itemValue = parseFloat(findValue(prod, "vProd"));
    const itemDiscount = parseFloat(findValue(prod, "vDesc", "0"));
    
    const item = {
      id: det.getAttribute("nItem") || i.toString(),
      code: findValue(prod, "cProd"),
      name: findValue(prod, "xProd"),
      quantity: parseFloat(findValue(prod, "qCom")),
      unitPrice: parseFloat(findValue(prod, "vUnCom")),
      totalPrice: itemValue - itemDiscount, // Net base price
    };

    // Taxes from <imposto>
    const vIPI = parseFloat(findValue(imposto, "vIPI", "0"));
    const vICMSST = parseFloat(findValue(imposto, "vICMSST", "0"));
    const vICMS = parseFloat(findValue(imposto, "vICMS", "0"));
    const vPIS = parseFloat(findValue(imposto, "vPIS", "0"));
    const vCOFINS = parseFloat(findValue(imposto, "vCOFINS", "0"));
    const vFCP = parseFloat(findValue(imposto, "vFCP", "0"));
    
    // Additional costs per item (NFe usually distributes these)
    let vFrete = parseFloat(findValue(prod, "vFrete", "0"));
    let vSeg = parseFloat(findValue(prod, "vSeg", "0"));
    let vOutro = parseFloat(findValue(prod, "vOutro", "0"));

    // FALLBACK: If item freight is 0 but global freight is > 0, do proportional distribution
    if (vFrete === 0 && globalFrete > 0) {
      vFrete = (itemValue / globalVProd) * globalFrete;
    }
    if (vSeg === 0 && globalSeg > 0) {
      vSeg = (itemValue / globalVProd) * globalSeg;
    }
    if (vOutro === 0 && globalOutro > 0) {
      vOutro = (itemValue / globalVProd) * globalOutro;
    }

    // Store tax breakdown
    item.taxes = { vIPI, vICMSST, vICMS, vPIS, vCOFINS, vFCP };
    
    // Total extra cost
    item.extraCosts = vIPI + vICMSST + vFrete + vSeg + vOutro;
    
    // Cost Unitary (CU)
    item.costUnitary = (item.totalPrice + item.extraCosts) / item.quantity;

    items.push(item);
  }

  return items;
};
