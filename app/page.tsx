import ProductCard from "./components/ProductCard";
import WaitlistForm from "./components/WaitlistForm";
import products from "@/data/products.json";

const featured = products.filter((p) => p.featured);
const newArrivals = products.filter((p) => p.newArrival);

const marqueeItems = [
  "Infinity",
  "Crafted for presence",
  "Designed with restraint",
  "Luxury in simplicity",
  "Quiet confidence",
  "Modern femininity",
  "Crafted for presence",
];

export default function Home() {
  return (
    <>
      {/* ── 1. Hero Section ─────────────────────────── */}
      <section className="hero-section">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/ts-video-hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-shade" />
        <div className="shell hero-content">
          <div className="hero-layout">
            <div className="hero-primary">
              <p className="hero-eyebrow">Sydney Atelier · Est. 2024</p>
              <h1>ORÉVIA</h1>
              <p className="hero-line">
                Timeless silhouettes,<br />crafted for quiet confidence.
              </p>
              <p className="hero-copy">
                Refined essentials, sculptural tailoring, and evening pieces
                designed in Australia with a Parisian sense of restraint.
              </p>
              <div className="hero-actions">
                <a className="btn-primary light" href="/shop">
                  Shop the edit
                </a>
                <a className="btn-outline light" href="/#waitlist">
                  Join launch access
                </a>
              </div>
            </div>
            <aside className="hero-meta-panel" aria-label="Launch details">
              <span className="hero-meta-label">Debut capsule 01</span>
              <strong>Sydney atelier preview</strong>
              <p>
                Five quiet-luxury pieces released first to the private list.
              </p>
              <a className="hero-meta-link" href="/#waitlist">
                Request preview access
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </aside>
          </div>
        </div>
        <div className="hero-scroll-hint" aria-hidden="true">
          <span>Scroll</span>
          <div className="hero-scroll-line" />
        </div>
      </section>

      {/* ── 2. Marquee Band ─────────────────────────── */}
      <section className="marquee-band" aria-label="ORÉVIA principles">
        <div>
          {marqueeItems.map((item, i) => (
            <span key={`${item}-${i}`}>{item}</span>
          ))}
          {marqueeItems.map((item, i) => (
            <span key={`${item}-repeat-${i}`} aria-hidden="true">{item}</span>
          ))}
        </div>
      </section>

      {/* ── 3. Intro Section ────────────────────────── */}
      <section className="intro-section section-air">
        <div className="shell intro-grid">
          <div>
            <p className="eyebrow">The house</p>
            <h2>
              Effortless elegance, edited until only the essential remains.
            </h2>
            <div className="intro-divider" />
          </div>
          <div className="intro-body">
            <p>
              ORÉVIA creates refined essentials for modern femininity: fluid
              silks, sculptural tailoring, and evening pieces with a hand-finished
              sensibility. The result is intimate, enduring, and quietly
              expensive.
            </p>
            <a className="link-arrow" href="/about-orevia">
              Our story
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── 4. Atelier Section ──────────────────────── */}
      <section className="atelier-section section-air">
        <div className="shell atelier-grid">
          <div className="atelier-media">
            <img
              src="/orevia-atelier-rail.png"
              alt="ORÉVIA atelier rail with neutral garments"
            />
            <span>Atelier rail, Sydney</span>
          </div>
          <div className="atelier-copy">
            <p className="eyebrow">Atelier standard</p>
            <h2>The feeling of something made with time.</h2>
            <p>
              Each piece is built around proportion, movement, and touch: a soft
              collar roll, a weighted satin line, a shoulder that holds presence
              without effort.
            </p>
            <div className="atelier-standards">
              <div>
                <span>01</span>
                <strong>Quiet materials</strong>
                <p>
                  Silk-touch drape, wool-rich coating, weighted satin, and soft
                  knit texture.
                </p>
              </div>
              <div>
                <span>02</span>
                <strong>Edited construction</strong>
                <p>
                  Clean seams, considered linings, restrained fastenings, and
                  precise proportion.
                </p>
              </div>
              <div>
                <span>03</span>
                <strong>Private correspondence</strong>
                <p>
                  Launch clients receive sizing, styling, and availability notes
                  from the maison.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Featured Products ────────────────────── */}
      <section className="shell section-air">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The edit</p>
            <h2>Featured pieces</h2>
          </div>
          <a className="link-arrow" href="/shop">
            View all{" "}
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className="product-grid four">
          {featured.map((product, i) => (
            <ProductCard key={product.slug} product={product} priority={i < 2} />
          ))}
        </div>
      </section>

      {/* ── 6. Collections Band ─────────────────────── */}
      <section className="collections-band section-air">
        <div className="shell collections-grid">
          <div className="collections-copy">
            <p className="eyebrow warm">Collections</p>
            <h2>A considered wardrobe, piece by piece.</h2>
            <p>
              Capsule edits built around precise tailoring, fluid essentials,
              and after-dark silhouettes.
            </p>
            <a className="btn-outline light" href="/collections">
              Explore collections
            </a>
          </div>
          <div className="collection-cards">
            <a className="collection-card" href="/collections#the-atelier-edit">
              <img src="/orevia-blazer-model-editorial-clean.jpg" alt="The Atelier Edit collection" />
              <span>
                <strong>The Atelier Edit</strong>
                <small>
                  Sculptural tailoring, liquid silks, and the pieces that make a
                  wardrobe feel composed.
                </small>
              </span>
            </a>
            <a className="collection-card" href="/collections#enduring-essentials">
              <img src="/orevia-atelier-rail.png" alt="Enduring Essentials collection" />
              <span>
                <strong>Enduring Essentials</strong>
                <small>
                  The quiet foundations: ivory silk, softened knitwear, and
                  repeatable elegance.
                </small>
              </span>
            </a>
            <a className="collection-card" href="/collections#evening">
              <img src="/orevia-dress-editorial-colonnade-clean.jpg" alt="Evening collection" />
              <span>
                <strong>Evening</strong>
                <small>
                  After-dark silhouettes designed for the woman, not the room.
                </small>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 7. Story Section ────────────────────────── */}
      <section className="story-section shell section-air">
        <div className="story-copy">
          <p className="eyebrow">Quiet confidence</p>
          <h2>A wardrobe that does not announce itself.</h2>
          <p>
            Refined essentials, liquid evening lines, and tailoring with
            presence. Designed to be reached for often, remembered quietly, and
            worn beyond a season.
          </p>
          <a className="link-arrow" href="/about-orevia">
            The house&rsquo;s philosophy
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className="story-images">
          <img src="/orevia-blazer-model-editorial-clean.jpg" alt="ORÉVIA tailoring editorial" />
          <img src="/orevia-dress-editorial-colonnade-clean.jpg" alt="ORÉVIA evening editorial" />
        </div>
      </section>

      {/* ── 8. Clienteling Section ──────────────────── */}
      <section className="clienteling-section section-air">
        <div className="shell clienteling-grid">
          <div>
            <p className="eyebrow warm">Private client care</p>
            <h2>A slower, more personal way to meet a collection.</h2>
          </div>
          <div className="clienteling-list">
            <div>
              <strong>Preview</strong>
              <p>
                Receive the debut lookbook and atelier notes before the public
                opening.
              </p>
            </div>
            <div>
              <strong>Reserve</strong>
              <p>
                Save pieces to your private edit while launch availability is
                confirmed.
              </p>
            </div>
            <div>
              <strong>Correspond</strong>
              <p>
                Ask for proportion, fit, styling, and occasion notes before you
                choose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. New Arrivals ─────────────────────────── */}
      <section className="shell section-air just-in">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Just in</p>
            <h2>New arrivals</h2>
          </div>
          <a className="link-arrow" href="/shop?sort=new">
            View edit{" "}
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className="product-grid three">
          {newArrivals.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* ── 10. Lookbook Section ────────────────────── */}
      <section className="lookbook-section section-air">
        <div className="shell">
          <div className="lookbook-copy">
            <div>
              <p className="eyebrow">Lookbook notes</p>
              <h2>A quiet study in line, light, and movement.</h2>
            </div>
            <p>
              Silk against tailoring. Satin softened by evening light. A
              wardrobe that moves between appointments, dinners, and the private
              rituals of getting dressed.
            </p>
          </div>
          <div className="lookbook-grid">
            <img src="/orevia-dress-editorial-colonnade-clean.jpg" alt="ORÉVIA lookbook dress editorial" />
            <img src="/orevia-blazer-model-editorial-clean.jpg" alt="ORÉVIA tailoring lookbook" />
            <blockquote>
              The strongest pieces are the ones that feel inevitable.
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── 11. Proof Strip ─────────────────────────── */}
      <section className="proof-strip">
        <div>
          <h3>Refined essentials</h3>
          <p>Timeless silhouettes designed with restraint</p>
        </div>
        <div>
          <h3>Atelier detail</h3>
          <p>Considered materials, lining, drape, and proportion</p>
        </div>
        <div>
          <h3>Australian maison</h3>
          <p>Designed in Sydney with a Parisian sensibility</p>
        </div>
        <div>
          <h3>Client care</h3>
          <p>Personal correspondence for launch access</p>
        </div>
      </section>

      {/* ── 12. Waitlist Section ────────────────────── */}
      <section className="waitlist-section section-air" id="waitlist">
        <div className="shell waitlist-card">
          <div>
            <p className="eyebrow">Private launch</p>
            <h2>First access, quietly delivered.</h2>
            <p>
              Join the debut list for collection previews, atelier notes, and
              priority access before the public opening.
            </p>
          </div>
          <WaitlistForm />
        </div>
      </section>
    </>
  );
}
