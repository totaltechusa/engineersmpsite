import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ChevronDown, Search, Menu, X, ArrowRight } from 'lucide-react'
import { authRequest, clearAuthToken, getAuthToken, subscribeToAuthChanges } from '../auth'

export default function Navbar() {
  const [authenticated, setAuthenticated] = useState(() => Boolean(getAuthToken()))
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()
  const navRef = useRef(null)

  useEffect(() => subscribeToAuthChanges(() => {
    setAuthenticated(Boolean(getAuthToken()))
  }), [])

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  async function handleLogout() {
    try {
      await authRequest('/logout', { method: 'POST' })
    } catch (logoutError) {
      console.error('Logout error:', logoutError)
    } finally {
      clearAuthToken()
      navigate('/login', { replace: true })
    }
  }

  function handleSearchSubmit(e) {
    e.preventDefault()
    if (searchQuery.trim()) {
      setSearchOpen(false)
      navigate(`/services?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <header className="emp-header" ref={navRef}>
      <div className="container-wide">
        <div className="emp-header-bar">
          {/* Logo with original branding on clean White Header */}
          <Link to="/" className="emp-logo-wrap">
            <img
              src="/logo.png"
              alt="Engineers Marketplace"
              className="emp-logo-img"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="emp-nav-menu" aria-label="Primary">
            {/* Find Engineers */}
            <div
              className="emp-nav-item-dropdown"
              onMouseEnter={() => setOpenDropdown('engineers')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <NavLink
                to="/services"
                className={({ isActive }) => `emp-nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setOpenDropdown(null)}
              >
                <span>Find Engineers</span>
                <ChevronDown size={14} />
              </NavLink>
              {openDropdown === 'engineers' && (
                <div className="emp-dropdown-menu">
                  <Link to="/services" className="emp-dropdown-item" onClick={() => setOpenDropdown(null)}>
                    <strong>All Engineering Disciplines</strong>
                    <span>Browse 620 verified subdisciplines</span>
                  </Link>
                  <Link to="/services" className="emp-dropdown-item" onClick={() => setOpenDropdown(null)}>
                    <strong>Civil &amp; Structural</strong>
                    <span>Bridges, concrete, steel, seismic</span>
                  </Link>
                  <Link to="/services" className="emp-dropdown-item" onClick={() => setOpenDropdown(null)}>
                    <strong>Mechanical &amp; Thermal</strong>
                    <span>FEA, CFD, piping, HVAC, tooling</span>
                  </Link>
                  <Link to="/services" className="emp-dropdown-item" onClick={() => setOpenDropdown(null)}>
                    <strong>Electrical &amp; Electronics</strong>
                    <span>Substations, PCB, embedded, arc flash</span>
                  </Link>
                  <Link to="/services" className="emp-dropdown-item" onClick={() => setOpenDropdown(null)}>
                    <strong>Chemical &amp; Process</strong>
                    <span>Aspen simulation, PSV, refinery, HAZOP</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Services */}
            <div
              className="emp-nav-item-dropdown"
              onMouseEnter={() => setOpenDropdown('services')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <NavLink
                to="/services"
                className={({ isActive }) => `emp-nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setOpenDropdown(null)}
              >
                <span>Services</span>
                <ChevronDown size={14} />
              </NavLink>
              {openDropdown === 'services' && (
                <div className="emp-dropdown-menu">
                  <Link to="/services" className="emp-dropdown-item" onClick={() => setOpenDropdown(null)}>
                    <strong>Browse Fixed-Scope Services</strong>
                    <span>Defined scope, auditable deliverables</span>
                  </Link>
                  <Link to="/services/inspection" className="emp-dropdown-item" onClick={() => setOpenDropdown(null)}>
                    <strong>Inspection &amp; Testing</strong>
                    <span>Condition assessment, NDT &amp; audits</span>
                  </Link>
                  <Link to="/services" className="emp-dropdown-item" onClick={() => setOpenDropdown(null)}>
                    <strong>Analysis &amp; Simulation</strong>
                    <span>FEA, CFD, piping stress &amp; dynamics</span>
                  </Link>
                  <Link to="/services" className="emp-dropdown-item" onClick={() => setOpenDropdown(null)}>
                    <strong>Design &amp; Calculations</strong>
                    <span>MathCAD, STAAD, ETAP calculations</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Post a Project */}
            <NavLink to="/post-project" className={({ isActive }) => `emp-nav-link ${isActive ? 'active' : ''}`}>
              <span>Post a Project</span>
            </NavLink>

            {/* Projects Dropdown */}
            <div
              className="emp-nav-item-dropdown"
              onMouseEnter={() => setOpenDropdown('projects')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                className={`emp-nav-link ${openDropdown === 'projects' ? 'active' : ''}`}
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', font: 'inherit' }}
                onClick={() => setOpenDropdown(openDropdown === 'projects' ? null : 'projects')}
              >
                <span>Projects</span>
                <ChevronDown size={14} />
              </button>
              {openDropdown === 'projects' && (
                <div className="emp-dropdown-menu">
                  <Link to="/projects" className="emp-dropdown-item" onClick={() => setOpenDropdown(null)}>
                    <strong>Open engineering projects</strong>
                    <span>Browse and submit proposals</span>
                  </Link>
                  <Link to="/projects/templates" className="emp-dropdown-item" onClick={() => setOpenDropdown(null)}>
                    <strong>Project templates</strong>
                    <span>Start from a discipline template</span>
                  </Link>
                  <Link to="/teams/builder" className="emp-dropdown-item" onClick={() => setOpenDropdown(null)}>
                    <strong>Multidisciplinary builder</strong>
                    <span>Map the disciplines you need</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Firms & Teams Dropdown */}
            <div
              className="emp-nav-item-dropdown"
              onMouseEnter={() => setOpenDropdown('firms')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                className={`emp-nav-link ${openDropdown === 'firms' ? 'active' : ''}`}
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', font: 'inherit' }}
                onClick={() => setOpenDropdown(openDropdown === 'firms' ? null : 'firms')}
              >
                <span>Firms &amp; Teams</span>
                <ChevronDown size={14} />
              </button>
              {openDropdown === 'firms' && (
                <div className="emp-dropdown-menu">
                  <Link to="/firms" className="emp-dropdown-item" onClick={() => setOpenDropdown(null)}>
                    <strong>Engineering firms</strong>
                    <span>Verified companies and practices</span>
                  </Link>
                  <Link to="/firms" className="emp-dropdown-item" onClick={() => setOpenDropdown(null)}>
                    <strong>Engineering teams</strong>
                    <span>Assembled multidisciplinary teams</span>
                  </Link>
                  <Link to="/enterprise" className="emp-dropdown-item" onClick={() => setOpenDropdown(null)}>
                    <strong>Enterprise</strong>
                    <span>Private talent pools and procurement</span>
                  </Link>
                </div>
              )}
            </div>

            {/* More Dropdown */}
            <div
              className="emp-nav-item-dropdown"
              onMouseEnter={() => setOpenDropdown('more')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                className={`emp-nav-link ${openDropdown === 'more' ? 'active' : ''}`}
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', font: 'inherit' }}
                onClick={() => setOpenDropdown(openDropdown === 'more' ? null : 'more')}
              >
                <span>More</span>
                <ChevronDown size={14} />
              </button>
              {openDropdown === 'more' && (
                <div className="emp-dropdown-menu">
                  <Link to="/community" className="emp-dropdown-item" onClick={() => setOpenDropdown(null)}>
                    <strong>Community</strong>
                    <span>Q&amp;A, discussions and knowledge</span>
                  </Link>
                  <Link to="/case-studies" className="emp-dropdown-item" onClick={() => setOpenDropdown(null)}>
                    <strong>Case studies</strong>
                    <span>Structured technical proof</span>
                  </Link>
                  <Link to="/consultations" className="emp-dropdown-item" onClick={() => setOpenDropdown(null)}>
                    <strong>Consultations</strong>
                    <span>Book a 30–60 minute expert call</span>
                  </Link>
                  <Link to="/for-engineers" className="emp-dropdown-item" onClick={() => setOpenDropdown(null)}>
                    <strong>Engineering jobs</strong>
                    <span>Full-time and contract roles</span>
                  </Link>
                  <Link to="/projects/templates" className="emp-dropdown-item" onClick={() => setOpenDropdown(null)}>
                    <strong>Standards &amp; codes</strong>
                    <span>Browse by design standard</span>
                  </Link>
                  <Link to="/services" className="emp-dropdown-item" onClick={() => setOpenDropdown(null)}>
                    <strong>Engineering software</strong>
                    <span>Browse by tool</span>
                  </Link>
                  <Link to="/how-it-works" className="emp-dropdown-item" onClick={() => setOpenDropdown(null)}>
                    <strong>Resources</strong>
                    <span>Guides and learning</span>
                  </Link>
                  <Link to="/for-engineers#calculator" className="emp-dropdown-item" onClick={() => setOpenDropdown(null)}>
                    <strong>Pricing</strong>
                    <span>Fees and plans</span>
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Action CTAs & Search matching engineersmp.com */}
          <div className="emp-header-actions">
            {/* Search Toggle */}
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="emp-icon-btn"
              aria-label="Search"
            >
              <Search size={18} />
            </button>

            {authenticated ? (
              <>
                <Link to="/profile" className="emp-btn-header-login">
                  Profile
                </Link>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="emp-btn-header-login"
                  style={{ color: 'var(--red)', borderColor: 'var(--red)' }}
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link to="/login" className="emp-btn-header-login">
                Log in
              </Link>
            )}

            <Link to="/post-project" className="emp-btn-header-cta">
              <span>Post a Project</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* Live Search Popup Overlay */}
        {searchOpen && (
          <div
            style={{
              padding: '1rem',
              background: '#ffffff',
              border: '2px solid var(--navy)',
              marginTop: '0.5rem',
              boxShadow: '0 4px 20px rgba(11, 49, 97, 0.15)'
            }}
          >
            <form onSubmit={handleSearchSubmit} style={{ display: 'flex', gap: '0.75rem' }}>
              <div style={{ position: 'relative', flex: 1 }}>
                <Search size={18} color="var(--navy)" style={{ position: 'absolute', left: '12px', top: '12px' }} />
                <input
                  type="text"
                  autoFocus
                  placeholder="Search disciplines, standards (ASME, Eurocode), or software (ANSYS, Altium)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="emp-input"
                  style={{ paddingLeft: '2.5rem', width: '100%' }}
                />
              </div>
              <button type="submit" className="emp-btn emp-btn-primary emp-btn-md">
                Search
              </button>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="emp-btn emp-btn-secondary emp-btn-md"
              >
                Close
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  )
}
