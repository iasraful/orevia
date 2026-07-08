import ProductCard from "../components/ProductCard";
import products from "@/data/products.json";

export const metadata = {
  title: "Shop ORÉVIA — The Collection",
  description: "A concise wardrobe of silk, tailoring, knitwear, and evening pieces selected for the ORÉVIA debut capsule.",
};

interface ShopPageProps {
  searchParams: Promise<{ sort?: string }>;
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const params = await searchParams;
  const isNewOnly = params.sort === "new";

  // Filter products if 'new' sort is requested, otherwise show all
  const filteredProducts = isNewOnly
    ? products.filter((p) => p.newArrival)
    : products;

  return (
    <div className="shell section-air">
      <p className="eyebrow">The Collection</p>
      <h1 style={{ marginBottom: "1.5rem" }}>
        {isNewOnly ? "New Arrivals." : "Shop the private edit."}
      </h1>
      <p
        style={{
          fontSize: "1.05rem",
          color: "var(--muted)",
          maxWidth: "600px",
          marginBottom: "3.5rem",
          lineHeight: "1.8",
        }}
      >
        {isNewOnly
          ? "The latest additions to our debut capsule. Fluid silks, soft knits, and sculptural shapes released first to the private list."
          : "A concise wardrobe of silk, tailoring, knitwear, and evening pieces selected for the ORÉVIA debut capsule. Each piece includes atelier notes for material, fit, and launch availability."}
      </p>

      {/* Meta Bar */}
      <div className="section-meta-bar">
        <span>{filteredProducts.length} Pieces</span>
        <span>Private launch preview · Client care available · AUD</span>
      </div>

      {/* Grid */}
      <div className="product-grid four">
        {filteredProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
