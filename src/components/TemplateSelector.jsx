import React from 'react';
import { useCV } from '../context/CVContext';
import { TEMPLATES } from '../data/templates';
import { Crown, Check, Lock } from 'lucide-react';

export default function TemplateSelector() {
  const { selectedTemplate, setSelectedTemplate, isSubscribed, triggerUpgrade } = useCV();

  return (
    <div className="template-bar no-print">
      <div className="template-bar-header">
        <div className="template-bar-title">
          <span className="title-text">Select Resume Template</span>
          <span className="template-count">({TEMPLATES.length} Designs)</span>
        </div>
        <div className="template-legend">
          <span className="legend-item"><span className="legend-dot free"></span> 3 Free</span>
          <span className="legend-item"><span className="legend-dot pro"></span> 2 Premium 👑</span>
        </div>
      </div>

      <div className="template-cards-slider">
        {TEMPLATES.map((tmpl) => {
          const isSelected = selectedTemplate === tmpl.id;
          const isLocked = tmpl.isPremium && !isSubscribed;

          return (
            <div
              key={tmpl.id}
              className={`template-pill-card ${isSelected ? 'selected' : ''} ${tmpl.isPremium ? 'is-premium' : ''}`}
              onClick={() => {
                setSelectedTemplate(tmpl.id);
                if (isLocked) {
                  triggerUpgrade(`Unlock the "${tmpl.name}" Premium Template`);
                }
              }}
            >
              <div className="template-card-top">
                <div 
                  className="template-color-dot" 
                  style={{ backgroundColor: tmpl.accent }} 
                />
                <span className="template-name">{tmpl.name}</span>

                {tmpl.isPremium ? (
                  <span className="pro-chip">
                    <Crown size={11} /> PRO
                  </span>
                ) : (
                  <span className="free-chip">FREE</span>
                )}
              </div>

              <div className="template-card-meta">
                <span className="template-tagline">{tmpl.tagline}</span>
                {isSelected && (
                  <span className="selected-indicator">
                    <Check size={12} /> Active
                  </span>
                )}
                {isLocked && !isSelected && (
                  <span className="locked-indicator" title="Pro subscription required for watermark-free export">
                    <Lock size={12} />
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
