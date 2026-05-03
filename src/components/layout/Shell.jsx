import React from 'react';
import { DollarSign, FileText, Settings, Github } from 'lucide-react';
import './Shell.css';

const Shell = ({ children }) => {
  return (
    <div className="shell-container">
      <header className="shell-header">
        <div className="logo">
          <div className="logo-icon">
            <DollarSign size={24} />
          </div>
          <span className="logo-text">Precificador</span>
        </div>
        
        <nav className="shell-nav">
          <a href="#" className="nav-link active">
            <FileText size={18} />
            <span>Notas Fiscais</span>
          </a>
          <a href="#" className="nav-link">
            <Settings size={18} />
            <span>Configurações</span>
          </a>
        </nav>

        <div className="header-actions">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="github-link">
            <Github size={20} />
          </a>
        </div>
      </header>

      <main className="shell-content">
        {children}
      </main>

      <footer className="shell-footer">
        <p>&copy; 2026 Precificador. Desenvolvido para eficiência financeira.</p>
      </footer>
    </div>
  );
};

export default Shell;
