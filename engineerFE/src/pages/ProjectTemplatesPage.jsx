import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, Search, FileText } from 'lucide-react'

export default function ProjectTemplatesPage() {
  const [selectedDiscipline, setSelectedDiscipline] = useState('All')
  const [search, setSearch] = useState('')

  const templateGroups = [
    {
      group: 'Civil',
      browseLink: '/services',
      cards: [
        { title: 'Site development', desc: 'Grading, levels, access and external works package' },
        { title: 'Road design', desc: 'Geometric design, pavement build-up, drainage interface' },
        { title: 'Drainage design', desc: 'Catchment analysis, hydraulic model, pipe and structure schedule' },
        { title: 'Water supply', desc: 'Demand analysis, network model, pump and storage sizing' },
        { title: 'Sewer design', desc: 'Flow estimation, gravity and rising main design, manhole schedule' },
        { title: 'Quantity takeoff', desc: 'Measured takeoff against drawings with a stated measurement standard' },
        { title: 'BOQ', desc: 'Itemised bill of quantities with rate basis and exclusions' },
        { title: 'Estimation', desc: 'Cost estimate with assumption register and confidence band' },
      ]
    },
    {
      group: 'Structural',
      browseLink: '/services',
      cards: [
        { title: 'RCC building', desc: 'Analysis model, member sizing, detailing, BBS and calculation report' },
        { title: 'Steel building', desc: 'Portal or truss design, connection design, anchor layout, tonnage' },
        { title: 'Industrial structure', desc: 'Crane gantry, platforms, equipment supports, dynamic checks' },
        { title: 'Foundation design', desc: 'Bearing, settlement, raft or pile design against a ground model' },
        { title: 'Connection design', desc: 'Bolted and welded connection design with capacity checks' },
        { title: 'Structural audit', desc: 'As-built assessment, capacity vs demand, retrofit recommendation' },
        { title: 'Seismic analysis', desc: 'Code or pushover assessment with floor-by-floor capacity gap' },
      ]
    },
    {
      group: 'Mechanical',
      browseLink: '/services',
      cards: [
        { title: 'Machine design', desc: 'Concept to production CAD with drawings, BOM and DFM review' },
        { title: 'HVAC', desc: 'Room-by-room loads, equipment schedule, duct and pipe layout' },
        { title: 'Piping', desc: 'Routing, stress analysis to code, support schedule, nozzle loads' },
        { title: 'Pressure vessel', desc: 'Design to ASME VIII or EN 13445 with calculation and GA' },
        { title: 'DFM', desc: 'Manufacturability review with ranked, costed change proposals' },
        { title: 'Thermal analysis', desc: 'Steady or transient thermal model with documented assumptions' },
        { title: 'FEA', desc: 'Structural or fatigue analysis with mesh convergence and a defensible report' },
      ]
    },
    {
      group: 'Electrical',
      browseLink: '/services',
      cards: [
        { title: 'Load schedule', desc: 'Connected and diversified load with demand factors stated' },
        { title: 'Single-line diagram', desc: 'Coordinated SLD to your drafting standard' },
        { title: 'Cable sizing', desc: 'Current capacity, voltage drop and fault withstand calculations' },
        { title: 'Protection', desc: 'Coordination study with TCC curves and relay setting sheets' },
        { title: 'Power system study', desc: 'Load flow, short circuit, arc flash in one auditable model' },
        { title: 'Lighting', desc: 'Illuminance design with calculation and luminaire schedule' },
        { title: 'Solar', desc: 'Layout, yield model, SLD, grid study and bankable design report' },
      ]
    },
    {
      group: 'Electronics',
      browseLink: '/services',
      cards: [
        { title: 'Circuit design', desc: 'Schematic capture with power sequencing and part sourcing review' },
        { title: 'PCB', desc: 'Controlled-impedance stack-up, layout, Gerbers and fabrication package' },
        { title: 'Embedded', desc: 'Bare-metal or RTOS firmware with drivers, API docs and unit tests' },
        { title: 'IoT', desc: 'Edge-to-cloud ingestion, gateway configuration and data pipeline' },
        { title: 'Firmware', desc: 'Production firmware with build instructions and test suite' },
        { title: 'EMC/EMI support', desc: 'Pre-compliance review with located layout and filtering fixes' },
      ]
    },
    {
      group: 'Chemical',
      browseLink: '/services',
      cards: [
        { title: 'Process simulation', desc: 'Converged model with documented property package choice' },
        { title: 'Mass balance', desc: 'Stream summary that closes, with every assumption recorded' },
        { title: 'Energy balance', desc: 'Utility demand, pinch review and heat integration options' },
        { title: 'Process design', desc: 'Basis of design through to sized unit operations' },
        { title: 'PFD / P&ID', desc: 'Tagged drawing set consistent with line and instrument indices' },
        { title: 'Equipment sizing', desc: 'Thermal and hydraulic sizing with enquiry-ready datasheets' },
        { title: 'Safety study', desc: 'HAZOP facilitation or relief sizing to API 520/521' },
      ]
    }
  ]

  const disciplines = ['All', 'Civil', 'Structural', 'Mechanical', 'Electrical', 'Electronics', 'Chemical']

  const filteredGroups = templateGroups.filter(g => {
    if (selectedDiscipline !== 'All' && g.group !== selectedDiscipline) return false
    return true
  }).map(g => {
    if (!search.trim()) return g
    const filteredCards = g.cards.filter(c => 
      c.title.toLowerCase().includes(search.toLowerCase()) || 
      c.desc.toLowerCase().includes(search.toLowerCase())
    )
    return { ...g, cards: filteredCards }
  }).filter(g => g.cards.length > 0)

  return (
    <div className="emp-page-wrap">
      {/* Hero Header exactly matching engineersmp.com/projects/templates */}
      <section className="emp-services-hero">
        <div className="container-wide">
          <div className="emp-hero-breadcrumbs">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <Link to="/projects">Projects</Link>
            <ChevronRight size={14} />
            <span>Templates</span>
          </div>

          <div style={{ maxWidth: '850px', marginTop: '1rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--red)', display: 'block', marginBottom: '0.5rem' }}>
              PROJECT TEMPLATES
            </span>
            <h1 className="emp-hero-title" style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: 1.2 }}>
              Start from a brief that already knows what to ask
            </h1>
            <p className="emp-hero-sub" style={{ fontSize: '1.15rem', color: '#ffffff', opacity: 0.95, lineHeight: 1.6, marginBottom: '2rem' }}>
              Each template pre-fills the scope, the deliverable list, the typical inputs and a milestone plan for that kind of work — then you edit it rather than writing a technical brief from nothing.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <Link to="/post-project" className="emp-btn emp-btn-primary emp-btn-lg">
                <span>Start from scratch instead</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Metrics Counters matching live site */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '1.5rem' }}>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff' }}>42</div>
                <div style={{ fontSize: '0.8rem', color: '#ffffff', opacity: 0.8 }}>Templates available</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff' }}>6</div>
                <div style={{ fontSize: '0.8rem', color: '#ffffff', opacity: 0.8 }}>Disciplines covered</div>
              </div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff' }}>Pre-filled</div>
                <div style={{ fontSize: '0.8rem', color: '#ffffff', opacity: 0.8 }}>Scope and deliverables</div>
              </div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff' }}>Editable</div>
                <div style={{ fontSize: '0.8rem', color: '#ffffff', opacity: 0.8 }}>Every field</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Search Bar */}
      <section className="emp-filter-bar-wrap">
        <div className="container-wide">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div className="emp-filter-pills-row">
              {disciplines.map(d => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setSelectedDiscipline(d)}
                  className={`emp-chip ${selectedDiscipline === d ? 'active' : ''}`}
                >
                  {d}
                </button>
              ))}
            </div>

            <div className="emp-search-field-box">
              <Search size={16} color="var(--navy)" style={{ position: 'absolute', left: '12px', top: '10px' }} />
              <input
                type="text"
                placeholder="Filter templates..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="emp-input"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Discipline Sections & Cards matching user screenshot Fa9d6e91 & 253aa4fa */}
      <section className="emp-section">
        <div className="container-wide">
          {filteredGroups.map(group => (
            <div key={group.group} style={{ marginBottom: '3.5rem' }}>
              {/* Group Header matching screenshot: Title on left, "Browse [discipline] engineers ->" on right */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid var(--navy)', paddingBottom: '0.75rem', marginBottom: '1.5rem' }}>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--navy)', margin: 0 }}>
                  {group.group}
                </h2>
                <Link
                  to={group.browseLink}
                  style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                >
                  <span>Browse {group.group.toLowerCase()} engineers</span>
                  <ArrowRight size={14} color="var(--red)" />
                </Link>
              </div>

              {/* Cards Grid: 4 columns exactly matching screenshot */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: '1.25rem' }}>
                {group.cards.map(card => (
                  <div
                    key={card.title}
                    className="emp-card"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      border: '1px solid #d9e2ec',
                      padding: '1.25rem',
                      background: '#ffffff'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--navy)', margin: 0 }}>
                          {card.title}
                        </h3>
                        <span
                          style={{
                            fontSize: '0.68rem',
                            fontWeight: 600,
                            padding: '2px 6px',
                            background: '#f1f5f9',
                            color: 'var(--navy)',
                            borderRadius: '3px'
                          }}
                        >
                          Template
                        </span>
                      </div>
                      <p style={{ fontSize: '0.82rem', color: 'var(--navy)', opacity: 0.85, lineHeight: 1.5, marginBottom: '1.25rem' }}>
                        {card.desc}
                      </p>
                    </div>

                    <Link
                      to="/post-project"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: 'var(--red)',
                        textDecoration: 'none',
                        borderTop: '1px solid #f1f5f9',
                        paddingTop: '0.75rem'
                      }}
                    >
                      <span>Use this template</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Bottom Callout matching engineersmp.com */}
          <div
            className="emp-card"
            style={{
              background: 'var(--navy)',
              color: '#ffffff',
              border: 'none',
              padding: '2.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1.5rem'
            }}
          >
            <div style={{ maxWidth: '650px' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', color: '#ffffff' }}>
                A template is a starting point, not a specification
              </h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.9, margin: 0, lineHeight: 1.6 }}>
                Every engineering brief on this platform can be customised. Add constraints, specify non-standard codes, attach your model files, or build a bespoke multidisciplinary scope.
              </p>
            </div>
            <Link to="/post-project" className="emp-btn emp-btn-primary emp-btn-lg">
              <span>Post a Project</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
