import React, { useRef } from 'react';
import { useCV } from '../../context/CVContext';
import { TEMPLATES } from '../../data/templates';
import TemplateModern from '../Templates/TemplateModern';
import TemplateTech from '../Templates/TemplateTech';
import TemplateNordic from '../Templates/TemplateNordic';
import TemplateSapphire from '../Templates/TemplateSapphire';
import TemplateCreative from '../Templates/TemplateCreative';
import { 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  Printer, 
  Crown, 
  Lock, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';

export default function CVPreview() {
  const { 
    cvData, 
    selectedTemplate, 
    selectedColor, 
    selectedFont, 
    isSubscribed, 
    triggerUpgrade,
    zoomLevel,
    setZoomLevel 
  } = useCV();

  const printAreaRef = useRef(null);

  const activeTemplateMeta = TEMPLATES.find(t => t.id === selectedTemplate) || TEMPLATES[0];
  const isLockedPreview = activeTemplateMeta.isPremium && !isSubscribed;

  const renderTemplateComponent = () => {
    const props = {
      data: cvData,
      themeColor: selectedColor,
      font: selectedFont
    };

    switch (selectedTemplate) {
      case 'tech':
        return <TemplateTech {...props} />;
      case 'nordic':
        return <TemplateNordic {...props} />;
      case 'sapphire':
        return <TemplateSapphire {...props} />;
      case 'creative':
        return <TemplateCreative {...props} />;
      case 'modern':
      default:
        return <TemplateModern {...props} />;
    }
  };

  const handleZoom = (delta) => {
    setZoomLevel(prev => Math.min(Math.max(0.6, +(prev + delta).toFixed(1)), 1.4));
  };

  const resetZoom = () => setZoomLevel(1);

  return (
    <div className="preview-container">
      {/* Top Floating Preview Toolbar */}
      <div className="preview-toolbar no-print">
        <div className="preview-meta-pill">
          <span className="tmpl-pill-name">{activeTemplateMeta.name}</span>
          {activeTemplateMeta.isPremium ? (
            <span className="tmpl-pro-tag">
              <Crown size={12} /> PRO TEMPLATE
            </span>
          ) : (
            <span className="tmpl-free-tag">FREE TEMPLATE</span>
          )}
        </div>

        <div className="zoom-controls">
          <button 
            className="zoom-btn" 
            onClick={() => handleZoom(-0.1)} 
            title="Zoom Out"
            disabled={zoomLevel <= 0.6}
          >
            <ZoomOut size={15} />
          </button>
          <span className="zoom-value" onClick={resetZoom} title="Reset Zoom">
            {Math.round(zoomLevel * 100)}%
          </span>
          <button 
            className="zoom-btn" 
            onClick={() => handleZoom(0.1)} 
            title="Zoom In"
            disabled={zoomLevel >= 1.4}
          >
            <ZoomIn size={15} />
          </button>
          <button className="zoom-btn" onClick={resetZoom} title="Fit 100%">
            <Maximize2 size={14} />
          </button>
        </div>

        <button 
          className="preview-print-cta" 
          onClick={() => {
            if (isLockedPreview) {
              triggerUpgrade(`Subscribe to remove the watermark and export ${activeTemplateMeta.name}`);
            } else {
              window.print();
            }
          }}
        >
          {isLockedPreview ? (
            <>
              <Lock size={14} />
              <span>Unlock to Export</span>
            </>
          ) : (
            <>
              <Printer size={14} />
              <span>Print / PDF</span>
            </>
          )}
        </button>
      </div>

      {/* Main Canvas Scroll Area */}
      <div className="preview-canvas-wrapper">
        <div 
          className={`preview-page-scaler ${isLockedPreview ? 'watermarked' : ''}`}
          style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }}
          ref={printAreaRef}
        >
          {/* Watermark for Free users previewing Premium templates */}
          {isLockedPreview && (
            <div className="cv-watermark-overlay no-print">
              <div className="watermark-diagonal-text">
                RESUMATE PRO TEMPLATE • PREVIEW ONLY
              </div>
            </div>
          )}

          {/* Render Active Template */}
          {renderTemplateComponent()}
        </div>
      </div>

      {/* Floating Bottom Upgrade Banner if on Premium template without Pro */}
      {isLockedPreview && (
        <div className="pro-lock-banner no-print animate-slide-up">
          <div className="banner-left">
            <div className="banner-crown-box">
              <Crown size={20} color="#fbbf24" />
            </div>
            <div>
              <div className="banner-title">
                You're previewing <strong>{activeTemplateMeta.name}</strong> (Pro Exclusive)
              </div>
              <div className="banner-desc">
                Subscribe to Resumate Pro to remove watermarks, unlock all 5 templates, and enable unlimited PDF exports.
              </div>
            </div>
          </div>
          <button 
            className="banner-upgrade-btn"
            onClick={() => triggerUpgrade(`Subscribe to unlock ${activeTemplateMeta.name}`)}
          >
            <Sparkles size={15} />
            <span>Subscribe from $12/mo</span>
          </button>
        </div>
      )}
    </div>
  );
}
