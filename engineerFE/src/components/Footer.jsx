import { Mail, ArrowRight, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const columns = [
    {
      title: 'For clients',
      links: [
        { label: 'Find engineers', to: '/services' },
        { label: 'Browse services', to: '/services' },
        { label: 'Post a project', to: '/post-project' },
        { label: 'Hire a firm', to: '/firms' },
        { label: 'Build a team', to: '/firms' },
        { label: 'Book a consultation', to: '/consultations' },
        { label: 'Enterprise', to: '/enterprise' },
        { label: 'How it works', to: '/how-it-works' },
      ],
    },
    {
      title: 'For engineers',
      links: [
        { label: 'Create a profile', to: '/signup' },
        { label: 'Find projects', to: '/projects' },
        { label: 'Create a service', to: '/dashboard' },
        { label: 'Verification', to: '/for-engineers' },
        { label: 'Engineering jobs', to: '/for-engineers' },
        { label: 'Pricing & fees', to: '/for-engineers#calculator' },
        { label: 'Community', to: '/community' },
        { label: 'Dashboard', to: '/dashboard' },
      ],
    },
    {
      title: 'Disciplines',
      links: [
        { label: 'Civil & structural', to: '/services' },
        { label: 'Mechanical', to: '/services' },
        { label: 'Electrical & electronics', to: '/services' },
        { label: 'Chemical & process', to: '/services' },
        { label: 'Energy & renewables', to: '/services' },
        { label: 'Aerospace', to: '/services' },
        { label: 'Biomedical', to: '/services' },
        { label: 'All disciplines', to: '/services' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Case studies', to: '/case-studies' },
        { label: 'Standards & codes', to: '/projects/templates' },
        { label: 'Engineering software', to: '/services' },
        { label: 'Guides', to: '/how-it-works' },
        { label: 'Trust & safety', to: '/how-it-works' },
        { label: 'Payment protection', to: '/how-it-works' },
        { label: 'Help centre', to: '/how-it-works' },
        { label: 'Contact', to: '/offices' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', to: '/how-it-works' },
        { label: 'Careers', to: '/for-engineers' },
        { label: 'Press', to: '/case-studies' },
        { label: 'Partners', to: '/firms' },
        { label: 'Terms of service', to: '/legal/terms' },
        { label: 'Privacy policy', to: '/legal/privacy' },
        { label: 'Cookie policy', to: '/legal/cookies' },
        { label: 'Professional disclaimer', to: '/legal/professional-disclaimer' },
      ],
    },
  ]

  const softwareChips = [
    '3-matic', 'Abaqus', 'AERMOD', 'Altium Designer', 'ANSYS', 'ANSYS Fluent', 'ANSYS Lumerical',
    'ANSYS Mechanical', 'AnyLogic', 'Apache Spark', 'AQWA', 'ArcGIS', 'Arena', 'Aspen HYSYS',
    'Aspen Plus', 'AutoCAD', 'AutoCAD Electrical', 'AutoPIPE', 'AVEVA', 'AVEVA P&ID', 'AWS', 'Azure',
    'Bentley OpenRoads', 'C', 'C#', 'C++'
  ]

  const standardsChips = [
    '3-A Sanitary Standards', 'AASHTO LRFD', 'ABS Rules', 'ACI', 'ACI 318', 'AISC', 'AISC 360',
    'ANSI S12.60', 'ANZECC Guidelines', 'API', 'API 520', 'API 521', 'API 610', 'API 650',
    'API RP 2A', 'ARP4754A', 'AS 2187', 'AS9100', 'ASABE Standards', 'ASCE 7'
  ]

  const industryChips = [
    'Buildings', 'Infrastructure', 'Construction', 'Manufacturing', 'Automotive', 'Aerospace',
    'Defense', 'Marine', 'Oil & Gas', 'Chemicals', 'Petrochemicals', 'Energy', 'Power utilities',
    'Renewable energy', 'Battery / EV', 'Electronics', 'Semiconductor', 'Consumer products',
    'Medical devices', 'Pharmaceuticals', 'Food & beverage', 'Water & wastewater', 'Mining',
    'Rail', 'Telecom', 'Agriculture', 'Industrial automation', 'Robotics', 'Research & academia',
    'Government infrastructure'
  ]

  return (
    <footer className="emp-footer-root">
      <div className="container-wide">
        {/* Tier 1: Brand Info + 5 Vertical Columns */}
        <div className="emp-footer-top-grid">
          {/* Brand Info Column */}
          <div className="emp-footer-brand-box">
            <Link to="/" className="emp-logo-wrap" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
              <img
                src="/logo-transparent.png"
                alt="Engineers Marketplace"
                className="emp-logo-img"
              />
            </Link>

            <p style={{ fontSize: '0.88rem', color: '#ffffff', opacity: 0.9, lineHeight: 1.6, marginBottom: '1.25rem' }}>
              A marketplace built only for engineering work, from a single calculation to a multidisciplinary programme.
            </p>

            <a href="mailto:hello@engineersmp.com" className="footer-email-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#ffffff', textDecoration: 'none', fontSize: '0.85rem' }}>
              <Mail size={15} color="var(--red)" />
              <span>hello@engineersmp.com</span>
            </a>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
              <a href="#" className="footer-social-btn" aria-label="LinkedIn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a href="#" className="footer-social-btn" aria-label="YouTube">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.26 5 12 5 12 5s-6.26 0-7.82.42A2.5 2.5 0 0 0 2.42 7.19 26.2 26.2 0 0 0 2 12a26.2 26.2 0 0 0 .42 4.81 2.5 2.5 0 0 0 1.76 1.77C5.74 19 12 19 12 19s6.26 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77c.28-1.57.42-3.19.42-4.81s-.14-3.24-.42-4.81zM10 15V9l5.2 3L10 15z"/>
                </svg>
              </a>
              <a href="#" className="footer-social-btn" aria-label="GitHub">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* 5 Vertical Links Columns */}
          <div className="emp-footer-nav-cols">
            {columns.map((col) => (
              <div key={col.title} className="emp-footer-col">
                <h3 className="emp-footer-col-title">{col.title}</h3>
                <ul className="emp-footer-links-list">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Tier 2: Chip Clouds (Software, Standards, Industry) */}
        <div className="emp-footer-mid-section">
          {/* Software Chips */}
          <div className="emp-footer-chip-group">
            <h3 className="emp-footer-mid-title">Browse by engineering software</h3>
            <div className="emp-footer-chips-wrap">
              {softwareChips.map((s) => (
                <Link key={s} to="/services" className="emp-footer-chip">
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Standards & Code Chips */}
          <div className="emp-footer-chip-group">
            <h3 className="emp-footer-mid-title">Browse by standard &amp; code</h3>
            <div className="emp-footer-chips-wrap">
              {standardsChips.map((st) => (
                <Link key={st} to="/projects/templates" className="emp-footer-chip">
                  {st}
                </Link>
              ))}
            </div>
          </div>

          {/* Industry Chips */}
          <div className="emp-footer-chip-group">
            <h3 className="emp-footer-mid-title">Browse by industry</h3>
            <div className="emp-footer-chips-wrap">
              {industryChips.map((ind) => (
                <Link key={ind} to="/services" className="emp-footer-chip">
                  {ind}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Tier 3: Bottom Legal Bar & Practice Notice */}
        <div className="emp-footer-bottom-bar">
          <span className="emp-footer-copy">© 2026 Engineer Marketplace. All rights reserved.</span>
          <div className="emp-footer-legal-links">
            <Link to="/legal/terms">Terms</Link>
            <Link to="/legal/privacy">Privacy</Link>
            <Link to="/legal/cookies">Cookies</Link>
            <Link to="/legal/professional-disclaimer">Professional disclaimer</Link>
            <Link to="/accessibility">Accessibility</Link>
          </div>
        </div>

        {/* Exact Professional Practice Notice */}
        <p className="emp-footer-practice-notice">
          <strong>Professional practice notice.</strong> Verification badges on this platform confirm that documents
          were checked — identity, qualification, registration or company records. They are not a licence to practise
          engineering and do not grant legal authority to certify, stamp or seal engineering work in any jurisdiction.
          Where local law requires a registered or licensed professional to sign off a design, that sign-off must be obtained
          from a professional registered in that jurisdiction. Clients remain responsible for confirming that the engineer
          they engage holds the authorisations their project requires.
        </p>
      </div>
    </footer>
  )
}
