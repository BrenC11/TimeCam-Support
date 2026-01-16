import Link from "next/link";

export default function TermsPage() {
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
            <Link href="/support" className="nav-link">Support</Link>
            <Link href="/privacy" className="nav-link">Privacy</Link>
            <Link href="/terms" className="nav-link is-active">Terms</Link>
          </nav>
          <a className="button nav-cta" href="https://apps.apple.com">
            Download on the App Store
          </a>
        </div>
      </header>

      <main className="container">
        <section className="hero compact">
          <p className="eyebrow">Terms</p>
          <h1>TimeCam – Terms of Use (EULA)</h1>
          <p className="fineprint muted">
            Last updated: <span id="termsUpdated">[Insert date]</span>
          </p>
        </section>

        <section className="section card">
          <p className="muted">
            These Terms of Use (“Terms”) constitute a legally binding agreement between you (“User”, “you”) and TimeCam
            (“we”, “us”, “our”) governing your use of the TimeCam mobile application, website, and related services
            (collectively, the “Service”).
          </p>
          <p className="muted">
            By downloading, accessing, or using TimeCam, you agree to be bound by these Terms. If you do not agree, do not
            use the Service.
          </p>
        </section>

        <section className="section card">
          <h2>1. Description of the Service</h2>
          <p className="muted">
            TimeCam is an AI-powered application that allows users to generate historical, speculative, or future-themed
            visual content based on photographs, locations, and user input. Outputs are artistic, interpretive, and
            illustrative in nature and are not guaranteed to be historically, geographically, or factually accurate.
          </p>
        </section>

        <section className="section card">
          <h2>2. Eligibility</h2>
          <p className="muted">
            You must be at least 13 years old to use TimeCam. If you are under 18, you must have permission from a parent
            or legal guardian.
          </p>
        </section>

        <section className="section card">
          <h2>3. User Accounts</h2>
          <p className="muted">
            You are responsible for maintaining the confidentiality of your account and for all activity that occurs under
            your account. You agree to provide accurate and complete information and to keep it up to date.
          </p>
          <p className="muted">We reserve the right to suspend or terminate accounts that violate these Terms.</p>
        </section>

        <section className="section card">
          <h2>4. Credits, Payments &amp; Subscriptions</h2>
          <p className="muted">Certain features of TimeCam require credits, in-app purchases, or subscriptions.</p>
          <ul className="list">
            <li>Credits have no cash value</li>
            <li>Credits are non-refundable, except where required by law</li>
            <li>Unused credits may expire depending on your plan</li>
            <li>Subscriptions renew automatically unless cancelled via your App Store settings</li>
          </ul>
          <p className="muted">Prices and features may change at any time.</p>
        </section>

        <section className="section card">
          <h2>5. Acceptable Use</h2>
          <p className="muted">You agree not to use TimeCam to:</p>
          <ul className="list">
            <li>Generate illegal, harmful, abusive, or exploitative content</li>
            <li>Violate the rights of others (privacy, publicity, copyright)</li>
            <li>Misrepresent AI-generated content as factual evidence</li>
            <li>Attempt to reverse engineer, scrape, or abuse the Service</li>
            <li>Circumvent credit systems or security measures</li>
          </ul>
          <p className="muted">We reserve the right to remove content or restrict access at our sole discretion.</p>
        </section>

        <section className="section card">
          <h2>6. AI-Generated Content Disclaimer</h2>
          <p className="muted">TimeCam uses artificial intelligence models to generate images and media.</p>
          <p className="muted">You acknowledge that:</p>
          <ul className="list">
            <li>Outputs may be inaccurate, fictional, or misleading</li>
            <li>Generated content does not represent real historical proof</li>
            <li>Outputs should not be relied upon for legal, academic, medical, or professional purposes</li>
            <li>Results may vary and are not guaranteed</li>
          </ul>
          <p className="muted">You use AI-generated content at your own risk.</p>
        </section>

        <section className="section card">
          <h2>7. Intellectual Property</h2>
          <h3>Your Content</h3>
          <p className="muted">You retain ownership of images you upload.</p>
          <p className="muted">
            By using TimeCam, you grant us a non-exclusive, worldwide, royalty-free license to process your content solely
            to operate and improve the Service.
          </p>
          <h3>Generated Content</h3>
          <p className="muted">
            Unless otherwise stated, you may use AI-generated images for personal and commercial use, subject to:
          </p>
          <ul className="list">
            <li>These Terms</li>
            <li>Applicable laws</li>
            <li>Third-party platform rules</li>
          </ul>
          <p className="muted">We make no guarantee of exclusivity for generated outputs.</p>
        </section>

        <section className="section card">
          <h2>8. Third-Party Services</h2>
          <p className="muted">
            TimeCam relies on third-party AI providers, APIs, and platforms. We are not responsible for outages,
            inaccuracies, or changes caused by these third parties.
          </p>
        </section>

        <section className="section card">
          <h2>9. Termination</h2>
          <p className="muted">
            We may suspend or terminate your access at any time if you violate these Terms or misuse the Service.
          </p>
          <p className="muted">Upon termination, your right to use the Service ceases immediately.</p>
        </section>

        <section className="section card">
          <h2>10. Limitation of Liability</h2>
          <p className="muted">
            To the maximum extent permitted by law: TimeCam shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages, including loss of data, profits, or business opportunities arising from
            your use of the Service. Use of TimeCam is provided “as is” and “as available.”
          </p>
        </section>

        <section className="section card">
          <h2>11. Indemnification</h2>
          <p className="muted">You agree to indemnify and hold harmless TimeCam from any claims, damages, losses, or expenses arising from:</p>
          <ul className="list">
            <li>Your use of the Service</li>
            <li>Your content</li>
            <li>Your violation of these Terms or applicable laws</li>
          </ul>
        </section>

        <section className="section card">
          <h2>12. Changes to These Terms</h2>
          <p className="muted">We may update these Terms from time to time. Continued use of the Service after changes means you accept the updated Terms.</p>
        </section>

        <section className="section card">
          <h2>13. Governing Law</h2>
          <p className="muted">These Terms are governed by the laws of England and Wales, without regard to conflict of law principles.</p>
        </section>

        <section className="section card">
          <h2>14. Contact</h2>
          <p className="muted">For questions or support, contact:</p>
          <ul className="list">
            <li>Email: support@timecam.ai</li>
            <li>Website: <span className="mono">https://timecam.ai</span></li>
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <span className="brand-name">TimeCam</span>
            <p className="muted">Support: <a href="mailto:support@timecam.ai">support@timecam.ai</a></p>
          </div>
          <div className="footer-links">
            <Link href="/support">Support</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/">Home</Link>
          </div>
          <div className="muted">© <span id="year"></span> TimeCam</div>
        </div>
      </footer>
    </>
  );
}
