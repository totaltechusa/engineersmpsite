import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, ArrowRight } from 'lucide-react'

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('')

  const tickers = [
    'BY THE HOUR',
    'BY THE TASK',
    'BY PROJECT',
    'TO A TIMELINE',
    'PART-TIME',
    'FULL-TIME',
    'AFTER HOURS',
    'ON HOLIDAYS',
    'ON RETAINER',
    'ON CALL',
  ]

  const suggestions = [
    { label: 'Need structural engineer for a steel warehouse in Gujarat.', query: 'Need structural engineer for a steel warehouse in Gujarat.' },
    { label: 'Need PCB engineer who knows Altium and high-speed design.', query: 'Need PCB engineer who knows Altium and high-speed design.' },
    { label: 'Find HVAC engineer for commercial building load calculation.', query: 'Find HVAC engineer for commercial building load calculation.' },
  ]

  const stats = [
    { value: '18K', label: 'Verified engineers' },
    { value: '620', label: 'Engineering disciplines' },
    { value: '24K', label: 'Scoped services' },
    { value: '64', label: 'Countries served' },
  ]

  return (
    <section className="emp-hero">
      <div className="container-wide">
        <div className="emp-hero-inner">
          {/* Eyebrow Tag */}
          <span className="emp-hero-eyebrow">
            <span className="emp-hero-eyebrow-tag">Engineering only</span>
            <span>620 disciplines · 16 families</span>
          </span>

          {/* Headline */}
          <h1 className="emp-hero-title">
            Engineering Expertise,<em>On Demand.</em>
          </h1>

          {/* Engineers on demand band */}
          <div className="emp-ticker-band">
            <span className="emp-ticker-lead">Engineers on demand:</span>
            <div className="emp-ticker-chips">
              {tickers.map((t, idx) => (
                <span key={idx} className="emp-ticker-chip">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Subtitle */}
          <p className="emp-hero-sub">
            Hire verified engineers, specialists and engineering firms for design, analysis, simulation, CAD, inspection, testing and complete technical projects.
          </p>

          {/* Hero Search Box */}
          <form
            className="emp-search-form"
            onSubmit={e => {
              e.preventDefault()
              if (searchQuery) window.location.href = `/services?q=${encodeURIComponent(searchQuery)}`
            }}
          >
            <div className="emp-search-field">
              <span className="emp-search-icon">
                <Search size={20} />
              </span>
              <input
                className="emp-search-input"
                type="search"
                placeholder="What engineering problem are you solving?"
                aria-label="Search engineers, services and projects"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
            <button type="submit" className="emp-btn emp-btn-primary emp-btn-xl">
              Search
            </button>
          </form>

          {/* Suggestions */}
          <div className="emp-suggestions">
            <span className="emp-suggest-label">Try</span>
            {suggestions.map((item, idx) => (
              <button
                type="button"
                key={idx}
                className="emp-suggest-chip"
                onClick={() => setSearchQuery(item.query)}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Main Action CTAs */}
          <div className="emp-hero-ctas">
            <Link to="/post-project" className="emp-btn emp-btn-primary emp-btn-xl">
              <span>Post an Engineering Project</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="emp-btn emp-btn-white emp-btn-xl">
              <span>Find an Engineer</span>
            </Link>
          </div>

          {/* Bottom Live Metrics Strip */}
          <div className="emp-hero-stats-band">
            <span className="emp-hero-stats-label">
              Built for engineering work — one technical task to multidisciplinary delivery
            </span>
            <div className="emp-stats-grid">
              {stats.map((stat, idx) => (
                <div key={idx} className="emp-stat-item">
                  <div className="emp-stat-value">{stat.value}</div>
                  <div className="emp-stat-title">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
