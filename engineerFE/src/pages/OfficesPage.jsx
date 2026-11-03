import OurOffices from '../components/OurOffices'
import FaqAndCta from '../components/FaqAndCta'
import { MapPin, Phone, Mail, Building, Globe2, ShieldCheck, CheckCircle2 } from 'lucide-react'

export default function OfficesPage() {
  const jurisdictions = [
    { country: 'United States', board: 'NCEES / State PE & SE Boards', coverage: 'All 50 States', codes: 'IBC, ACI, AISC, ASME, ASCE 7' },
    { country: 'United Kingdom', board: 'Engineering Council (CEng / IEng)', coverage: 'England, Scotland, Wales, NI', codes: 'Eurocodes (UK NA), BS Standards' },
    { country: 'Canada', board: 'Engineers Canada / Provincial Boards (PEO, APEGA, EGBC)', coverage: '10 Provinces & Territories', codes: 'NBCC, CSA S16, CSA A23.3' },
    { country: 'Australia', board: 'Engineers Australia (NER / CPEng)', coverage: 'National & State Registers (BPEQ, VBA)', codes: 'AS/NZS 1170, AS 4100, AS 3600' },
    { country: 'European Union', board: 'FEANI (EurIng) & National Chambers', coverage: 'Germany, France, Netherlands, Ireland, Nordics', codes: 'Eurocodes 0 through 9' },
    { country: 'Middle East & Asia', board: 'Dubai Municipality / BAPETEN / Council of Architecture', coverage: 'UAE, Singapore, Saudi Arabia, India', codes: 'IBC / Eurocodes / IS Codes' },
  ]

  return (
    <div className="page-wrapper">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="section-eyebrow">
            <span className="section-eyebrow-num">05</span>
            <span className="section-eyebrow-text">Global Offices &amp; Jurisdictions</span>
            <span className="section-eyebrow-line" />
          </div>
          <h1 className="page-hero-title">
            Physical presence in 8 global hubs.<br />
            Licence verification in 40+ countries.
          </h1>
          <p className="page-hero-sub">
            Engineering isn't borderless when local building codes and legal liabilities are at stake.
            We maintain physical offices to coordinate statutory board registrations and local engineering legalities.
          </p>
        </div>
      </section>

      {/* Main Offices Component */}
      <OurOffices />

      {/* Licensing Board & Jurisdiction Standards Table */}
      <section className="jurisdictions-section">
        <div className="jurisdictions-inner">
          <div className="section-eyebrow">
            <span className="section-eyebrow-num">06</span>
            <span className="section-eyebrow-text">Statutory coverage</span>
            <span className="section-eyebrow-line" />
          </div>
          <h2 className="section-headline">Verified against national engineering boards</h2>
          <p className="section-subtext">
            Before an engineer can accept contracts in a regulated jurisdiction, their license number and active standing are verified directly with the issuing authority.
          </p>

          <div className="jurisdiction-cards-grid">
            {jurisdictions.map((j, i) => (
              <div className="jurisdiction-card" key={i}>
                <div className="j-header">
                  <Globe2 size={18} className="text-brand-red" />
                  <h3 className="j-country">{j.country}</h3>
                </div>
                <div className="j-row">
                  <span className="j-label">Authority:</span>
                  <span className="j-val">{j.board}</span>
                </div>
                <div className="j-row">
                  <span className="j-label">Territory:</span>
                  <span className="j-val">{j.coverage}</span>
                </div>
                <div className="j-row">
                  <span className="j-label">Codes:</span>
                  <span className="j-val code-highlight">{j.codes}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqAndCta />
    </div>
  )
}
