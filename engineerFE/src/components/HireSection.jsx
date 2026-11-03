import { ShoppingCart, FileText, User, Users, ArrowRight, Check } from 'lucide-react'

export default function HireSection() {
  const cards = [
    {
      icon: <ShoppingCart size={22} />,
      title: 'Buy a service',
      desc: 'Fixed price and scope, exclusions listed up front.',
      link: 'Browse services',
      img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=80',
    },
    {
      icon: <FileText size={22} />,
      title: 'Post a project',
      desc: 'Describe the problem, compare proposals side by side.',
      link: 'Post a project',
      img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=700&q=80',
    },
    {
      icon: <User size={22} />,
      title: 'Find an engineer',
      desc: 'Search by discipline, code, software and licence.',
      link: 'Search engineers',
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=700&q=80',
    },
    {
      icon: <Users size={22} />,
      title: 'Hire a team or firm',
      desc: 'One contract for several disciplines, one named lead.',
      link: 'Build a team',
      img: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=700&q=80',
    },
  ]

  const tiers = [
    { name: 'Single task',     range: '$80 – $600',  height: 32, bullets: ['1–5 days', 'One engineer'] },
    { name: 'Scoped package',  range: '$600 – $6k',  height: 56, bullets: ['1–6 weeks', 'Peer checked'] },
    { name: 'Multidiscipline', range: '$6k – $75k',  height: 88, bullets: ['2–9 months', 'Independent checker'] },
    { name: 'Programme',       range: '$75k +',      height: 128, bullets: ['9 months +', 'Enterprise terms'] },
  ]

  return (
    <section className="hire-section" id="how">
      <div className="hire-inner">
        {/* Header */}
        <div className="hire-header">
          <div>
            <div className="section-eyebrow">
              <span className="section-eyebrow-num">02</span>
              <span className="section-eyebrow-text">Four ways to hire</span>
              <span className="section-eyebrow-line" />
            </div>
            <h2 className="hire-headline">Start the way your job is shaped</h2>
          </div>
          <p className="hire-subtitle">
            A one-beam check and a factory design aren't the same purchase,
            so they don't take the same route.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="hire-cards">
          {cards.map(c => (
            <div className="hire-card" key={c.title}>
              <div className="hire-card-img-wrap">
                <img src={c.img} alt={c.title} className="hire-card-img" />
                <div className="hire-card-img-overlay" />
              </div>
              <div className="hire-card-body">
                <div className="hire-card-icon">{c.icon}</div>
                <h3 className="hire-card-title">{c.title}</h3>
                <p className="hire-card-desc">{c.desc}</p>
                <div className="hire-card-bottom">
                  <span className="hire-card-link-text">{c.link}</span>
                  <div className="hire-card-arrow-circle">
                    <ArrowRight size={15} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Card */}
        <div className="pricing-card">
          <div className="pricing-card-header">
            <div>
              <h3 className="pricing-title">Pricing calibrated by scope</h3>
              <p className="pricing-subtitle">
                Typical fee bands across disciplines — fixed price or capped T&amp;M.
              </p>
            </div>
          </div>

          <div className="pricing-grid">
            {tiers.map(t => (
              <div className="pricing-tier" key={t.name}>
                <div className="pricing-bar-stage">
                  <div className="pricing-bar" style={{ height: `${t.height}px` }} />
                </div>
                <div className="pricing-tier-details">
                  <p className="pricing-tier-name">{t.name}</p>
                  <p className="pricing-tier-range">{t.range}</p>
                  <ul className="pricing-tier-bullets">
                    {t.bullets.map(b => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            <div className="pricing-sidebar">
              <p className="pricing-sidebar-title">Every contract includes</p>
              <ul className="pricing-features">
                <li>
                  <span className="pricing-feature-check">
                    <Check size={12} strokeWidth={2.5} />
                  </span>
                  <span>Milestone escrow</span>
                </li>
                <li>
                  <span className="pricing-feature-check">
                    <Check size={12} strokeWidth={2.5} />
                  </span>
                  <span>Checked licences</span>
                </li>
                <li>
                  <span className="pricing-feature-check">
                    <Check size={12} strokeWidth={2.5} />
                  </span>
                  <span>Revision history</span>
                </li>
                <li>
                  <span className="pricing-feature-check">
                    <Check size={12} strokeWidth={2.5} />
                  </span>
                  <span>Jurisdiction match</span>
                </li>
                <li>
                  <span className="pricing-feature-check">
                    <Check size={12} strokeWidth={2.5} />
                  </span>
                  <span>Code-compliance audit</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pricing-bottom-track">
            <span className="pricing-line" />
          </div>
        </div>
      </div>
    </section>
  )
}
