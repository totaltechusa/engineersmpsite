import WhyWeExist from '../components/WhyWeExist'
import HowToHire from '../components/HowToHire'
import HowItWorks from '../components/HowItWorks'
import HireSection from '../components/HireSection'
import WorkroomSection from '../components/WorkroomSection'
import TrustAndProtection from '../components/TrustAndProtection'
import FaqAndCta from '../components/FaqAndCta'

export default function HowItWorksPage() {
  return (
    <div className="page-wrapper">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="section-eyebrow">
            <span className="section-eyebrow-num">03</span>
            <span className="section-eyebrow-text">Process &amp; Governance</span>
            <span className="section-eyebrow-line" />
          </div>
          <h1 className="page-hero-title">
            Engineering contracts demand<br />
            more than a chat thread and star ratings.
          </h1>
          <p className="page-hero-sub">
            From license verification and code compliance to escrow-backed milestone releases and independent checking, here is how every project runs securely from start to finish.
          </p>
        </div>
      </section>

      <WhyWeExist />
      <HowToHire />
      <HowItWorks />
      <HireSection />
      <WorkroomSection />
      <TrustAndProtection />
      <FaqAndCta />
    </div>
  )
}
