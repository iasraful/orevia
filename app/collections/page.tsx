export const metadata = {
  title: "Collections — ORÉVIA",
  description: "Explore our capsule edits built around precise tailoring, fluid essentials, and after-dark silhouettes.",
};

export default function CollectionsPage() {
  return (
    <div className="page-shell">
      <div className="page-hero">
        <p className="eyebrow">Capsule Edits</p>
        <h1>Collections for a considered wardrobe.</h1>
        <p>
          Each edit is arranged around proportion, movement, and the quiet usefulness of beautiful pieces.
        </p>
      </div>

      <div className="collection-list">
        {/* Collection 1: The Atelier Edit */}
        <div className="collection-row" id="the-atelier-edit">
          <img
            src="/orevia-blazer-model-editorial-clean.jpg"
            alt="The Atelier Edit"
          />
          <div>
            <div className="collection-meta">
              2 Pieces · Private Preview · Atelier Notes Included
            </div>
            <h2>The Atelier Edit</h2>
            <p>
              Sculptural tailoring, liquid silks, and the pieces that make a wardrobe feel composed. Designed to hold presence without effort.
            </p>
            <div className="collection-product-links">
              <a href="/products/the-tailored-blazer">The Tailored Blazer</a>
              <a href="/products/the-longline-coat">The Longline Coat</a>
            </div>
          </div>
        </div>

        {/* Collection 2: Enduring Essentials */}
        <div className="collection-row" id="enduring-essentials">
          <img
            src="/orevia-atelier-rail.png"
            alt="Enduring Essentials"
          />
          <div>
            <div className="collection-meta">
              2 Pieces · Private Preview · Atelier Notes Included
            </div>
            <h2>Enduring Essentials</h2>
            <p>
              The quiet foundations: ivory silk, softened knitwear, and repeatable elegance. Made to be reached for often and layered seamlessly.
            </p>
            <div className="collection-product-links">
              <a href="/products/the-silk-blouse">The Silk Blouse</a>
              <a href="/products/the-evening-knit-set">The Evening Knit Set</a>
            </div>
          </div>
        </div>

        {/* Collection 3: Evening */}
        <div className="collection-row" id="evening">
          <img
            src="/orevia-dress-editorial-colonnade-clean.jpg"
            alt="Evening"
          />
          <div>
            <div className="collection-meta">
              1 Piece · Private Preview · Atelier Notes Included
            </div>
            <h2>Evening</h2>
            <p>
              After-dark silhouettes designed for the woman, not the room. Fluid satin slips and structured dresses tailored for movement under candlelight.
            </p>
            <div className="collection-product-links">
              <a href="/products/the-satin-slip-dress">The Satin Slip Dress</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
