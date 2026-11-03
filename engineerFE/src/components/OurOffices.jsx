import React, { useState } from 'react'
import { Phone } from 'lucide-react'

export default function OurOffices() {
  const [selectedOffice, setSelectedOffice] = useState('hq')

  const offices = [
    {
      id: 'us-south',
      name: 'US South',
      type: 'Regional office',
      city: 'Houston, Texas',
      coords: { x: 55, y: 72 },
    },
    {
      id: 'us-midwest',
      name: 'US Midwest',
      type: 'Engineering centre',
      city: 'Chicago, Illinois',
      coords: { x: 64, y: 55 },
    },
    {
      id: 'can-west-coast',
      name: 'Canada West Coast',
      type: 'Engineering centre',
      city: 'Vancouver, BC',
      coords: { x: 26, y: 40 },
    },
    {
      id: 'can-east',
      name: 'Canada East',
      type: 'Regional office',
      city: 'Toronto, Ontario',
      coords: { x: 74, y: 49 },
    },
    {
      id: 'can-west',
      name: 'Canada West',
      type: 'Regional office',
      city: 'Calgary, Alberta',
      coords: { x: 36, y: 36 },
    },
    {
      id: 'hq',
      name: 'Headquarters',
      type: 'Support 24/7',
      city: 'Melville, New York',
      address: '105 Maxess Road, Melville, NY 11747',
      phone: '(631) 452-1111',
      coords: { x: 81, y: 56 },
    },
  ]

  const activeOfficeObj = offices.find((o) => o.id === selectedOffice) || offices[5]

  return (
    <section className="offices-section" id="offices">
      <div className="offices-inner">
        <div className="offices-header">
          <div>
            <div className="section-eyebrow">
              <span className="section-eyebrow-num">11</span>
              <span className="section-eyebrow-text">Our offices</span>
              <span className="section-eyebrow-line" />
            </div>
            <h2 className="section-title">Six offices across the US and Canada</h2>
          </div>
        </div>

        <div className="offices-layout">
          {/* Left: Map */}
          <div className="offices-map-card">
            <div className="offices-map-viewport">
              {/* Detailed Stylized Vector Map of North America */}
              <svg
                className="na-map-svg"
                viewBox="0 0 600 450"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Landmass outline - North America stylized simplified polygons */}
                <path
                  d="M110,60 L240,40 L350,55 L420,80 L490,50 L530,120 L510,160 L540,190 L520,240 L500,270 L470,285 L440,330 L370,360 L320,380 L280,350 L250,330 L210,310 L170,270 L140,220 L150,170 L130,130 Z"
                  fill="#e8edf2"
                  stroke="#cbd5e1"
                  strokeWidth="1.2"
                />
                {/* Canada / US border stylized curve */}
                <path
                  d="M130,170 Q280,180 380,185 Q440,210 520,215"
                  stroke="#94a3b8"
                  strokeWidth="1"
                  strokeDasharray="4 3"
                  opacity="0.6"
                />
                {/* Great Lakes */}
                <ellipse cx="410" cy="210" rx="18" ry="12" fill="#ffffff" stroke="#cbd5e1" />
                <ellipse cx="440" cy="220" rx="14" ry="9" fill="#ffffff" stroke="#cbd5e1" />
                <ellipse cx="380" cy="205" rx="16" ry="10" fill="#ffffff" stroke="#cbd5e1" />

                {/* State / Province subtle borders */}
                <path
                  d="M200,175 L200,260 M280,180 L280,310 M340,185 L340,330 M420,220 L420,310"
                  stroke="#cbd5e1"
                  strokeWidth="0.8"
                  opacity="0.7"
                />

                {/* Pins */}
                {offices.map((office) => {
                  const isHq = office.id === 'hq'
                  const isSelected = office.id === selectedOffice
                  const cx = (office.coords.x / 100) * 600
                  const cy = (office.coords.y / 100) * 450

                  return (
                    <g
                      key={office.id}
                      className="map-pin-group"
                      onClick={() => setSelectedOffice(office.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      {(isHq || isSelected) && (
                        <>
                          <circle
                            cx={cx}
                            cy={cy}
                            r="16"
                            fill="#c11232"
                            opacity="0.25"
                            className="pin-pulse"
                          />
                          <circle
                            cx={cx}
                            cy={cy}
                            r="11"
                            fill="#c11232"
                            opacity="0.5"
                          />
                        </>
                      )}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isHq ? 7 : 5}
                        fill={isHq ? '#0b2265' : '#c11232'}
                        stroke="#ffffff"
                        strokeWidth="2"
                      />
                    </g>
                  )
                })}
              </svg>

              {/* Callout Popup over Active Office */}
              <div
                className="map-callout-card"
                style={{
                  left: `${activeOfficeObj.coords.x}%`,
                  top: `${activeOfficeObj.coords.y}%`,
                }}
              >
                <p className="callout-title">{activeOfficeObj.name}</p>
                <p className="callout-city">{activeOfficeObj.city}</p>
              </div>

              {/* Map Footer Attribution */}
              <div className="map-attribution">© OpenStreetMap contributors</div>
            </div>
          </div>

          {/* Right: Offices Directory */}
          <div className="offices-details-pane">
            {/* Top Featured HQ Card */}
            <div className="office-hq-card">
              <div className="office-hq-thumb">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80"
                  alt="Melville Headquarters building"
                />
              </div>
              <div className="office-hq-info">
                <h3 className="office-hq-name">Headquarters</h3>
                <p className="office-hq-address">105 Maxess Road, Melville, NY 11747</p>
                <p className="office-hq-phone">
                  <Phone size={13} className="inline mr-1 text-slate-400" />
                  (631) 452–1111
                </p>
              </div>
            </div>

            {/* Grid of 6 Office Locations */}
            <div className="offices-grid">
              {offices.map((office) => {
                const isActive = office.id === selectedOffice
                return (
                  <div
                    className={`office-card${isActive ? ' active-hq' : ''}`}
                    key={office.id}
                    onClick={() => setSelectedOffice(office.id)}
                  >
                    <div className="office-card-dot" />
                    <div className="office-card-content">
                      <p className="office-card-name">{office.name}</p>
                      <p className="office-card-type">{office.type}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
