import React from 'react'
import { ArrowRight, BookOpen, MessageSquare, FileCode } from 'lucide-react'

export default function CaseStudies() {
  const caseStudies = [
    {
      metric: '2.4x',
      metricLabel: 'seismic capacity',
      tags: ['Structural', 'Ahmedabad'],
      title: 'Retrofitting a 1970s office while it stayed occupied',
      desc: 'Incomplete drawings, and only one floor could be emptied at a time.',
      img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    },
    {
      metric: '22%',
      metricLabel: 'lighter, same tooling',
      tags: ['Mechanical', 'Stuttgart'],
      title: 'Cutting mass from a pump housing after the die was cut',
      desc: 'A new tool would have cost five months. Inserts did the job.',
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    },
    {
      metric: '€0.4M',
      metricLabel: 'capex avoided',
      tags: ['Electrical', 'Seville'],
      title: "Saving a 42 MWp solar plant's grid connection",
      desc: 'The inverters failed a grid condition three weeks before financial close.',
      img: 'https://images.unsplash.com/photo-1508873696983-2df570464756?auto=format&fit=crop&w=800&q=80',
    },
  ]

  const learnResources = [
    {
      icon: <BookOpen size={20} className="text-brand-red" />,
      title: 'Guides',
      desc: 'How to write an engineering brief, set acceptance criteria and pick a code.',
      linkText: 'Read the guides',
    },
    {
      icon: <MessageSquare size={20} className="text-brand-red" />,
      title: 'Community',
      desc: 'Technical questions answered by verified engineers in your discipline.',
      linkText: 'Join the discussion',
    },
    {
      icon: <FileCode size={20} className="text-brand-red" />,
      title: 'Standards and software',
      desc: 'Find engineers by the code they design to or the tools they use.',
      linkText: 'Browse by standard',
    },
  ]

  return (
    <div className="results-and-resources-wrapper">
      {/* 07 Results and Resources */}
      <section className="case-studies-section" id="case-studies">
        <div className="case-studies-inner">
          <div className="section-head-split">
            <div>
              <div className="section-eyebrow">
                <span className="section-eyebrow-num">07</span>
                <span className="section-eyebrow-text">Results and resources</span>
                <span className="section-eyebrow-line" />
              </div>
              <h2 className="section-title">Projects delivered through the platform</h2>
            </div>
            <p className="section-head-sub">
              Each case study records the problem, the approach and a measured result.
            </p>
          </div>

          <div className="case-studies-grid">
            {caseStudies.map((item, idx) => (
              <div className="case-study-card" key={idx}>
                <div className="case-study-img-wrap">
                  <img src={item.img} alt={item.title} loading="lazy" />
                  <div className="case-study-metric-badge">
                    <span className="metric-val">{item.metric}</span>
                    <span className="metric-text">{item.metricLabel}</span>
                  </div>
                </div>
                <div className="case-study-body">
                  <div className="case-study-tags">
                    {item.tags.map((t) => (
                      <span className="case-tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="case-study-title">{item.title}</h3>
                  <p className="case-study-desc">{item.desc}</p>
                  <a href="#case-studies" className="case-study-link">
                    <span>Read the case study</span>
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="case-studies-cta-row">
            <button className="btn-pill-outline">All case studies</button>
          </div>
        </div>
      </section>

      {/* Learn before you hire */}
      <section className="learn-section">
        <div className="learn-inner">
          <div className="section-head-split">
            <div>
              <h2 className="section-title">Learn before you hire</h2>
            </div>
            <p className="section-head-sub">
              Free guides and answers from practising engineers.
            </p>
          </div>

          <div className="learn-cards-grid">
            {learnResources.map((res, i) => (
              <div className="learn-card" key={i}>
                <div className="learn-card-icon">{res.icon}</div>
                <h3 className="learn-card-title">{res.title}</h3>
                <p className="learn-card-desc">{res.desc}</p>
                <a href="#resources" className="learn-card-link">
                  <span>{res.linkText}</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
