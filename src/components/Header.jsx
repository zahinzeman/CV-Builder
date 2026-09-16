import React from 'react';
import { useCV } from '../context/CVContext';
import { 
  Sparkles, 
  Crown, 
  Printer, 
  RotateCcw, 
  Download, 
  Check, 
  ShieldCheck, 
  FileText,
  Eye,
  Edit3
} from 'lucide-react';

export default function Header({ mobileTab, setMobileTab }) {
  const { 
    isSubscribed, 
    setIsSubscribed, 
    triggerUpgrade, 
    loadSampleData, 
    resetCV,
    selectedTemplate 
  } = useCV();

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="app-header no-print">
      <div className="header-brand">
        <div className="brand-logo-icon">
          <FileText size={20} className="brand-icon" />
          <Sparkles size={12} className="brand-sparkle" />
        </div>
        <div className="brand-text">
          <span className="brand-name">Resumate</span>
          <span className="brand-badge">SaaS</span>
        </div>
      </div>

      {/* Center - Mobile View Switcher */}
      <div className="header-mobile-toggle">
        <button 
          className={`toggle-btn ${mobileTab === 'edit' ? 'active' : ''}`}
          onClick={() => setMobileTab('edit')}
        >
          <Edit3 size={14} /> Edit
        </button>
        <button 
          className={`toggle-btn ${mobileTab === 'preview' ? 'active' : ''}`}
          onClick={() => setMobileTab('preview')}
        >
          <Eye size={14} /> Preview
        </button>
      </div>

      {/* Right Actions */}
      <div className="header-actions">
        {/* Sample Data Loader */}
        <button 
          className="header-btn-secondary" 
          onClick={loadSampleData}
          title="Fill with high-quality example data"
        >
          <RotateCcw size={14} />
          <span className="btn-label">Load Example</span>
        </button>

        {/* Subscription Status & Upgrade Button */}
        {isSubscribed ? (
          <div className="pro-active-badge" onClick={() => triggerUpgrade("Manage Your Pro Subscription")}>
            <Crown size={14} className="crown-icon" />
            <span>PRO MEMBER</span>
            <span className="active-dot" />
          </div>
        ) : (
          <button 
            className="upgrade-cta-btn"
            onClick={() => triggerUpgrade("Unlock All Premium Templates & Export")}
          >
            <Crown size={15} />
            <span>Upgrade to Pro</span>
            <span className="cta-sparkle">★</span>
          </button>
        )}

        {/* Print / Export to PDF */}
        <button 
          className="header-btn-primary" 
          onClick={handlePrint}
          title="Save as high-resolution PDF via print dialog"
        >
          <Printer size={15} />
          <span>Export PDF</span>
        </button>
      </div>
    </header>
  );
}
