import React, { useState } from 'react';
import { CVProvider } from './context/CVContext';
import Header from './components/Header';
import TemplateSelector from './components/TemplateSelector';
import EditorSidebar from './components/Editor/EditorSidebar';
import CVPreview from './components/Preview/CVPreview';
import PricingModal from './components/Subscription/PricingModal';
import './index.css';

function MainApp() {
  const [mobileTab, setMobileTab] = useState('edit'); // 'edit' | 'preview'

  return (
    <div className="app-container">
      {/* Top Global SaaS Header */}
      <Header mobileTab={mobileTab} setMobileTab={setMobileTab} />

      {/* 5-Template Showcase & Selector Bar */}
      <TemplateSelector />

      {/* Split-Screen Workspace: Left Editor, Right Live Preview */}
      <main className={`app-workspace view-${mobileTab}`}>
        <EditorSidebar />
        <CVPreview />
      </main>

      {/* SaaS Subscription & Checkout Modal */}
      <PricingModal />
    </div>
  );
}

export default function App() {
  return (
    <CVProvider>
      <MainApp />
    </CVProvider>
  );
}
