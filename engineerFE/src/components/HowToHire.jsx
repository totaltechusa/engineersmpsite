import { Building2, Users, BadgeCheck, ArrowRight, Check } from 'lucide-react'

export default function HowToHire() {
  const options = [
    {
      title: 'Hire one firm',
      icon: <Building2 size={20} />,
      bestFor: 'one accountable party for the whole job',
      checks: [
        'One contract, one invoice, one point of contact',
        'The firm staffs every discipline from its own team',
        'Company, insurance and team roster verified',
      ],
      price: 'Quoted by the firm',
      action: 'Browse firms',
      badge: null,
    },
    {
      title: 'Hire specialists',
      icon: <Users size={20} />,
      bestFor: 'you know the disciplines and want to choose each person',
      checks: [
        'Pick a verified engineer for every discipline',
        'Everyone works in one shared workroom',
        'Separate milestones and payments per discipline',
      ],
      price: 'Per engineer contract',
      action: 'Find engineers',
      badge: 'Most flexible',
    },
    {
      title: 'Let us assemble it',
      icon: <BadgeCheck size={20} />,
      bestFor: 'complex or multi-site programmes',
      checks: [
        'A dedicated programme manager on our side',
        'We source, coordinate and run the stage gates',
        'You approve every hire and every milestone',
      ],
      price: '12% of contract value',
      action: 'Talk to us',
      badge: null,
    },
  ]

  const firms = [
    {
      tag: 'MSC',
      name: 'Meridian Structural Consultants',
      location: 'Ahmedabad, India · Structural, civil',
      engineers: '24–40',
      since: '2009',
      projects: '858',
    },
    {
      tag: 'KMD',
      name: 'Kestrel Mechanical Design',
      location: 'Stuttgart, Germany · Product, FEA',
      engineers: '12–24',
      since: '2014',
      projects: '167',
    },
    {
      tag: 'HPP',
      name: 'Helix Process Partners',
      location: 'Rotterdam, NL · Process, safety',
      engineers: '40–80',
      since: '2006',
      projects: '287',
    },
  ]

  return (
    <section className="how-to-hire-section">
      <div className="how-to-hire-inner">
        {/* Step 3 Header */}
        <div className="step-label">
          <span className="step-num">3</span>
          <span className="step-text">Choose how to hire them</span>
        </div>

        {/* 3 Options Cards */}
        <div className="hire-options-grid">
          {options.map(opt => (
            <div
              className={`hire-option-card${opt.badge ? ' has-badge' : ''}`}
              key={opt.title}
            >
              {opt.badge && (
                <div className="hire-option-badge">{opt.badge}</div>
              )}

              <div className="hire-option-header">
                <div className="hire-option-icon">{opt.icon}</div>
                <h3 className="hire-option-title">{opt.title}</h3>
              </div>

              <p className="hire-option-bestfor">
                <strong>Best for:</strong> {opt.bestFor}
              </p>

              <ul className="hire-option-checks">
                {opt.checks.map(c => (
                  <li key={c}>
                    <Check size={16} className="hire-check-icon" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>

              <div className="hire-option-bottom">
                <span className="hire-option-price">{opt.price}</span>
                <a href="#firms" className="hire-option-link">
                  <span>{opt.action}</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Firms Ready to Take It On */}
        <div className="verified-firms-header">
          <h3 className="verified-firms-title">Verified firms ready to take it on</h3>
          <a href="#firms" className="verified-firms-browse">
            <span>Browse firms</span>
            <ArrowRight size={14} />
          </a>
        </div>

        <div className="verified-firms-grid">
          {firms.map(f => (
            <div className="firm-card" key={f.name}>
              <div className="firm-card-top">
                <div className="firm-tag-badge">{f.tag}</div>
                <div>
                  <h4 className="firm-name">{f.name}</h4>
                  <p className="firm-location">{f.location}</p>
                </div>
              </div>

              <div className="firm-stats">
                <div className="firm-stat">
                  <span className="firm-stat-label">Engineers</span>
                  <span className="firm-stat-val">{f.engineers}</span>
                </div>
                <div className="firm-stat">
                  <span className="firm-stat-label">Since</span>
                  <span className="firm-stat-val">{f.since}</span>
                </div>
                <div className="firm-stat">
                  <span className="firm-stat-label">Projects</span>
                  <span className="firm-stat-val">{f.projects}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
