import Hero from '../components/Hero'
import FourWaysToWork from '../components/FourWaysToWork'
import EngineeringOntology from '../components/EngineeringOntology'
import FeaturedServices from '../components/FeaturedServices'
import VerifiedEngineers from '../components/VerifiedEngineers'
import WhyWeExist from '../components/WhyWeExist'
import HowItWorks from '../components/HowItWorks'
import WorkroomSection from '../components/WorkroomSection'
import TrustAndProtection from '../components/TrustAndProtection'
import BigProjects from '../components/BigProjects'
import HowToHire from '../components/HowToHire'
import CaseStudies from '../components/CaseStudies'
import InternsSection from '../components/InternsSection'
import ForEngineers from '../components/ForEngineers'
import Programmes from '../components/Programmes'
import FaqAndCta from '../components/FaqAndCta'
import OurOffices from '../components/OurOffices'

export default function Home() {
  return (
    <>
      {/* 1. Hero with Ticker, Interactive Search & Technical Workroom Card */}
      <Hero />

      {/* 2. Four Ways to Work (Mode 01 - 04) from engineersmp.com */}
      <FourWaysToWork />

      {/* 3. 620 Disciplines across 16 Families (Ontology model) */}
      <EngineeringOntology />

      {/* 4. Popular Services with Fixed Scope & Deliverables */}
      <FeaturedServices />

      {/* 5. Verified Engineers with Evidence & Metrics */}
      <VerifiedEngineers />

      {/* 6. Technical Workroom & Delivery Stage Gates */}
      <WorkroomSection />

      {/* 7. How It Works - Step-by-Step */}
      <HowItWorks />

      {/* 8. Trust, Escrow & Payment Protection */}
      <TrustAndProtection />

      {/* 9. Multidisciplinary & Firm Hiring */}
      <HowToHire />

      {/* 10. Large Infrastructure & Programmes */}
      <BigProjects />
      <Programmes />

      {/* 11. Engineering Case Studies */}
      <CaseStudies />

      {/* 12. Engineering Interns & Graduate Trainees Section */}
      <InternsSection />

      {/* 13. For Engineers - Join Platform */}
      <ForEngineers />

      {/* 13. FAQ & Offices */}
      <FaqAndCta />
      <OurOffices />
    </>
  )
}
