"use client";

interface Product {
  slug: string;
  name: string;
  category: string;
  price: number;
  tag: string;
  tagStyle: string;
  image: string;
  alt: string;
  description: string;
  atelierNote: string;
  status: string;
}

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const handleAddToBag = () => {
    // Dispatch a custom event with product details to update the cart
    window.dispatchEvent(new CustomEvent("add-to-cart", { detail: product }));
  };

  return (
    <article className="product-card">
      <a className="product-image-link" href={`/products/${product.slug}`}>
        {product.tag && (
          <span className={`product-tag ${product.tagStyle}`}>
            {product.tag}
          </span>
        )}
        <img
          src={product.image}
          alt={product.alt}
          loading={priority ? "eager" : "lazy"}
        />
        <span className="quick-view">View details</span>
      </a>
      <div className="product-meta">
        <div className="product-kicker">
          <span>{product.category}</span>
          <span>AUD</span>
        </div>
        <div className="product-title-line">
          <a href={`/products/${product.slug}`}>{product.name}</a>
          <strong>${product.price}</strong>
        </div>
        <p>{product.description}</p>
        <div className="product-atelier-note">
          <span>{product.status}</span>
          <small>{product.atelierNote}</small>
        </div>
        <button className="text-action" onClick={handleAddToBag}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          Add to private edit
        </button>
      </div>
    </article>
  );
}
