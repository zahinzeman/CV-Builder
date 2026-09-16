import { Mail, Phone, MapPin, Globe, Crown, Award, CheckCircle2, ExternalLink, Sparkles } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../Icons';

export default function TemplateSapphire({ data, themeColor, font }) {
  const { personal, summary, experience, education, skills, projects, certifications } = data;
  const primaryColor = themeColor?.primary || '#1e3a8a';
  const goldAccent = '#d97706';

  return (
    <div 
      className="cv-sheet template-sapphire"
      style={{
        fontFamily: font?.bodyFont || 'Inter, sans-serif',
        '--sapphire-primary': primaryColor,
        '--sapphire-gold': goldAccent
      }}
    >
      {/* Executive Header Banner */}
      <header className="sapphire-hero" style={{ backgroundColor: primaryColor }}>
        <div className="sapphire-hero-top">
          <div className="sapphire-pro-badge">
            <Crown size={13} color={goldAccent} />
            <span>EXECUTIVE SUITE EDITION</span>
          </div>
          <div className="sapphire-location-tag">
            <MapPin size={12} /> {personal.location || "San Francisco, CA"}
          </div>
        </div>

        <div className="sapphire-hero-main">
          <div className="sapphire-identity">
            <h1 className="sapphire-name" style={{ fontFamily: font?.headingFont || 'Outfit, sans-serif' }}>
              {personal.fullName || "Alexander Vance"}
            </h1>
            <div className="sapphire-title">
              {personal.title || "Principal Software Architect"}
            </div>
          </div>
        </div>

        {/* Contacts Strip */}
        <div className="sapphire-contacts-bar">
          {personal.email && (
            <div className="sapphire-contact-chip">
              <Mail size={12} color={goldAccent} /> {personal.email}
            </div>
          )}
          {personal.phone && (
            <div className="sapphire-contact-chip">
              <Phone size={12} color={goldAccent} /> {personal.phone}
            </div>
          )}
          {personal.website && (
            <div className="sapphire-contact-chip">
              <Globe size={12} color={goldAccent} /> {personal.website.replace(/^https?:\/\//, '')}
            </div>
          )}
          {personal.linkedin && (
            <div className="sapphire-contact-chip">
              <LinkedinIcon size={12} color={goldAccent} /> {personal.linkedin}
            </div>
          )}
          {personal.github && (
            <div className="sapphire-contact-chip">
              <GithubIcon size={12} color={goldAccent} /> {personal.github}
            </div>
          )}
        </div>
      </header>

      {/* Highlights Metrics Bar */}
      <div className="sapphire-metrics-row">
        <div className="sapphire-metric-item">
          <span className="metric-val" style={{ color: primaryColor }}>10+ Yrs</span>
          <span className="metric-label">Industry Impact</span>
        </div>
        <div className="sapphire-metric-sep" />
        <div className="sapphire-metric-item">
          <span className="metric-val" style={{ color: primaryColor }}>450M+</span>
          <span className="metric-label">Daily Events SLA</span>
        </div>
        <div className="sapphire-metric-sep" />
        <div className="sapphire-metric-item">
          <span className="metric-val" style={{ color: primaryColor }}>$1.4M</span>
          <span className="metric-label">Annual Efficiency</span>
        </div>
      </div>

      {/* Main Layout Grid */}
      <div className="sapphire-layout">
        {/* Left Column (65%) */}
        <div className="sapphire-primary-col">
          {/* Executive Summary */}
          {summary && (
            <section className="sapphire-card">
              <div className="sapphire-card-title" style={{ color: primaryColor }}>
                <Sparkles size={14} color={goldAccent} />
                <span>Executive Value Proposition</span>
              </div>
              <p className="sapphire-summary-body">{summary}</p>
            </section>
          )}

          {/* Work Experience */}
          {experience && experience.length > 0 && (
            <section className="sapphire-card">
              <div className="sapphire-card-title" style={{ color: primaryColor }}>
                <Award size={14} color={goldAccent} />
                <span>Leadership & Career Milestones</span>
              </div>
              <div className="sapphire-exp-flow">
                {experience.map((exp) => (
                  <div key={exp.id} className="sapphire-exp-entry">
                    <div className="sapphire-exp-top-line">
                      <div>
                        <span className="sapphire-exp-role">{exp.position}</span>
                        <span className="sapphire-exp-org" style={{ color: primaryColor }}>
                          · {exp.company}
                        </span>
                      </div>
                      <span className="sapphire-exp-date-pill">
                        {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                      </span>
                    </div>

                    {exp.description && (
                      <p className="sapphire-exp-intro">{exp.description}</p>
                    )}

                    {exp.highlights && exp.highlights.length > 0 && (
                      <ul className="sapphire-bullet-list">
                        {exp.highlights.map((item, idx) => (
                          <li key={idx}>
                            <CheckCircle2 size={12} color={primaryColor} className="sapphire-check" />
                            <span>{item}</span>
                          </li>
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
            <section className="sapphire-card">
              <div className="sapphire-card-title" style={{ color: primaryColor }}>
                <span>Strategic Technical Architecture</span>
              </div>
              <div className="sapphire-proj-grid">
                {projects.map((proj) => (
                  <div key={proj.id} className="sapphire-proj-box">
                    <div className="sapphire-proj-head">
                      <span className="sapphire-proj-title">{proj.title}</span>
                      {proj.link && (
                        <span className="sapphire-proj-link">
                          <ExternalLink size={10} /> {proj.link.replace(/^https?:\/\//, '')}
                        </span>
                      )}
                    </div>
                    <p className="sapphire-proj-desc">{proj.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Sidebar (35%) */}
        <aside className="sapphire-secondary-col">
          {/* Executive Skills & Proficiency */}
          {skills && skills.length > 0 && (
            <div className="sapphire-side-card">
              <h3 className="sapphire-side-header" style={{ color: primaryColor }}>
                Strategic Competencies
              </h3>
              <div className="sapphire-skills-stack">
                {skills.map((s, idx) => (
                  <div key={idx} className="sapphire-skill-item">
                    <div className="sapphire-skill-info">
                      <span className="sapphire-skill-label">{s.name}</span>
                      <span className="sapphire-skill-pct">{s.level || 90}%</span>
                    </div>
                    <div className="sapphire-bar-track">
                      <div 
                        className="sapphire-bar-active"
                        style={{ 
                          width: `${s.level || 90}%`,
                          backgroundColor: primaryColor 
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {education && education.length > 0 && (
            <div className="sapphire-side-card">
              <h3 className="sapphire-side-header" style={{ color: primaryColor }}>
                Credentials & Academics
              </h3>
              <div className="sapphire-edu-stack">
                {education.map((edu) => (
                  <div key={edu.id} className="sapphire-edu-item">
                    <div className="sapphire-edu-deg">{edu.degree}</div>
                    <div className="sapphire-edu-inst">{edu.institution}</div>
                    <div className="sapphire-edu-sub">
                      {edu.year} {edu.location && `· ${edu.location}`}
                    </div>
                    {edu.honors && <div className="sapphire-edu-badge">{edu.honors}</div>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications */}
          {certifications && certifications.length > 0 && (
            <div className="sapphire-side-card">
              <h3 className="sapphire-side-header" style={{ color: primaryColor }}>
                Board Certifications
              </h3>
              <div className="sapphire-cert-stack">
                {certifications.map((c) => (
                  <div key={c.id} className="sapphire-cert-item">
                    <div className="sapphire-cert-name">{c.name}</div>
                    <div className="sapphire-cert-meta">{c.issuer} · {c.year}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
