"use client";

import { use } from "react";
import products from "@/data/products.json";
import { notFound } from "next/navigation";
import ProductCard from "@/app/components/ProductCard";
import { useAppDispatch } from "@/app/store/hooks";
import { addToCart } from "@/app/store/cartSlice";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductDetailsPage({ params }: PageProps) {
  const { slug } = use(params);
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  // Find 3 other products for "Pieces in the same rhythm"
  const relatedProducts = products.filter((p) => p.slug !== slug).slice(0, 3);

  const dispatch = useAppDispatch();

  const handleAddToBag = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="page-shell">
      <div className="product-detail">
        {/* Left Column: Image with Tag */}
        <div className="product-detail-media">
          {product.tag && (
            <span className={`product-tag ${product.tagStyle}`}>
              {product.tag}
            </span>
          )}
          <img
            src={product.image}
            alt={product.alt}
          />
        </div>

        {/* Right Column: Info & Details */}
        <div>
          <p className="eyebrow">{product.category}</p>
          <h1 style={{ marginTop: "14px", fontFamily: "Didot, Bodoni 72, Georgia, serif", fontWeight: 400, lineHeight: 1.02, fontSize: "clamp(42px, 6vw, 78px)" }}>{product.name}</h1>
          <div className="product-price">${product.price}</div>
          <p className="lead" style={{ marginTop: "24px" }}>
            {product.longDescription || product.description}
          </p>

          {/* Action Buttons */}
          <div className="detail-actions">
            <button className="btn-primary" onClick={handleAddToBag}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "6px" }}>
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              Add to private edit
            </button>
            <a className="btn-outline" href="/#waitlist">
              Join launch access
            </a>
          </div>

          {/* Highlight Cards (Product Services) */}
          <div className="product-services">
            <div>
              <span>01</span>
              <strong>Private styling note</strong>
              <p>
                Client care can advise on proportion, pairing, and launch
                availability.
              </p>
            </div>
            <div>
              <span>02</span>
              <strong>Priority preview</strong>
              <p>
                Waitlist members receive the first opportunity to reserve
                debut pieces.
              </p>
            </div>
          </div>

          {/* Specification Table */}
          <dl className="product-facts">
            {product.status && (
              <div>
                <dt>Status</dt>
                <dd>{product.status}</dd>
              </div>
            )}
            {product.atelierNote && (
              <div>
                <dt>Atelier Note</dt>
                <dd>{product.atelierNote}</dd>
              </div>
            )}
            {product.fit && (
              <div>
                <dt>Fit</dt>
                <dd>{product.fit}</dd>
              </div>
            )}
            {product.materials && (
              <div>
                <dt>Materials</dt>
                <dd>{product.materials}</dd>
              </div>
            )}
            {product.finish && (
              <div>
                <dt>Finish</dt>
                <dd>{product.finish}</dd>
              </div>
            )}
            {product.care && (
              <div>
                <dt>Care</dt>
                <dd>{product.care}</dd>
              </div>
            )}
          </dl>
        </div>
      </div>

      {/* Related Products: Pair with */}
      {relatedProducts.length > 0 && (
        <div className="related-heading">
          <div className="section-heading" style={{ marginBottom: "28px" }}>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>Pieces in the same rhythm</h2>
            <a className="link-arrow" href="/shop">
              Shop All
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="product-grid three">
            {relatedProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
