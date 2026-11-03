import { Link } from 'react-router-dom'
import { MapPin, ShieldCheck, ArrowRight } from 'lucide-react'

export default function VerifiedEngineers() {
  const engineers = [
    {
      name: 'Ananya Watanabe',
      role: 'Surface Engineering Specialist · Metallurgical Failure Analysis',
      rate: '$145 / hr',
      exp: '25 yrs exp',
      location: 'Bengaluru, India',
      rating: '5.0',
      reviews: 268,
      specialty: 'Metallurgical Failure Analysis — metallography & additive material qualification',
      projects: 240,
      onTime: '91%',
      repeat: '50%',
      badge: 'Expert vetted',
      badgeColor: 'var(--brand-red)',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&auto=format&fit=crop&q=80',
    },
    {
      name: 'Rohan Reddy',
      role: 'Stormwater Engineer · Climate Adaptation Engineering',
      rate: '$60 / hr',
      exp: '4 yrs exp',
      location: 'Kraków, Poland',
      rating: '5.0',
      reviews: 54,
      specialty: 'Climate Engineering specialist — life cycle assessment & water network modelling',
      projects: 155,
      onTime: '90%',
      repeat: '47%',
      badge: 'Identity verified',
      badgeColor: 'var(--brand-navy)',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80',
    },
    {
      name: 'Fatima Ortega',
      role: 'Safety Engineer · Supply Chain & Fire Protection',
      rate: '$105 / hr',
      exp: '20 yrs exp',
      location: 'Dubai, UAE',
      rating: '4.9',
      reviews: 420,
      specialty: 'Supply Chain Engineering — reliability & RCM & industrial fire protection design',
      projects: 631,
      onTime: '95%',
      repeat: '75%',
      badge: 'License verified',
      badgeColor: 'var(--brand-navy)',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=160&auto=format&fit=crop&q=80',
    },
    {
      name: 'Mei-Ling Farouk',
      role: 'Automotive Body Engineer · Tooling & Die Engineering',
      rate: '$65 / hr',
      exp: '10 yrs exp',
      location: 'Barcelona, Spain',
      rating: '4.9',
      reviews: 409,
      specialty: 'Die Engineering specialist — tolerance & GD&T & jig fixture design',
      projects: 432,
      onTime: '93%',
      repeat: '43%',
      badge: 'Identity verified',
      badgeColor: 'var(--brand-navy)',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80',
    },
  ]

  return (
    <section style={{
      padding: '5rem 1.5rem',
      backgroundColor: 'var(--bg-alt)',
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
              Verified engineers
            </span>
            <h2 style={{
              fontSize: '2.4rem',
              fontWeight: 800,
              color: 'var(--brand-navy)',
              lineHeight: 1.2,
            }}>
              Engineers, with the evidence attached
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              Credentials, software, standards, industries, delivery mode and completion history — all structured and verifiable.
            </p>
          </div>

          <Link
            to="/services"
            className="emp-btn emp-btn-outline-navy emp-btn-md"
            style={{ fontWeight: 600 }}
          >
            <span>Find an engineer</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '1.5rem',
        }}>
          {engineers.map((e, idx) => (
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <img
                    src={e.image}
                    alt={e.name}
                    style={{ width: '54px', height: '54px', borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--border-light)' }}
                  />
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--brand-navy)', margin: 0 }}>
                        {e.name}
                      </h3>
                    </div>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: e.badgeColor,
                      backgroundColor: 'var(--bg-alt)',
                      border: '1px solid var(--border-light)',
                      padding: '0.15rem 0.5rem',
                      borderRadius: 'var(--radius)',
                      marginTop: '0.25rem',
                    }}>
                      <ShieldCheck size={12} />
                      <span>{e.badge}</span>
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem' }}>
                  <strong style={{ color: 'var(--brand-navy)' }}>{e.rate}</strong>
                  <span>{e.exp}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                    <MapPin size={12} /> {e.location.split(',')[0]}
                  </span>
                </div>

                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.45, marginBottom: '1.25rem' }}>
                  {e.specialty}
                </p>

                {/* Key Metrics */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.4rem', backgroundColor: 'var(--bg-alt)', border: '1px solid var(--border-light)', padding: '0.6rem', borderRadius: 'var(--radius)', textAlign: 'center', marginBottom: '1rem' }}>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block' }}>Projects</span>
                    <strong style={{ fontSize: '0.85rem', color: 'var(--brand-navy)' }}>{e.projects}</strong>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block' }}>On-time</span>
                    <strong style={{ fontSize: '0.85rem', color: 'var(--brand-red)' }}>{e.onTime}</strong>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block' }}>Repeat</span>
                    <strong style={{ fontSize: '0.85rem', color: 'var(--brand-navy)' }}>{e.repeat}</strong>
                  </div>
                </div>
              </div>

              <Link
                to="/services"
                className="emp-btn emp-btn-outline-navy"
                style={{ width: '100%', textAlign: 'center', padding: '0.5rem', fontSize: '0.85rem', fontWeight: 600 }}
              >
                View Profile &amp; Availability
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
