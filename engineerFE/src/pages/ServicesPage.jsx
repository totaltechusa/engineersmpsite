import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import {
  Search,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ArrowRight,
  ChevronRight,
  Star,
  MapPin,
  Calendar
} from 'lucide-react'

export default function ServicesPage() {
  const [searchParams] = useSearchParams()
  const initialQuery = searchParams.get('q') || ''
  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    if (initialQuery) {
      setSearchQuery(initialQuery)
    }
  }, [initialQuery])

  const categories = [
    'All',
    'Inspection & testing',
    'Structural & civil',
    'Mechanical & thermal',
    'Electrical & electronics',
    'Chemical & process',
    'CAD & drafting'
  ]

  const serviceCatalog = [
    {
      id: 'failure-analysis',
      title: 'Failure Analysis / Materials Engineering — Field inspection & condition assessment',
      type: 'Inspection',
      discipline: 'Failure Analysis / Materials Engineering',
      code: 'ISO 17020 / ASTM E2018',
      price: '$1,800',
      time: '3–5 days',
      rating: '4.98',
      reviews: 44,
      onSite: 'On-site available',
      seller: 'Ibrahim Bergstrom, PE',
      link: '/services/inspection',
      deliverables: ['Field inspection log', 'Material degradation classification', 'Signed technical report'],
      desc: 'On-site non-destructive testing, microstructural evaluation, crack propagation analysis, and fitness-for-service under API 579 / ASME FFS-1.'
    },
    {
      id: 'structural-steel',
      title: 'Structural Steel Connection Design & Calculation Package',
      type: 'Design & calcs',
      discipline: 'Structural Engineering',
      code: 'AISC 360-16 / Eurocode 3',
      price: '$450',
      time: '3 days',
      rating: '4.98',
      reviews: 42,
      onSite: 'Remote audit',
      seller: 'Marcus Vance, PE, SE',
      link: '/services/inspection',
      deliverables: ['PE stamped calcs', 'Connection detail drawings', 'IDEA StatiCa model'],
      desc: 'Moment, shear, and braced connection calculations with member capacity checks, bolt tensioning, and weld schedules.'
    },
    {
      id: 'hvac-loads',
      title: 'Commercial HVAC Cooling & Heating Load Analysis & Equipment Sizing',
      type: 'Analysis & simulation',
      discipline: 'Mechanical / HVAC Engineering',
      code: 'ASHRAE 90.1 / Manual N',
      price: '$680',
      time: '4 days',
      rating: '5.0',
      reviews: 29,
      onSite: 'Remote study',
      seller: 'Amara Okafor, P.Eng',
      link: '/services/inspection',
      deliverables: ['HAP / EnergyPlus file', 'Equipment sizing report', 'Code compliance checklist'],
      desc: 'Room-by-room solar and transmission thermal loads, fresh air ventilation calculation, and primary equipment schedule.'
    },
    {
      id: 'pcb-review',
      title: 'High-Speed Multilayer PCB Schematic & Controlled Impedance Stack-Up',
      type: 'Design & layout',
      discipline: 'Electrical & Electronics',
      code: 'IPC-2221 / IEEE',
      price: '$850',
      time: '5 days',
      rating: '4.95',
      reviews: 58,
      onSite: 'Remote package',
      seller: 'Dr. Alistair Finch, CEng',
      link: '/services/inspection',
      deliverables: ['Altium Designer database', 'Gerber RS-274X', 'BOM & Part Sourcing Matrix'],
      desc: 'High-speed differential routing, PCIe Gen 4 / DDR4 timing matching, and power delivery network (PDN) decoupling optimization.'
    },
    {
      id: 'pressure-vessel',
      title: 'Pressure Vessel Wall Thickness & Nozzle Reinforcement Calculation',
      type: 'Mechanical design',
      discipline: 'Pressure Vessels & Boilers',
      code: 'ASME Section VIII Div 1',
      price: '$1,200',
      time: '6 days',
      rating: '4.99',
      reviews: 34,
      onSite: 'Remote model',
      seller: 'Elena Rostova, EurIng',
      link: '/services/inspection',
      deliverables: ['COMPRESS / PV Elite file', 'Fabrication drawing sign-off', 'Independent check sheet'],
      desc: 'Internal pressure, vacuum, seismic and wind loading on vessel skirts with local stress analysis around nozzles.'
    },
    {
      id: 'piping-flow',
      title: 'Process Piping Hydraulic Flow Simulation & PSV Relief Sizing',
      type: 'Process simulation',
      discipline: 'Chemical & Process Engineering',
      code: 'ASME B31.3 / API 520',
      price: '$1,400',
      time: '7 days',
      rating: '4.97',
      reviews: 19,
      onSite: 'Remote simulation',
      seller: 'Kariuki Mwangi, PE',
      link: '/services/inspection',
      deliverables: ['AFT Fathom model', 'Pump head calculation', 'PSV relief data sheets'],
      desc: 'Two-phase hydraulic network simulation, transient water hammer assessment, and contingency relief verification under API 521.'
    }
  ]

  const filtered = serviceCatalog.filter(s => {
    const matchCat = selectedCategory === 'All' || s.category === selectedCategory || s.discipline.toLowerCase().includes(selectedCategory.toLowerCase())
    const matchSearch =
      !searchQuery.trim() ||
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.discipline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.seller.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div className="emp-page-wrap">
      {/* Page Hero matching live reference */}
      <section className="emp-services-hero">
        <div className="container-wide">
          <div className="emp-hero-breadcrumbs">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <span>Services</span>
          </div>

          <div style={{ maxWidth: '850px', marginTop: '1.25rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--red)', display: 'block', marginBottom: '0.5rem' }}>
              FIXED-SCOPE SERVICES
            </span>
            <h1 className="emp-hero-title" style={{ fontSize: 'clamp(2.2rem, 1.8rem + 2vw, 3.2rem)', marginBottom: '1rem', lineHeight: 1.15 }}>
              Fixed-scope engineering. Known deliverables, upfront pricing.
            </h1>
            <p className="emp-hero-sub" style={{ fontSize: '1.15rem', color: '#ffffff', opacity: 0.95, lineHeight: 1.6, marginBottom: '2.5rem' }}>
              Every service has an exact scope, specified governing design codes, and auditable deliverables. Funded into escrow and released only upon your review.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/post-project" className="emp-btn emp-btn-primary emp-btn-lg">
                <span>Post a Custom Project</span>
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
              {categories.map(c => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setSelectedCategory(c)}
                  className={`emp-chip ${selectedCategory === c ? 'active' : ''}`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="emp-search-field-box">
              <Search size={16} color="var(--navy)" style={{ position: 'absolute', left: '12px', top: '10px' }} />
              <input
                type="text"
                placeholder="Search services, codes..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="emp-input"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards Grid matching live engineersmp.com ServiceCard style */}
      <section className="emp-section">
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '2rem' }}>
            {filtered.map(service => (
              <div
                key={service.id}
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
                  {/* Top strip with days & badge */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--red)', letterSpacing: '0.06em' }}>
                      {service.type}
                    </span>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        color: 'var(--navy)',
                        background: '#f1f5f9',
                        padding: '3px 8px',
                        borderRadius: '3px'
                      }}
                    >
                      {service.onSite}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--navy)', margin: '0 0 0.5rem 0', lineHeight: 1.35 }}>
                    <Link to={service.link} style={{ color: 'var(--navy)', textDecoration: 'none' }}>
                      {service.title}
                    </Link>
                  </h3>

                  <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '1rem' }}>
                    {service.discipline} · <strong>{service.code}</strong>
                  </div>

                  <p style={{ fontSize: '0.86rem', color: 'var(--navy)', opacity: 0.85, lineHeight: 1.55, marginBottom: '1.25rem', minHeight: '44px' }}>
                    {service.desc}
                  </p>

                  {/* Deliverables box */}
                  <div style={{ background: '#f8fafc', padding: '0.85rem 1rem', border: '1px solid #e2e8f0', borderRadius: '4px', marginBottom: '1.25rem' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--navy)', display: 'block', marginBottom: '0.35rem' }}>
                      Auditable Deliverables
                    </span>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                      {service.deliverables.map((d, dIdx) => (
                        <li key={dIdx} style={{ fontSize: '0.78rem', color: 'var(--navy)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                          <CheckCircle2 size={13} color="var(--red)" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Foot: Seller + Price Block */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid #e2e8f0', paddingTop: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <span style={{ fontSize: '0.72rem', color: '#64748b', display: 'block' }}>Verified Specialist</span>
                      <strong style={{ fontSize: '0.85rem', color: 'var(--navy)' }}>{service.seller}</strong>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.2rem' }}>
                        <div style={{ display: 'flex', gap: '2px', color: 'var(--red)' }}>
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={12} fill="currentColor" />
                          ))}
                        </div>
                        <span style={{ fontSize: '0.75rem', color: '#64748b' }}>({service.reviews})</span>
                      </div>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '0.72rem', color: '#64748b', display: 'block' }}>Starting at</span>
                      <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--navy)', lineHeight: 1 }}>{service.price}</span>
                    </div>
                  </div>

                  <Link
                    to={service.link}
                    className="emp-btn emp-btn-secondary emp-btn-md"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <span>View Scope &amp; Book</span>
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
