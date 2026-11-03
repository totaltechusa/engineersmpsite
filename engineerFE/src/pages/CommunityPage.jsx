import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageSquare,
  Users,
  Search,
  ArrowRight,
  ChevronRight,
  TrendingUp,
  Award,
  CheckCircle2,
  Bookmark,
  Share2
} from 'lucide-react'

export default function CommunityPage() {
  const [selectedTag, setSelectedTag] = useState('All')
  const [search, setSearch] = useState('')

  const tags = [
    'All',
    'Structural Codes',
    'FEA & Simulation',
    'HVAC & MEP',
    'PCB & Embedded',
    'Process & Piping',
    'Licensure & PE Exam',
    'Ethics & Governance'
  ]

  const discussions = [
    {
      id: 1,
      title: 'AISC 360-16 vs Eurocode 3: Discrepancy in effective length factors for braced frames',
      author: 'David K., PE, SE',
      authorRole: 'Principal Structural Engineer · 16 yrs exp',
      category: 'Structural Codes',
      replies: 28,
      views: 1420,
      votes: 46,
      time: '3 hours ago',
      solved: true,
      preview: 'When evaluating second-order (P-Delta) effects under AISC 360 Chapter C (Direct Analysis Method), the effective length factor K is taken as 1.0, whereas EC3 allows explicit imperfection modelling. How are teams handling cross-border certification?'
    },
    {
      id: 2,
      title: 'Mesh convergence criteria in ANSYS Mechanical for nonlinear contact with elastomeric seals',
      author: 'Dr. Elena Rostova, EurIng',
      authorRole: 'Lead Simulation Specialist · 12 yrs exp',
      category: 'FEA & Simulation',
      replies: 19,
      views: 980,
      votes: 34,
      time: '6 hours ago',
      solved: true,
      preview: 'Struggling with volumetric locking in Mooney-Rivlin hyperelastic material models near acute chamfers. Sub-cycling with quadratic elements reduced residual force divergence, but run time tripled.'
    },
    {
      id: 3,
      title: 'API 520 Part I sizing equations for two-phase vapor-liquid relief through orifice valves',
      author: 'Tariq Al-Mansoor, CEng, FIChemE',
      authorRole: 'Process Safety Director',
      category: 'Process & Piping',
      replies: 14,
      views: 740,
      votes: 27,
      time: '1 day ago',
      solved: false,
      preview: 'Comparing the Omega method versus homogeneous equilibrium model (HEM) for flash fires in LPG storage tanks. Any recommendations on conservative slip ratios?'
    },
    {
      id: 4,
      title: 'High-speed differential routing in Altium Designer: Length matching tolerances for PCIe Gen 4',
      author: 'Kariuki M., Senior Electronics Eng',
      authorRole: 'Hardware Architect',
      category: 'PCB & Embedded',
      replies: 22,
      views: 1100,
      votes: 39,
      time: '1 day ago',
      solved: true,
      preview: 'At 16 GT/s, intra-pair skew must stay below 5 ps (approx 0.75 mm in FR4). We share our layout guidelines for serpentine phase-tuning near BGA breakout areas.'
    },
    {
      id: 5,
      title: 'State board licensure reciprocity between Texas (TBPELS) and California (BPELSG)',
      author: 'Sarah Jenkins, PE, ENV SP',
      authorRole: 'Civil Infrastructure Lead',
      category: 'Licensure & PE Exam',
      replies: 31,
      views: 1650,
      votes: 52,
      time: '2 days ago',
      solved: true,
      preview: 'A detailed breakdown of the NCEES record comity process, California-specific seismic and surveying examination requirements, and reference verification timelines.'
    }
  ]

  const filtered = discussions.filter(d => {
    if (selectedTag !== 'All' && d.category !== selectedTag) return false
    if (search.trim() && !d.title.toLowerCase().includes(search.toLowerCase()) && !d.preview.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  return (
    <div className="emp-page-wrap">
      {/* Hero Header */}
      <section className="emp-services-hero">
        <div className="container-wide">
          <div className="emp-hero-breadcrumbs">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <span>Community</span>
          </div>

          <div style={{ maxWidth: '850px', marginTop: '1rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--red)', display: 'block', marginBottom: '0.5rem' }}>
              ENGINEERING COMMUNITY &amp; KNOWLEDGE
            </span>
            <h1 className="emp-hero-title" style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: 1.2 }}>
              Auditable answers from practicing chartered engineers
            </h1>
            <p className="emp-hero-sub" style={{ fontSize: '1.15rem', color: '#ffffff', opacity: 0.95, lineHeight: 1.6, marginBottom: '2rem' }}>
              Technical Q&amp;A, code interpretation, simulation benchmarks, and peer discussions. Verified credentials confirm who is providing the answer.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/login" className="emp-btn emp-btn-primary emp-btn-lg">
                <span>Start a Discussion</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/case-studies" className="emp-btn emp-btn-outline-light emp-btn-lg">
                <span>Browse Case Studies</span>
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
              {tags.map(t => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setSelectedTag(t)}
                  className={`emp-chip ${selectedTag === t ? 'active' : ''}`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="emp-search-field-box">
              <Search size={16} color="var(--navy)" style={{ position: 'absolute', left: '12px', top: '10px' }} />
              <input
                type="text"
                placeholder="Search technical discussions..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="emp-input"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Discussions List */}
      <section className="emp-section">
        <div className="container-wide">
          <div className="emp-detail-grid">
            {/* Main Thread Column */}
            <div className="emp-detail-main">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {filtered.map(item => (
                  <div
                    key={item.id}
                    className="emp-card"
                    style={{
                      border: '1px solid #d9e2ec',
                      background: '#ffffff',
                      padding: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--red)', letterSpacing: '0.05em' }}>
                          {item.category}
                        </span>
                        {item.solved && (
                          <span style={{ fontSize: '0.7rem', color: 'var(--navy)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                            <CheckCircle2 size={13} color="var(--red)" />
                            <span>Peer Verified</span>
                          </span>
                        )}
                      </div>
                      <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                        {item.time}
                      </span>
                    </div>

                    <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--navy)', margin: 0, lineHeight: 1.4 }}>
                      <Link to="/community" style={{ color: 'var(--navy)', textDecoration: 'none' }}>
                        {item.title}
                      </Link>
                    </h2>

                    <p style={{ fontSize: '0.88rem', color: 'var(--navy)', opacity: 0.85, lineHeight: 1.6, margin: 0 }}>
                      {item.preview}
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '0.75rem', marginTop: '0.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
                      <div>
                        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--navy)' }}>{item.author}</span>
                        <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block' }}>{item.authorRole}</span>
                      </div>

                      <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.8rem', color: 'var(--navy)' }}>
                        <span><strong>{item.votes}</strong> Upvotes</span>
                        <span><strong>{item.replies}</strong> Answers</span>
                        <span><strong>{item.views}</strong> Views</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="emp-detail-sidebar">
              <div className="emp-card" style={{ padding: '1.75rem', border: '1px solid #d9e2ec', background: '#ffffff', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.75rem' }}>
                  Peer-to-Peer Review
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--navy)', opacity: 0.85, lineHeight: 1.5, marginBottom: '1.25rem' }}>
                  Community responses are cross-referenced with design standards. Contributors are tagged with verified jurisdiction and licensure.
                </p>
                <Link to="/login" className="emp-btn emp-btn-primary emp-btn-md" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Ask a Question</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="emp-card" style={{ padding: '1.75rem', border: '1px solid #d9e2ec', background: '#ffffff' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '1rem' }}>
                  Popular Engineering Standards
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {['AISC 360', 'ACI 318', 'Eurocode 3', 'ASME VIII', 'API 520', 'IEEE 1584', 'ISO 9001', 'ASHRAE 90.1'].map(std => (
                    <Link key={std} to="/projects/templates" className="emp-chip" style={{ fontSize: '0.72rem', textDecoration: 'none' }}>
                      {std}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

