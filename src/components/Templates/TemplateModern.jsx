import { Mail, Phone, MapPin, Globe, Briefcase, GraduationCap, Award, Code, ExternalLink } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../Icons';

export default function TemplateModern({ data, themeColor, font }) {
  const { personal, summary, experience, education, skills, projects, certifications } = data;
  const primaryColor = themeColor?.primary || '#2563eb';

  return (
    <div 
      className="cv-sheet template-modern"
      style={{
        fontFamily: font?.bodyFont || 'Inter, sans-serif',
        '--cv-primary': primaryColor
      }}
    >
      {/* Top Accent Band */}
      <div className="modern-top-bar" style={{ backgroundColor: primaryColor }} />

      {/* Header */}
      <header className="modern-header">
        <div className="modern-title-group">
          <h1 className="modern-name" style={{ fontFamily: font?.headingFont || 'Inter, sans-serif' }}>
            {personal.fullName || "Your Full Name"}
          </h1>
          <div className="modern-role" style={{ color: primaryColor }}>
            {personal.title || "Your Professional Title"}
          </div>
        </div>

        {/* Contact Strip */}
        <div className="modern-contact-grid">
          {personal.email && (
            <div className="modern-contact-item">
              <Mail size={13} style={{ color: primaryColor }} />
              <span>{personal.email}</span>
            </div>
          )}
          {personal.phone && (
            <div className="modern-contact-item">
              <Phone size={13} style={{ color: primaryColor }} />
              <span>{personal.phone}</span>
            </div>
          )}
          {personal.location && (
            <div className="modern-contact-item">
              <MapPin size={13} style={{ color: primaryColor }} />
              <span>{personal.location}</span>
            </div>
          )}
          {personal.website && (
            <div className="modern-contact-item">
              <Globe size={13} style={{ color: primaryColor }} />
              <span>{personal.website.replace(/^https?:\/\//, '')}</span>
            </div>
          )}
          {personal.linkedin && (
            <div className="modern-contact-item">
              <LinkedinIcon size={13} color={primaryColor} />
              <span>{personal.linkedin}</span>
            </div>
          )}
          {personal.github && (
            <div className="modern-contact-item">
              <GithubIcon size={13} color={primaryColor} />
              <span>{personal.github}</span>
            </div>
          )}
        </div>
      </header>

      {/* Main Body - 2 Columns */}
      <div className="modern-body">
        {/* Left / Main Column */}
        <div className="modern-main-col">
          {/* Summary */}
          {summary && (
            <section className="modern-section">
              <h2 className="modern-section-title" style={{ borderColor: primaryColor, color: primaryColor }}>
                Executive Profile
              </h2>
              <p className="modern-summary-text">{summary}</p>
            </section>
          )}

          {/* Work Experience */}
          {experience && experience.length > 0 && (
            <section className="modern-section">
              <h2 className="modern-section-title" style={{ borderColor: primaryColor, color: primaryColor }}>
                Professional Experience
              </h2>
              <div className="modern-exp-list">
                {experience.map((exp) => (
                  <div key={exp.id} className="modern-exp-item">
                    <div className="modern-exp-header">
                      <div>
                        <span className="modern-exp-role">{exp.position}</span>
                        <span className="modern-exp-company"> · {exp.company}</span>
                      </div>
                      <span className="modern-exp-dates">
                        {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                      </span>
                    </div>
                    {exp.location && <div className="modern-exp-location">{exp.location}</div>}
                    {exp.description && <p className="modern-exp-desc">{exp.description}</p>}
                    {exp.highlights && exp.highlights.length > 0 && (
                      <ul className="modern-exp-bullets">
                        {exp.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {projects && projects.length > 0 && (
            <section className="modern-section">
              <h2 className="modern-section-title" style={{ borderColor: primaryColor, color: primaryColor }}>
                Key Technical Projects
              </h2>
              <div className="modern-projects-list">
                {projects.map((proj) => (
                  <div key={proj.id} className="modern-project-item">
                    <div className="modern-project-head">
                      <span className="modern-project-title">{proj.title}</span>
                      {proj.link && (
                        <span className="modern-project-link">
                          <ExternalLink size={11} /> {proj.link.replace(/^https?:\/\//, '')}
                        </span>
                      )}
                    </div>
                    <p className="modern-project-desc">{proj.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right / Side Column */}
        <aside className="modern-side-col">
          {/* Skills */}
          {skills && skills.length > 0 && (
            <section className="modern-side-section">
              <h3 className="modern-side-title" style={{ color: primaryColor }}>
                Core Competencies
              </h3>
              <div className="modern-skills-wrap">
                {skills.map((skill, i) => (
                  <span key={i} className="modern-skill-pill">
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {education && education.length > 0 && (
            <section className="modern-side-section">
              <h3 className="modern-side-title" style={{ color: primaryColor }}>
                Education
              </h3>
              <div className="modern-edu-list">
                {education.map((edu) => (
                  <div key={edu.id} className="modern-edu-item">
                    <div className="modern-edu-degree">{edu.degree}</div>
                    <div className="modern-edu-school">{edu.institution}</div>
                    <div className="modern-edu-meta">
                      <span>{edu.year}</span>
                      {edu.location && <span> · {edu.location}</span>}
                    </div>
                    {edu.honors && <div className="modern-edu-honors">{edu.honors}</div>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certifications */}
          {certifications && certifications.length > 0 && (
            <section className="modern-side-section">
              <h3 className="modern-side-title" style={{ color: primaryColor }}>
                Certifications
              </h3>
              <div className="modern-certs-list">
                {certifications.map((cert) => (
                  <div key={cert.id} className="modern-cert-item">
                    <div className="modern-cert-name">{cert.name}</div>
                    <div className="modern-cert-meta">
                      <span>{cert.issuer}</span> · <span>{cert.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </aside>
      </div>
    </div>
  );
}
