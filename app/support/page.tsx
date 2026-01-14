import Link from "next/link";

export default function SupportPage() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href="/" aria-label="TimeCam home">
            <img className="brand-logo" src="/images/TimeCamTextLOGO.png" alt="TimeCam" />
            <span className="brand-name">TimeCam</span>
          </Link>
          <nav className="nav">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/support" className="nav-link is-active">Support</Link>
            <Link href="/privacy" className="nav-link">Privacy</Link>
          </nav>
          <a className="button nav-cta" href="https://apps.apple.com">
            Download on the App Store
          </a>
        </div>
      </header>

      <main className="container">
        <section className="hero compact">
          <p className="eyebrow">Support centre</p>
          <h1>Support</h1>
          <p className="muted">
            Get help with TimeCam, subscriptions, credits, and troubleshooting.
          </p>
          <div className="hero-actions">
            <a className="button" id="contactEmailLink" href="#">Email support</a>
            <a className="button secondary" href="#faq">FAQs</a>
          </div>
          <p className="fineprint muted">
            Support email: <span className="mono" id="supportEmailText">support@example.com</span>
          </p>
        </section>

        <section className="card-grid">
          <article className="card">
            <h2>Billing and subscriptions</h2>
            <ul className="list">
              <li>Subscriptions are managed by Apple (App Store).</li>
              <li>To cancel: iPhone Settings → Apple ID → Subscriptions.</li>
              <li>Top-ups are one-time purchases.</li>
            </ul>
          </article>

          <article className="card">
            <h2>Credits</h2>
            <ul className="list">
              <li>Credits are used to generate images and videos.</li>
              <li>Use your coupon code in the Credits screen to redeem test credits (if provided).</li>
            </ul>
          </article>

          <article className="card">
            <h2>Common issues</h2>
            <ul className="list">
              <li>If purchases are not showing, confirm you are signed into the App Store and have network connectivity.</li>
              <li>If credits do not update, open Credits and refresh the balance.</li>
            </ul>
          </article>
        </section>

        <section id="faq" className="section">
          <h2>FAQs</h2>

          <details className="faq">
            <summary>My subscriptions or top-ups do not appear in the app.</summary>
            <div className="faq-body">
              <p>
                This is usually caused by App Store Connect products still being in Draft,
                a mismatch between product IDs, or testing on simulator without StoreKit config.
              </p>
            </div>
          </details>

          <details className="faq">
            <summary>I purchased but did not receive credits.</summary>
            <div className="faq-body">
              <p>
                Please wait a moment and tap “Refresh balance”. If it still does not update, email support with:
              </p>
              <ul className="list">
                <li>Your Account ID (shown in Credits)</li>
                <li>Time of purchase</li>
                <li>Product purchased (Starter, Creator, Pro, or top-up amount)</li>
              </ul>
            </div>
          </details>

          <details className="faq">
            <summary>How do I request deletion of my data?</summary>
            <div className="faq-body">
              <p>Email support and we will help. See the Privacy page for details.</p>
            </div>
          </details>
        </section>

        <section className="section">
          <h2>Contact</h2>
          <p className="muted">
            Email is the fastest way to reach us. Please include your Account ID and device model or iOS version if relevant.
          </p>
          <div className="card">
            <p><strong>Email:</strong> <span className="mono" id="supportEmailText2">support@example.com</span></p>
            <p className="muted">
              <strong>Business hours:</strong> Mon–Fri (we reply as quickly as possible).
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <span className="brand-name">TimeCam</span>
            <p className="muted">Support: <a href="mailto:support@timecam.ai">support@timecam.ai</a></p>
          </div>
          <div className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
          <div className="muted">© <span id="year"></span> TimeCam</div>
        </div>
      </footer>
    </>
  );
}
