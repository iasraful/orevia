export const metadata = {
  title: "About ORÉVIA — Quiet Luxury Maison",
  description: "Discover the design principles, materials standard, and heritage of ORÉVIA.",
};

export default function AboutPage() {
  return (
    <div className="shell section-air">
      <div className="about-split">
        <div className="about-content">
          <p className="eyebrow">Brand Story</p>
          <h2>For the woman, not the room.</h2>

          <div className="about-paragraphs">
            <p>
              She dresses for herself. Her wardrobe is edited, expressive, and deeply personal. ORÉVIA is made to accompany that life quietly, beautifully, and for years.
            </p>
            <p>
              Each piece is approached through proportion, movement, and touch: a precise shoulder, a softened drape, a line that holds its value through wear.
            </p>
          </div>

          <div className="about-pillars">
            <span>Restraint over excess</span>
            <span>Material before ornament</span>
            <span>Presence without noise</span>
          </div>

          <div>
            <a className="btn-primary" href="/shop">
              Explore the collection
            </a>
          </div>
        </div>

        <div className="about-image">
          <img
            src="/orevia-dress-editorial-colonnade-clean.jpg"
            alt="ORÉVIA evening silk drape styling"
          />
        </div>
      </div>
    </div>
  );
}
