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
          Effective Date: <span id="lastUpdated">28 January 2026</span>
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
          <h2>1. Information We Collect</h2>
          <h3>a. Personal Information</h3>
          <p className="muted">
            We do not require users to provide personal information such as names, addresses, or phone numbers to use TimeCam.
          </p>
          <p className="muted">
            If you contact us directly (for example, via email for support), we may receive information such as your email address
            and the content of your message. This information is used solely to respond to your enquiry and is not used for marketing
            or advertising purposes.
          </p>

          <h3>b. User Content (Photos and Media)</h3>
          <p className="muted">TimeCam allows users to upload or capture images and other media for processing.</p>
          <ul className="list">
            <li>Uploaded images are used only to perform the function explicitly requested by the user.</li>
            <li>Images are not reviewed by humans.</li>
            <li>Images are not sold, shared, or published.</li>
            <li>Images are not used for advertising, profiling, or training proprietary AI models.</li>
            <li>Uploaded media may be temporarily processed by third-party AI services, including FAL.ai, strictly to generate the requested output.</li>
          </ul>

          <h3>c. Face Data</h3>
          <p className="muted">User-submitted images may contain a human face. Face data is handled with particular care.</p>
          <ul className="list">
            <li>The App does not perform facial recognition, biometric identification, face tracking, or face analysis.</li>
            <li>The App does not extract facial landmarks, create biometric identifiers, or identify individuals.</li>
            <li>Face data is used solely to generate image outputs requested by the user.</li>
            <li>Face data is not used for authentication, advertising, analytics, profiling, or tracking.</li>
          </ul>
          <p className="muted">
            Images containing face data may be transmitted to third-party AI service providers (such as FAL.ai) only for the purpose of
            processing the image request. These providers process data transiently and are contractually prohibited from using it for any
            other purpose.
          </p>

          <h3>d. Automatically Collected Information</h3>
          <p className="muted">We may collect limited, non-identifiable technical data, including:</p>
          <ul className="list">
            <li>Device type and operating system</li>
            <li>App version</li>
            <li>Crash logs and performance diagnostics</li>
          </ul>
          <p className="muted">
            This information is used solely to improve app stability, performance, and reliability and does not identify individual users.
          </p>
        </section>

        <section className="section card">
          <h2>2. How We Use Information</h2>
          <p className="muted">We use information only to:</p>
          <ul className="list">
            <li>Provide and operate the App’s features</li>
            <li>Process user-requested image generation or transformations</li>
            <li>Improve app performance and reliability</li>
            <li>Respond to user support requests</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p className="muted">We do not use your data for advertising, behavioral tracking, or cross-app profiling.</p>
        </section>

        <section className="section card">
          <h2>3. Third-Party Services</h2>
          <p className="muted">TimeCam uses trusted third-party services to operate core app functionality, including:</p>
          <ul className="list">
            <li>Image and media processing (e.g. FAL.ai)</li>
            <li>Secure cloud infrastructure</li>
            <li>App performance and crash diagnostics (non-advertising)</li>
          </ul>
          <p className="muted">
            These services receive only the minimum data required to perform their function and are contractually obligated to protect user
            data and comply with applicable privacy laws.
          </p>
        </section>

        <section className="section card">
          <h2>4. Data Retention</h2>
          <ul className="list">
            <li>Uploaded images, including those containing face data, are stored only temporarily and are automatically deleted after processing.</li>
            <li>We do not maintain long-term storage of user-generated images.</li>
            <li>Diagnostic and crash data is retained only for as long as necessary to improve app performance and stability.</li>
          </ul>
        </section>

        <section className="section card">
          <h2>5. Data Sharing</h2>
          <p className="muted">We do not sell, rent, or trade your data.</p>
          <p className="muted">Data may be shared only:</p>
          <ul className="list">
            <li>To operate essential app services as described above</li>
            <li>When required by law</li>
            <li>To protect our legal rights or comply with legal obligations</li>
          </ul>
        </section>

        <section className="section card">
          <h2>6. Children’s Privacy</h2>
          <p className="muted">
            TimeCam is not intended for use by children under the age of 13. We do not knowingly collect personal data from children.
            If you believe a child has provided us with personal information, please contact us so we can remove it promptly.
          </p>
        </section>

        <section className="section card">
          <h2>7. Security</h2>
          <p className="muted">
            We implement reasonable and appropriate technical and organizational measures to protect user information, including secure data
            transmission, restricted access, and the use of reputable infrastructure providers.
          </p>
          <p className="muted">
            However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="section card">
          <h2>8. Your Rights</h2>
          <p className="muted">Depending on your location, you may have rights to:</p>
          <ul className="list">
            <li>Request access to personal data we hold</li>
            <li>Request correction or deletion of personal data</li>
            <li>Withdraw consent where applicable</li>
          </ul>
          <p className="muted">You can exercise these rights by contacting us using the details below.</p>
        </section>

        <section className="section card">
          <h2>9. Changes to This Policy</h2>
          <p className="muted">
            We may update this Privacy Policy from time to time. Any changes will be posted within the App or on our website, and the
            effective date will be updated.
          </p>
          <p className="muted">Continued use of TimeCam after changes take effect constitutes acceptance of the updated policy.</p>
        </section>

        <section className="section card">
          <h2>10. Contact Us</h2>
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
            <Link href="/terms">Terms</Link>
          </div>
          <div className="muted">© <span id="year"></span> TimeCam</div>
        </div>
      </footer>
    </>
  );
}
