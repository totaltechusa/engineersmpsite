import React from 'react'
import { Check } from 'lucide-react'

export default function ForEngineers() {
  const benefits = [
    'Free profile, with free identity and degree checks',
    'Projects matched to your codes, software and licences',
    'Every milestone funded before you start',
    '10% fee on earnings, falling to 5% on large contracts',
  ]

  return (
    <section className="for-engineers-section" id="for-engineers">
      <div className="for-engineers-inner">
        <div className="for-engineers-card">
          {/* Left CAD Illustration & Floating Badges */}
          <div className="for-engineers-visual">
            <div className="cad-grid-bg" />

            {/* Technical Gear CAD Blueprint Vector */}
            <svg
              className="gear-cad-svg"
              viewBox="0 0 500 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Center lines */}
              <line x1="70" y1="210" x2="350" y2="210" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="6 3 2 3" opacity="0.4" />
              <line x1="210" y1="70" x2="210" y2="350" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="6 3 2 3" opacity="0.4" />
              <line x1="380" y1="70" x2="380" y2="280" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="6 3 2 3" opacity="0.4" />

              {/* Large Gear (20T) */}
              <circle cx="210" cy="210" r="110" stroke="#38bdf8" strokeWidth="1.5" opacity="0.75" />
              <circle cx="210" cy="210" r="95" stroke="#38bdf8" strokeWidth="0.8" opacity="0.4" />
              <circle cx="210" cy="210" r="42" stroke="#38bdf8" strokeWidth="1.2" opacity="0.7" />
              <circle cx="210" cy="210" r="20" fill="#091c4d" stroke="#38bdf8" strokeWidth="1.5" />
              {/* Keyway */}
              <rect x="206" y="184" width="8" height="12" fill="#091c4d" stroke="#38bdf8" strokeWidth="1" />

              {/* Large Gear Teeth */}
              {Array.from({ length: 20 }).map((_, i) => {
                const angle = (i * 360) / 20
                return (
                  <g key={`gt-${i}`} transform={`rotate(${angle} 210 210)`}>
                    <path
                      d="M204 95 L202 82 L218 82 L216 95"
                      stroke="#38bdf8"
                      strokeWidth="1.2"
                      fill="none"
                      opacity="0.85"
                    />
                  </g>
                )
              })}

              {/* Small Meshing Pinion Gear (10T) */}
              <circle cx="380" cy="140" r="62" stroke="#38bdf8" strokeWidth="1.5" opacity="0.75" />
              <circle cx="380" cy="140" r="22" fill="#091c4d" stroke="#38bdf8" strokeWidth="1.2" />
              {Array.from({ length: 10 }).map((_, i) => {
                const angle = (i * 360) / 10 + 18
                return (
                  <g key={`st-${i}`} transform={`rotate(${angle} 380 140)`}>
                    <path
                      d="M375 74 L373 63 L387 63 L385 74"
                      stroke="#38bdf8"
                      strokeWidth="1.2"
                      fill="none"
                      opacity="0.85"
                    />
                  </g>
                )
              })}

              {/* Pitch circle tangent dimension line */}
              <line x1="100" y1="340" x2="320" y2="340" stroke="#c11232" strokeWidth="1" opacity="0.6" />
              <line x1="100" y1="335" x2="100" y2="345" stroke="#c11232" strokeWidth="1" opacity="0.6" />
              <line x1="320" y1="335" x2="320" y2="345" stroke="#c11232" strokeWidth="1" opacity="0.6" />
              <text x="145" y="355" fill="#ff4d6d" fontSize="10" fontFamily="monospace" letterSpacing="1" opacity="0.85">
                20T · 10T · m = 1.4 · a = 210
              </text>
            </svg>

            {/* Drawing stamp text in corner */}
            <div className="cad-corner-stamp">DWG MEC-0417 · REV C</div>

            {/* Floating Card 1: Project Match */}
            <div className="fe-float-card fe-float-project">
              <div className="fe-float-header">
                <span className="fe-live-dot" />
                <span className="fe-float-tag">New project matched to you</span>
              </div>
              <p className="fe-float-title">PCB design for a 4–layer LoRaWAN node</p>
              <p className="fe-float-sub">$4,000–6,500 · 7 weeks · Remote</p>
            </div>

            {/* Floating Card 2: Verified Engineer */}
            <div className="fe-float-card fe-float-engineer">
              <div className="fe-eng-avatar">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                  alt="Daniel O."
                />
              </div>
              <div className="fe-eng-info">
                <p className="fe-eng-name">Daniel O.</p>
                <p className="fe-eng-status">Licence verified</p>
              </div>
            </div>

            {/* Floating Card 3: Milestone in Escrow */}
            <div className="fe-float-card fe-float-escrow">
              <div className="fe-escrow-icon">
                <Check size={14} className="text-brand-red" />
              </div>
              <div className="fe-escrow-info">
                <p className="fe-escrow-title">Milestone 2 funded</p>
                <p className="fe-escrow-sub">$2,600 held in escrow</p>
              </div>
            </div>
          </div>

          {/* Right Text & CTA */}
          <div className="for-engineers-content">
            <div className="fe-header-brand-row">
              <div className="section-eyebrow">
                <span className="section-eyebrow-num">08</span>
                <span className="section-eyebrow-text">For engineers</span>
                <span className="section-eyebrow-line" />
              </div>
              <img
                src="/logo-wrench.png"
                alt="engineers - Advanced & Futuristic Engineering"
                className="fe-wrench-brand"
              />
            </div>

            <h2 className="for-engineers-title">
              Get paid for engineering, not for chasing invoices
            </h2>

            <div className="for-engineers-list">
              {benefits.map((b, idx) => (
                <div className="for-engineers-item" key={idx}>
                  <div className="fe-check-icon">
                    <Check size={16} />
                  </div>
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <div className="for-engineers-actions">
              <button className="btn-teal">Create a profile</button>
              <button className="btn-dark-outline">Browse open projects</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
