import {
  ShieldCheck,
  Lock,
  FileText,
  AlertCircle,
  Check,
  Briefcase,
  Upload,
  Send,
  Star
} from 'lucide-react'

export default function TrustAndProtection() {
  return (
    <section className="trust-prot-section">
      <div className="trust-prot-grid-overlay" />

      <div className="trust-prot-inner">
        {/* Header */}
        <div className="trust-prot-header">
          <div>
            <div className="section-eyebrow">
              <span className="section-eyebrow-num">06</span>
              <span className="section-eyebrow-text">Trust and protection</span>
              <span className="section-eyebrow-line" />
            </div>
            <h2 className="trust-prot-headline">
              Engineering carries real risk. We built around it.
            </h2>
          </div>
          <p className="trust-prot-subtitle">
            Checked people, protected money and a scope agreed before work starts.
          </p>
        </div>

        {/* 3 Dark Protection Cards */}
        <div className="trust-prot-cards">
          {/* Card 1: Verified Engineers */}
          <div className="prot-card">
            <div className="prot-card-icon-circle">
              <ShieldCheck size={20} />
            </div>
            <h3 className="prot-card-title">Verified engineers</h3>
            <p className="prot-card-desc">
              Four levels of checks, each one deeper than the last. Profiles show which were passed.
            </p>

            <div className="verification-ladder">
              <div className="ladder-step">
                <span className="ladder-num">1</span>
                <div>
                  <p className="ladder-title">Identity confirmed</p>
                  <p className="ladder-sub">Government ID and live photo</p>
                </div>
              </div>

              <div className="ladder-step">
                <span className="ladder-num">2</span>
                <div>
                  <p className="ladder-title">Degree verified</p>
                  <p className="ladder-sub">Confirmed with the university</p>
                </div>
              </div>

              <div className="ladder-step">
                <span className="ladder-num">3</span>
                <div>
                  <p className="ladder-title">Licence verified</p>
                  <p className="ladder-sub">Checked with the licensing board</p>
                </div>
              </div>

              <div className="ladder-step highlighted">
                <div className="ladder-step-top">
                  <span className="ladder-num filled">4</span>
                  <span className="highest-badge">
                    <Star size={11} fill="currentColor" />
                    <span>Highest</span>
                  </span>
                </div>
                <div>
                  <p className="ladder-title">Work verified</p>
                  <p className="ladder-sub">A finished job re-checked by a second engineer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Protected Payments */}
          <div className="prot-card">
            <div className="prot-card-icon-circle">
              <Lock size={19} />
            </div>
            <h3 className="prot-card-title">Protected payments</h3>
            <p className="prot-card-desc">
              Your money moves only when you accept the work.
            </p>

            <div className="escrow-flow-timeline">
              <div className="flow-step">
                <div className="flow-step-icon">
                  <Briefcase size={14} />
                </div>
                <div>
                  <p className="flow-title">You fund a milestone</p>
                  <p className="flow-sub">Before that stage starts</p>
                </div>
              </div>

              <div className="flow-connector" />

              <div className="flow-step">
                <div className="flow-step-icon active">
                  <Lock size={14} />
                </div>
                <div>
                  <p className="flow-title">Held in escrow</p>
                  <p className="flow-sub">Neither side can touch it</p>
                </div>
              </div>

              <div className="flow-connector" />

              <div className="flow-step">
                <div className="flow-step-icon">
                  <Upload size={14} />
                </div>
                <div>
                  <p className="flow-title">Engineer delivers</p>
                  <p className="flow-sub">Files land in the workroom</p>
                </div>
              </div>

              <div className="flow-connector" />

              <div className="flow-step">
                <div className="flow-step-icon">
                  <Send size={14} />
                </div>
                <div>
                  <p className="flow-title">You accept, funds release</p>
                  <p className="flow-sub">If not, it goes back for revision</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Clear Scope */}
          <div className="prot-card">
            <div className="prot-card-icon-circle">
              <FileText size={19} />
            </div>
            <h3 className="prot-card-title">Clear scope</h3>
            <p className="prot-card-desc">
              Most disputes start with a boundary nobody wrote down.
            </p>

            <div className="scope-section">
              <p className="scope-group-label">Always included</p>
              <ul className="scope-list included">
                <li>
                  <Check size={14} className="scope-check" />
                  <span>Named code and revision year</span>
                </li>
                <li>
                  <Check size={14} className="scope-check" />
                  <span>Native files, not just PDFs</span>
                </li>
                <li>
                  <Check size={14} className="scope-check" />
                  <span>Revision history on every drawing</span>
                </li>
              </ul>

              <p className="scope-group-label" style={{ marginTop: '20px' }}>
                Never assumed
              </p>
              <ul className="scope-list assumed">
                <li>
                  <span className="dash-bullet">—</span>
                  <span>Stamping or authority approval</span>
                </li>
                <li>
                  <span className="dash-bullet">—</span>
                  <span>Site supervision</span>
                </li>
                <li>
                  <span className="dash-bullet">—</span>
                  <span>Unlimited revision rounds</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Alert Banner */}
        <div className="trust-prot-alert">
          <AlertCircle size={18} className="prot-alert-icon" />
          <p className="prot-alert-text">
            <strong>A badge is not a licence.</strong> Verification confirms documents were checked.
            If your local law needs a registered engineer to sign off a design, that sign-off must come
            from someone registered there.
          </p>
        </div>
      </div>
    </section>
  )
}
