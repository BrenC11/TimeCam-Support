"use client";

import { useMemo, useState } from "react";

const ERAS = ["Victorian", "1920s", "1970s", "1990s", "Medieval", "Ancient", "Future"];

export default function EraTimeline() {
  const [index, setIndex] = useState(0);
  const currentEra = useMemo(() => ERAS[index], [index]);

  return (
    <section className="section" id="eras">
      <div className="container era-section">
        <div>
          <div className="section-head">
            <h2>Pick an era</h2>
            <p className="muted">Tap an era or scrub the timeline to update the preview.</p>
          </div>
          <div className="era-chips" role="list">
            {ERAS.map((era, eraIndex) => (
              <button
                key={era}
                className={`chip ${eraIndex === index ? "is-active" : ""}`}
                type="button"
                onClick={() => setIndex(eraIndex)}
                role="listitem"
              >
                {era}
              </button>
            ))}
          </div>
          <div className="era-timeline">
            <input
              type="range"
              min="0"
              max={ERAS.length - 1}
              step="1"
              value={index}
              onChange={(event) => setIndex(Number(event.target.value))}
              aria-label="Era timeline"
            />
            <div className="era-ticks">
              {ERAS.map((era, eraIndex) => (
                <span key={era} className={eraIndex === index ? "is-active" : ""}>
                  {era}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="era-preview card">
          <p className="muted">Previewing</p>
          <h3>{currentEra}</h3>
          <p className="muted">A curated reimagining of your scene, tuned to the chosen era.</p>
        </div>
      </div>
    </section>
  );
}
