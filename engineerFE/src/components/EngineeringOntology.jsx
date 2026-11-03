import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Building2,
  Cog,
  Zap,
  Cpu,
  FlaskConical,
  Plane,
  Anchor,
  Flame,
  TreePine,
  HeartPulse,
  Pickaxe,
  Sparkles,
  ArrowRight,
} from 'lucide-react'

export default function EngineeringOntology() {
  const families = [
    {
      title: 'Built Environment, Civil & Infrastructure',
      count: '51 disciplines',
      desc: 'Engineering of buildings, structures, transport networks, water systems and public infrastructure.',
      examples: ['Civil', 'Structural', 'Construction', '+ 48 more'],
      icon: <Building2 size={20} color="var(--brand-red)" />,
    },
    {
      title: 'Mechanical, Thermal, Manufacturing & Product',
      count: '67 disciplines',
      desc: 'Machines, thermal and fluid systems, vehicles, tooling and physical production processes.',
      examples: ['Mechanical', 'Engineering Mechanics', 'Machine Design', '+ 64 more'],
      icon: <Cog size={20} color="var(--brand-red)" />,
    },
    {
      title: 'Electrical, Electronic, Power & Instrumentation',
      count: '60 disciplines',
      desc: 'Generation, transmission, distribution, electronics, and precision instrumentation.',
      examples: ['Electrical', 'Power Systems', 'Power Generation', '+ 57 more'],
      icon: <Zap size={20} color="var(--brand-red)" />,
    },
    {
      title: 'Computing, Software, Digital & AI Systems',
      count: '66 disciplines',
      desc: 'Software, platform, data and AI engineering, industrial IoT and digital twins.',
      examples: ['Computer', 'Systems Architecture', 'Edge AI', '+ 63 more'],
      icon: <Cpu size={20} color="var(--brand-red)" />,
    },
    {
      title: 'Chemical, Process & Industrial Plants',
      count: '40 disciplines',
      desc: 'Design, safety and optimization of chemical, petrochemical and bioprocess plants.',
      examples: ['Chemical', 'Process Safety', 'Petrochemical', '+ 37 more'],
      icon: <FlaskConical size={20} color="var(--brand-red)" />,
    },
    {
      title: 'Aerospace, Space & Defense Systems',
      count: '33 disciplines',
      desc: 'Aircraft, satellites, spacecraft, propulsion, defense and autonomous flight systems.',
      examples: ['Aerospace', 'Aeronautical', 'Satellite Systems', '+ 30 more'],
      icon: <Plane size={20} color="var(--brand-red)" />,
    },
    {
      title: 'Marine, Naval & Ocean Engineering',
      count: '22 disciplines',
      desc: 'Ships, offshore platforms, subsea systems, ports and ocean operating environments.',
      examples: ['Naval Architecture', 'Marine Systems', 'Ship Design', '+ 19 more'],
      icon: <Anchor size={20} color="var(--brand-red)" />,
    },
    {
      title: 'Energy, Nuclear & Decarbonization',
      count: '35 disciplines',
      desc: 'Renewables, solar PV, wind, hydrogen, battery/EV and grid decarbonization.',
      examples: ['Renewable Energy', 'Solar PV', 'Energy Systems', '+ 32 more'],
      icon: <Flame size={20} color="var(--brand-red)" />,
    },
    {
      title: 'Environmental & Water Quality Engineering',
      count: '29 disciplines',
      desc: 'Air pollution control, water treatment, wastewater, and ecological restoration.',
      examples: ['Water Quality', 'Wastewater', 'Air Pollution', '+ 26 more'],
      icon: <TreePine size={20} color="var(--brand-red)" />,
    },
    {
      title: 'Biomedical & Medical Device Systems',
      count: '29 disciplines',
      desc: 'Medical devices, biological systems, biomechanics and human-centered technology.',
      examples: ['Biomedical', 'Biomaterials', 'Bioinstrumentation', '+ 26 more'],
      icon: <HeartPulse size={20} color="var(--brand-red)" />,
    },
    {
      title: 'Mining, Geological & Earth Resources',
      count: '22 disciplines',
      desc: 'Mineral extraction, mineral processing, groundwater mechanics and earth engineering.',
      examples: ['Mining', 'Mineral Processing', 'Geological', '+ 19 more'],
      icon: <Pickaxe size={20} color="var(--brand-red)" />,
    },
    {
      title: 'Cross-Disciplinary "Future Engineer" Roles',
      count: '57 disciplines',
      desc: 'Emerging hybrid roles: Digital Twins, Industry 4.0, Smart Manufacturing, and Industrial IoT.',
      examples: ['Digital Twin', 'Smart Manufacturing', 'Industrial IoT', '+ 54 more'],
      icon: <Sparkles size={20} color="var(--brand-red)" />,
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
              Engineering disciplines
            </span>
            <h2 style={{
              fontSize: '2.4rem',
              fontWeight: 800,
              color: 'var(--brand-navy)',
              lineHeight: 1.2,
            }}>
              Every engineering discipline — and room for ones that do not exist yet
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginTop: '0.75rem', maxWidth: '640px' }}>
              620 disciplines across 16 families, structured as a versioned ontology.
            </p>
          </div>

          <Link
            to="/services"
            className="emp-btn emp-btn-outline-navy emp-btn-md"
            style={{ fontWeight: 600 }}
          >
            <span>Browse all 620 disciplines</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* 12 Families Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '1.25rem',
        }}>
          {families.map((f, idx) => (
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
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius)',
                    backgroundColor: 'var(--brand-white)',
                    border: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {f.icon}
                  </div>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--brand-navy)',
                    backgroundColor: 'var(--bg-alt)',
                    padding: '0.2rem 0.55rem',
                    borderRadius: 'var(--radius)',
                  }}>
                    {f.count}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--brand-navy)', marginBottom: '0.45rem', lineHeight: 1.3 }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.45, marginBottom: '1rem' }}>
                  {f.desc}
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', borderTop: '1px solid var(--border-light)', paddingTop: '0.75rem' }}>
                {f.examples.map((ex, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      backgroundColor: 'var(--bg-alt)',
                      color: ex.includes('+') ? 'var(--brand-red)' : 'var(--brand-navy)',
                      padding: '0.15rem 0.45rem',
                      borderRadius: 'var(--radius)',
                      border: '1px solid var(--border-light)',
                    }}
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
