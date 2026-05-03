import React, { useState } from 'react';
import GlassCard from '../ui/GlassCard';
import { X, Save, AlertCircle } from 'lucide-react';
import './FixedCostsModal.css';

const FixedCostsModal = ({ isOpen, onClose, initialData, onSave }) => {
  const [data, setData] = useState(initialData || { total: 0, revenue: 0 });
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSave = () => {
    if (data.revenue <= 0) {
      setError('O faturamento esperado deve ser maior que zero.');
      return;
    }
    
    const percent = data.total / data.revenue;
    onSave({ ...data, percent });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <GlassCard className="modal-content">
        <div className="modal-header">
          <h2>Configurar Custos Fixos</h2>
          <button className="close-button" onClick={onClose}><X size={20} /></button>
        </div>

        <div className="modal-body">
          <p className="modal-description">
            Informe seus gastos fixos mensais (aluguel, salários, etc.) e o faturamento médio esperado.
          </p>

          <div className="input-group">
            <label>Total de Custos Fixos (Mensal)</label>
            <div className="input-wrapper">
              <span>R$</span>
              <input 
                type="number" 
                value={data.total} 
                onChange={(e) => setData({...data, total: parseFloat(e.target.value) || 0})}
                placeholder="Ex: 5000"
              />
            </div>
          </div>

          <div className="input-group">
            <label>Faturamento Médio Esperado</label>
            <div className="input-wrapper">
              <span>R$</span>
              <input 
                type="number" 
                value={data.revenue} 
                onChange={(e) => setData({...data, revenue: parseFloat(e.target.value) || 0})}
                placeholder="Ex: 25000"
              />
            </div>
          </div>

          {error && (
            <div className="error-message">
              <AlertCircle size={16} />
              {error}
            </div>
          )}

          <div className="result-preview">
            <span>% Custo Fixo calculado:</span>
            <strong>{data.revenue > 0 ? ((data.total / data.revenue) * 100).toFixed(1) : 0}%</strong>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-cancel" onClick={onClose}>Cancelar</button>
          <button className="btn-save" onClick={handleSave}>
            <Save size={18} />
            Salvar Configurações
          </button>
        </div>

      </GlassCard>
    </div>
  );
};

export default FixedCostsModal;
