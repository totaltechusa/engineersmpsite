import {
  Lock,
  Layers,
  FolderClosed,
  FileQuestion,
  GitBranch,
  CreditCard,
  Users,
  MessageSquare
} from 'lucide-react'

export default function WorkroomSection() {
  const codes = [
    'ACI 318',
    'Eurocode',
    'IS 456',
    'ASME',
    'API',
    'ISO',
    'IEC',
    'NFPA',
    'and more',
  ]

  return (
    <section className="workroom-section">
      <div className="workroom-inner">
        {/* Browser Window Mockup */}
        <div className="browser-mockup">
          {/* Top Browser Bar */}
          <div className="browser-header">
            <div className="browser-dots">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <div className="browser-url-bar">
              <Lock size={12} className="url-lock" />
              <span className="url-text">app.engineersmp.com/workroom/warehouse-frame-lisbon</span>
            </div>
          </div>

          {/* Browser Window Body */}
          <div className="workroom-layout">
            {/* Sidebar */}
            <aside className="workroom-sidebar">
              <div className="workroom-brand">
                <div className="workroom-brand-icon">✓</div>
                <span className="workroom-brand-text">Workroom</span>
              </div>

              <nav className="workroom-nav">
                <a href="#overview" className="workroom-nav-item active">
                  <Layers size={15} />
                  <span>Overview</span>
                </a>
                <a href="#files" className="workroom-nav-item">
                  <FolderClosed size={15} />
                  <span>Files</span>
                </a>
                <a href="#rfis" className="workroom-nav-item">
                  <FileQuestion size={15} />
                  <span>RFIs</span>
                </a>
                <a href="#changes" className="workroom-nav-item">
                  <GitBranch size={15} />
                  <span>Changes</span>
                  <span className="nav-badge">1</span>
                </a>
                <a href="#payments" className="workroom-nav-item">
                  <CreditCard size={15} />
                  <span>Payments</span>
                </a>
                <a href="#team" className="workroom-nav-item">
                  <Users size={15} />
                  <span>Team</span>
                </a>
              </nav>
            </aside>

            {/* Main Center Content */}
            <main className="workroom-main">
              {/* Project Title Bar */}
              <div className="workroom-main-header">
                <div>
                  <h3 className="workroom-project-title">Warehouse frame, Lisbon</h3>
                  <p className="workroom-project-sub">
                    Structural design · EN 1993 · Sofia Marin, lead engineer
                  </p>
                </div>
                <div className="workroom-avatars">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&q=80"
                    alt="Sofia Marin"
                    className="avatar-stack-img"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80"
                    alt="Marek Novak"
                    className="avatar-stack-img"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80"
                    alt="Reviewer"
                    className="avatar-stack-img"
                  />
                </div>
              </div>

              {/* Workroom Tabs */}
              <div className="workroom-tabs">
                <button className="wr-tab">Design basis</button>
                <button className="wr-tab">Calculations</button>
                <button className="wr-tab active">Drawings</button>
                <button className="wr-tab">Review close-out</button>
                <button className="wr-tab">For construction</button>
              </div>

              {/* Files Table */}
              <div className="workroom-table">
                <div className="wr-table-header">
                  <span className="col-file">File</span>
                  <span className="col-rev">Rev</span>
                  <span className="col-by">By</span>
                  <span className="col-status">Status</span>
                </div>

                <div className="wr-table-row">
                  <span className="col-file">
                    <span className="file-pill pdf">PDF</span>
                    <span>Calculation report</span>
                  </span>
                  <span className="col-rev">B</span>
                  <span className="col-by">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=60&q=80"
                      alt="Sofia"
                      className="table-avatar"
                    />
                  </span>
                  <span className="col-status">
                    <span className="status-badge approved">Approved</span>
                  </span>
                </div>

                <div className="wr-table-row">
                  <span className="col-file">
                    <span className="file-pill dwg">DWG</span>
                    <span>STR-204 Portal frame GA</span>
                  </span>
                  <span className="col-rev">C</span>
                  <span className="col-by">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=60&q=80"
                      alt="Sofia"
                      className="table-avatar"
                    />
                  </span>
                  <span className="col-status">
                    <span className="status-badge in-review">In review</span>
                  </span>
                </div>

                <div className="wr-table-row">
                  <span className="col-file">
                    <span className="file-pill dwg">DWG</span>
                    <span>STR-205 Base plate details</span>
                  </span>
                  <span className="col-rev">A</span>
                  <span className="col-by">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&q=80"
                      alt="Marek"
                      className="table-avatar"
                    />
                  </span>
                  <span className="col-status">
                    <span className="status-badge in-review">In review</span>
                  </span>
                </div>

                <div className="wr-table-row">
                  <span className="col-file">
                    <span className="file-pill ifc">IFC</span>
                    <span>Structural model</span>
                  </span>
                  <span className="col-rev">B</span>
                  <span className="col-by">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&q=80"
                      alt="Marek"
                      className="table-avatar"
                    />
                  </span>
                  <span className="col-status">
                    <span className="status-badge approved">Approved</span>
                  </span>
                </div>
              </div>
            </main>

            {/* Right Panel */}
            <aside className="workroom-aside">
              {/* Card 1: Escrow */}
              <div className="aside-card escrow-card">
                <span className="aside-card-title">Held in escrow</span>
                <span className="aside-card-amount">$18,400</span>
                <div className="aside-escrow-meta">
                  <span>Released $9,200</span>
                  <span className="dot-sep">·</span>
                  <span>Next $4,600</span>
                </div>
              </div>

              {/* Card 2: Change CR-04 */}
              <div className="aside-card change-card">
                <div className="change-card-header">
                  <span className="change-id">Change CR-04</span>
                  <span className="needs-badge">Needs you</span>
                </div>
                <h4 className="change-title">Add mezzanine loads</h4>
                <p className="change-impact">+$1,400 · +6 days</p>
                <div className="change-actions">
                  <button className="btn-approve">Approve</button>
                  <button className="btn-discuss">Discuss</button>
                </div>
              </div>

              {/* Card 3: RFI message */}
              <div className="aside-card rfi-card">
                <div className="rfi-icon">
                  <MessageSquare size={14} />
                </div>
                <p className="rfi-text">
                  <strong>RFI-018 Grid line C shift</strong> - answered
                </p>
              </div>
            </aside>
          </div>
        </div>

        {/* Caption below mockup */}
        <p className="workroom-caption">
          Every contract opens a workroom like this: stages, revisions, changes and money in one place.
        </p>

        {/* Built to the code you specify - Pills Ribbon */}
        <div className="code-ribbon">
          <span className="code-ribbon-label">Built to the code you specify</span>
          <div className="code-pills">
            {codes.map(c => (
              <span key={c} className="code-pill">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
