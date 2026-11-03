import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Check,
  ShieldCheck,
  Award,
  GraduationCap,
  Calculator,
  ArrowRight,
  FileCheck2,
  DollarSign,
  TrendingUp,
  Clock,
  Briefcase,
  Lock,
} from 'lucide-react'

export default function ForEngineersPage() {
  const [contractValue, setContractValue] = useState(15000)

  // Platform Tiered Fee Calculation
  const fee =
    contractValue <= 5000
      ? contractValue * 0.1
      : contractValue <= 15000
      ? 5000 * 0.1 + (contractValue - 5000) * 0.075
      : 5000 * 0.1 + 10000 * 0.075 + (contractValue - 15000) * 0.05

  const netEarnings = contractValue - fee
  const effectiveFeePercent = ((fee / contractValue) * 100).toFixed(1)

  const steps = [
    {
      step: '01',
      title: 'Create Your Technical Profile',
      desc: 'List your engineering disciplines, licenses (PE, P.Eng, Chartered), engineering software tools, and design standards you work under.',
    },
    {
      step: '02',
      title: 'Free Professional Credential Verification',
      desc: 'Our engineering board checks your degree, registration and license records. Receive an "Expert Vetted" or "License Verified" seal.',
    },
    {
      step: '03',
      title: 'Bid on Scoped Technical Projects',
      desc: 'Clients submit structured statements of work, not vague job descriptions. Review inputs, deliverables, and codes before proposing.',
    },
    {
      step: '04',
      title: '100% Escrow Funded Delivery',
      desc: 'Never start drafting without funded milestones. Deliver work into an engineering workroom with version control and formal approvals.',
    },
  ]

  return (
    <div style={{ backgroundColor: 'var(--bg-page)', minHeight: '100vh', paddingBottom: '5rem' }}>
      {/* Page Hero */}
      <section style={{
        backgroundColor: 'var(--navy)',
        borderBottom: '3px solid var(--red)',
        color: 'var(--white)',
        padding: '4.5rem 0',
      }}>
        <div className="container-wide">
          <div style={{ maxWidth: '840px' }}>
            <span style={{
              display: 'inline-block',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--white)',
              marginBottom: '0.75rem',
            }}>
              For Professional Engineers &amp; Technical Firms
            </span>
            <h1 style={{
              fontSize: 'clamp(2.3rem, 1.6rem + 3vw, 3.8rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              color: 'var(--white)',
              marginBottom: '1.25rem',
            }}>
              Focus on design and calculations. We guarantee escrow and contracts.
            </h1>
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.88)',
              lineHeight: 1.6,
              marginBottom: '2rem',
            }}>
              Free professional verification of your engineering degree and licenses. Every milestone is 100% funded in escrow before you begin drafting, with fees as low as 5% on large contracts.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/signup" className="emp-btn emp-btn-primary emp-btn-xl">
                <span>Join as a Verified Engineer</span>
                <ArrowRight size={16} />
              </Link>
              <a href="#calculator" className="emp-btn emp-btn-white emp-btn-xl">
                Earnings Calculator
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Step Process Grid */}
      <section style={{ padding: '4.5rem 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container-wide">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
            <span className="emp-eyebrow">How It Works for Engineers</span>
            <h2 className="emp-section-title">A marketplace built only for technical work</h2>
            <p className="emp-section-desc">
              No endless bidding contests with amateurs. Scoped engineering briefs, structured RFIs, and milestone-protected escrow.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}>
            {steps.map(s => (
              <div
                key={s.step}
                style={{
                  backgroundColor: 'var(--bg-alt)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius)',
                  padding: '1.75rem',
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: 'var(--red)',
                  display: 'block',
                  marginBottom: '0.75rem',
                }}>
                  {s.step}
                </span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.6rem' }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Earnings Calculator */}
      <section id="calculator" style={{ padding: '5rem 0', backgroundColor: 'var(--bg-page)' }}>
        <div className="container-wide">
          <div style={{
            maxWidth: '820px',
            margin: '0 auto',
            backgroundColor: 'var(--brand-white)',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius)',
            padding: '2.5rem',
          }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span className="emp-eyebrow">Fair Tiered Fees</span>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--navy)', margin: '0 0 0.5rem 0' }}>
                Earnings Calculator
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: 0 }}>
                Transparent pricing: 10% on first $5k, 7.5% on next $10k, and 5% on amounts above $15k.
              </p>
            </div>

            {/* Slider */}
            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ fontWeight: 700, color: 'var(--navy)' }}>Contract Amount</span>
                <span style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--navy)', fontFamily: 'var(--font-mono)' }}>
                  ${contractValue.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={1000}
                max={100000}
                step={1000}
                value={contractValue}
                onChange={e => setContractValue(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: 'var(--red)',
                  height: '8px',
                  cursor: 'pointer',
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                <span>$1,000</span>
                <span>$50,000</span>
                <span>$100,000</span>
              </div>
            </div>

            {/* Result Breakdown Card */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              backgroundColor: 'var(--bg-alt)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius)',
              padding: '1.5rem',
              textAlign: 'center',
            }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  Effective Fee
                </span>
                <p style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--navy)', margin: '0.25rem 0 0', fontFamily: 'var(--font-mono)' }}>
                  {effectiveFeePercent}%
                </p>
              </div>
              <div style={{ borderLeft: '1px solid var(--border-light)', borderRight: '1px solid var(--border-light)' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  Platform Fee
                </span>
                <p style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--navy)', margin: '0.25rem 0 0', fontFamily: 'var(--font-mono)' }}>
                  ${Math.round(fee).toLocaleString()}
                </p>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--red)', textTransform: 'uppercase' }}>
                  You Keep (Net)
                </span>
                <p style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--red)', margin: '0.25rem 0 0', fontFamily: 'var(--font-mono)' }}>
                  ${Math.round(netEarnings).toLocaleString()}
                </p>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link to="/signup" className="emp-btn emp-btn-primary emp-btn-xl">
                <span>Start Offering Engineering Services</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
