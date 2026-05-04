import React, { useState, useRef } from 'react';
import Shell from './components/layout/Shell';
import GlassCard from './components/ui/GlassCard';
import SettingsModal from './components/features/SettingsModal';
import { Upload, Info, Calculator, Trash2, ChevronRight, LayoutDashboard, ListChecks, Settings } from 'lucide-react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { parseNFeXML } from './utils/xmlParser';
import { calculateSuggestedPrice } from './utils/pricing';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [expandedItem, setExpandedItem] = useState(null); // ID of the expanded item
  const [isFixedCostsModalOpen, setFixedCostsModalOpen] = useState(false);
  const [marginType, setMarginType] = useState('global'); // 'global' or 'item'
  
  const [fixedCosts, setFixedCosts] = useLocalStorage('precificador_fixed_costs', {
    total: 0,
    revenue: 0,
    percent: 0
  });
  const [globalMargin, setGlobalMargin] = useLocalStorage('precificador_global_margin', 20);
  const [salesTax, setSalesTax] = useLocalStorage('precificador_sales_tax', 10);
  const [recoverICMS, setRecoverICMS] = useLocalStorage('precificador_recover_icms', false);
  const [recoverPISCOFINS, setRecoverPISCOFINS] = useLocalStorage('precificador_recover_piscofins', false);
  const [itemMargins, setItemMargins] = useLocalStorage('precificador_item_margins', {});
  
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const parsedItems = parseNFeXML(e.target.result);
        setItems(parsedItems);
      } catch (error) {
        alert(error.message);
      }
    };
    reader.readAsText(file);
  };

  const resetItems = () => {
    setItems([]);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const updateItemMargin = (id, value) => {
    setItemMargins({ ...itemMargins, [id]: value });
  };


  return (
    <Shell onSettingsClick={() => setFixedCostsModalOpen(true)}>
      <div className="home-container">
        {items.length === 0 ? (
          <>
            <section className="hero-section">
              <h1>Bem-vindo ao Precificador</h1>
              <p className="subtitle">
                Transforme suas Notas Fiscais em estratégias de lucro real.
              </p>
            </section>

            <div className="dashboard-grid">
              <GlassCard className="import-card">
                <div className="card-header">
                  <Upload size={32} className="accent-color" />
                  <h2>Importar XML</h2>
                </div>
                <p>Selecione o arquivo da Nota Fiscal Eletrônica (.xml) para começar.</p>
                <input 
                  type="file" 
                  accept=".xml" 
                  ref={fileInputRef} 
                  onChange={handleFileUpload} 
                  style={{ display: 'none' }} 
                />
                <button 
                  className="primary-button"
                  onClick={() => fileInputRef.current?.click()}
                >
                  Escolher Arquivo
                </button>
              </GlassCard>

              <GlassCard className="info-card">
                <div className="card-header">
                  <Info size={32} className="primary-color" />
                  <h2>Como funciona?</h2>
                </div>
                <ul className="info-list">
                  <li>1. Importe o XML da NFe</li>
                  <li>2. Informe seus Custos Fixos</li>
                  <li>3. Defina sua Margem de Lucro</li>
                  <li>4. Visualize o Preço Sugerido</li>
                </ul>
              </GlassCard>
            </div>
          </>
        ) : (
          <div className="results-container">
            <div className="results-header">
              <div className="title-group">
                <h1>Resultados da Nota</h1>
                <p>{items.length} itens encontrados</p>
              </div>
              <button className="secondary-button" onClick={resetItems}>
                <Trash2 size={18} />
                Limpar
              </button>
            </div>

            <div className="config-row">
              <GlassCard className="config-mini-card">
                <h3><Calculator size={18} /> Custo Fixo</h3>
                <div className="config-value">{(fixedCosts.percent * 100).toFixed(1)}%</div>
                <button className="text-button" onClick={() => setFixedCostsModalOpen(true)}>Editar</button>
              </GlassCard>

              <GlassCard className="config-mini-card">
                <h3><Info size={18} /> Modo de Margem</h3>
                <div className="toggle-group">
                  <button 
                    className={`toggle-button ${marginType === 'global' ? 'active' : ''}`}
                    onClick={() => setMarginType('global')}
                  >
                    <LayoutDashboard size={14} /> Global
                  </button>
                  <button 
                    className={`toggle-button ${marginType === 'item' ? 'active' : ''}`}
                    onClick={() => setMarginType('item')}
                  >
                    <ListChecks size={14} /> Por Item
                  </button>
                </div>
                {marginType === 'global' ? (
                  <div className="config-value">{globalMargin}%</div>
                ) : (
                  <div className="config-label">Ajuste na tabela</div>
                )}
              </GlassCard>
            </div>

            <GlassCard className="table-card">
              <div className="table-wrapper">
                <table className="pricing-table">
                  <thead>
                    <tr>
                      <th>Produto</th>
                      <th>Custo Unit. (CU)</th>
                      <th>{marginType === 'global' ? 'Encargos (%)' : 'Margem Lucro'}</th>
                      <th>Preço Sugerido</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, index) => {
                      const itemMargin = marginType === 'item' ? (itemMargins[item.id] || globalMargin) : globalMargin;
                      
                      // Calculate credits if enabled
                      let credits = 0;
                      if (recoverICMS) credits += item.taxes.vICMS;
                      if (recoverPISCOFINS) credits += (item.taxes.vPIS + item.taxes.vCOFINS);
                      
                      const netCostUnitary = item.costUnitary - (credits / item.quantity);
                      
                      const pricing = {
                        fixedCost: fixedCosts.percent * 100,
                        salesTax: salesTax,
                        profitMargin: itemMargin,
                        price: calculateSuggestedPrice(
                          netCostUnitary, 
                          fixedCosts.percent, 
                          salesTax / 100, 
                          itemMargin / 100
                        )
                      };
                      
                      return (
                        <React.Fragment key={item.id}>
                          <tr 
                            className={`staggered-row ${expandedItem === item.id ? 'active-row' : ''}`}
                            style={{ animationDelay: `${index * 0.05}s` }}
                          >
                            <td>
                              <div className="product-info">
                                <span className="product-code">{item.code}</span>
                                <span className="product-name">{item.name}</span>
                                <div className="composition-container">
                                  <div 
                                    className="comp-segment comp-cost" 
                                    style={{ width: `${(netCostUnitary / pricing.price) * 100}%` }}
                                    title="Custo de Aquisição"
                                  ></div>
                                  <div 
                                    className="comp-segment comp-tax" 
                                    style={{ width: `${((pricing.fixedCost + pricing.salesTax) / 100) * 100}%` }}
                                    title="Encargos (Fixo + Impostos)"
                                  ></div>
                                  <div 
                                    className="comp-segment comp-profit" 
                                    style={{ width: `${(pricing.profitMargin / 100) * 100}%` }}
                                    title="Margem de Lucro"
                                  ></div>
                                </div>
                              </div>
                            </td>
                            <td>R$ {item.costUnitary.toFixed(2)}</td>
                            <td>
                              {marginType === 'global' ? (
                                <span>{((fixedCosts.percent * 100) + salesTax + globalMargin).toFixed(1)}%</span>
                              ) : (
                                  <div className="inline-input">
                                    <input 
                                      type="number" 
                                      value={itemMargin} 
                                      min="0"
                                      max={(99.9 - (fixedCosts.percent * 100) - salesTax).toFixed(1)}
                                      step="0.1"
                                      onChange={(e) => {
                                        const val = parseFloat(e.target.value) || 0;
                                        const maxAllowed = 99.9 - (fixedCosts.percent * 100) - salesTax;
                                        updateItemMargin(item.id, Math.max(0, Math.min(val, maxAllowed)));
                                      }}
                                    />
                                    <span>%</span>
                                  </div>
                              )}
                            </td>
                            <td className={`highlight-price ${pricing.price === null ? 'invalid-price' : ''}`}>
                              {pricing.price === null ? (
                                <span title="A soma dos encargos e margem não pode ser 100% ou mais">⚠️ Inválido</span>
                              ) : (
                                `R$ ${pricing.price.toFixed(2)}`
                              )}
                            </td>
                            <td>
                              <button 
                                className={`icon-button ${expandedItem === item.id ? 'expanded' : ''}`}
                                onClick={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
                              >
                                <ChevronRight size={18} />
                              </button>
                            </td>
                          </tr>
                          {expandedItem === item.id && (
                            <tr className="detail-row">
                              <td colSpan="5">
                                <div className="cost-breakdown">
                                  <div className="breakdown-grid">
                                    <div className="breakdown-item">
                                      <span className="label">Preço Base (Nota)</span>
                                      <span className="value">R$ {(item.totalPrice / item.quantity).toFixed(2)}</span>
                                    </div>
                                    <div className="breakdown-item">
                                      <span className="label">IPI Unit.</span>
                                      <span className="value">R$ {(item.taxes.vIPI / item.quantity).toFixed(2)}</span>
                                    </div>
                                    <div className="breakdown-item">
                                      <span className="label">ICMS ST Unit.</span>
                                      <span className="value">R$ {(item.taxes.vICMSST / item.quantity).toFixed(2)}</span>
                                    </div>
                                    <div className="breakdown-item">
                                      <span className="label">Frete Unit.</span>
                                      <span className="value">R$ {((item.extraCosts - item.taxes.vIPI - item.taxes.vICMSST) / item.quantity).toFixed(2)}</span>
                                    </div>
                                    <div className="breakdown-divider"></div>
                                    <div className="breakdown-item highlight">
                                      <span className="label">Custo Real (Entrada)</span>
                                      <span className="value">R$ {item.costUnitary.toFixed(2)}</span>
                                    </div>
                                    {(recoverICMS || recoverPISCOFINS) && (
                                      <div className="breakdown-item credit">
                                        <span className="label">Créditos de Impostos</span>
                                        <span className="value">- R$ {(credits / item.quantity).toFixed(2)}</span>
                                      </div>
                                    )}
                                    <div className="breakdown-item total">
                                      <span className="label">Custo Líquido para Markup</span>
                                      <span className="value">R$ {netCostUnitary.toFixed(2)}</span>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </GlassCard>
          </div>
        )}
      </div>

      <SettingsModal 
        isOpen={isFixedCostsModalOpen}
        onClose={() => setFixedCostsModalOpen(false)}
        initialData={{
          fixedCosts,
          globalMargin,
          salesTax,
          recoverICMS,
          recoverPISCOFINS
        }}
        onSave={(data) => {
          setFixedCosts(data.fixedCosts);
          setGlobalMargin(data.globalMargin);
          setSalesTax(data.salesTax);
          setRecoverICMS(data.recoverICMS);
          setRecoverPISCOFINS(data.recoverPISCOFINS);
        }}
      />
    </Shell>

  );
}

export default App;

