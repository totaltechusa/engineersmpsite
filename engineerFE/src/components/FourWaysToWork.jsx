import { Link } from 'react-router-dom'
import { ShoppingBag, Send, Search, Users2, ArrowRight } from 'lucide-react'

export default function FourWaysToWork() {
  const modes = [
    {
      num: 'Mode 01',
      title: 'Buy a Service',
      desc: 'Repeatable, clearly scoped technical work with a fixed price, a stated deliverable list and a delivery date. What is not included is as visible as what is.',
      example: '“Structural beam design and calculation for one steel beam.”',
      action: 'Browse services',
      link: '/services',
      icon: <ShoppingBag size={22} />,
    },
    {
      num: 'Mode 02',
      title: 'Post a Project',
      desc: 'Custom, complex or uncertain scope. A structured technical brief becomes a statement of work, and qualified engineers submit comparable proposals.',
      example: '“Complete structural design for a 5-storey commercial building.”',
      action: 'Post a project',
      link: '/post-project',
      icon: <Send size={22} />,
    },
    {
      num: 'Mode 03',
      title: 'Find an Engineer',
      desc: 'Search directly on capability — discipline, specialisation, software, standard, jurisdiction, licence, availability and verified experience.',
      example: '“ETABS structural engineer, IS 456, India, 8+ years, on-site.”',
      action: 'Search engineers',
      link: '/services',
      icon: <Search size={22} />,
    },
    {
      num: 'Mode 04',
      title: 'Hire a Team or Firm',
      desc: 'Multidisciplinary projects and larger contracts. Hire one firm, several specialists, or have the required disciplines mapped and a team assembled.',
      example: '“Factory design: civil, structural, MEP, process, fire and automation.”',
      action: 'Build a team',
      link: '/firms-teams',
      icon: <Users2 size={22} />,
    },
  ]

  return (
    <section className="emp-modes-section">
      <div className="container-wide">
        <header className="emp-section-head">
          <span className="emp-eyebrow">Four ways to work</span>
          <h2 className="emp-section-title">
            However your engineering work is shaped, there is a route for it
          </h2>
          <p className="emp-section-desc">
            A tiny CAD correction and a multidisciplinary industrial programme are not the same transaction. The platform does not pretend they are.
          </p>
        </header>

        <div className="emp-modes-grid">
          {modes.map((mode, idx) => (
            <Link key={idx} to={mode.link} className="emp-mode-card">
              <div className="emp-mode-top">
                <span className="emp-mode-num">{mode.num}</span>
                <span className="emp-mode-icon">{mode.icon}</span>
              </div>

              <h3 className="emp-mode-title">{mode.title}</h3>
              <p className="emp-mode-desc">{mode.desc}</p>

              <div className="emp-mode-example">{mode.example}</div>

              <span className="emp-mode-cta">
                <span>{mode.action}</span>
                <ArrowRight size={15} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
