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

  // Filter products if 'new' sort is requested
  const filteredProducts = isNewOnly
    ? products.filter((p) => p.newArrival)
    : products;

  return (
    <div className="page-shell">
      <div className="page-hero">
        <p className="eyebrow">The Collection</p>
        <h1>
          {isNewOnly ? "Shop the new arrivals." : "Shop the private edit."}
        </h1>
        <p>
          {isNewOnly
            ? "The latest additions to our debut capsule. Fluid silks, soft knits, and sculptural shapes released first to the private list."
            : "A concise wardrobe of silk, tailoring, knitwear, and evening pieces selected for the ORÉVIA debut capsule. Each piece includes atelier notes for material, fit, and launch availability."}
        </p>
      </div>

      {/* Toolbar / Meta line */}
      <div className="shop-toolbar">
        <span>{filteredProducts.length} Pieces</span>
        <span>Private launch preview · Client care available · AUD</span>
      </div>

      {/* Product list */}
      <div className="product-grid four">
        {filteredProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
