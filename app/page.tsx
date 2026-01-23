import Link from "next/link";
import AnimatedHeadline from "./components/AnimatedHeadline";
import BeforeAfter from "./components/BeforeAfter";
import EraTimeline from "./components/EraTimeline";

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href="/" aria-label="TimeCam home">
            <img className="brand-logo" src="/images/TimeCamTextLOGO.png" alt="TimeCam" />
            <span className="brand-name">TimeCam</span>
          </Link>
          <nav className="nav">
            <a href="#how-it-works" className="nav-link">How it works</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#screenshots" className="nav-link">Screenshots</a>
            <a href="#eras" className="nav-link">Eras</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <Link href="/support#faq" className="nav-link">FAQ</Link>
            <Link href="/privacy" className="nav-link">Privacy</Link>
          </nav>
          <a className="button nav-cta" href="https://apps.apple.com">
            Download on the App Store
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Then. Now. Next.</p>
              <AnimatedHeadline text="See your world in another era." />
              <p className="muted">
                TimeCam AI turns a photo you take today into a photorealistic time slice from another era—while keeping
                the original scene, framing, and subject intact. Snap a building, street, landmark, or place you love,
                then travel backward or forward in time to see how it could have looked—historically grounded, richly
                detailed, and styled like a real photograph.
              </p>
              <p className="muted">
                Unlike generate-a-random-scene tools, TimeCam AI edits your actual photo across time, preserving
                composition and real-world layout so the result still feels like your moment, just in a different year.
              </p>
              <div className="hero-actions">
                <a className="button" href="https://apps.apple.com">
                  Download on the App Store
                </a>
                <button className="button secondary" data-modal-open="demo" type="button">
                  Watch demo
                </button>
              </div>
              <p className="fineprint muted">Private by design. No advertising tracking.</p>
            </div>
            <div className="hero-visual">
              <div className="device-frame" aria-hidden="true">
                <div className="device-screen">
                  <img
                    src="/images/SCREENSHOT_1.jpg"
                    alt="TimeCam app preview"
                    className="device-shot"
                    loading="lazy"
                  />
                </div>
                <div className="device-glow"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="preview">
          <div className="container">
            <BeforeAfter />
          </div>
        </section>

        <section className="section social-proof">
          <div className="container proof-grid">
            <p>Built for privacy-first creativity</p>
            <p>Designed with UK English in mind</p>
            <p>Optimised for the latest iPhones</p>
            <p>No inflated claims, just wonder</p>
          </div>
        </section>

        <section className="section" id="screenshots">
          <div className="container">
            <div className="section-head">
              <h2>In-app moments, ready to share</h2>
              <p className="muted">Five real screens from TimeCam, shown as they appear in the app.</p>
            </div>
            <div className="gallery" role="list">
              <button className="gallery-item" type="button" data-lightbox="/images/SCREENSHOT_1.jpg" role="listitem">
                <img src="/images/SCREENSHOT_1.jpg" alt="TimeCam screenshot 1" loading="lazy" />
              </button>
              <button className="gallery-item" type="button" data-lightbox="/images/SCREENSHOT_2.jpg" role="listitem">
                <img src="/images/SCREENSHOT_2.jpg" alt="TimeCam screenshot 2" loading="lazy" />
              </button>
              <button className="gallery-item" type="button" data-lightbox="/images/SCREENSHOT_3.jpg" role="listitem">
                <img src="/images/SCREENSHOT_3.jpg" alt="TimeCam screenshot 3" loading="lazy" />
              </button>
              <button className="gallery-item" type="button" data-lightbox="/images/SCREENSHOT_4.jpg" role="listitem">
                <img src="/images/SCREENSHOT_4.jpg" alt="TimeCam screenshot 4" loading="lazy" />
              </button>
              <button className="gallery-item" type="button" data-lightbox="/images/SCREENSHOT_5.jpg" role="listitem">
                <img src="/images/SCREENSHOT_5.jpg" alt="TimeCam screenshot 5" loading="lazy" />
              </button>
            </div>
          </div>
        </section>

        <section className="section" id="how-it-works">
          <div className="container">
            <div className="section-head">
              <h2>How it works</h2>
              <p className="muted">Three steps from capture to time slice.</p>
            </div>
            <div className="card-grid">
              <article className="card reveal">
                <h3>1. Capture</h3>
                <img className="step-media" src="/images/CaptureImage.png" alt="Capture a scene" />
                <p className="muted">Take or upload a photo of a place or scene.</p>
              </article>
              <article className="card reveal">
                <h3>2. Choose an era</h3>
                <img className="step-media" src="/images/PickEra.png" alt="Pick an era" />
                <p className="muted">Pick a year or suggested historic moment with the timeline.</p>
              </article>
              <article className="card reveal">
                <h3>3. Generate &amp; save</h3>
                <img className="step-media" src="/images/GenAndSave.png" alt="Generate and save" />
                <p className="muted">Create your time slice, save to Memories, and share or export.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="features">
          <div className="container">
            <div className="section-head">
              <h2>Features built for curious minds</h2>
              <p className="muted">Photorealistic time travel with pro controls and cinematic output.</p>
            </div>
            <div className="feature-grid">
              <article className="card reveal">
                <h3>Photorealistic time travel</h3>
                <p className="muted">Transform a real photo into a historically plausible scene.</p>
              </article>
              <article className="card reveal">
                <h3>Composition-preserving results</h3>
                <p className="muted">Keeps framing, perspective, and scene layout intact.</p>
              </article>
              <article className="card reveal">
                <h3>Era picker (past + future)</h3>
                <p className="muted">Choose curated historical eras or optional future looks.</p>
              </article>
              <article className="card reveal">
                <h3>Memories timeline</h3>
                <p className="muted">Save multiple time slices into a Memory and scroll through eras.</p>
              </article>
              <article className="card reveal">
                <h3>Suggested dates</h3>
                <p className="muted">Get quick era ideas when you are not sure where to start.</p>
              </article>
              <article className="card reveal">
                <h3>Private by design</h3>
                <p className="muted">
                  Your images stay yours. <Link href="/privacy">Read the privacy policy</Link>.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <h2>Explore and Scan</h2>
              <p className="muted">Guided time travel when you want meaningful moments.</p>
            </div>
            <div className="card-stack">
              <article className="card reveal explore-card">
                <h3>Explore</h3>
                <img className="explore-media" src="/images/Promo2.png" alt="Explore mode preview" />
                <p className="muted">History isn’t behind you anymore. It’s right where you’re standing.</p>
                <p className="muted">
                  Explore lets you uncover historic moments of real significance exactly where they happened. Walk the
                  streets, fields, and landmarks around you and watch the past unfold live in front of your eyes.
                </p>
                <p className="muted">
                  Stand on the ground where history was made. Travel back in time, witness pivotal moments as they
                  happened, and experience the past layered seamlessly over the present. No textbooks. No timelines.
                  Just you, standing there, watching history happen.
                </p>
                <p className="muted">This isn’t reading about the past. It’s stepping into it.</p>
              </article>
              <article className="card reveal scan-card">
                <h3>Scan</h3>
                <img className="scan-media" src="/images/TimeCamScan.png" alt="Scan mode preview" />
                <p className="muted">
                  Scan analyzes your photo and reveals historic dates and moments you can generate from. With one tap,
                  it pulls out a short list of meaningful time-travel suggestions with quick summaries, so you can pick
                  an event and instantly create a matching time slice with no research required.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <h2>Advanced controls</h2>
              <p className="muted">Fine-tune how your time slice is generated.</p>
            </div>
            <div className="card">
              <ul className="list">
                <li>Keep original people (preserve identity and pose, update clothing to match the era)</li>
                <li>Remove people cleanly or add era-appropriate people when none are present</li>
                <li>Population density controls (empty → crowded)</li>
                <li>Era fidelity modes (more accurate vs more creative)</li>
                <li>Lighting and time-of-day controls</li>
                <li>Building preservation options for architecture-heavy scenes</li>
                <li>Multiple AI photo models: Nano Banana, Nano Banana Pro, SeaDream 4.5</li>
              </ul>
            </div>
          </div>
        </section>

        <EraTimeline />

        <section className="section" id="pricing">
          <div className="container">
            <div className="section-head">
              <h2>Pricing that scales with curiosity</h2>
              <p className="muted">Prices shown in-app. Subscriptions and top-ups available.</p>
            </div>
            <div className="pricing-grid">
              <article className="card reveal">
                <h3>Starter</h3>
                <p className="price">£4.99/mo</p>
                <ul className="list">
                  <li>150 credits per month</li>
                  <li>Standard rendering</li>
                  <li>Watermark-free exports</li>
                </ul>
              </article>
              <article className="card featured reveal">
                <div className="badge">Most popular</div>
                <h3>Creator</h3>
                <p className="price">£9.99/mo</p>
                <ul className="list">
                  <li>500 credits per month</li>
                  <li>High-resolution exports</li>
                  <li>Priority processing</li>
                </ul>
              </article>
              <article className="card reveal">
                <h3>Pro</h3>
                <p className="price">£49.99/mo</p>
                <ul className="list">
                  <li>2,500 credits per month</li>
                  <li>Batch exports</li>
                  <li>Extended era library</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section faq-teaser">
          <div className="container">
            <div className="section-head">
              <h2>Questions, answered</h2>
              <p className="muted">Get quick clarity, then dive deeper in the help centre.</p>
            </div>
            <div className="card-grid">
              <article className="card">
                <h3>How private is TimeCam?</h3>
                <p className="muted">Your images are processed only to deliver your result.</p>
              </article>
              <article className="card">
                <h3>Can I export a video?</h3>
                <p className="muted">Yes, generate timelines, reveals, or montages.</p>
              </article>
              <article className="card">
                <h3>Where do I manage subscriptions?</h3>
                <p className="muted">All billing is handled through the App Store.</p>
              </article>
            </div>
            <Link className="button secondary" href="/support#faq">
              Read the full FAQ
            </Link>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <h2>Use cases</h2>
              <p className="muted">Made for real places and then vs now storytelling.</p>
            </div>
            <div className="card">
              <ul className="list">
                <li>Recreate a street corner in the 1920s</li>
                <li>See a modern skyline before it existed</li>
                <li>Turn a landmark into a then vs now series</li>
                <li>Make a timeline Memory from a trip</li>
                <li>Generate a shareable montage for social</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section final-cta">
          <div className="container cta-panel">
            <div>
              <h2>Bring the past to life in your camera roll.</h2>
              <p className="muted">Download TimeCam and start exploring eras today.</p>
            </div>
            <a className="button" href="https://apps.apple.com">
              Download on the App Store
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <span className="brand-name">TimeCam</span>
            <p className="muted">
              Support: <a href="mailto:support@timecam.ai">support@timecam.ai</a>
            </p>
          </div>
          <div className="footer-links">
            <Link href="/support#faq">FAQ</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
          <div className="muted">© <span id="year"></span> TimeCam</div>
        </div>
      </footer>

      <div className="modal" id="demoModal" aria-hidden="true" role="dialog" aria-label="TimeCam demo video">
        <div className="modal-card">
          <div className="modal-header">
            <h3>TimeCam demo</h3>
            <button className="icon-button" type="button" data-modal-close="demo" aria-label="Close demo">×</button>
          </div>
          <div className="modal-body">
            <div className="video-placeholder" aria-hidden="true">
              <div className="play-ring"></div>
              <span>Demo video placeholder</span>
            </div>
          </div>
        </div>
      </div>

      <div className="lightbox" id="lightbox" aria-hidden="true" role="dialog" aria-label="Screenshot preview">
        <button className="lightbox-backdrop" type="button" data-lightbox-close aria-label="Close screenshot"></button>
        <div className="lightbox-card">
          <button className="icon-button" type="button" data-lightbox-close aria-label="Close preview">×</button>
          <img src="" alt="" id="lightboxImage" />
        </div>
      </div>
    </>
  );
}
