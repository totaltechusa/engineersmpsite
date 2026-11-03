import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Check,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  Save,
  ShieldCheck,
  FileCheck2,
  Lock,
  Layers,
  Sparkles,
} from 'lucide-react'

export default function PostProjectPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedTypes, setSelectedTypes] = useState(['Fixed-price project'])
  const [formData, setFormData] = useState({
    title: '',
    discipline: 'Structural Engineering',
    assetIndustry: 'Industrial & Manufacturing',
    location: '',
    codeStandard: 'IS 456 / AISC 360',
    inputs: '',
    deliverables: '',
    commercialModel: 'Milestone escrow funding',
    budget: '$5,000 - $10,000',
    ndaRequired: true,
    timeline: '1-2 months',
  })
  const [isSaved, setIsSaved] = useState(false)

  const steps = [
    { num: 1, label: 'Project type', hint: 'What kind of work' },
    { num: 2, label: 'Disciplines', hint: 'Who you need' },
    { num: 3, label: 'Asset & industry', hint: 'What it is' },
    { num: 4, label: 'Site & jurisdiction', hint: 'Where and which code' },
    { num: 5, label: 'Inputs', hint: 'What you can provide' },
    { num: 6, label: 'Deliverables', hint: 'What you need back' },
    { num: 7, label: 'Commercial', hint: 'Budget and model' },
    { num: 8, label: 'Confidentiality', hint: 'NDA and IP' },
    { num: 9, label: 'Timeline', hint: 'When' },
    { num: 10, label: 'Review', hint: 'Your statement of work' },
  ]

  const projectTypes = [
    'Fixed-price micro task',
    'Fixed-price project',
    'Milestone engineering project',
    'Hourly / time-based consulting',
    'Retainer engineering support',
    'On-demand expert call',
    'Technical review',
    'Site visit',
    'Inspection assignment',
    'Engineering staffing',
    'Dedicated engineer',
    'Part-time engineer',
    'Long-term outsourced engineering team',
    'Multidisciplinary project',
    'Design competition / challenge',
    'RFQ / tender request',
    'Supplier / vendor engineering support',
    'Engineering procurement support',
    'Commissioning assignment',
    'Emergency troubleshooting request',
    'Confidential / NDA project',
    'Enterprise managed project',
    'Research collaboration',
    'Prototype / product development project',
    'Field service engineering project',
  ]

  const toggleType = type => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(t => t !== type))
    } else {
      setSelectedTypes([...selectedTypes, type])
    }
  }

  const progressPercent = Math.round((currentStep / 10) * 100)

  return (
    <div style={{ backgroundColor: 'var(--bg-page)', minHeight: '100vh', paddingBottom: '5rem' }}>
      {/* Top Breadcrumb Header Bar */}
      <div style={{
        background: 'var(--navy)',
        borderBottom: '3px solid var(--red)',
        padding: '2.5rem 0 2rem 0',
        color: 'var(--white)',
      }}>
        <div className="container-wide">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontWeight: 700,
                color: 'var(--white)',
                display: 'block',
                marginBottom: '0.35rem',
              }}>
                Scoped Technical Intake
              </span>
              <h1 style={{ fontSize: '2.1rem', fontWeight: 800, margin: 0, letterSpacing: '-0.02em', color: 'var(--white)' }}>
                Post an Engineering Project
              </h1>
            </div>

            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <div style={{ borderLeft: '2px solid var(--red)', paddingLeft: '0.75rem' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--white)', display: 'block', lineHeight: 1 }}>SOW</span>
                <span style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.8)' }}>Structured technical brief</span>
              </div>
              <div style={{ borderLeft: '2px solid var(--red)', paddingLeft: '0.75rem' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--white)', display: 'block', lineHeight: 1 }}>Escrow</span>
                <span style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.8)' }}>Milestone-funded payment</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Wizard Layout */}
      <div className="container-wide" style={{ marginTop: '2.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(240px, 280px) 1fr',
          gap: '2.5rem',
          alignItems: 'start',
        }}>
          {/* LEFT: 10-Step Sidebar */}
          <aside style={{
            background: 'var(--brand-white)',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius)',
            padding: '1rem 0.75rem',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              {steps.map(s => {
                const isActive = s.num === currentStep
                const isCompleted = s.num < currentStep

                return (
                  <button
                    key={s.num}
                    type="button"
                    onClick={() => setCurrentStep(s.num)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: 'var(--radius)',
                      border: 'none',
                      background: isActive ? 'var(--bg-alt)' : 'transparent',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'background 0.15s ease',
                    }}
                  >
                    {/* Circle Icon Indicator */}
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: isActive ? 'var(--red)' : isCompleted ? 'var(--navy)' : 'var(--white)',
                      border: isActive ? 'none' : isCompleted ? 'none' : '1px solid var(--border-light)',
                      color: isActive || isCompleted ? 'var(--white)' : 'var(--navy)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      flexShrink: 0,
                    }}>
                      {isCompleted ? <Check size={14} /> : s.num}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{
                        fontSize: '0.88rem',
                        fontWeight: isActive ? 700 : 600,
                        color: 'var(--navy)',
                        lineHeight: 1.2,
                      }}>
                        {s.label}
                      </span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        {s.hint}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>
          </aside>

          {/* RIGHT: Wizard Content Card */}
          <div style={{
            background: 'var(--brand-white)',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius)',
            padding: '2rem 2.5rem',
          }}>
            {/* Step & Progress Counter Bar */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--navy)' }}>
                  Step {currentStep} of 10 — {steps[currentStep - 1].label}
                </span>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  {progressPercent}% complete
                </span>
              </div>
              <div style={{ width: '100%', height: '4px', backgroundColor: 'var(--border-light)', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: `${progressPercent}%`, height: '100%', backgroundColor: 'var(--red)', transition: 'width 0.25s ease' }} />
              </div>
            </div>

            {/* STEP 1: PROJECT TYPE (Exact Grid of 25 Options from engineersmp.com) */}
            {currentStep === 1 && (
              <div>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
                  What kind of engineering work is this?
                </h2>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1.75rem' }}>
                  This sets the shape of everything that follows. A design job, a review and an inspection need very different briefs — and very different engineers.
                </p>

                {/* 5-Column Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                  gap: '0.85rem',
                  marginBottom: '2.5rem',
                }}>
                  {projectTypes.map(t => {
                    const isChecked = selectedTypes.includes(t)
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() => toggleType(t)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.65rem',
                          padding: '0.85rem 1rem',
                          borderRadius: 'var(--radius)',
                          border: isChecked ? '1px solid var(--red)' : '1px solid var(--border-light)',
                          backgroundColor: isChecked ? 'var(--bg-alt)' : 'var(--brand-white)',
                          textAlign: 'left',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                          minHeight: '62px',
                        }}
                      >
                        {/* Checkbox Box */}
                        <div style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '4px',
                          border: isChecked ? 'none' : '1px solid var(--navy)',
                          backgroundColor: isChecked ? 'var(--red)' : 'transparent',
                          color: 'var(--white)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}>
                          {isChecked && <Check size={12} strokeWidth={3} />}
                        </div>
                        <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--navy)', lineHeight: 1.3 }}>
                          {t}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* STEP 2: DISCIPLINES */}
            {currentStep === 2 && (
              <div>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.5rem' }}>
                  Which engineering disciplines do you need?
                </h2>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                  Select the primary technical expertise and software requirements needed for this scope.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                  <label style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontWeight: 600, color: 'var(--navy)', fontSize: '0.9rem' }}>
                    Primary Discipline
                    <select
                      className="form-input"
                      value={formData.discipline}
                      onChange={e => setFormData({ ...formData, discipline: e.target.value })}
                      style={{ padding: '0.75rem', borderRadius: 'var(--radius)', border: '1px solid var(--border-light)', color: 'var(--navy)' }}
                    >
                      <option>Structural Engineering</option>
                      <option>Mechanical &amp; Machine Design</option>
                      <option>Electrical &amp; Power Systems</option>
                      <option>Civil &amp; Infrastructure</option>
                      <option>Chemical &amp; Process Piping</option>
                      <option>Aerospace &amp; Propulsion</option>
                      <option>Biomedical Engineering</option>
                    </select>
                  </label>
                  <label style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontWeight: 600, color: 'var(--navy)', fontSize: '0.9rem' }}>
                    Project Title
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. 5-Storey Commercial Steel Frame Structural Calculation Package"
                      value={formData.title}
                      onChange={e => setFormData({ ...formData, title: e.target.value })}
                      style={{ padding: '0.75rem', borderRadius: 'var(--radius)', border: '1px solid var(--border-light)', color: 'var(--navy)' }}
                    />
                  </label>
                </div>
              </div>
            )}

            {/* STEP 3 - 9 (Clean Form Stages) */}
            {currentStep >= 3 && currentStep <= 9 && (
              <div>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.5rem' }}>
                  {steps[currentStep - 1].label}
                </h2>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                  Specify the governing standards, jurisdiction codes, inputs and milestone deliverables.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                  <label style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontWeight: 600, color: 'var(--navy)', fontSize: '0.9rem' }}>
                    Technical Requirements &amp; Codes
                    <textarea
                      rows={5}
                      className="form-input"
                      placeholder="Provide specific design standard (e.g. IS 456, ACI 318, AISC 360, Eurocode) and deliverable expectations..."
                      value={formData.inputs}
                      onChange={e => setFormData({ ...formData, inputs: e.target.value })}
                      style={{ padding: '0.75rem', borderRadius: 'var(--radius)', border: '1px solid var(--border-light)', color: 'var(--navy)' }}
                    />
                  </label>
                </div>
              </div>
            )}

            {/* STEP 10: STATEMENT OF WORK REVIEW */}
            {currentStep === 10 && (
              <div>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.5rem' }}>
                  Review your Statement of Work (SOW)
                </h2>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                  Confirm your project brief before publishing to verified engineers.
                </p>
                <div style={{ background: 'var(--bg-alt)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius)', padding: '1.5rem', marginBottom: '2rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Project Type</span>
                      <p style={{ margin: '0.2rem 0', fontWeight: 700, color: 'var(--navy)' }}>{selectedTypes.join(', ')}</p>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Discipline</span>
                      <p style={{ margin: '0.2rem 0', fontWeight: 700, color: 'var(--navy)' }}>{formData.discipline}</p>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Escrow Funding</span>
                      <p style={{ margin: '0.2rem 0', fontWeight: 700, color: 'var(--navy)' }}>100% Protected Milestones</p>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>NDA &amp; Confidentiality</span>
                      <p style={{ margin: '0.2rem 0', fontWeight: 700, color: 'var(--navy)' }}>Platform Mutual NDA Active</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Wizard Navigation Footer Actions */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '1px solid var(--border-light)',
              paddingTop: '1.5rem',
            }}>
              <div>
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="emp-btn emp-btn-outline-navy emp-btn-md"
                  >
                    <ArrowLeft size={16} />
                    <span>Back</span>
                  </button>
                )}
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <button
                  type="button"
                  onClick={() => setIsSaved(true)}
                  className="emp-btn emp-btn-outline-navy emp-btn-md"
                >
                  <Save size={16} />
                  <span>{isSaved ? 'Draft Saved ✓' : 'Save draft'}</span>
                </button>

                {currentStep < 10 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep + 1)}
                    className="emp-btn emp-btn-primary emp-btn-md"
                  >
                    <span>Continue</span>
                    <ArrowRight size={16} />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => alert('Project Published! Verified engineers matching your discipline will submit milestone proposals.')}
                    className="emp-btn emp-btn-primary emp-btn-md"
                  >
                    <span>Publish Statement of Work</span>
                    <ArrowRight size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
