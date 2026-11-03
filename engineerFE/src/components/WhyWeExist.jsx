import { Eye, BadgeCheck, FileText, ArrowRight } from 'lucide-react'

export default function WhyWeExist() {
  const points = [
    {
      icon: <Eye size={20} />,
      title: "You can't judge the output",
      descBefore: 'A star rating says the client was happy, not that the numbers were right. ',
      descBold: 'Here, reviews score accuracy and code compliance separately.',
    },
    {
      icon: <BadgeCheck size={20} />,
      title: "A badge isn't a licence",
      descBefore: 'Many designs legally need a registered engineer to sign off. ',
      descBold: 'Here, licences are checked and the jurisdiction is shown.',
    },
    {
      icon: <FileText size={20} />,
      title: "A chat thread isn't a revision history",
      descBefore: 'Drawings change, and someone always builds from the wrong file. ',
      descBold: 'Here, every contract gets a workroom with versioned files.',
    },
  ]

  return (
    <section className="why-section" id="why">
      <div className="why-inner">
        {/* Left Column */}
        <div className="why-left">
          <div className="section-eyebrow">
            <span className="section-eyebrow-num">01</span>
            <span className="section-eyebrow-text">Why we exist</span>
            <span className="section-eyebrow-line" />
          </div>

          <h2 className="why-headline">
            Freelance sites were built for logos, not load paths
          </h2>

          <p className="why-subtitle">
            When a logo is wrong, you can see it. When a calculation is wrong,
            you usually find out after something fails.
          </p>

          <div className="why-points">
            {points.map(p => (
              <div className="why-point" key={p.title}>
                <div className="why-point-icon">{p.icon}</div>
                <div className="why-point-content">
                  <p className="why-point-title">{p.title}</p>
                  <p className="why-point-desc">
                    {p.descBefore}
                    <strong className="why-point-highlight">{p.descBold}</strong>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Container Image from public folder */}
        <div className="why-right">
          <div className="why-image-card">
            <img
              src="/Container.png"
              alt="Structural calculation diagram showing beam load w = 18 kN/m, length 9.0m, IPE 400 S355 and utilisation ratio 0.98"
              className="why-container-img"
            />
          </div>
        </div>
      </div>

      {/* Bottom Mint CTA Banner */}
      <div className="why-cta-container">
        <div className="why-cta-banner">
          <p className="why-cta-text">
            So we built a marketplace for engineering work only.
          </p>
          <a href="#how" className="why-cta-btn">
            <span>See how it works</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
