import Link from "next/link";

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
              <p className="eyebrow">History camera for iPhone</p>
              <h1>See what this place looked like decades ago.</h1>
              <p className="muted">
                TimeCam reimagines the past in the present. Capture a scene, travel through eras with a timeline, and
                reveal cinematic before and after views you can share instantly.
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
              <p className="muted">Three steps from snapshot to time-travel reveal.</p>
            </div>
            <div className="card-grid">
              <article className="card reveal">
                <h3>1. Take a photo</h3>
                <p className="muted">Capture a place, landmark, or street scene in the present.</p>
              </article>
              <article className="card reveal">
                <h3>2. Choose an era</h3>
                <p className="muted">Scroll a timeline or tap an era to reimagine the scene across time.</p>
              </article>
              <article className="card reveal">
                <h3>3. Reveal and share</h3>
                <p className="muted">Slide between then and now, export, and share in seconds.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="features">
          <div className="container">
            <div className="section-head">
              <h2>Features built for curious minds</h2>
              <p className="muted">A cinematic toolkit that keeps control in your hands.</p>
            </div>
            <div className="feature-grid">
              <article className="card reveal">
                <h3>Era timeline</h3>
                <p className="muted">Move through decades with a smooth slider that keeps history in view.</p>
              </article>
              <article className="card reveal">
                <h3>Before and after reveal</h3>
                <p className="muted">Compare the present with a reimagined past using a dynamic split view.</p>
              </article>
              <article className="card reveal">
                <h3>Location-aware scenes</h3>
                <p className="muted">TimeCam tailors outputs to the place you capture, without promising perfect accuracy.</p>
              </article>
              <article className="card reveal">
                <h3>Share and export</h3>
                <p className="muted">Save stunning stills or videos for social, stories, or personal archives.</p>
              </article>
              <article className="card reveal">
                <h3>Personal memories</h3>
                <p className="muted">Build a private timeline of places that matter to you.</p>
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

        <section className="section" id="eras">
          <div className="container era-section">
            <div>
              <div className="section-head">
                <h2>Pick an era</h2>
                <p className="muted">Tap an era and watch the preview update.</p>
              </div>
              <div className="era-chips" role="list">
                <button className="chip is-active" type="button" data-era="Victorian" role="listitem">Victorian</button>
                <button className="chip" type="button" data-era="1920s" role="listitem">1920s</button>
                <button className="chip" type="button" data-era="1970s" role="listitem">1970s</button>
                <button className="chip" type="button" data-era="1990s" role="listitem">1990s</button>
                <button className="chip" type="button" data-era="Medieval" role="listitem">Medieval</button>
                <button className="chip" type="button" data-era="Ancient" role="listitem">Ancient</button>
                <button className="chip" type="button" data-era="Future" role="listitem">Future</button>
              </div>
            </div>
            <div className="era-preview card">
              <p className="muted">Previewing</p>
              <h3 id="eraLabel">Victorian</h3>
              <p className="muted">A curated reimagining of your scene, tuned to the chosen era.</p>
            </div>
          </div>
        </section>

        <section className="section" id="pricing">
          <div className="container">
            <div className="section-head">
              <h2>Pricing that scales with curiosity</h2>
              <p className="muted">Prices shown in-app. Subscriptions and top-ups available.</p>
            </div>
            <div className="pricing-grid">
              <article className="card reveal">
                <h3>Starter</h3>
                <p className="price">£4.99</p>
                <ul className="list">
                  <li>120 credits</li>
                  <li>Standard rendering</li>
                  <li>Watermark-free exports</li>
                </ul>
              </article>
              <article className="card featured reveal">
                <div className="badge">Most popular</div>
                <h3>Creator</h3>
                <p className="price">£9.99</p>
                <ul className="list">
                  <li>400 credits</li>
                  <li>High-resolution exports</li>
                  <li>Priority processing</li>
                </ul>
              </article>
              <article className="card reveal">
                <h3>Pro</h3>
                <p className="price">£49.99</p>
                <ul className="list">
                  <li>2,500 credits</li>
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
                <p className="muted">Yes, generate clips that compare then and now.</p>
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
