import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Briefcase,
  MapPin,
  Calendar,
  Clock,
  ArrowRight,
  ChevronRight,
  Filter,
  Search,
  CheckCircle2,
  DollarSign
} from 'lucide-react'

export default function OpenProjectsPage() {
  const [selectedDiscipline, setSelectedDiscipline] = useState('All')
  const [search, setSearch] = useState('')

  const disciplines = [
    'All',
    'Civil & Structural',
    'Mechanical',
    'Electrical & Electronics',
    'Chemical & Process',
    'Energy & Renewables',
    'Geotechnical'
  ]

  const openProjects = [
    {
      title: 'Structural Steel Moment Frame & Connection Design for 4-Storey Commercial Unit',
      code: 'PRJ-8821',
      discipline: 'Civil & Structural',
      budget: '$4,500 – $6,000',
      type: 'Fixed Price',
      duration: '3 weeks',
      posted: '2 hours ago',
      proposals: 4,
      location: 'London, UK (Remote review)',
      standards: ['BS EN 1993 (Eurocode 3)', 'AISC 360-16'],
      deliverables: ['MathCAD calculation reports', 'Tekla / AutoCAD details', 'Chartered PE Sign-Off'],
      desc: 'Seeking a chartered structural engineer to design primary steel moment frames, lateral bracing and base plate connections for a new commercial facility. Architectural Revit models and geotechnical bearing capacities provided.'
    },
    {
      title: 'Finite Element Analysis (FEA) & Cyclic Fatigue Life of Subsea Flange Coupling',
      code: 'PRJ-8819',
      discipline: 'Mechanical',
      budget: '$3,800 – $5,200',
      type: 'Milestone',
      duration: '2 weeks',
      posted: '5 hours ago',
      proposals: 7,
      location: 'Aberdeen, UK / Houston, US',
      standards: ['ASME Section VIII Div 2', 'API 17D'],
      deliverables: ['ANSYS Mechanical model', 'Linearized stress assessment', 'Defensible fatigue calculation memo'],
      desc: 'Verify non-linear contact stresses and bolt pre-tension under combined thermal and hydrostatic cyclic loading. STEP geometry and boundary conditions will be provided under standard bilateral NDA.'
    },
    {
      title: '33kV / 11kV Substation Relay Coordination & Arc Flash Hazard Study',
      code: 'PRJ-8814',
      discipline: 'Electrical & Electronics',
      budget: '$5,000 – $7,500',
      type: 'Fixed Price',
      duration: '4 weeks',
      posted: '1 day ago',
      proposals: 3,
      location: 'Melbourne, Australia',
      standards: ['IEEE 1584-2018', 'AS/NZS 3000', 'IEC 60909'],
      deliverables: ['ETAP project database', 'Protection coordination curves (TCC)', 'Arc flash labels print sheet'],
      desc: 'Perform fault level calculation, protection relay coordination (SEL and Schneider relays), and produce arc flash hazard boundaries and PPE ratings for a mining plant distribution upgrade.'
    },
    {
      title: 'Aspen HYSYS Debottlenecking & Relief Valve Sizing for LPG Fractionation Unit',
      code: 'PRJ-8809',
      discipline: 'Chemical & Process',
      budget: '$6,200 – $8,500',
      type: 'Milestone',
      duration: '3 weeks',
      posted: '1 day ago',
      proposals: 5,
      location: 'Rotterdam, Netherlands',
      standards: ['API 520 / 521', 'ISO 23251'],
      deliverables: ['Converged Aspen HYSYS model', 'Relief valve datasheets', 'Scenario contingency register'],
      desc: 'Simulate throughput expansion from 120 t/h to 150 t/h. Check existing column hydraulics, reboiler heat duty, and re-calculate fire and blocked outlet relief scenarios for 14 PSVs.'
    },
    {
      title: 'High-Density 12-Layer Altium PCB Design for High-Speed Autonomous Drone Flight Controller',
      code: 'PRJ-8802',
      discipline: 'Electrical & Electronics',
      budget: '$3,200 – $4,600',
      type: 'Fixed Price',
      duration: '10 days',
      posted: '2 days ago',
      proposals: 9,
      location: 'Austin, Texas, US',
      standards: ['IPC-2221 Class 3', 'FCC Part 15B'],
      deliverables: ['Altium Designer source', 'Controlled-impedance stack-up', 'Gerber RS-274X & ODB++'],
      desc: 'Schematics completed. Looking for an expert layout engineer to route PCIe Gen 3, MIPI CSI-2, and USB 3.1 pairs with length-tuning, power distribution network (PDN) impedance check, and thermal vias.'
    },
    {
      title: 'Deep Basement Excavation Secant Pile Wall & Ground Anchor Geotechnical Model',
      code: 'PRJ-8798',
      discipline: 'Geotechnical',
      budget: '$4,000 – $5,500',
      type: 'Fixed Price',
      duration: '2 weeks',
      posted: '3 days ago',
      proposals: 6,
      location: 'Mumbai, India',
      standards: ['IS 2911', 'Eurocode 7'],
      deliverables: ['PLAXIS 2D calculation sheets', 'Bending moment & shear envelope', 'Settlement contour plan'],
      desc: 'Design secant bored pile retaining wall and pre-stressed ground anchor system for a 3-level basement (11m excavation) adjacent to existing heritage masonry structures.'
    }
  ]

  const filteredProjects = openProjects.filter(p => {
    if (selectedDiscipline !== 'All' && p.discipline !== selectedDiscipline) return false
    if (search.trim() && !p.title.toLowerCase().includes(search.toLowerCase()) && !p.desc.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  return (
    <div className="emp-page-wrap">
      {/* Hero */}
      <section className="emp-services-hero">
        <div className="container-wide">
          <div className="emp-hero-breadcrumbs">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <span>Open Projects</span>
          </div>

          <div style={{ maxWidth: '850px', marginTop: '1rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--red)', display: 'block', marginBottom: '0.5rem' }}>
              OPEN ENGINEERING CONTRACTS
            </span>
            <h1 className="emp-hero-title" style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: 1.2 }}>
              Engineering projects looking for verified specialists
            </h1>
            <p className="emp-hero-sub" style={{ fontSize: '1.15rem', color: '#ffffff', opacity: 0.95, lineHeight: 1.6, marginBottom: '2rem' }}>
              Browse auditable statements of work posted by commercial clients, EPC contractors and industrial operators. Submit technical proposals with milestones and deliverable commitments.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/post-project" className="emp-btn emp-btn-primary emp-btn-lg">
                <span>Post an Engineering Project</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/projects/templates" className="emp-btn emp-btn-outline-light emp-btn-lg">
                <span>Browse Project Templates</span>
              </Link>
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
              <Search size={16} color="var(--navy)" style={{ position: 'absolute', left: '12px', top: '12px' }} />
              <input
                type="text"
                placeholder="Search open briefs..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="emp-input"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="emp-section">
        <div className="container-wide">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {filteredProjects.map(project => (
              <div
                key={project.code}
                className="emp-card"
                style={{
                  border: '1px solid #d9e2ec',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}
              >
                {/* Header row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--red)', letterSpacing: '0.05em' }}>
                        {project.code}
                      </span>
                      <span className="emp-chip" style={{ fontSize: '0.7rem', padding: '1px 8px' }}>
                        {project.discipline}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--navy)', opacity: 0.7 }}>
                        Posted {project.posted}
                      </span>
                    </div>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)', margin: 0, lineHeight: 1.35 }}>
                      {project.title}
                    </h2>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--navy)' }}>
                      {project.budget}
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--navy)', opacity: 0.75 }}>
                      {project.type} · Est. {project.duration}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p style={{ fontSize: '0.9rem', color: 'var(--navy)', opacity: 0.9, lineHeight: 1.6, margin: 0 }}>
                  {project.desc}
                </p>

                {/* Standards & Deliverables */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--navy)' }}>Standards:</span>
                  {project.standards.map(s => (
                    <span key={s} className="emp-chip" style={{ fontSize: '0.72rem' }}>
                      {s}
                    </span>
                  ))}
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--navy)', marginLeft: '0.5rem' }}>Required:</span>
                  {project.deliverables.map(del => (
                    <span key={del} style={{ fontSize: '0.75rem', color: 'var(--navy)', opacity: 0.85, display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                      <CheckCircle2 size={12} color="var(--red)" />
                      <span>{del}</span>
                    </span>
                  ))}
                </div>

                {/* Footer Bar */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #d9e2ec', paddingTop: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                  <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.8rem', color: 'var(--navy)', opacity: 0.85 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <MapPin size={14} color="var(--red)" />
                      <span>{project.location}</span>
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Briefcase size={14} color="var(--navy)" />
                      <span>{project.proposals} proposals received</span>
                    </span>
                  </div>

                  <Link to="/login" className="emp-btn emp-btn-primary emp-btn-md">
                    <span>Submit Proposal</span>
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

