"use client";

import { useState } from "react";

export default function BeforeAfter() {
  const [value, setValue] = useState(55);

  return (
    <section className="section" id="preview">
      <div className="container">
        <div className="section-head">
          <h2>Reveal the then and now</h2>
          <p className="muted">Drag the slider to compare a scene across time.</p>
        </div>
        <div className="before-after">
          <div className="before-after-frame" aria-hidden="true">
            <img
              src="/images/SCREENSHOT_2.jpg"
              alt="Present day scene"
              className="before-after-image"
            />
            <div className="before-after-overlay" style={{ width: `${value}%` }}>
              <img
                src="/images/SCREENSHOT_3.jpg"
                alt="Reimagined historical scene"
                className="before-after-image"
              />
            </div>
            <div className="before-after-handle" style={{ left: `${value}%` }}>
              <span className="before-after-grip"></span>
            </div>
          </div>
          <div className="before-after-controls">
            <span className="muted">Present</span>
            <input
              type="range"
              min="0"
              max="100"
              value={value}
              onChange={(event) => setValue(Number(event.target.value))}
              aria-label="Compare past and present"
            />
            <span className="muted">Past</span>
          </div>
        </div>
      </div>
    </section>
  );
}
