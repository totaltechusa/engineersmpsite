import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ShieldCheck,
  Star,
  ArrowRight,
  ChevronRight,
  MapPin,
  Users,
  Briefcase,
  CheckCircle2
} from 'lucide-react'

export default function FirmsPage() {
  const [selectedType, setSelectedType] = useState('All')

  const companyTypes = [
    'All',
    'Individual engineer',
    'Independent consultant',
    'Small engineering studio',
    'Specialist engineering firm',
    'Multidiscipline engineering company',
    'EPC engineering company',
    'Engineering staffing provider',
    'Engineering R&D organization',
    'Enterprise engineering partner'
  ]

  const firms = [
    {
      code: 'MSC',
      name: 'Meridian Structural Consultants',
      slug: 'meridian-structural-consultants',
      type: 'Boutique engineering practice',
      location: 'Ahmedabad, India',
      tagline: 'Structural and civil engineering for mid-rise buildings and industrial structures',
      headcount: '24–40 engineers',
      projectsDelivered: 858,
      operatingSince: 2009,
      disciplines: 'Structural Engineering, Seismic Retrofit, Foundation Design',
      rating: '5.0',
      reviews: 94,
      verifiedBadge: 'Enterprise verified'
    },
    {
      code: 'KMD',
      name: 'Kestrel Mechanical Design',
      slug: 'kestrel-mechanical-design',
      type: 'Specialized design studio',
      location: 'Stuttgart, Germany',
      tagline: 'Precision mechanical engineering, finite element analysis, and topology optimization',
      headcount: '16–28 engineers',
      projectsDelivered: 540,
      operatingSince: 2012,
      disciplines: 'Precision FEA, Turbomachinery, Die-Cast Tooling, Thermal Simulation',
      rating: '4.98',
      reviews: 78,
      verifiedBadge: 'Enterprise verified'
    },
    {
      code: 'VPE',
      name: 'Voltcore Power Engineering',
      slug: 'voltcore-power-engineering',
      type: 'Small engineering firm',
      location: 'Manchester, United Kingdom',
      tagline: 'High-voltage substations, protective relay coordination, and arc flash compliance',
      headcount: '18–32 engineers',
      projectsDelivered: 620,
      operatingSince: 2011,
      disciplines: 'Substation HV/MV, Arc Flash IEEE 1584, BESS Grid Interconnection',
      rating: '5.0',
      reviews: 112,
      verifiedBadge: 'Enterprise verified'
    },
    {
      code: 'HPP',
      name: 'Helix Process Partners',
      slug: 'helix-process-partners',
      type: 'Multidiscipline engineering company',
      location: 'Rotterdam, Netherlands',
      tagline: 'FEED packages, rigorous Aspen simulation, debottlenecking and relief system design',
      headcount: '35–60 engineers',
      projectsDelivered: 1120,
      operatingSince: 2007,
      disciplines: 'Aspen HYSYS, API 520 / 521 PSV, ASME B31.3 Piping, HAZOP',
      rating: '4.97',
      reviews: 145,
      verifiedBadge: 'Enterprise verified'
    },
    {
      code: 'AET',
      name: 'AeroTech Dynamics & Simulation',
      slug: 'aerotech-dynamics',
      type: 'Engineering R&D organization',
      location: 'Toulouse, France',
      tagline: 'Computational fluid dynamics, aero-elastic flutter, and composite airframe structures',
      headcount: '25–45 specialists',
      projectsDelivered: 390,
      operatingSince: 2015,
      disciplines: 'CFD Aerodynamics, Composite Structures, DO-160, Fatigue Life',
      rating: '4.99',
      reviews: 64,
      verifiedBadge: 'Enterprise verified'
    },
    {
      code: 'EPC',
      name: 'Vanguard Infrastructure Partners',
      slug: 'vanguard-infrastructure',
      type: 'EPC engineering company',
      location: 'Chicago, United States',
      tagline: 'Full-service civil and transportation EPC practice providing stamped construction sets',
      headcount: '60–120 licensed PEs',
      projectsDelivered: 1840,
      operatingSince: 2003,
      disciplines: 'Bridges (AASHTO LRFD), Water Treatment, Highway Alignment, Permitting',
      rating: '4.96',
      reviews: 210,
      verifiedBadge: 'Enterprise verified'
    }
  ]

  const filteredFirms = selectedType === 'All'
    ? firms
    : firms.filter(f => f.type.toLowerCase().includes(selectedType.toLowerCase()))

  return (
    <div className="emp-page-wrap">
      {/* Page Hero matching live reference */}
      <section className="emp-services-hero">
        <div className="container-wide">
          <div className="emp-hero-breadcrumbs">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <span>Firms</span>
          </div>

          <div style={{ maxWidth: '850px', marginTop: '1.25rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--red)', display: 'block', marginBottom: '0.5rem' }}>
              ENGINEERING FIRMS
            </span>
            <h1 className="emp-hero-title" style={{ fontSize: 'clamp(2.2rem, 1.8rem + 2vw, 3.2rem)', marginBottom: '1rem', lineHeight: 1.15 }}>
              Hand the whole package to one verified firm
            </h1>
            <p className="emp-hero-sub" style={{ fontSize: '1.15rem', color: '#ffffff', opacity: 0.95, lineHeight: 1.6, marginBottom: '2.5rem' }}>
              Registered companies with a team roster, delivery capacity, insurance and certifications on record — from boutique practices through to multidisciplinary EPC contractors.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <Link to="/post-project" className="emp-btn emp-btn-primary emp-btn-lg">
                <span>Post a project</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/enterprise" className="emp-btn emp-btn-outline-light emp-btn-lg">
                <span>Enterprise sourcing</span>
              </Link>
            </div>

            {/* Metrics Counters */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '2rem', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '2rem' }}>
              <div>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>340</div>
                <div style={{ fontSize: '0.82rem', color: '#ffffff', opacity: 0.85, marginTop: '0.4rem' }}>Verified firms</div>
              </div>
              <div>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>9</div>
                <div style={{ fontSize: '0.82rem', color: '#ffffff', opacity: 0.85, marginTop: '0.4rem' }}>Company types</div>
              </div>
              <div>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>97%</div>
                <div style={{ fontSize: '0.82rem', color: '#ffffff', opacity: 0.85, marginTop: '0.4rem' }}>On-time delivery</div>
              </div>
              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>Enterprise</div>
                <div style={{ fontSize: '0.82rem', color: '#ffffff', opacity: 0.85, marginTop: '0.4rem' }}>Procurement ready</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section: Company Type Pills */}
      <section className="emp-filter-bar-wrap">
        <div className="container-wide">
          <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--navy)', marginBottom: '0.75rem' }}>
            Company Type
          </div>
          <div className="emp-filter-pills-row">
            {companyTypes.map(t => (
              <button
                key={t}
                type="button"
                onClick={() => setSelectedType(t)}
                className={`emp-chip ${selectedType === t ? 'active' : ''}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Firms Cards Grid */}
      <section className="emp-section">
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '2rem' }}>
            {filteredFirms.map((firm, idx) => (
              <div
                key={idx}
                className="emp-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid #d9e2ec',
                  background: '#ffffff',
                  padding: '1.75rem',
                  borderRadius: '6px'
                }}
              >
                <div>
                  {/* Firm Header */}
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                    <div
                      style={{
                        width: '54px',
                        height: '54px',
                        background: 'var(--navy)',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        fontSize: '1.05rem',
                        flexShrink: 0,
                        borderRadius: '4px'
                      }}
                    >
                      {firm.code}
                    </div>
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--navy)', margin: '0 0 0.25rem 0', lineHeight: 1.3 }}>
                        <Link to={`/firms/${firm.slug}`} style={{ color: 'var(--navy)', textDecoration: 'none' }}>
                          {firm.name}
                        </Link>
                      </h3>
                      <div style={{ fontSize: '0.82rem', color: '#64748b' }}>
                        {firm.type} · {firm.location}
                      </div>
                      <div style={{ marginTop: '0.35rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: 'var(--red)', fontSize: '0.74rem', fontWeight: 700 }}>
                        <ShieldCheck size={13} />
                        <span>{firm.verifiedBadge}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tagline */}
                  <p style={{ fontSize: '0.88rem', color: 'var(--navy)', opacity: 0.9, lineHeight: 1.55, marginBottom: '1.25rem', minHeight: '44px' }}>
                    {firm.tagline}
                  </p>

                  {/* Ledger Data Table matching engineersmp.com */}
                  <div style={{ borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '0.85rem 0', marginBottom: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                      <span style={{ color: '#64748b' }}>Headcount</span>
                      <strong style={{ color: 'var(--navy)' }}>{firm.headcount}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                      <span style={{ color: '#64748b' }}>Projects delivered</span>
                      <strong style={{ color: 'var(--navy)' }}>{firm.projectsDelivered}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                      <span style={{ color: '#64748b' }}>Operating since</span>
                      <strong style={{ color: 'var(--navy)' }}>{firm.operatingSince}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', gap: '1rem' }}>
                      <span style={{ color: '#64748b', flexShrink: 0 }}>Disciplines</span>
                      <strong style={{ color: 'var(--navy)', textAlign: 'right' }}>{firm.disciplines}</strong>
                    </div>
                  </div>
                </div>

                {/* Foot: Rating + CTAs */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.25rem' }}>
                    <div style={{ display: 'flex', gap: '2px', color: 'var(--red)' }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--navy)' }}>{firm.rating}</span>
                    <span style={{ fontSize: '0.78rem', color: '#64748b' }}>({firm.reviews} reviews)</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <Link
                      to="/post-project"
                      className="emp-btn emp-btn-primary emp-btn-md"
                      style={{ justifyContent: 'center' }}
                    >
                      <span>Request Proposal</span>
                    </Link>
                    <Link
                      to="/consultations"
                      className="emp-btn emp-btn-secondary emp-btn-md"
                      style={{ justifyContent: 'center' }}
                    >
                      <span>Book Call</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
