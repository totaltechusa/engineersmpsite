import React from 'react'
import { Award, GraduationCap, ArrowRight } from 'lucide-react'

export default function Programmes() {
  const awards = [
    {
      title: 'Engineering Excellence Medal',
      desc: 'Work adopted into codes or standards',
      tag: 'Closes 31 Mar',
    },
    {
      title: 'Discipline Award',
      desc: 'Judged by a panel from the same discipline',
      tag: 'Closes 30 Apr',
    },
    {
      title: 'Young Engineer Prize',
      desc: 'Under 32, with named technical responsibility',
      tag: 'Closes 15 May',
    },
    {
      title: 'Verification Service Award',
      desc: 'Checkers who caught errors before issue',
      tag: 'Closes 30 Jun',
    },
  ]

  const scholarships = [
    {
      title: 'Undergraduate bursary',
      desc: 'Years 2 to 4: tuition, software, standards',
      tag: 'Closes 31 Jul',
    },
    {
      title: 'Master’s research grant',
      desc: 'Fees, lab access and conference travel',
      tag: 'Closes 30 Sep',
    },
    {
      title: 'Licence support',
      desc: 'Exam fees, prep material and a mentor',
      tag: 'Rolling',
    },
    {
      title: 'Returners scholarship',
      desc: 'Refresher training after 2+ years away',
      tag: 'Closes 31 Oct',
    },
  ]

  return (
    <section className="programmes-section" id="programmes">
      <div className="programmes-inner">
        <div className="section-head-split">
          <div>
            <div className="section-eyebrow">
              <span className="section-eyebrow-num">09</span>
              <span className="section-eyebrow-text">Programmes</span>
              <span className="section-eyebrow-line" />
            </div>
            <h2 className="section-title">Backing the people who do the work</h2>
          </div>
          <p className="section-head-sub">
            Awards judged by practising engineers, and funding for the costs that stop
            people qualifying.
          </p>
        </div>

        <div className="programmes-grid">
          {/* Left Dark Card: Engineering Awards */}
          <div className="programme-card programme-card-dark">
            <div className="programme-card-header">
              <div className="programme-badge-icon programme-badge-teal">
                <Award size={22} />
              </div>
              <div>
                <h3 className="programme-card-title">Engineering awards</h3>
                <p className="programme-card-sub">
                  Every award states what it's judged on before nominations open.
                </p>
              </div>
            </div>

            <div className="programme-items-list">
              {awards.map((item, idx) => (
                <div className="programme-item-row" key={idx}>
                  <div className="programme-item-info">
                    <p className="programme-item-title">{item.title}</p>
                    <p className="programme-item-desc">{item.desc}</p>
                  </div>
                  <span className="programme-tag-pill tag-pill-dark">{item.tag}</span>
                </div>
              ))}
            </div>

            <a href="#awards" className="programme-card-link text-brand-red">
              <span>See awards and past winners</span>
              <ArrowRight size={15} />
            </a>
          </div>

          {/* Right Light Card: Scholarships */}
          <div className="programme-card programme-card-light">
            <div className="programme-card-header">
              <div className="programme-badge-icon programme-badge-mint">
                <GraduationCap size={22} />
              </div>
              <div>
                <h3 className="programme-card-title">Scholarships</h3>
                <p className="programme-card-sub">
                  Covering software, standards, exam fees and supervised hours, not just tuition.
                </p>
              </div>
            </div>

            <div className="programme-items-list">
              {scholarships.map((item, idx) => (
                <div className="programme-item-row" key={idx}>
                  <div className="programme-item-info">
                    <p className="programme-item-title">{item.title}</p>
                    <p className="programme-item-desc">{item.desc}</p>
                  </div>
                  <span className="programme-tag-pill tag-pill-light">{item.tag}</span>
                </div>
              ))}
            </div>

            <a href="#scholarships" className="programme-card-link text-brand-red">
              <span>Check eligibility</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
