import WaitlistForm from "../components/WaitlistForm";

export const metadata = {
  title: "Correspondence — ORÉVIA",
  description: "Contact the maison for private fittings, launch inquiries, and editorial collaborations.",
};

export default function ContactPage() {
  return (
    <div className="page-shell">
      <div className="page-hero">
        <p className="eyebrow">Correspondence</p>
        <h1>Speak with the maison.</h1>
        <p>
          For private launch access, styling questions, or editorial enquiries, write to ORÉVIA directly.
        </p>
      </div>

      <div className="contact-grid">
        {/* Left column: Client Care */}
        <div className="contact-block">
          <h2>Client care</h2>
          <a href="mailto:info@oreviaclothing.com">info@oreviaclothing.com</a>
          <p style={{ marginTop: "12px", color: "var(--taupe)", fontSize: "14px" }}>
            Sydney, Australia
          </p>

          <div className="contact-services">
            <a href="#private-fittings">Private fittings by request</a>
            <a href="#availability">Launch availability correspondence</a>
            <a href="#editorial">Editorial and styling enquiries</a>
          </div>
        </div>

        {/* Right column: Private launch list */}
        <div className="contact-block">
          <h2>Private launch list</h2>
          <p style={{ marginBlock: "18px 24px", color: "var(--espresso)", fontSize: "16px" }}>
            Receive the debut collection preview and priority access before the public opening.
          </p>
          <WaitlistForm id="contact-email" />
        </div>
      </div>
    </div>
  );
}
