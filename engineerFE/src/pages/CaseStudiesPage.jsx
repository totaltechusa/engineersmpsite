import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, CheckCircle2, ShieldCheck } from 'lucide-react'

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      sector: 'BUILDINGS',
      title: 'Retrofitting a 1970s RCC frame to current seismic demand',
      desc: 'A 7-storey 1970s office block had to stay occupied through a seismic retrofit. The original drawings were incomplete, concrete strength varied by 40% between cores, and the client could not vacate more than one floor at a time.',
      kpis: [
        { label: 'SEISMIC CAPACITY INCREASE', value: '2.4x' },
        { label: 'FLOORS VACATED AT ANY TIME', value: '1 of 7' }
      ],
      deliverables: ['Nonlinear time-history analysis', 'FRP shear wrap schedule', 'Occupied phasing plan'],
      engineer: 'Meridian Structural Consultants'
    },
    {
      sector: 'AUTOMOTIVE',
      title: "Cutting 22% from an automotive housing's mass without new tooling",
      desc: "A die-cast aluminium pump housing was 22% over its mass target but the tool was already cut. A new tool would have cost the programme five months.",
      kpis: [
        { label: 'MASS REDUCTION', value: '22%' },
        { label: 'TOOLING CHANGE', value: 'Inserts only' }
      ],
      deliverables: ['Topology optimization study', 'Cavity insert modification CAD', 'Cyclic fatigue life test verification'],
      engineer: 'Kestrel Mechanical Design'
    },
    {
      sector: 'ENERGY',
      title: 'Grid compliance for a 42 MWp plant that nearly failed its connection',
      desc: "A 42 MWp plant's provisional connection offer carried a reactive capability condition the originally specified inverters could not meet across the full voltage range. The issue surfaced three weeks before financial close.",
      kpis: [
        { label: 'CONNECTION CONDITION', value: 'Closed' },
        { label: 'CAPEX IMPACT', value: '€0.4M avoided' }
      ],
      deliverables: ['Dynamic simulation model', 'PPC harmonic mitigation setting', 'Transmission operator sign-off'],
      engineer: 'Voltcore Power Engineering'
    },
    {
      sector: 'PHARMACEUTICALS',
      title: 'A cleanroom pressure cascade that passed inspection first time',
      desc: 'A sterile injectable facility’s Grade B suite had to hold its pressure cascade through every airlock under GMP Annex 1, with the plant room footprint already fixed at 310 m² by the building design.',
      kpis: [
        { label: 'INSPECTION FINDINGS', value: 'Zero major' },
        { label: 'CASCADE DIFFERENTIALS', value: 'All achieved' }
      ],
      deliverables: ['Dynamic airflow CFD model', 'VAV damper logic schedule', 'Validated IQ/OQ protocol'],
      engineer: 'Helix Process Partners'
    }
  ]

  return (
    <div className="emp-page-wrap">
      {/* Hero Header matching screenshot 28757530 */}
      <section className="emp-services-hero">
        <div className="container-wide">
          <div className="emp-hero-breadcrumbs">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <span>Case Studies</span>
          </div>

          <div style={{ maxWidth: '850px', marginTop: '1rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--red)', display: 'block', marginBottom: '0.5rem' }}>
              CASE STUDIES
            </span>
            <h1 className="emp-hero-title" style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: 1.2 }}>
              Structured proof, not a folder of screenshots
            </h1>
            <p className="emp-hero-sub" style={{ fontSize: '1.15rem', color: '#ffffff', opacity: 0.95, lineHeight: 1.6, marginBottom: '2.5rem' }}>
              A portfolio of rendered images tells you an engineer can use software. A structured case study tells you how they think about a constraint — which is the thing you are actually hiring.
            </p>

            {/* Metrics Counters matching screenshot */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '1.5rem' }}>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff' }}>1184</div>
                <div style={{ fontSize: '0.8rem', color: '#ffffff', opacity: 0.8 }}>Published case studies</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff' }}>10</div>
                <div style={{ fontSize: '0.8rem', color: '#ffffff', opacity: 0.8 }}>Structured fields each</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff' }}>100%</div>
                <div style={{ fontSize: '0.8rem', color: '#ffffff', opacity: 0.8 }}>Client-approved for publication</div>
              </div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff' }}>Verified</div>
                <div style={{ fontSize: '0.8rem', color: '#ffffff', opacity: 0.8 }}>Ownership of submitted work</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid matching screenshot cards */}
      <section className="emp-section">
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="emp-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid #d9e2ec',
                  padding: 0,
                  overflow: 'hidden'
                }}
              >
                <div>
                  {/* Top Red Metric Bar */}
                  <div
                    style={{
                      background: 'var(--red)',
                      color: '#ffffff',
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      padding: '1.25rem 1rem',
                      textAlign: 'center',
                      borderBottom: '1px solid #ffffff'
                    }}
                  >
                    <div style={{ borderRight: '1px solid rgba(255,255,255,0.3)', paddingRight: '0.5rem' }}>
                      <div style={{ fontSize: '1.6rem', fontWeight: 800, lineHeight: 1 }}>{cs.kpis[0].value}</div>
                      <div style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.9, marginTop: '0.35rem' }}>
                        {cs.kpis[0].label}
                      </div>
                    </div>
                    <div style={{ paddingLeft: '0.5rem' }}>
                      <div style={{ fontSize: '1.6rem', fontWeight: 800, lineHeight: 1 }}>{cs.kpis[1].value}</div>
                      <div style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.9, marginTop: '0.35rem' }}>
                        {cs.kpis[1].label}
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div style={{ padding: '1.5rem' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--red)', display: 'block', marginBottom: '0.5rem' }}>
                      {cs.sector}
                    </span>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                      {cs.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--navy)', opacity: 0.9, lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {cs.desc}
                    </p>

                    <div style={{ borderTop: '1px solid #d9e2ec', paddingTop: '1rem', marginTop: '1rem' }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--navy)', opacity: 0.7, display: 'block', marginBottom: '0.4rem' }}>
                        Deliverables Produced
                      </span>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                        {cs.deliverables.map((d, dIdx) => (
                          <li key={dIdx} style={{ fontSize: '0.8rem', color: 'var(--navy)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <CheckCircle2 size={13} color="var(--red)" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div style={{ padding: '0 1.5rem 1.5rem' }}>
                  <Link
                    to="/post-project"
                    className="emp-btn emp-btn-secondary emp-btn-md"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <span>Request Similar Scope</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

