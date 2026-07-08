import WaitlistForm from "./WaitlistForm";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <a className="brand-mark footer-brand" href="/">
            ORÉVIA
          </a>
          <p>
            Luxury in simplicity. Designed in Sydney, edited with a Parisian
            sense of restraint.
          </p>
          <div className="footer-signature" aria-label="Maison signatures">
            <span>Private previews</span>
            <span>Considered materials</span>
            <span>Quiet client care</span>
          </div>
        </div>

        <nav aria-label="Footer collection links">
          <h2>The Maison</h2>
          <a href="/shop">The Collection</a>
          <a href="/collections">Collections</a>
          <a href="/about-orevia">About ORÉVIA</a>
          <a href="/contact">Contact</a>
        </nav>

        <div>
          <h2>Private previews</h2>
          <p>
            Collection notes, atelier details, and first access from the maison.
          </p>
          <WaitlistForm compact id="footer-email" />
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 ORÉVIA. All rights reserved.</span>
        <a href="mailto:info@oreviaclothing.com">info@oreviaclothing.com</a>
      </div>
    </footer>
  );
}
