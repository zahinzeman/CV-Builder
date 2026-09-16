import { Mail, Phone, MapPin, Globe, ExternalLink, Calendar } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../Icons';

export default function TemplateNordic({ data, themeColor, font }) {
  const { personal, summary, experience, education, skills, projects, certifications } = data;
  const primaryColor = themeColor?.primary || '#475569';

  return (
    <div 
      className="cv-sheet template-nordic"
      style={{
        fontFamily: font?.bodyFont || 'Inter, sans-serif',
        '--cv-primary': primaryColor
      }}
    >
      {/* Header Container */}
      <header className="nordic-header">
        <div className="nordic-header-left">
          <h1 className="nordic-name" style={{ fontFamily: font?.headingFont || 'Outfit, sans-serif' }}>
            {personal.fullName || "Alexander Vance"}
          </h1>
          <div className="nordic-subtitle" style={{ color: primaryColor }}>
            {personal.title || "Principal Architect"}
          </div>
        </div>

        {/* Contacts */}
        <div className="nordic-contacts">
          {personal.email && (
            <div className="nordic-c-item">
              <Mail size={12} style={{ color: primaryColor }} />
              <span>{personal.email}</span>
            </div>
          )}
          {personal.phone && (
            <div className="nordic-c-item">
              <Phone size={12} style={{ color: primaryColor }} />
              <span>{personal.phone}</span>
            </div>
          )}
          {personal.location && (
            <div className="nordic-c-item">
              <MapPin size={12} style={{ color: primaryColor }} />
              <span>{personal.location}</span>
            </div>
          )}
          {personal.website && (
            <div className="nordic-c-item">
              <Globe size={12} style={{ color: primaryColor }} />
              <span>{personal.website.replace(/^https?:\/\//, '')}</span>
            </div>
          )}
          {personal.linkedin && (
            <div className="nordic-c-item">
              <LinkedinIcon size={12} color={primaryColor} />
              <span>{personal.linkedin}</span>
            </div>
          )}
          {personal.github && (
            <div className="nordic-c-item">
              <GithubIcon size={12} color={primaryColor} />
              <span>{personal.github}</span>
            </div>
          )}
        </div>
      </header>

      {/* Summary Box */}
      {summary && (
        <section className="nordic-summary-box">
          <p>{summary}</p>
        </section>
      )}

      {/* Two Column Layout */}
      <div className="nordic-grid">
        {/* Main Column */}
        <div className="nordic-main">
          {/* Experience */}
          {experience && experience.length > 0 && (
            <section className="nordic-section">
              <h2 className="nordic-title">
                <span className="nordic-title-dot" style={{ backgroundColor: primaryColor }} />
                Career Trajectory
              </h2>
              <div className="nordic-timeline">
                {experience.map((exp) => (
                  <div key={exp.id} className="nordic-timeline-item">
                    <div className="nordic-node" style={{ borderColor: primaryColor }} />
                    <div className="nordic-exp-content">
                      <div className="nordic-exp-top">
                        <span className="nordic-exp-role">{exp.position}</span>
                        <span className="nordic-exp-date">
                          {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                        </span>
                      </div>
                      <div className="nordic-exp-company" style={{ color: primaryColor }}>
                        {exp.company} {exp.location && `· ${exp.location}`}
                      </div>
                      {exp.description && <p className="nordic-exp-desc">{exp.description}</p>}
                      {exp.highlights && exp.highlights.length > 0 && (
                        <ul className="nordic-bullets">
                          {exp.highlights.map((bullet, i) => (
                            <li key={i}>{bullet}</li>
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
            <section className="nordic-section">
              <h2 className="nordic-title">
                <span className="nordic-title-dot" style={{ backgroundColor: primaryColor }} />
                Selected Initiatives
              </h2>
              <div className="nordic-projects">
                {projects.map((proj) => (
                  <div key={proj.id} className="nordic-project-card">
                    <div className="nordic-proj-head">
                      <span className="nordic-proj-name">{proj.title}</span>
                      {proj.link && (
                        <span className="nordic-proj-link">
                          <ExternalLink size={11} /> {proj.link.replace(/^https?:\/\//, '')}
                        </span>
                      )}
                    </div>
                    <p className="nordic-proj-desc">{proj.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar Column */}
        <aside className="nordic-side">
          {/* Skills */}
          {skills && skills.length > 0 && (
            <section className="nordic-side-box">
              <h3 className="nordic-side-heading">Expertise</h3>
              <div className="nordic-skills-list">
                {skills.map((s, idx) => (
                  <div key={idx} className="nordic-skill-row">
                    <span className="nordic-skill-name">{s.name}</span>
                    <div className="nordic-skill-bar-bg">
                      <div 
                        className="nordic-skill-bar-fill" 
                        style={{ width: `${s.level || 85}%`, backgroundColor: primaryColor }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {education && education.length > 0 && (
            <section className="nordic-side-box">
              <h3 className="nordic-side-heading">Academic History</h3>
              {education.map((edu) => (
                <div key={edu.id} className="nordic-edu-card">
                  <div className="nordic-edu-degree">{edu.degree}</div>
                  <div className="nordic-edu-inst">{edu.institution}</div>
                  <div className="nordic-edu-year">{edu.year} {edu.location && `· ${edu.location}`}</div>
                  {edu.honors && <div className="nordic-edu-honors">{edu.honors}</div>}
                </div>
              ))}
            </section>
          )}

          {/* Certifications */}
          {certifications && certifications.length > 0 && (
            <section className="nordic-side-box">
              <h3 className="nordic-side-heading">Accreditations</h3>
              {certifications.map((c) => (
                <div key={c.id} className="nordic-cert-card">
                  <div className="nordic-cert-name">{c.name}</div>
                  <div className="nordic-cert-sub">{c.issuer} · {c.year}</div>
                </div>
              ))}
            </section>
          )}
        </aside>
      </div>
    </div>
  );
}
