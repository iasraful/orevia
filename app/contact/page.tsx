import WaitlistForm from "../components/WaitlistForm";

export const metadata = {
  title: "Correspondence — ORÉVIA",
  description: "Contact the maison for private fittings, launch inquiries, and editorial collaborations.",
};

export default function ContactPage() {
  return (
    <div className="shell section-air">
      <div style={{ marginBottom: "4rem" }}>
        <p className="eyebrow">Correspondence</p>
        <h1 style={{ marginBottom: "1.5rem" }}>Speak with the maison.</h1>
        <p
          style={{
            fontSize: "1.05rem",
            color: "var(--muted)",
            maxWidth: "600px",
            lineHeight: "1.8",
          }}
        >
          For private launch access, styling questions, or editorial enquiries, write to ORÉVIA directly.
        </p>
      </div>

      <div className="contact-split">
        {/* Left Side: Contact Info */}
        <div className="contact-info">
          <h2>Client care</h2>
          <a className="contact-email" href="mailto:info@oreviaclothing.com">
            info@oreviaclothing.com
          </a>
          <p className="contact-address">Sydney, Australia</p>

          <div className="contact-links">
            <a href="#private-fittings">Private fittings by request</a>
            <a href="#availability">Launch availability correspondence</a>
            <a href="#editorial">Editorial and styling enquiries</a>
          </div>
        </div>

        {/* Right Side: Mailing list signup */}
        <div className="contact-form-panel">
          <h2>Private launch list</h2>
          <p>
            Receive the debut collection preview and priority access before the public opening.
          </p>
          <WaitlistForm id="contact-email" />
        </div>
      </div>
    </div>
  );
}
