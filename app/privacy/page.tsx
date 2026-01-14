import Link from "next/link";

export default function PrivacyPage() {
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
            <Link href="/privacy" className="nav-link is-active">Privacy</Link>
          </nav>
          <a className="button nav-cta" href="https://apps.apple.com">
            Download on the App Store
          </a>
        </div>
      </header>

      <main className="container">
        <section className="hero compact">
          <p className="eyebrow">Privacy</p>
          <h1>Privacy Policy for TimeCam</h1>
          <p className="fineprint muted">
            Effective Date: <span id="lastUpdated">[Insert date]</span>
          </p>
        </section>

        <section className="section card">
          <p className="muted">
            TimeCam ("we", "our", or "us") respects your privacy and is committed to protecting it. This Privacy Policy explains
            how we collect, use, and safeguard your information when you use the TimeCam mobile application ("the App").
          </p>
          <p className="muted">By using TimeCam, you agree to the practices described in this Privacy Policy.</p>
        </section>

        <section className="section card">
          <h2>1. Information we collect</h2>
          <h3>a. Personal Information</h3>
          <p className="muted">
            We do not require users to provide personal information such as names, addresses, or phone numbers to use TimeCam.
          </p>
          <p className="muted">
            If you contact us directly (for example, via email for support), we may receive information such as your email address
            and the content of your message. This information is used only to respond to your enquiry.
          </p>

          <h3>b. User Content (Photos and Media)</h3>
          <ul className="list">
            <li>TimeCam allows users to upload images or media for processing.</li>
            <li>Uploaded images are used solely to perform the requested function.</li>
            <li>Images are not reviewed by humans.</li>
            <li>Images are not sold or shared.</li>
            <li>Images are not used for advertising or training purposes.</li>
            <li>Uploaded media may be temporarily processed by third-party AI services strictly to generate the requested output.</li>
          </ul>

          <h3>c. Automatically Collected Information</h3>
          <p className="muted">We may collect limited, non-identifiable technical data, such as:</p>
          <ul className="list">
            <li>Device type and operating system</li>
            <li>App version</li>
            <li>Crash logs and performance diagnostics</li>
          </ul>
          <p className="muted">
            This information is used only to improve app stability and performance and does not identify you personally.
          </p>
        </section>

        <section className="section card">
          <h2>2. How we use information</h2>
          <p className="muted">We use information only to:</p>
          <ul className="list">
            <li>Provide and operate the app’s features</li>
            <li>Process user-requested image generation or transformations</li>
            <li>Improve app performance and reliability</li>
            <li>Respond to user support requests</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p className="muted">We do not use your data for advertising, profiling, or tracking across apps or websites.</p>
        </section>

        <section className="section card">
          <h2>3. Third-party services</h2>
          <p className="muted">TimeCam may use trusted third-party services to perform core app functions, including:</p>
          <ul className="list">
            <li>Image and media processing</li>
            <li>Cloud infrastructure</li>
            <li>Analytics strictly related to app performance (not advertising)</li>
          </ul>
          <p className="muted">
            These services are only given the minimum data required to perform their function and are contractually obligated
            to protect your data.
          </p>
        </section>

        <section className="section card">
          <h2>4. Data retention</h2>
          <p className="muted">
            Uploaded images are stored only temporarily and are deleted automatically after processing. Diagnostic and crash data
            is retained only as long as necessary to improve the app. We do not maintain long-term storage of user-generated images.
          </p>
        </section>

        <section className="section card">
          <h2>5. Data sharing</h2>
          <p className="muted">
            We do not sell, rent, or trade your data. We may share data only when required by law, to protect our legal rights,
            or to operate essential app services as described above.
          </p>
        </section>

        <section className="section card">
          <h2>6. Children’s privacy</h2>
          <p className="muted">
            TimeCam is not intended for use by children under the age of 13. We do not knowingly collect personal data from children.
            If you believe a child has provided us with personal information, please contact us so we can remove it.
          </p>
        </section>

        <section className="section card">
          <h2>7. Security</h2>
          <p className="muted">
            We take reasonable and appropriate measures to protect your information, including secure data transmission, limited data
            access, and use of reputable infrastructure providers. However, no method of transmission or storage is 100% secure, and we
            cannot guarantee absolute security.
          </p>
        </section>

        <section className="section card">
          <h2>8. Your rights</h2>
          <p className="muted">
            Depending on your location, you may have rights to request access to any personal data we hold, request correction or
            deletion of personal data, or withdraw consent where applicable. You can exercise these rights by contacting us.
          </p>
        </section>

        <section className="section card">
          <h2>9. Changes to this policy</h2>
          <p className="muted">
            We may update this Privacy Policy from time to time. Any changes will be posted within the app or on our website, and the
            effective date will be updated accordingly. Continued use of TimeCam after changes means you accept the updated policy.
          </p>
        </section>

        <section className="section card">
          <h2>10. Contact us</h2>
          <p className="muted">
            If you have any questions or concerns about this Privacy Policy, you can contact us at:
          </p>
          <ul className="list">
            <li>Email: <span className="mono" id="supportEmailText">support@timecam.ai</span></li>
            <li>Company: TimeCam</li>
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
            <Link href="/">Home</Link>
          </div>
          <div className="muted">© <span id="year"></span> TimeCam</div>
        </div>
      </footer>
    </>
  );
}
