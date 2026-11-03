import { useState } from 'react'
import { LayoutGrid, ShoppingCart, User, ArrowRight } from 'lucide-react'

export default function Disciplines() {
  const [activeTab, setActiveTab] = useState('disciplines')

  const cards = [
    {
      badge: 'EN 1993',
      title: 'Structural',
      sub: 'Steel, RCC, retrofits',
      img: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&q=80',
    },
    {
      badge: 'ASME Y14.5',
      title: 'Mechanical',
      sub: 'Machine design, FEA, DFM',
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80',
    },
    {
      badge: 'IEC 61850',
      title: 'Electrical and power',
      sub: 'Substations, protection',
      img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&q=80',
    },
    {
      badge: 'API 520',
      title: 'Chemical and process',
      sub: 'Simulation, P&IDs',
      img: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&q=80',
    },
  ]

  return (
    <section className="disciplines-section" id="services">
      <div className="disciplines-inner">
        <div className="disciplines-header">
          <div>
            <div className="section-eyebrow">
              <span className="section-eyebrow-num">03</span>
              <span className="section-eyebrow-text">Explore</span>
              <span className="section-eyebrow-line" />
            </div>
            <h2 className="disciplines-headline">Engineers for every discipline</h2>
          </div>
          <p className="disciplines-subtitle">
            620 disciplines across 16 families. Here are the most requested.
          </p>
        </div>

        <div className="discipline-tabs">
          {[
            { key: 'disciplines', label: 'Disciplines', icon: <LayoutGrid size={16} /> },
            { key: 'services',    label: 'Services',    icon: <ShoppingCart size={16} /> },
            { key: 'engineers',   label: 'Engineers',   icon: <User size={16} /> },
          ].map(t => (
            <button
              key={t.key}
              className={`discipline-tab${activeTab === t.key ? ' active' : ''}`}
              onClick={() => setActiveTab(t.key)}
            >
              {t.icon}
              <span>{t.label}</span>
            </button>
          ))}
        </div>

        <div className="discipline-cards">
          {cards.map(c => (
            <div className="discipline-card" key={c.title}>
              <img src={c.img} alt={c.title} className="discipline-card-img" />
              <div className="discipline-card-overlay" />
              <span className="discipline-card-badge">{c.badge}</span>
              <div className="discipline-card-content">
                <p className="discipline-card-title">{c.title}</p>
                <p className="discipline-card-sub">{c.sub}</p>
                <div className="discipline-card-cta">
                  <span>Explore discipline</span>
                  <ArrowRight size={13} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="disciplines-cta">
          <a href="#services" className="btn-outline">See all 620 disciplines</a>
        </div>
      </div>
    </section>
  )
}
