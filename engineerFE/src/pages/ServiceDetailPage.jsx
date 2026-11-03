import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, CheckCircle2, ShieldCheck, FileCheck, Layers, Users, Building2, HelpCircle } from 'lucide-react'

export default function ServiceDetailPage() {
  const service = {
    title: 'Independent Engineering Inspection & Technical Due Diligence',
    category: 'Inspection & testing',
    tagline: 'Expert on-site & technical condition assessments, compliance verification, and peer reviews under accredited standards.',
    overview: 'Get auditable, multidisciplinary inspection and due diligence from licensed chartered engineers. We examine critical equipment, structural integrity, building envelope, MEP systems, and process lines against international engineering codes and safety standards.',
    turnaround: '3 – 7 working days',
    deliverableFormats: 'Signed Inspection Report (PDF), High-Res Photo Log, Non-Conformance Matrix (XLSX), Cadastral / As-Built CAD overlay',
    standards: ['ISO 9001 / ISO 17020', 'ASME Section V / VIII', 'ACI 562 / ASTM E2018', 'BS EN 1990 / Eurocodes', 'IEEE 1584 / NFPA 70B'],
    included: [
      'Comprehensive on-site physical inspection by credentialed PE / Chartered engineer',
      'Non-destructive testing (NDT) data review and defect classification',
      'Structural deflection, corrosion rate, and fatigue risk calculation',
      'Actionable Remedial Action Plan (RAP) with estimated CAPEX impact',
      'Executive summary suitable for lenders, insurers, and municipal authorities',
      'Formal stamped & signed verification certificate'
    ],
    notIncluded: [
      'Physical invasive demolition or core drilling work (contractor required)',
      'Direct civil/mechanical repairs or procurement of replacement parts',
      'Legal representation in municipal code litigation'
    ],
    sampleDeliverables: [
      {
        name: 'Technical Inspection & Health Report',
        pages: '48 pages',
        type: 'PDF Report with stamped calculation appendices'
      },
      {
        name: 'Risk & Severity Matrix',
        pages: 'Spreadsheet',
        type: 'Categorised by Severity 1 (Critical) to Severity 4 (Cosmetic)'
      },
      {
        name: 'Defect Image Register',
        pages: '120+ photos',
        type: 'High-resolution tagged with GPS & CAD grid coordinates'
      }
    ],
    packages: [
      {
        name: 'Single Asset / Micro Inspection',
        badge: 'Focused',
        price: '$1,800',
        timeline: '3 business days',
        desc: 'Ideal for single pressure vessels, isolated structural defects, or specific equipment compliance sign-off.',
        features: [
          '1 Certified Specialist Engineer',
          'Single site visit or virtual review',
          'Standard inspection checklist & photo register',
          'Signed technical memo with recommendations'
        ]
      },
      {
        name: 'Comprehensive Facility Due Diligence',
        badge: 'Most Popular',
        popular: true,
        price: '$4,900',
        timeline: '5-7 business days',
        desc: 'Complete technical assessment for whole commercial, industrial, or infrastructure assets prior to acquisition or major CAPEX.',
        features: [
          'Multidisciplinary team (Structural + MEP + Process)',
          'Detailed non-destructive testing review',
          'Full 10-year CAPEX forecast for critical replacements',
          'Independent Engineer Certificate for bank/insurer'
        ]
      },
      {
        name: 'Enterprise / Portfolio Assessment',
        badge: 'Enterprise',
        price: '$12,500+',
        timeline: 'Tailored timeline',
        desc: 'Multisite asset portfolio condition surveys with standardized scoring across dozens of locations.',
        features: [
          'Dedicated Project Principal & Lead PE',
          'Multi-jurisdiction compliance validation',
          'Centralized dashboard & executive briefings',
          'Direct integration into asset management software'
        ]
      }
    ]
  }

  return (
    <div className="emp-page-wrap">
      {/* Hero Breadcrumb & Service Title */}
      <section className="emp-services-hero">
        <div className="container-wide">
          <div className="emp-hero-breadcrumbs">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <Link to="/services">Services</Link>
            <ChevronRight size={14} />
            <span>{service.category}</span>
          </div>

          <div style={{ maxWidth: '850px', marginTop: '1rem' }}>
            <span className="emp-badge-pill" style={{ background: '#ffffff', color: 'var(--navy)', marginBottom: '1rem', display: 'inline-flex' }}>
              {service.category}
            </span>
            <h1 className="emp-hero-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
              {service.title}
            </h1>
            <p className="emp-hero-sub" style={{ fontSize: '1.15rem', color: '#ffffff', opacity: 0.95 }}>
              {service.tagline}
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
              <Link to="/post-project" className="emp-btn emp-btn-primary emp-btn-lg">
                <span>Book this Inspection</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/firms" className="emp-btn emp-btn-outline-light emp-btn-lg">
                <span>View Inspection Firms</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="emp-section">
        <div className="container-wide">
          <div className="emp-detail-grid">
            {/* Left Content Column */}
            <div className="emp-detail-main">
              {/* Service Scope Definition */}
              <div className="emp-card" style={{ marginBottom: '2rem' }}>
                <h2 className="emp-section-heading" style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>
                  Scope of Technical Assessment
                </h2>
                <p style={{ color: 'var(--navy)', lineHeight: 1.7, marginBottom: '1.5rem', opacity: 0.9 }}>
                  {service.overview}
                </p>

                <h3 style={{ fontSize: '1.1rem', color: 'var(--navy)', fontWeight: 700, marginBottom: '1rem' }}>
                  Standards &amp; Codes Enforced
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                  {service.standards.map((std) => (
                    <span key={std} className="emp-chip">
                      {std}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                  <div style={{ border: '1px solid #d9e2ec', padding: '1.25rem' }}>
                    <h4 style={{ color: 'var(--navy)', fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle2 size={18} color="var(--red)" />
                      <span>What is Included</span>
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {service.included.map((item, i) => (
                        <li key={i} style={{ fontSize: '0.88rem', color: 'var(--navy)', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                          <span style={{ color: 'var(--red)', fontWeight: 'bold' }}>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ border: '1px solid #d9e2ec', padding: '1.25rem' }}>
                    <h4 style={{ color: 'var(--navy)', fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <HelpCircle size={18} color="var(--navy)" />
                      <span>What is Not Included</span>
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {service.notIncluded.map((item, i) => (
                        <li key={i} style={{ fontSize: '0.88rem', color: 'var(--navy)', opacity: 0.8, display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                          <span style={{ color: 'var(--navy)', fontWeight: 'bold' }}>✕</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sample Deliverables */}
              <div className="emp-card" style={{ marginBottom: '2rem' }}>
                <h2 className="emp-section-heading" style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>
                  Auditable Deliverables You Receive
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                  {service.sampleDeliverables.map((del, i) => (
                    <div key={i} style={{ border: '1px solid #d9e2ec', padding: '1rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <FileCheck size={20} color="var(--red)" />
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--navy)', textTransform: 'uppercase' }}>{del.pages}</span>
                      </div>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.25rem' }}>{del.name}</h4>
                      <p style={{ fontSize: '0.82rem', color: 'var(--navy)', opacity: 0.85, margin: 0 }}>{del.type}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fixed-Scope Packages */}
              <div>
                <h2 className="emp-section-heading" style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>
                  Fixed-Scope Packages
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                  {service.packages.map((pkg, idx) => (
                    <div
                      key={idx}
                      className="emp-card"
                      style={{
                        position: 'relative',
                        border: pkg.popular ? '2px solid var(--red)' : '1px solid #d9e2ec',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}
                    >
                      {pkg.popular && (
                        <div
                          style={{
                            position: 'absolute',
                            top: '-12px',
                            right: '20px',
                            background: 'var(--red)',
                            color: '#ffffff',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            padding: '2px 8px',
                            textTransform: 'uppercase'
                          }}
                        >
                          Recommended
                        </div>
                      )}
                      <div>
                        <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--red)', letterSpacing: '0.05em' }}>
                          {pkg.badge}
                        </span>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--navy)', marginTop: '0.25rem', marginBottom: '0.5rem' }}>
                          {pkg.name}
                        </h3>
                        <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.25rem' }}>
                          {pkg.price}
                        </div>
                        <div style={{ fontSize: '0.82rem', color: 'var(--navy)', opacity: 0.8, marginBottom: '1rem' }}>
                          Estimated turnaround: {pkg.timeline}
                        </div>
                        <p style={{ fontSize: '0.88rem', color: 'var(--navy)', opacity: 0.9, lineHeight: 1.5, marginBottom: '1.5rem' }}>
                          {pkg.desc}
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                          {pkg.features.map((feat, fIdx) => (
                            <li key={fIdx} style={{ fontSize: '0.82rem', color: 'var(--navy)', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                              <CheckCircle2 size={14} color="var(--red)" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        to="/post-project"
                        className={`emp-btn ${pkg.popular ? 'emp-btn-primary' : 'emp-btn-secondary'} emp-btn-md`}
                        style={{ width: '100%', justifyContent: 'center' }}
                      >
                        <span>Select Package</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sticky Sidebar */}
            <div className="emp-detail-sidebar">
              <div className="emp-card" style={{ position: 'sticky', top: '90px' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '1rem', borderBottom: '1px solid #d9e2ec', paddingBottom: '0.75rem' }}>
                  Ready to inspect your project?
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--navy)', opacity: 0.85, lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  Post your technical specification, upload drawings or defect logs, and get vetted chartered engineers to submit proposals within 24 hours.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <ShieldCheck size={20} color="var(--red)" />
                    <span style={{ fontSize: '0.82rem', color: 'var(--navy)', fontWeight: 600 }}>100% Escrow Protection</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <FileCheck size={20} color="var(--red)" />
                    <span style={{ fontSize: '0.82rem', color: 'var(--navy)', fontWeight: 600 }}>Standard NDA &amp; IP Protection</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Building2 size={20} color="var(--red)" />
                    <span style={{ fontSize: '0.82rem', color: 'var(--navy)', fontWeight: 600 }}>PE / Chartered Licensure Check</span>
                  </div>
                </div>

                <Link to="/post-project" className="emp-btn emp-btn-primary emp-btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Post Inspection Project</span>
                  <ArrowRight size={16} />
                </Link>

                <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                  <Link to="/firms" style={{ fontSize: '0.82rem', color: 'var(--navy)', fontWeight: 600, textDecoration: 'underline' }}>
                    Or browse verified engineering firms
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

