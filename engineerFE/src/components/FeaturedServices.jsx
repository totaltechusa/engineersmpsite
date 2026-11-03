import { Link } from 'react-router-dom'
import { Star, ArrowRight } from 'lucide-react'

export default function FeaturedServices() {
  const services = [
    {
      title: 'Propulsion Engineering — Simulation & analysis study',
      discipline: 'Propulsion Engineering',
      duration: '3 Days',
      type: 'Remote',
      tag: 'Analysis',
      rating: '5.0',
      reviews: 24,
      deliverables: '4 deliverables',
      author: 'Mei-Ling Iyer',
      price: '$770',
    },
    {
      title: 'Apparel Manufacturing — Field inspection & condition assessment',
      discipline: 'Manufacturing Engineering',
      duration: '2 Days',
      type: 'Remote',
      tag: 'Inspection',
      rating: '5.0',
      reviews: 166,
      deliverables: '4 deliverables',
      author: 'Kenji Iyer',
      price: '$570',
    },
    {
      title: 'Aircraft Structural Engineering — Field inspection & condition assessment',
      discipline: 'Aviation Engineering',
      duration: '3 Days',
      type: 'Remote',
      tag: 'Inspection',
      rating: '5.0',
      reviews: 51,
      deliverables: '4 deliverables',
      author: 'Divya Dlamini',
      price: '$1,000',
    },
    {
      title: 'Offshore Wind Engineering — Design package with full calculation report',
      discipline: 'Renewable Energy',
      duration: '3 Days',
      type: 'On-site available',
      tag: 'Design',
      rating: '5.0',
      reviews: 64,
      deliverables: '4 deliverables',
      author: 'Mei-Ling Rahman',
      price: '$1,485',
    },
    {
      title: 'Quantity takeoff, BOQ & structural cost estimation',
      discipline: 'Civil & Cost Estimation',
      duration: '2 Days',
      type: 'Remote',
      tag: 'Documentation',
      rating: '5.0',
      reviews: 176,
      deliverables: '4 deliverables',
      author: 'Priya Haddad',
      price: '$920',
    },
    {
      title: 'P&ID development from PFD to IFC issue package',
      discipline: 'Gas Processing & Piping',
      duration: '3 Days',
      type: 'Remote',
      tag: 'Documentation',
      rating: '4.9',
      reviews: 93,
      deliverables: '4 deliverables',
      author: 'Jonas Yilmaz',
      price: '$1,100',
    },
  ]

  return (
    <section style={{
      padding: '5rem 1.5rem',
      backgroundColor: 'var(--brand-white)',
      borderBottom: '1px solid var(--border-light)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
          <div>
            <span style={{
              fontSize: '0.82rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--brand-red)',
              display: 'block',
              marginBottom: '0.5rem',
            }}>
              Popular Services
            </span>
            <h2 style={{
              fontSize: '2.4rem',
              fontWeight: 800,
              color: 'var(--brand-navy)',
              lineHeight: 1.2,
            }}>
              Clearly scoped engineering services
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              Fixed scope, stated deliverables, named software and standards, and an explicit list of what is not included.
            </p>
          </div>

          <Link
            to="/services"
            className="emp-btn emp-btn-outline-navy emp-btn-md"
            style={{ fontWeight: 600 }}
          >
            <span>Browse all services</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Services Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}>
          {services.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--brand-white)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius)',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      backgroundColor: 'var(--bg-alt)',
                      color: 'var(--brand-navy)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: 'var(--radius)',
                    }}>
                      {item.duration}
                    </span>
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      backgroundColor: 'var(--bg-alt)',
                      color: 'var(--brand-navy)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: 'var(--radius)',
                    }}>
                      {item.type}
                    </span>
                  </div>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--brand-red)',
                    backgroundColor: 'var(--bg-alt)',
                    border: '1px solid var(--border-light)',
                    padding: '0.2rem 0.55rem',
                    borderRadius: 'var(--radius)',
                  }}>
                    {item.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--brand-navy)', lineHeight: 1.4, marginBottom: '0.5rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  {item.discipline}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.82rem', color: 'var(--brand-navy)', marginBottom: '1.25rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 700, color: 'var(--brand-red)' }}>
                    <Star size={14} fill="var(--brand-red)" />
                    <span>{item.rating} ({item.reviews})</span>
                  </span>
                  <span>·</span>
                  <span>{item.deliverables}</span>
                </div>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTop: '1px solid var(--border-light)',
                paddingTop: '1rem',
              }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--brand-navy)' }}>
                  {item.author}
                </span>
                <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--brand-red)' }}>
                  From {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
