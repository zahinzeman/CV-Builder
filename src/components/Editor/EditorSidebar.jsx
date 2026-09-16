import React from 'react';
import { useCV } from '../../context/CVContext';
import { THEME_COLORS, FONT_OPTIONS } from '../../data/templates';
import { 
  User, 
  FileText, 
  Briefcase, 
  GraduationCap, 
  Wrench, 
  FolderGit2, 
  Palette, 
  Plus, 
  Trash2, 
  Check, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

export default function EditorSidebar() {
  const {
    cvData,
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
    activeEditorTab,
    setActiveEditorTab,
    selectedColor,
    setSelectedColor,
    selectedFont,
    setSelectedFont
  } = useCV();

  const tabs = [
    { id: 'personal', label: 'Basics', icon: User },
    { id: 'summary', label: 'Summary', icon: FileText },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Wrench },
    { id: 'projects', label: 'Projects & Certs', icon: FolderGit2 },
    { id: 'theme', label: 'Design & Colors', icon: Palette }
  ];

  return (
    <div className="editor-container no-print">
      {/* Tab Navigation */}
      <nav className="editor-tab-bar" aria-label="Editor sections">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeEditorTab === tab.id;
          return (
            <button
              key={tab.id}
              className={`editor-nav-tab ${isActive ? 'active' : ''}`}
              onClick={() => setActiveEditorTab(tab.id)}
            >
              <Icon size={16} />
              <span className="tab-label">{tab.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Tab Body */}
      <div className="editor-content-scroll">
        {/* 1. PERSONAL INFO */}
        {activeEditorTab === 'personal' && (
          <div className="editor-pane">
            <div className="pane-header">
              <h3 className="pane-title">Personal & Contact Information</h3>
              <p className="pane-subtitle">Your identity and primary contact channels</p>
            </div>

            <div className="form-grid">
              <div className="form-group col-span-2">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Alexander Vance"
                  value={cvData.personal.fullName}
                  onChange={(e) => updatePersonal('fullName', e.target.value)}
                />
              </div>

              <div className="form-group col-span-2">
                <label>Professional Title</label>
                <input
                  type="text"
                  placeholder="e.g. Principal Software Architect"
                  value={cvData.personal.title}
                  onChange={(e) => updatePersonal('title', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="e.g. alex@example.com"
                  value={cvData.personal.email}
                  onChange={(e) => updatePersonal('email', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={cvData.personal.phone}
                  onChange={(e) => updatePersonal('phone', e.target.value)}
                />
              </div>

              <div className="form-group col-span-2">
                <label>Location / Residency</label>
                <input
                  type="text"
                  placeholder="e.g. San Francisco, CA (Remote)"
                  value={cvData.personal.location}
                  onChange={(e) => updatePersonal('location', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Portfolio / Website</label>
                <input
                  type="url"
                  placeholder="https://yourportfolio.com"
                  value={cvData.personal.website}
                  onChange={(e) => updatePersonal('website', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>LinkedIn Handle</label>
                <input
                  type="text"
                  placeholder="linkedin.com/in/username"
                  value={cvData.personal.linkedin}
                  onChange={(e) => updatePersonal('linkedin', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>GitHub Profile</label>
                <input
                  type="text"
                  placeholder="github.com/username"
                  value={cvData.personal.github}
                  onChange={(e) => updatePersonal('github', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Avatar / Photo URL (for Creative template)</label>
                <input
                  type="url"
                  placeholder="https://..."
                  value={cvData.personal.avatar}
                  onChange={(e) => updatePersonal('avatar', e.target.value)}
                />
              </div>
            </div>
          </div>
        )}

        {/* 2. SUMMARY */}
        {activeEditorTab === 'summary' && (
          <div className="editor-pane">
            <div className="pane-header">
              <h3 className="pane-title">Professional Executive Summary</h3>
              <p className="pane-subtitle">A concise 3-4 sentence value proposition highlighting your core impact</p>
            </div>

            <div className="form-group">
              <textarea
                rows={7}
                className="summary-textarea"
                placeholder="Highlight your years of experience, core technical specialties, scale of impact, and notable business achievements..."
                value={cvData.summary}
                onChange={(e) => updateSummary(e.target.value)}
              />
            </div>

            <div className="ai-chips-box">
              <div className="chips-title">
                <Sparkles size={13} />
                <span>Action-Oriented Power Starters</span>
              </div>
              <div className="chips-row">
                {[
                  "Pioneered hyper-scale...",
                  "Architected distributed systems...",
                  "Accelerated team delivery by...",
                  "Spearheaded enterprise cloud migration..."
                ].map((chip, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="chip-btn"
                    onClick={() => {
                      updateSummary(cvData.summary ? `${cvData.summary} ${chip}` : chip);
                    }}
                  >
                    + {chip}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 3. EXPERIENCE */}
        {activeEditorTab === 'experience' && (
          <div className="editor-pane">
            <div className="pane-header-actions">
              <div>
                <h3 className="pane-title">Work Experience</h3>
                <p className="pane-subtitle">List your roles in reverse chronological order</p>
              </div>
              <button className="add-item-btn" onClick={addExperience}>
                <Plus size={14} /> Add Role
              </button>
            </div>

            <div className="items-list">
              {cvData.experience.map((exp, expIdx) => (
                <div key={exp.id} className="item-card">
                  <div className="item-card-header">
                    <span className="item-badge">Role #{expIdx + 1}</span>
                    <button
                      className="delete-item-btn"
                      onClick={() => removeExperience(exp.id)}
                      title="Delete this role"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>

                  <div className="form-grid">
                    <div className="form-group">
                      <label>Job Title / Position</label>
                      <input
                        type="text"
                        value={exp.position}
                        onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Company / Organization</label>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Start Year</label>
                      <input
                        type="text"
                        value={exp.startDate}
                        onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>End Year / Present</label>
                      <input
                        type="text"
                        disabled={exp.current}
                        value={exp.current ? 'Present' : exp.endDate}
                        onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                      />
                    </div>
                    <div className="form-group col-span-2">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          checked={exp.current || false}
                          onChange={(e) => updateExperience(exp.id, 'current', e.target.checked)}
                        />
                        <span>Currently working in this role</span>
                      </label>
                    </div>
                    <div className="form-group col-span-2">
                      <label>Location</label>
                      <input
                        type="text"
                        value={exp.location}
                        onChange={(e) => updateExperience(exp.id, 'location', e.target.value)}
                      />
                    </div>
                    <div className="form-group col-span-2">
                      <label>Role Overview</label>
                      <textarea
                        rows={2}
                        value={exp.description}
                        onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Highlights Bullet points */}
                  <div className="bullet-points-section">
                    <div className="bullet-header">
                      <label>Key Accomplishments & Metrics</label>
                      <button 
                        type="button" 
                        className="add-sub-btn"
                        onClick={() => addExperienceHighlight(exp.id)}
                      >
                        <Plus size={12} /> Add Bullet
                      </button>
                    </div>
                    {exp.highlights?.map((bullet, bIdx) => (
                      <div key={bIdx} className="bullet-input-row">
                        <span className="bullet-dot">•</span>
                        <input
                          type="text"
                          value={bullet}
                          onChange={(e) => updateExperienceHighlight(exp.id, bIdx, e.target.value)}
                        />
                        <button
                          type="button"
                          className="bullet-del-btn"
                          onClick={() => removeExperienceHighlight(exp.id, bIdx)}
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. EDUCATION */}
        {activeEditorTab === 'education' && (
          <div className="editor-pane">
            <div className="pane-header-actions">
              <div>
                <h3 className="pane-title">Education & Degrees</h3>
                <p className="pane-subtitle">Universities, institutes, or credentials</p>
              </div>
              <button className="add-item-btn" onClick={addEducation}>
                <Plus size={14} /> Add Degree
              </button>
            </div>

            <div className="items-list">
              {cvData.education.map((edu, idx) => (
                <div key={edu.id} className="item-card">
                  <div className="item-card-header">
                    <span className="item-badge">Degree #{idx + 1}</span>
                    <button
                      className="delete-item-btn"
                      onClick={() => removeEducation(edu.id)}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <div className="form-grid">
                    <div className="form-group col-span-2">
                      <label>Degree & Field of Study</label>
                      <input
                        type="text"
                        value={edu.degree}
                        onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                      />
                    </div>
                    <div className="form-group col-span-2">
                      <label>University / School</label>
                      <input
                        type="text"
                        value={edu.institution}
                        onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Graduation Year</label>
                      <input
                        type="text"
                        value={edu.year}
                        onChange={(e) => updateEducation(edu.id, 'year', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Location</label>
                      <input
                        type="text"
                        value={edu.location}
                        onChange={(e) => updateEducation(edu.id, 'location', e.target.value)}
                      />
                    </div>
                    <div className="form-group col-span-2">
                      <label>Honors / GPA / Distinction</label>
                      <input
                        type="text"
                        placeholder="e.g. Summa Cum Laude"
                        value={edu.honors}
                        onChange={(e) => updateEducation(edu.id, 'honors', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. SKILLS */}
        {activeEditorTab === 'skills' && (
          <div className="editor-pane">
            <div className="pane-header-actions">
              <div>
                <h3 className="pane-title">Skills & Technologies</h3>
                <p className="pane-subtitle">Tailor technical stacks and competencies</p>
              </div>
              <button className="add-item-btn" onClick={() => addSkill()}>
                <Plus size={14} /> Add Skill
              </button>
            </div>

            <div className="skills-grid-editor">
              {cvData.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-edit-card">
                  <div className="skill-inputs">
                    <input
                      type="text"
                      className="skill-name-input"
                      value={skill.name}
                      onChange={(e) => updateSkill(sIdx, 'name', e.target.value)}
                      placeholder="Skill name"
                    />
                    <div className="skill-slider-row">
                      <input
                        type="range"
                        min="50"
                        max="100"
                        value={skill.level || 85}
                        onChange={(e) => updateSkill(sIdx, 'level', parseInt(e.target.value))}
                      />
                      <span className="skill-pct-label">{skill.level || 85}%</span>
                    </div>
                  </div>
                  <button
                    className="skill-del-btn"
                    onClick={() => removeSkill(sIdx)}
                    title="Remove skill"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. PROJECTS & CERTS */}
        {activeEditorTab === 'projects' && (
          <div className="editor-pane">
            {/* Projects */}
            <div className="pane-header-actions">
              <div>
                <h3 className="pane-title">Featured Projects</h3>
                <p className="pane-subtitle">Key systems, open source, or SaaS projects</p>
              </div>
              <button className="add-item-btn" onClick={addProject}>
                <Plus size={14} /> Add Project
              </button>
            </div>

            <div className="items-list">
              {cvData.projects.map((proj) => (
                <div key={proj.id} className="item-card">
                  <div className="item-card-header">
                    <span className="item-badge">{proj.title || "Project"}</span>
                    <button
                      className="delete-item-btn"
                      onClick={() => removeProject(proj.id)}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <div className="form-grid">
                    <div className="form-group">
                      <label>Project Title</label>
                      <input
                        type="text"
                        value={proj.title}
                        onChange={(e) => updateProject(proj.id, 'title', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Link / Repository</label>
                      <input
                        type="url"
                        value={proj.link}
                        onChange={(e) => updateProject(proj.id, 'link', e.target.value)}
                      />
                    </div>
                    <div className="form-group col-span-2">
                      <label>Description</label>
                      <textarea
                        rows={2}
                        value={proj.description}
                        onChange={(e) => updateProject(proj.id, 'description', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="pane-header-actions mt-6">
              <div>
                <h3 className="pane-title">Licenses & Certifications</h3>
                <p className="pane-subtitle">Industry verified accreditations</p>
              </div>
              <button className="add-item-btn" onClick={addCertification}>
                <Plus size={14} /> Add Cert
              </button>
            </div>

            <div className="items-list">
              {cvData.certifications.map((cert) => (
                <div key={cert.id} className="item-card">
                  <div className="item-card-header">
                    <span className="item-badge">{cert.name || "Certification"}</span>
                    <button
                      className="delete-item-btn"
                      onClick={() => removeCertification(cert.id)}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <div className="form-grid">
                    <div className="form-group col-span-2">
                      <label>Certification Name</label>
                      <input
                        type="text"
                        value={cert.name}
                        onChange={(e) => updateCertification(cert.id, 'name', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Issuing Body</label>
                      <input
                        type="text"
                        value={cert.issuer}
                        onChange={(e) => updateCertification(cert.id, 'issuer', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Year</label>
                      <input
                        type="text"
                        value={cert.year}
                        onChange={(e) => updateCertification(cert.id, 'year', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 7. DESIGN & THEME */}
        {activeEditorTab === 'theme' && (
          <div className="editor-pane">
            <div className="pane-header">
              <h3 className="pane-title">Styling & Color Accents</h3>
              <p className="pane-subtitle">Fine-tune the visual aesthetics of your resume</p>
            </div>

            <div className="theme-config-section">
              <label className="section-sublabel">Accent Palette</label>
              <div className="color-swatches-grid">
                {THEME_COLORS.map((color) => {
                  const isSelected = selectedColor.id === color.id;
                  return (
                    <button
                      key={color.id}
                      className={`color-swatch-btn ${isSelected ? 'active' : ''}`}
                      onClick={() => setSelectedColor(color)}
                    >
                      <span className="swatch-circle" style={{ backgroundColor: color.primary }}>
                        {isSelected && <Check size={14} color="#fff" />}
                      </span>
                      <span className="swatch-name">{color.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="theme-config-section mt-6">
              <label className="section-sublabel">Typography Pairing</label>
              <div className="font-options-stack">
                {FONT_OPTIONS.map((font) => {
                  const isSelected = selectedFont.id === font.id;
                  return (
                    <button
                      key={font.id}
                      className={`font-card-btn ${isSelected ? 'active' : ''}`}
                      onClick={() => setSelectedFont(font)}
                    >
                      <div className="font-preview" style={{ fontFamily: font.headingFont }}>
                        Aa Bb Cc — {font.name}
                      </div>
                      {isSelected && <Check size={16} className="font-check" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
