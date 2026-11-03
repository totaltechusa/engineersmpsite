import { useLocation, Link } from 'react-router-dom'
import { ChevronRight, ShieldCheck, FileText } from 'lucide-react'

export default function LegalPage() {
  const location = useLocation()
  const path = location.pathname.toLowerCase()

  let title = 'Terms of Service'
  let updated = 'January 2026'

  if (path.includes('privacy')) {
    title = 'Privacy Policy'
  } else if (path.includes('cookies')) {
    title = 'Cookie Policy'
  } else if (path.includes('professional-disclaimer') || path.includes('disclaimer')) {
    title = 'Professional Practice & Licensure Disclaimer'
  } else if (path.includes('accessibility')) {
    title = 'Accessibility Statement'
  }

  return (
    <div className="emp-page-wrap">
      {/* Hero Header */}
      <section className="emp-services-hero">
        <div className="container-wide">
          <div className="emp-hero-breadcrumbs">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <Link to="/legal/terms">Legal</Link>
            <ChevronRight size={14} />
            <span>{title}</span>
          </div>

          <div style={{ maxWidth: '850px', marginTop: '1rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--red)', display: 'block', marginBottom: '0.5rem' }}>
              LEGAL &amp; COMPLIANCE
            </span>
            <h1 className="emp-hero-title" style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>
              {title}
            </h1>
            <p className="emp-hero-sub" style={{ fontSize: '1rem', color: '#ffffff', opacity: 0.9 }}>
              Last updated: {updated} · Version 3.4
            </p>
          </div>
        </div>
      </section>

      {/* Main Legal Content */}
      <section className="emp-section">
        <div className="container-wide">
          <div className="emp-detail-grid">
            {/* Main Terms Content */}
            <div className="emp-detail-main">
              <div className="emp-card" style={{ lineHeight: 1.8, color: 'var(--navy)' }}>
                {title === 'Professional Practice & Licensure Disclaimer' ? (
                  <>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--navy)' }}>
                      1. Professional Licensure &amp; Regulatory Status
                    </h2>
                    <p>
                      Verification badges on this platform confirm that documents were checked — identity, qualification,
                      registration or company records. They are not a licence to practise engineering and do not grant legal
                      authority to certify, stamp or seal engineering work in any jurisdiction.
                    </p>
                    <p>
                      Where local law requires a registered or licensed professional engineer (PE, CEng, EurIng, R.P.E.) to sign off,
                      stamp, or certify a design, that sign-off must be obtained from a professional registered in that specific
                      jurisdiction. Clients remain solely responsible for confirming that the engineer they engage holds the statutory
                      authorisations their project requires.
                    </p>

                    <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '2rem 0 1rem', color: 'var(--navy)' }}>
                      2. Platform Role
                    </h2>
                    <p>
                      Engineer Marketplace is a technology platform connecting independent engineering practitioners and firms
                      with commercial clients. The platform does not engage in the practice of engineering and does not render
                      professional engineering advice.
                    </p>
                  </>
                ) : title === 'Privacy Policy' ? (
                  <>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--navy)' }}>
                      1. Information We Collect
                    </h2>
                    <p>
                      We collect technical credentials, corporate registration data, email addresses, and project scope
                      specifications solely to facilitate engineering procurement, compliance verification, and milestone escrows.
                    </p>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '2rem 0 1rem', color: 'var(--navy)' }}>
                      2. Intellectual Property &amp; Non-Disclosure
                    </h2>
                    <p>
                      All CAD models, calculations, simulation scripts, and proprietary specifications uploaded to our workrooms
                      remain the exclusive intellectual property of the commissioning client under our bilateral NDA.
                    </p>
                  </>
                ) : title === 'Cookie Policy' ? (
                  <>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--navy)' }}>
                      1. Essential Cookies Only
                    </h2>
                    <p>
                      Our platform prioritizes engineering precision and privacy. We use essential authentication tokens
                      and session storage strictly necessary to keep you securely signed in to workrooms and post projects.
                    </p>
                  </>
                ) : title === 'Accessibility Statement' ? (
                  <>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--navy)' }}>
                      1. Universal Engineering Accessibility
                    </h2>
                    <p>
                      We are committed to ensuring our marketplace is accessible to all engineers and clients, adhering to
                      WCAG 2.1 Level AA standards, keyboard navigation, and high-contrast typography.
                    </p>
                  </>
                ) : (
                  <>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--navy)' }}>
                      1. Terms of Engagement
                    </h2>
                    <p>
                      By accessing or using the Engineer Marketplace platform, you agree to comply with our commercial terms,
                      milestone escrow release procedures, and technical peer review standards.
                    </p>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '2rem 0 1rem', color: 'var(--navy)' }}>
                      2. Milestone Escrow &amp; Dispute Resolution
                    </h2>
                    <p>
                      All fixed-scope packages and custom SOWs are funded through protected escrow. Funds are released only upon
                      formal client acceptance or verified delivery of auditable calculations and stamped deliverables.
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Sticky Sidebar Navigation */}
            <div className="emp-detail-sidebar">
              <div className="emp-card" style={{ position: 'sticky', top: '90px' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '1rem', borderBottom: '1px solid #d9e2ec', paddingBottom: '0.75rem' }}>
                  Legal Documents
                </h3>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <Link
                    to="/legal/terms"
                    className="emp-chip"
                    style={{
                      textDecoration: 'none',
                      justifyContent: 'flex-start',
                      background: path.includes('terms') ? 'var(--navy)' : '#ffffff',
                      color: path.includes('terms') ? '#ffffff' : 'var(--navy)'
                    }}
                  >
                    Terms of Service
                  </Link>
                  <Link
                    to="/legal/privacy"
                    className="emp-chip"
                    style={{
                      textDecoration: 'none',
                      justifyContent: 'flex-start',
                      background: path.includes('privacy') ? 'var(--navy)' : '#ffffff',
                      color: path.includes('privacy') ? '#ffffff' : 'var(--navy)'
                    }}
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to="/legal/cookies"
                    className="emp-chip"
                    style={{
                      textDecoration: 'none',
                      justifyContent: 'flex-start',
                      background: path.includes('cookies') ? 'var(--navy)' : '#ffffff',
                      color: path.includes('cookies') ? '#ffffff' : 'var(--navy)'
                    }}
                  >
                    Cookie Policy
                  </Link>
                  <Link
                    to="/legal/professional-disclaimer"
                    className="emp-chip"
                    style={{
                      textDecoration: 'none',
                      justifyContent: 'flex-start',
                      background: path.includes('disclaimer') ? 'var(--navy)' : '#ffffff',
                      color: path.includes('disclaimer') ? '#ffffff' : 'var(--navy)'
                    }}
                  >
                    Professional Disclaimer
                  </Link>
                  <Link
                    to="/accessibility"
                    className="emp-chip"
                    style={{
                      textDecoration: 'none',
                      justifyContent: 'flex-start',
                      background: path.includes('accessibility') ? 'var(--navy)' : '#ffffff',
                      color: path.includes('accessibility') ? '#ffffff' : 'var(--navy)'
                    }}
                  >
                    Accessibility Statement
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

