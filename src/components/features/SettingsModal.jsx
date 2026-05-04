import React, { useState, useEffect } from 'react';
import GlassCard from '../ui/GlassCard';
import { X, Calculator, Percent, TrendingUp } from 'lucide-react';
import './SettingsModal.css';

const SettingsModal = ({ isOpen, onClose, initialData, onSave }) => {
  const [activeTab, setActiveTab] = useState('costs');
  const [formData, setFormData] = useState({
    totalFixed: 0,
    revenue: 0,
    salesTax: 0,
    globalMargin: 0,
    recoverICMS: false,
    recoverPISCOFINS: false
  });

  useEffect(() => {
    if (isOpen && initialData) {
      setFormData({
        totalFixed: initialData.fixedCosts.total || 0,
        revenue: initialData.fixedCosts.revenue || 0,
        salesTax: initialData.salesTax || 0,
        globalMargin: initialData.globalMargin || 0,
        recoverICMS: initialData.recoverICMS || false,
        recoverPISCOFINS: initialData.recoverPISCOFINS || false
      });
    }
  }, [isOpen, initialData]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }));
  };

  const handleSave = () => {
    const fixedPercent = formData.revenue > 0 ? (formData.totalFixed / formData.revenue) : 0;
    
    onSave({
      fixedCosts: {
        total: formData.totalFixed,
        revenue: formData.revenue,
        percent: fixedPercent
      },
      salesTax: formData.salesTax,
      globalMargin: formData.globalMargin,
      recoverICMS: formData.recoverICMS,
      recoverPISCOFINS: formData.recoverPISCOFINS
    });
    onClose();
  };

  const calculatedFixedPercent = formData.revenue > 0 
    ? ((formData.totalFixed / formData.revenue) * 100).toFixed(1) 
    : "0.0";

  return (
    <div className="modal-overlay">
      <GlassCard className="modal-content settings-modal">
        <div className="modal-header">
          <div className="title-with-icon">
            <TrendingUp className="accent-color" />
            <h2>Configurações do Negócio</h2>
          </div>
          <button className="close-button" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="settings-tabs">
          <button 
            className={`tab-button ${activeTab === 'costs' ? 'active' : ''}`}
            onClick={() => setActiveTab('costs')}
          >
            <Calculator size={18} /> Custos Fixos
          </button>
          <button 
            className={`tab-button ${activeTab === 'tax' ? 'active' : ''}`}
            onClick={() => setActiveTab('tax')}
          >
            <Percent size={18} /> Impostos e Lucro
          </button>
        </div>

        <div className="modal-body">
          {activeTab === 'costs' ? (
            <div className="settings-section">
              <p className="section-desc">Informe suas despesas mensais para calcular o impacto no preço unitário.</p>
              
              <div className="input-group">
                <label>Total de Custos Fixos (Mês)</label>
                <div className="input-with-prefix">
                  <span>R$</span>
                  <input 
                    type="number" 
                    name="totalFixed"
                    value={formData.totalFixed}
                    onChange={handleChange}
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div className="input-group">
                <label>Faturamento Médio Mensal</label>
                <div className="input-with-prefix">
                  <span>R$</span>
                  <input 
                    type="number" 
                    name="revenue"
                    value={formData.revenue}
                    onChange={handleChange}
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div className="calculation-preview">
                <span>Impacto Estimado:</span>
                <strong>{calculatedFixedPercent}%</strong>
              </div>
            </div>
          ) : (
            <div className="settings-section">
              <p className="section-desc">Configure as taxas de venda e a margem de lucro padrão.</p>

              <div className="input-group">
                <label>Impostos sobre Venda (Simples, Comissões, etc.)</label>
                <div className="input-with-suffix">
                  <input 
                    type="number" 
                    name="salesTax"
                    value={formData.salesTax}
                    onChange={handleChange}
                    placeholder="0"
                  />
                  <span>%</span>
                </div>
              </div>

              <div className="input-group">
                <label>Margem de Lucro Global Desejada</label>
                <div className="input-with-suffix">
                  <input 
                    type="number" 
                    name="globalMargin"
                    value={formData.globalMargin}
                    min="0"
                    max={(99.9 - parseFloat(calculatedFixedPercent) - formData.salesTax).toFixed(1)}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value) || 0;
                      const maxAllowed = 99.9 - parseFloat(calculatedFixedPercent) - formData.salesTax;
                      setFormData(prev => ({
                        ...prev,
                        globalMargin: Math.max(0, Math.min(val, maxAllowed))
                      }));
                    }}
                    placeholder="0"
                  />
                  <span>%</span>
                </div>
              </div>

              <div className="settings-divider"></div>

              <div className="input-group">
                <label>Recuperação de Créditos (Compra)</label>
                <p className="field-note">Se sua empresa recupera impostos, eles serão deduzidos do custo unitário.</p>
                <div className="checkbox-group">
                  <label className="checkbox-item">
                    <input 
                      type="checkbox" 
                      checked={formData.recoverICMS}
                      onChange={(e) => setFormData(prev => ({ ...prev, recoverICMS: e.target.checked }))}
                    />
                    Recuperar ICMS
                  </label>
                  <label className="checkbox-item">
                    <input 
                      type="checkbox" 
                      checked={formData.recoverPISCOFINS}
                      onChange={(e) => setFormData(prev => ({ ...prev, recoverPISCOFINS: e.target.checked }))}
                    />
                    Recuperar PIS/COFINS
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button className="btn-cancel" onClick={onClose}>Cancelar</button>
          <button className="btn-save" onClick={handleSave}>Salvar Alterações</button>
        </div>

      </GlassCard>
    </div>
  );
};

export default SettingsModal;
