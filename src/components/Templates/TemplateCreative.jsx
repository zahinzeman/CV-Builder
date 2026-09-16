import { Mail, Phone, MapPin, Globe, ExternalLink, Sparkles, Layers } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../Icons';

export default function TemplateCreative({ data, themeColor, font }) {
  const { personal, summary, experience, education, skills, projects, certifications } = data;
  const primaryColor = themeColor?.primary || '#7c3aed';
  const secondaryColor = themeColor?.secondary || '#a78bfa';

  return (
    <div 
      className="cv-sheet template-creative"
      style={{
        fontFamily: font?.bodyFont || 'Inter, sans-serif',
        '--creative-primary': primaryColor,
        '--creative-secondary': secondaryColor
      }}
    >
      {/* Left Full Sidebar */}
      <aside className="creative-sidebar" style={{ backgroundColor: primaryColor }}>
        {/* Avatar / Monogram */}
        <div className="creative-avatar-box">
          {personal.avatar ? (
            <img 
              src={personal.avatar} 
              alt={personal.fullName} 
              className="creative-avatar-img"
            />
          ) : (
            <div className="creative-monogram">
              {personal.fullName ? personal.fullName.substring(0, 2).toUpperCase() : "AV"}
            </div>
          )}
        </div>

        {/* Contact Block */}
        <div className="creative-side-group">
          <h4 className="creative-side-title">Contact</h4>
          <div className="creative-contact-list">
            {personal.email && (
              <div className="creative-contact-item">
                <Mail size={12} />
                <span>{personal.email}</span>
              </div>
            )}
            {personal.phone && (
              <div className="creative-contact-item">
                <Phone size={12} />
                <span>{personal.phone}</span>
              </div>
            )}
            {personal.location && (
              <div className="creative-contact-item">
                <MapPin size={12} />
                <span>{personal.location}</span>
              </div>
            )}
            {personal.website && (
              <div className="creative-contact-item">
                <Globe size={12} />
                <span>{personal.website.replace(/^https?:\/\//, '')}</span>
              </div>
            )}
            {personal.linkedin && (
              <div className="creative-contact-item">
                <LinkedinIcon size={12} />
                <span>{personal.linkedin}</span>
              </div>
            )}
            {personal.github && (
              <div className="creative-contact-item">
                <GithubIcon size={12} />
                <span>{personal.github}</span>
              </div>
            )}
          </div>
        </div>

        {/* Skills Pills */}
        {skills && skills.length > 0 && (
          <div className="creative-side-group">
            <h4 className="creative-side-title">Skills & Arsenal</h4>
            <div className="creative-skills-tags">
              {skills.map((s, idx) => (
                <span key={idx} className="creative-skill-pill">
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Education in Sidebar */}
        {education && education.length > 0 && (
          <div className="creative-side-group">
            <h4 className="creative-side-title">Education</h4>
            {education.map((edu) => (
              <div key={edu.id} className="creative-side-edu">
                <div className="creative-edu-deg">{edu.degree}</div>
                <div className="creative-edu-sub">{edu.institution}</div>
                <div className="creative-edu-yr">{edu.year}</div>
                {edu.honors && <div className="creative-edu-hon">{edu.honors}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Certifications in Sidebar */}
        {certifications && certifications.length > 0 && (
          <div className="creative-side-group">
            <h4 className="creative-side-title">Certifications</h4>
            {certifications.map((c) => (
              <div key={c.id} className="creative-side-cert">
                <div className="creative-cert-name">{c.name}</div>
                <div className="creative-cert-yr">{c.issuer} · {c.year}</div>
              </div>
            ))}
          </div>
        )}
      </aside>

      {/* Right Canvas */}
      <main className="creative-main-canvas">
        {/* Bold Title Area */}
        <header className="creative-header">
          <div className="creative-name-wrap">
            <h1 className="creative-name" style={{ fontFamily: font?.headingFont || 'Outfit, sans-serif' }}>
              {personal.fullName || "Alexander Vance"}
            </h1>
            <div className="creative-role" style={{ color: primaryColor }}>
              {personal.title || "Creative Technologist & Principal Architect"}
            </div>
          </div>
          <div className="creative-pro-tag">
            <Sparkles size={12} color={primaryColor} />
            <span>STUDIO PRO EDITION</span>
          </div>
        </header>

        {/* Bio summary */}
        {summary && (
          <section className="creative-bio-section">
            <h2 className="creative-sec-title" style={{ color: primaryColor }}>
              <Layers size={14} /> Profile Narrative
            </h2>
            <p className="creative-bio-text">{summary}</p>
          </section>
        )}

        {/* Experience Timeline */}
        {experience && experience.length > 0 && (
          <section className="creative-exp-section">
            <h2 className="creative-sec-title" style={{ color: primaryColor }}>
              Experience & Impact
            </h2>
            <div className="creative-timeline">
              {experience.map((exp) => (
                <div key={exp.id} className="creative-exp-card">
                  <div className="creative-exp-bar" style={{ backgroundColor: primaryColor }} />
                  <div className="creative-exp-body">
                    <div className="creative-exp-header">
                      <div>
                        <span className="creative-exp-role">{exp.position}</span>
                        <span className="creative-exp-company" style={{ color: primaryColor }}>
                          {" "}@ {exp.company}
                        </span>
                      </div>
                      <span className="creative-exp-badge">
                        {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                      </span>
                    </div>

                    {exp.description && <p className="creative-exp-desc">{exp.description}</p>}

                    {exp.highlights && exp.highlights.length > 0 && (
                      <ul className="creative-exp-bullets">
                        {exp.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Featured Projects */}
        {projects && projects.length > 0 && (
          <section className="creative-projects-section">
            <h2 className="creative-sec-title" style={{ color: primaryColor }}>
              Signature Projects
            </h2>
            <div className="creative-proj-cards">
              {projects.map((p) => (
                <div key={p.id} className="creative-proj-item">
                  <div className="creative-proj-top">
                    <span className="creative-proj-name">{p.title}</span>
                    {p.link && (
                      <span className="creative-proj-anchor" style={{ color: primaryColor }}>
                        <ExternalLink size={11} /> {p.link.replace(/^https?:\/\//, '')}
                      </span>
                    )}
                  </div>
                  <p className="creative-proj-desc">{p.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
