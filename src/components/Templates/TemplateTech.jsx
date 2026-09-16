import { Mail, Phone, MapPin, Globe, ExternalLink, Terminal } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../Icons';

export default function TemplateTech({ data, themeColor, font }) {
  const { personal, summary, experience, education, skills, projects, certifications } = data;
  const primaryColor = themeColor?.primary || '#059669';

  return (
    <div 
      className="cv-sheet template-tech"
      style={{
        fontFamily: font?.bodyFont || 'Inter, sans-serif',
        '--cv-primary': primaryColor
      }}
    >
      {/* Top Header */}
      <header className="tech-header">
        <div className="tech-header-top">
          <div>
            <h1 className="tech-name" style={{ fontFamily: font?.headingFont || 'JetBrains Mono, monospace' }}>
              {personal.fullName || "Alexander Vance"}
            </h1>
            <div className="tech-title" style={{ color: primaryColor }}>
              <span className="tech-prefix">&gt; </span>
              {personal.title || "Software Engineer"}
            </div>
          </div>
          <div className="tech-badge-tag" style={{ borderColor: primaryColor, color: primaryColor }}>
            ATS OPTIMIZED
          </div>
        </div>

        {/* Contact Info Line */}
        <div className="tech-contacts">
          {personal.email && (
            <span className="tech-contact-item">
              <Mail size={12} /> {personal.email}
            </span>
          )}
          {personal.phone && (
            <span className="tech-contact-item">
              <Phone size={12} /> {personal.phone}
            </span>
          )}
          {personal.location && (
            <span className="tech-contact-item">
              <MapPin size={12} /> {personal.location}
            </span>
          )}
          {personal.website && (
            <span className="tech-contact-item">
              <Globe size={12} /> {personal.website.replace(/^https?:\/\//, '')}
            </span>
          )}
          {personal.github && (
            <span className="tech-contact-item">
              <GithubIcon size={12} /> {personal.github}
            </span>
          )}
          {personal.linkedin && (
            <span className="tech-contact-item">
              <LinkedinIcon size={12} /> {personal.linkedin}
            </span>
          )}
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="tech-section">
          <div className="tech-section-label" style={{ color: primaryColor }}>
            // 01. SUMMARY
          </div>
          <p className="tech-summary-text">{summary}</p>
        </section>
      )}

      {/* Technical Skills Grouped */}
      {skills && skills.length > 0 && (
        <section className="tech-section">
          <div className="tech-section-label" style={{ color: primaryColor }}>
            // 02. TECHNICAL SKILLS & STACK
          </div>
          <div className="tech-skills-matrix">
            {skills.map((s, idx) => (
              <div key={idx} className="tech-skill-cell">
                <span className="tech-skill-bullet" style={{ backgroundColor: primaryColor }}></span>
                <span className="tech-skill-name">{s.name}</span>
                {s.level && (
                  <span className="tech-skill-level">[{s.level}%]</span>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {experience && experience.length > 0 && (
        <section className="tech-section">
          <div className="tech-section-label" style={{ color: primaryColor }}>
            // 03. PROFESSIONAL EXPERIENCE
          </div>
          <div className="tech-exp-stack">
            {experience.map((exp) => (
              <div key={exp.id} className="tech-exp-row">
                <div className="tech-exp-meta">
                  <div className="tech-exp-role">{exp.position}</div>
                  <div className="tech-exp-company" style={{ color: primaryColor }}>
                    @{exp.company}
                  </div>
                  <div className="tech-exp-time">
                    {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                  </div>
                  {exp.location && <div className="tech-exp-loc">{exp.location}</div>}
                </div>
                <div className="tech-exp-content">
                  {exp.description && <p className="tech-exp-desc">{exp.description}</p>}
                  {exp.highlights && (
                    <ul className="tech-bullets">
                      {exp.highlights.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects && projects.length > 0 && (
        <section className="tech-section">
          <div className="tech-section-label" style={{ color: primaryColor }}>
            // 04. FEATURED SYSTEMS & PROJECTS
          </div>
          <div className="tech-proj-grid">
            {projects.map((p) => (
              <div key={p.id} className="tech-proj-card">
                <div className="tech-proj-header">
                  <span className="tech-proj-name">{p.title}</span>
                  {p.link && (
                    <span className="tech-proj-link">
                      <ExternalLink size={11} /> {p.link.replace(/^https?:\/\//, '')}
                    </span>
                  )}
                </div>
                <p className="tech-proj-body">{p.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education & Certs Row */}
      <div className="tech-split-row">
        {education && education.length > 0 && (
          <section className="tech-section tech-half">
            <div className="tech-section-label" style={{ color: primaryColor }}>
              // 05. EDUCATION
            </div>
            {education.map((edu) => (
              <div key={edu.id} className="tech-edu-block">
                <div className="tech-edu-deg">{edu.degree}</div>
                <div className="tech-edu-inst">{edu.institution} · {edu.year}</div>
                {edu.honors && <div className="tech-edu-honors">{edu.honors}</div>}
              </div>
            ))}
          </section>
        )}

        {certifications && certifications.length > 0 && (
          <section className="tech-section tech-half">
            <div className="tech-section-label" style={{ color: primaryColor }}>
              // 06. CERTIFICATIONS
            </div>
            {certifications.map((c) => (
              <div key={c.id} className="tech-cert-block">
                <div className="tech-cert-title">{c.name}</div>
                <div className="tech-cert-issuer">{c.issuer} ({c.year})</div>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}
