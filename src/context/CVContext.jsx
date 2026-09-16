import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_CV } from '../data/initialCV';
import { TEMPLATES, THEME_COLORS, FONT_OPTIONS } from '../data/templates';

const CVContext = createContext(null);

export function CVProvider({ children }) {
  // Load saved CV from localStorage if available, or fallback to INITIAL_CV
  const [cvData, setCvData] = useState(() => {
    try {
      const saved = localStorage.getItem('cvforge_data');
      return saved ? JSON.parse(saved) : INITIAL_CV;
    } catch {
      return INITIAL_CV;
    }
  });

  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const [selectedColor, setSelectedColor] = useState(THEME_COLORS[0]);
  const [selectedFont, setSelectedFont] = useState(FONT_OPTIONS[0]);

  // Subscription state: Free vs Pro
  const [isSubscribed, setIsSubscribed] = useState(() => {
    try {
      return localStorage.getItem('cvforge_pro_active') === 'true';
    } catch {
      return false;
    }
  });

  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const [upgradeReason, setUpgradeReason] = useState('');
  const [activeEditorTab, setActiveEditorTab] = useState('personal');
  const [zoomLevel, setZoomLevel] = useState(1);

  // Sync CV data to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('cvforge_data', JSON.stringify(cvData));
    } catch (e) {
      console.warn("Could not save to localStorage", e);
    }
  }, [cvData]);

  // Sync subscription state
  const handleSetSubscribed = (val) => {
    setIsSubscribed(val);
    try {
      localStorage.setItem('cvforge_pro_active', val ? 'true' : 'false');
    } catch (e) {
      console.warn(e);
    }
  };

  // Open upgrade modal with contextual hint
  const triggerUpgrade = (reason = "Unlock Premium Templates & Pro Features") => {
    setUpgradeReason(reason);
    setIsPricingModalOpen(true);
  };

  // Guarded template switcher
  const handleSelectTemplate = (templateId) => {
    const targetTemplate = TEMPLATES.find(t => t.id === templateId);
    setSelectedTemplate(templateId);
    if (targetTemplate?.isPremium && !isSubscribed) {
      // User can still preview, but we show a prompt/modal
      setUpgradeReason(`Unlock the exclusive "${targetTemplate.name}" template with CVForge Pro!`);
    }
  };

  // Editor mutation helpers
  const updatePersonal = (field, value) => {
    setCvData(prev => ({
      ...prev,
      personal: { ...prev.personal, [field]: value }
    }));
  };

  const updateSummary = (value) => {
    setCvData(prev => ({ ...prev, summary: value }));
  };

  // Experience handlers
  const addExperience = () => {
    const newExp = {
      id: `exp-${Date.now()}`,
      position: "Senior Specialist",
      company: "Company Name",
      location: "City, Country",
      startDate: "2023",
      endDate: "Present",
      current: true,
      description: "Brief overview of core impact and responsibilities.",
      highlights: ["Spearheaded key milestone delivering 25% efficiency growth."]
    };
    setCvData(prev => ({ ...prev, experience: [newExp, ...prev.experience] }));
  };

  const updateExperience = (id, field, value) => {
    setCvData(prev => ({
      ...prev,
      experience: prev.experience.map(item => item.id === id ? { ...item, [field]: value } : item)
    }));
  };

  const removeExperience = (id) => {
    setCvData(prev => ({
      ...prev,
      experience: prev.experience.filter(item => item.id !== id)
    }));
  };

  const addExperienceHighlight = (expId) => {
    setCvData(prev => ({
      ...prev,
      experience: prev.experience.map(item => {
        if (item.id === expId) {
          return { ...item, highlights: [...(item.highlights || []), "New achievement or metric achieved"] };
        }
        return item;
      })
    }));
  };

  const updateExperienceHighlight = (expId, index, value) => {
    setCvData(prev => ({
      ...prev,
      experience: prev.experience.map(item => {
        if (item.id === expId) {
          const updated = [...item.highlights];
          updated[index] = value;
          return { ...item, highlights: updated };
        }
        return item;
      })
    }));
  };

  const removeExperienceHighlight = (expId, index) => {
    setCvData(prev => ({
      ...prev,
      experience: prev.experience.map(item => {
        if (item.id === expId) {
          return { ...item, highlights: item.highlights.filter((_, i) => i !== index) };
        }
        return item;
      })
    }));
  };

  // Education handlers
  const addEducation = () => {
    const newEdu = {
      id: `edu-${Date.now()}`,
      degree: "Degree / Program Name",
      institution: "University / Institute Name",
      location: "City, State",
      year: "2022",
      honors: ""
    };
    setCvData(prev => ({ ...prev, education: [...prev.education, newEdu] }));
  };

  const updateEducation = (id, field, value) => {
    setCvData(prev => ({
      ...prev,
      education: prev.education.map(item => item.id === id ? { ...item, [field]: value } : item)
    }));
  };

  const removeEducation = (id) => {
    setCvData(prev => ({
      ...prev,
      education: prev.education.filter(item => item.id !== id)
    }));
  };

  // Skills handlers
  const addSkill = (name = "New Skill", level = 85, category = "General") => {
    setCvData(prev => ({
      ...prev,
      skills: [...prev.skills, { name, level, category }]
    }));
  };

  const updateSkill = (index, field, value) => {
    setCvData(prev => {
      const updated = [...prev.skills];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, skills: updated };
    });
  };

  const removeSkill = (index) => {
    setCvData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  // Project handlers
  const addProject = () => {
    const newProj = {
      id: `proj-${Date.now()}`,
      title: "New Featured Project",
      link: "https://github.com/project",
      description: "Brief summary of architecture, impact, and technology stack utilized."
    };
    setCvData(prev => ({ ...prev, projects: [...prev.projects, newProj] }));
  };

  const updateProject = (id, field, value) => {
    setCvData(prev => ({
      ...prev,
      projects: prev.projects.map(item => item.id === id ? { ...item, [field]: value } : item)
    }));
  };

  const removeProject = (id) => {
    setCvData(prev => ({
      ...prev,
      projects: prev.projects.filter(item => item.id !== id)
    }));
  };

  // Certifications handlers
  const addCertification = () => {
    const newCert = {
      id: `cert-${Date.now()}`,
      name: "Professional Certification",
      issuer: "Issuing Organization",
      year: "2024"
    };
    setCvData(prev => ({ ...prev, certifications: [...prev.certifications, newCert] }));
  };

  const updateCertification = (id, field, value) => {
    setCvData(prev => ({
      ...prev,
      certifications: prev.certifications.map(item => item.id === id ? { ...item, [field]: value } : item)
    }));
  };

  const removeCertification = (id) => {
    setCvData(prev => ({
      ...prev,
      certifications: prev.certifications.filter(item => item.id !== id)
    }));
  };

  // Reset & Sample data
  const loadSampleData = () => {
    setCvData(INITIAL_CV);
  };

  const resetCV = () => {
    setCvData({
      personal: {
        fullName: "",
        title: "",
        email: "",
        phone: "",
        location: "",
        website: "",
        linkedin: "",
        github: "",
        avatar: ""
      },
      summary: "",
      experience: [],
      education: [],
      skills: [],
      projects: [],
      certifications: []
    });
  };

  return (
    <CVContext.Provider
      value={{
        cvData,
        setCvData,
        selectedTemplate,
        setSelectedTemplate: handleSelectTemplate,
        selectedColor,
        setSelectedColor,
        selectedFont,
        setSelectedFont,
        isSubscribed,
        setIsSubscribed: handleSetSubscribed,
        isPricingModalOpen,
        setIsPricingModalOpen,
        upgradeReason,
        triggerUpgrade,
        activeEditorTab,
        setActiveEditorTab,
        zoomLevel,
        setZoomLevel,
        updatePersonal,
        updateSummary,
        addExperience,
        updateExperience,
        removeExperience,
        addExperienceHighlight,
        updateExperienceHighlight,
        removeExperienceHighlight,
        addEducation,
        updateEducation,
        removeEducation,
        addSkill,
        updateSkill,
        removeSkill,
        addProject,
        updateProject,
        removeProject,
        addCertification,
        updateCertification,
        removeCertification,
        loadSampleData,
        resetCV
      }}
    >
      {children}
    </CVContext.Provider>
  );
}

export function useCV() {
  const context = useContext(CVContext);
  if (!context) {
    throw new Error('useCV must be used within a CVProvider');
  }
  return context;
}
