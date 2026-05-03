import React from 'react';
import Shell from './components/layout/Shell';
import GlassCard from './components/ui/GlassCard';
import { Upload, Info } from 'lucide-react';

function App() {
  return (
    <Shell>
      <div className="home-container">
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
            <button className="primary-button">
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
      </div>

      <style jsx>{`
        .home-container {
          display: flex;
          flex-direction: column;
          gap: var(--space-xl);
        }

        .hero-section {
          text-align: center;
          animation: fadeIn 1s ease;
        }

        .hero-section h1 {
          font-size: 3.5rem;
          margin-bottom: var(--space-xs);
          background: linear-gradient(to right, #fff, var(--text-secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: var(--space-lg);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          margin-bottom: var(--space-md);
        }

        .accent-color { color: var(--accent); }
        .primary-color { color: var(--primary); }

        .import-card p, .info-card p {
          color: var(--text-secondary);
          margin-bottom: var(--space-lg);
        }

        .info-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }

        .info-list li {
          color: var(--text-secondary);
          padding-left: var(--space-sm);
          border-left: 2px solid var(--primary);
        }

        .primary-button {
          width: 100%;
          padding: var(--space-sm);
          background: var(--primary);
          color: white;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 1rem;
          box-shadow: 0 4px 15px var(--primary-glow);
          transition: var(--transition-fast);
        }

        .primary-button:hover {
          transform: translateY(-2px);
          filter: brightness(1.1);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 900px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
          }
          .hero-section h1 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </Shell>
  );
}

export default App;
