"use client";

import { useMemo, useState } from "react";

const ERAS = ["Victorian", "1920s", "1970s", "1990s", "Medieval", "Ancient", "Future"];
const ERA_DESCRIPTIONS: Record<string, string> = {
  Victorian: "Gaslight streets, ironwork details, and early industrial energy.",
  "1920s": "Art deco flourishes, jazz-age glamour, and crisp monochrome contrast.",
  "1970s": "Warm tones, bold signage, and a lived-in, analogue feel.",
  "1990s": "Cleaner lines, early digital textures, and familiar urban grit.",
  Medieval: "Stonework, timber frames, and a world lit by torch and hearth.",
  Ancient: "Weathered stone, classical forms, and timeless craftsmanship.",
  Future: "Sleek materials, neon glow, and speculative cityscapes."
};

export default function EraTimeline() {
  const [index, setIndex] = useState(0);
  const currentEra = useMemo(() => ERAS[index], [index]);
  const currentDescription = ERA_DESCRIPTIONS[currentEra];

  return (
    <section className="section" id="eras">
      <div className="container era-section">
        <div>
          <div className="section-head">
            <h2>Pick an era</h2>
            <p className="muted">Tap an era or scrub the timeline to update the preview.</p>
            <p className="muted">You can also add any date you like and TimeCam will take you back to then.</p>
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
          <p className="muted">{currentDescription}</p>
        </div>
      </div>
    </section>
  );
}
