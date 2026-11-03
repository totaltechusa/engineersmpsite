import { CheckCircle2 } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      num: 1,
      title: 'Write a brief',
      desc: 'Discipline, code, location, files, deliverables and who owns the IP.',
      right: (
        <div className="hiw-card">
          <div className="hiw-row">
            <span className="hiw-label">Discipline</span>
            <span className="hiw-val">Structural steel</span>
          </div>
          <div className="hiw-row">
            <span className="hiw-label">Code</span>
            <span className="hiw-val">EN 1993</span>
          </div>
        </div>
      ),
    },
    {
      num: 2,
      title: 'Get matched',
      desc: "Each match shows what fits your brief, and what doesn't.",
      right: (
        <div className="hiw-card">
          <div className="hiw-row">
            <div className="hiw-user">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80"
                alt="Sofia Marin"
                className="hiw-avatar"
              />
              <span className="hiw-name">Sofia Marin</span>
            </div>
            <span className="hiw-badge-score">5 of 5</span>
          </div>
          <div className="hiw-row">
            <div className="hiw-user">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                alt="Marek Novak"
                className="hiw-avatar"
              />
              <span className="hiw-name">Marek Novak</span>
            </div>
            <span className="hiw-badge-score muted">4 of 5</span>
          </div>
        </div>
      ),
    },
    {
      num: 3,
      title: 'Compare proposals',
      desc: 'Price, timeline and method, side by side in one table.',
      right: (
        <div className="hiw-card">
          <div className="hiw-row">
            <span className="hiw-proposal">Sofia M. · 5 weeks</span>
            <span className="hiw-price">$6,200</span>
          </div>
          <div className="hiw-row">
            <span className="hiw-proposal">Marek N. · 7 weeks</span>
            <span className="hiw-price muted">$5,800</span>
          </div>
        </div>
      ),
    },
    {
      num: 4,
      title: 'Work in a workroom',
      desc: 'Milestones funded in escrow. Every file and change tracked.',
      right: (
        <div className="hiw-card">
          <div className="hiw-row">
            <div className="hiw-file">
              <span className="file-pill pdf">PDF</span>
              <span className="file-name">Calculation report</span>
            </div>
            <span className="hiw-rev">Rev B</span>
          </div>
          <div className="hiw-row">
            <div className="hiw-file">
              <span className="file-pill dwg">DWG</span>
              <span className="file-name">Portal frame GA</span>
            </div>
            <span className="hiw-rev">Rev C</span>
          </div>
        </div>
      ),
    },
    {
      num: 5,
      isFilled: true,
      title: 'Accept and pay',
      desc: 'Money is released only when you accept the work.',
      right: (
        <div className="hiw-card">
          <div className="hiw-row single">
            <div className="hiw-milestone">
              <CheckCircle2 size={16} className="milestone-check" />
              <span>Milestone 3 accepted</span>
            </div>
            <span className="hiw-released">$4,600 released</span>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section className="how-it-works-section" id="how">
      <div className="how-it-works-inner">
        {/* Header */}
        <div className="how-it-works-header">
          <div>
            <div className="section-eyebrow">
              <span className="section-eyebrow-num">05</span>
              <span className="section-eyebrow-text">How it works</span>
              <span className="section-eyebrow-line" />
            </div>
            <h2 className="how-it-works-headline">
              From brief to approved drawings in five steps
            </h2>
          </div>
          <p className="how-it-works-subtitle">
            Every contract follows the same path, so you always know where your project stands.
          </p>
        </div>

        {/* 5 Steps timeline */}
        <div className="hiw-steps-timeline">
          <div className="hiw-connecting-line" />

          {steps.map(step => (
            <div className="hiw-step-row" key={step.num}>
              {/* Number Circle */}
              <div className={`hiw-step-circle${step.isFilled ? ' filled' : ''}`}>
                {step.num}
              </div>

              {/* Step info */}
              <div className="hiw-step-info">
                <h3 className="hiw-step-title">{step.title}</h3>
                <p className="hiw-step-desc">{step.desc}</p>
              </div>

              {/* Right preview card */}
              <div className="hiw-step-right">{step.right}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
