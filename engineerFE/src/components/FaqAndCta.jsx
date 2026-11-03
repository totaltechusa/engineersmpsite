import React, { useState } from 'react'
import { Plus, Minus, Check } from 'lucide-react'

export default function FaqAndCta() {
  const [openIdx, setOpenIdx] = useState(0)

  const faqs = [
    {
      q: 'How is this different from Upwork or Fiverr?',
      a: 'Only engineers work here, and every job is described by discipline, code, location, deliverables and licence needs. A search for an ETABS engineer working to IS 456 returns people who meet those requirements, not whoever wrote the longest profile.',
    },
    {
      q: 'Can an engineer here stamp my drawings?',
      a: 'Yes, if licensed in your jurisdiction. Stamping is an explicit contract scope item with verified licensing credentials checked against the relevant state or provincial board.',
    },
    {
      q: 'Who owns the drawings and calculations?',
      a: 'You do. All IP, source files (CAD, FEA, BIM, code) and calculation sheets transfer completely to the client upon final milestone acceptance.',
    },
    {
      q: "What if the work isn't right?",
      a: 'All funds are held safely in escrow. If deliverables fail to meet the agreed brief or code compliance, they go back for revision, or you can invoke peer verification before release.',
    },
    {
      q: 'What does it cost?',
      a: 'Posting a project is completely free. We charge a transparent platform fee only when milestones are completed and accepted.',
    },
  ]

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx)
  }

  return (
    <section className="faq-cta-section" id="faq">
      <div className="faq-cta-inner">
        {/* Top: 10 Questions FAQ */}
        <div className="faq-split-layout">
          <div className="faq-left">
            <div className="section-eyebrow">
              <span className="section-eyebrow-num">10</span>
              <span className="section-eyebrow-text">Questions</span>
              <span className="section-eyebrow-line" />
            </div>
            <h2 className="section-title">Before you post your first project</h2>
            <p className="faq-ask-link">
              Still unsure? <a href="#contact" className="text-brand-red">Talk to our team</a>
            </p>
          </div>

          <div className="faq-right">
            <div className="faq-accordion-list">
              {faqs.map((faq, idx) => {
                const isOpen = openIdx === idx
                return (
                  <div
                    className={`faq-item${isOpen ? ' is-open' : ''}`}
                    key={idx}
                    onClick={() => toggleFaq(idx)}
                  >
                    <div className="faq-question-row">
                      <h3 className="faq-question-text">{faq.q}</h3>
                      <button
                        className={`faq-toggle-btn${isOpen ? ' active' : ''}`}
                        aria-label="Toggle answer"
                      >
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </button>
                    </div>
                    {isOpen && (
                      <div className="faq-answer-row">
                        <p className="faq-answer-text">{faq.a}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom: Big Post Project CTA Banner */}
        <div className="cta-banner-card">
          <div className="cta-banner-left">
            <h2 className="cta-banner-title">
              Post your project and see who's actually qualified
            </h2>
            <p className="cta-banner-sub">
              Free to post. You only pay against milestones you accept.
            </p>

            <div className="cta-banner-buttons">
              <button className="btn-white-pill">Post a project</button>
              <button className="btn-cta-outline">Join as an engineer</button>
            </div>

            <div className="cta-banner-features">
              <div className="cta-feat-item">
                <Check size={16} className="text-white" />
                <span>Verified engineers</span>
              </div>
              <div className="cta-feat-item">
                <Check size={16} className="text-white" />
                <span>Escrow on every contract</span>
              </div>
              <div className="cta-feat-item">
                <Check size={16} className="text-white" />
                <span>NDA projects supported</span>
              </div>
            </div>
          </div>

          <div className="cta-banner-right">
            <div className="cta-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80"
                alt="Steel frame structure"
                loading="lazy"
              />
              <div className="cta-proposals-pill">
                <div className="cta-avatar-stack">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                    alt="Engineer 1"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                    alt="Engineer 2"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80"
                    alt="Engineer 3"
                  />
                </div>
                <div className="cta-proposals-info">
                  <p className="cta-proposals-title">3 proposals received</p>
                  <p className="cta-proposals-time">Within 24 hours of posting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
