import { Link } from 'react-router-dom'
import { GraduationCap, ArrowRight, Award, CheckCircle2, Briefcase, FileCheck, Users, Sparkles } from 'lucide-react'

export default function InternsSection() {
  const tracks = [
    {
      discipline: 'Civil & Structural',
      title: 'Structural Modelling & CAD/BIM Trainee',
      mentor: 'Vance Structural Partners',
      tools: ['AutoCAD', 'Revit', 'STAAD.Pro', 'ETABS'],
      stipend: '$600 – $1,000 / mo',
      duration: '3 – 6 Months',
      type: 'Remote / Hybrid',
      skills: ['RC Detailing', 'Connection Modelling', 'Quantity Takeoff']
    },
    {
      discipline: 'Mechanical & Thermal',
      title: 'FEA / CFD Simulation & Product Design Intern',
      mentor: 'Kestrel Mechanical Studio',
      tools: ['ANSYS Mechanical', 'SolidWorks', 'Fluent'],
      stipend: '$700 – $1,200 / mo',
      duration: '4 – 6 Months',
      type: 'Remote',
      skills: ['Static Stress FEA', 'Meshing convergence', 'Thermal dissipation']
    },
    {
      discipline: 'Electrical & Electronics',
      title: 'Embedded Firmware & PCB Layout Intern',
      mentor: 'Voltcore Engineering Group',
      tools: ['Altium Designer', 'C/C++', 'STM32', 'KiCad'],
      stipend: '$650 – $1,100 / mo',
      duration: '3 – 6 Months',
      type: 'Remote',
      skills: ['Schematic Capture', 'Microcontroller Drivers', 'Lab Testing']
    },
    {
      discipline: 'Chemical & Process',
      title: 'Process Simulation & P&ID Trainee Engineer',
      mentor: 'Helix Process Partners',
      tools: ['Aspen HYSYS', 'AutoCAD P&ID', 'Excel VBA'],
      stipend: '$750 – $1,250 / mo',
      duration: '6 Months',
      type: 'Remote',
      skills: ['Heat & Mass Balances', 'Line Sizing', 'PSV Datasheets']
    }
  ]

  return (
    <section className="emp-section" style={{ background: '#ffffff', borderTop: '1px solid #d9e2ec', borderBottom: '1px solid #d9e2ec' }}>
      <div className="container-wide">
        {/* Section Header with Red Heading */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--navy)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
              <GraduationCap size={16} color="var(--red)" />
              <span>Future Engineering Talent</span>
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 1.8rem + 1.5vw, 2.8rem)', fontWeight: 800, color: 'var(--red)', letterSpacing: '-0.02em', margin: 0 }}>
              Engineering Internships &amp; Graduate Trainees
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--navy)', opacity: 0.85, marginTop: '0.5rem', maxWidth: '680px', lineHeight: 1.6 }}>
              Connect aspiring junior engineers and accredited university graduates with licensed chartered engineering firms for verified mentorship, real projects, and industry career pathways.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link to="/signup" className="emp-btn emp-btn-primary emp-btn-md">
              <span>Apply as Intern</span>
              <ArrowRight size={15} />
            </Link>
            <Link to="/post-project" className="emp-btn emp-btn-secondary emp-btn-md">
              <span>Hire an Intern</span>
            </Link>
          </div>
        </div>

        {/* Tracks Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
          {tracks.map((track, i) => (
            <div
              key={i}
              className="emp-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid #d9e2ec',
                background: '#ffffff',
                transition: 'border-color 0.15s ease, box-shadow 0.15s ease'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--red)', letterSpacing: '0.05em' }}>
                    {track.discipline}
                  </span>
                  <span className="emp-chip" style={{ fontSize: '0.7rem', padding: '1px 8px' }}>
                    {track.type}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.35, marginBottom: '0.5rem' }}>
                  {track.title}
                </h3>

                <p style={{ fontSize: '0.82rem', color: 'var(--navy)', opacity: 0.8, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Briefcase size={14} color="var(--red)" />
                  <span>Mentored by <strong>{track.mentor}</strong></span>
                </p>

                {/* Tools */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
                  {track.tools.map(tool => (
                    <span key={tool} className="emp-chip" style={{ fontSize: '0.72rem', padding: '2px 7px' }}>
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Key Details */}
                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '0.75rem', marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: 'var(--navy)', opacity: 0.7, textTransform: 'uppercase', display: 'block' }}>Stipend</span>
                    <strong style={{ fontSize: '0.85rem', color: 'var(--navy)' }}>{track.stipend}</strong>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.7rem', color: 'var(--navy)', opacity: 0.7, textTransform: 'uppercase', display: 'block' }}>Duration</span>
                    <strong style={{ fontSize: '0.85rem', color: 'var(--navy)' }}>{track.duration}</strong>
                  </div>
                </div>
              </div>

              <Link
                to="/signup"
                className="emp-btn emp-btn-secondary emp-btn-md"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>View Track &amp; Apply</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        {/* Benefits Strip */}
        <div
          style={{
            background: 'var(--navy)',
            color: '#ffffff',
            padding: '1.75rem 2rem',
            borderLeft: '4px solid var(--red)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem'
          }}
        >
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
            <Award size={22} color="var(--red)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ fontSize: '0.92rem', display: 'block', color: '#ffffff', marginBottom: '0.2rem' }}>Verified Experience Certificate</strong>
              <span style={{ fontSize: '0.78rem', opacity: 0.85 }}>Auditable logbook hours signed by Chartered/Professional Engineers.</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
            <FileCheck size={22} color="var(--red)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ fontSize: '0.92rem', display: 'block', color: '#ffffff', marginBottom: '0.2rem' }}>Real Client Projects</strong>
              <span style={{ fontSize: '0.78rem', opacity: 0.85 }}>Direct contribution to active calculations, drawings, and simulations.</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
            <Users size={22} color="var(--red)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ fontSize: '0.92rem', display: 'block', color: '#ffffff', marginBottom: '0.2rem' }}>Direct Firm Placement</strong>
              <span style={{ fontSize: '0.78rem', opacity: 0.85 }}>High-performing trainees transition into full-time junior engineer roles.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

