import { useState } from 'react'
import {
  Hammer,
  Building2,
  Settings,
  Zap,
  FlaskConical,
  AirVent,
  Flame,
  Cpu,
  ShieldCheck
} from 'lucide-react'

export default function BigProjects() {
  const [active, setActive] = useState('Factory')

  const types = ['Factory', 'Commercial building', 'Solar plant', 'EV product', 'Bridge']

  const projectData = {
    Factory: {
      img: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      title: 'A factory',
      sub: 'usually needs 9 disciplines working together',
      disciplines: 9,
    },
    'Commercial building': {
      img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
      title: 'A commercial building',
      sub: 'usually needs 7 disciplines working together',
      disciplines: 7,
    },
    'Solar plant': {
      img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
      title: 'A solar plant',
      sub: 'usually needs 5 disciplines working together',
      disciplines: 5,
    },
    'EV product': {
      img: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
      title: 'An EV product',
      sub: 'usually needs 6 disciplines working together',
      disciplines: 6,
    },
    Bridge: {
      img: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80',
      title: 'A bridge',
      sub: 'usually needs 4 disciplines working together',
      disciplines: 4,
    },
  }

  const needed = [
    { icon: <Hammer size={18} />, name: 'Civil', sub: 'Site works, roads, drainage' },
    { icon: <Building2 size={18} />, name: 'Structural', sub: 'Frame, slabs, foundations' },
    { icon: <Settings size={18} />, name: 'Mechanical', sub: 'Equipment, machinery, piping' },
    { icon: <Zap size={18} />, name: 'Electrical', sub: 'Power, lighting, distribution' },
    { icon: <FlaskConical size={18} />, name: 'Process', sub: 'Flow, sizing, P&IDs' },
    { icon: <AirVent size={18} />, name: 'HVAC', sub: 'Heating, cooling, ventilation' },
    { icon: <Flame size={18} />, name: 'Fire', sub: 'Sprinklers, alarms, strategy' },
    { icon: <Cpu size={18} />, name: 'Automation', sub: 'PLC, controls, SCADA' },
    { icon: <ShieldCheck size={18} />, name: 'Safety', sub: 'Hazard reviews, compliance', fullWidth: true },
  ]

  const proj = projectData[active]

  return (
    <section className="projects-section" id="firms">
      <div className="projects-inner">
        {/* Header */}
        <div className="projects-top">
          <div>
            <div className="section-eyebrow">
              <span className="section-eyebrow-num">04</span>
              <span className="section-eyebrow-text">Big projects</span>
              <span className="section-eyebrow-line" />
            </div>
            <h2 className="projects-headline">
              One project, many disciplines. We help you staff all of them.
            </h2>
          </div>
          <p className="projects-subtitle">
            Tell us what you're building. We'll show who you need and the
            easiest way to hire them.
          </p>
        </div>

        {/* Content */}
        <div className="projects-content">
          {/* Left Step 1 */}
          <div className="projects-left">
            <div className="step-label">
              <span className="step-num">1</span>
              <span className="step-text">What are you building?</span>
            </div>

            <div className="build-types">
              {types.map(t => (
                <button
                  key={t}
                  className={`build-type-btn${active === t ? ' active' : ''}`}
                  onClick={() => setActive(t)}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="project-img-card" key={`img-${active}`}>
              <img src={proj.img} alt={proj.title} className="project-img-animated" />
              <div className="project-img-overlay" />
              <div className="project-img-label project-label-animated">
                <p className="project-img-title">{proj.title}</p>
                <p className="project-img-sub">{proj.sub}</p>
              </div>
            </div>
          </div>

          {/* Right Step 2 */}
          <div className="projects-right">
            <div className="step-label">
              <span className="step-num">2</span>
              <span className="step-text">Who you'll need</span>
            </div>

            <div className="disciplines-needed-card">
              <div className="disciplines-needed-header" key={`hdr-${active}`}>
                <p className="disciplines-needed-title disciplines-title-animated">
                  {proj.title} needs <span className="disciplines-count-highlight">{proj.disciplines}</span> disciplines
                </p>
                <span className="typical-badge badge-animated">Typical team</span>
              </div>

              <div className="disciplines-grid" key={`grid-${active}`}>
                {needed.slice(0, proj.disciplines).map((d, index) => (
                  <div
                    className={`discipline-item${d.fullWidth ? ' full-width' : ''} discipline-item-animated`}
                    key={d.name}
                    style={{ animationDelay: `${index * 22}ms` }}
                  >
                    <div className="discipline-item-icon">{d.icon}</div>
                    <div className="discipline-item-info">
                      <p className="discipline-item-name">{d.name}</p>
                      <p className="discipline-item-sub">{d.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
