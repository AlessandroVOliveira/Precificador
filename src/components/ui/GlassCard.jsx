import React from 'react';
import './GlassCard.css';

const GlassCard = ({ children, className = '', padding = 'var(--space-md)' }) => {
  return (
    <div 
      className={`glass-card ${className}`} 
      style={{ padding }}
    >
      {children}
    </div>
  );
};

export default GlassCard;
