"use client";

import { useState, useEffect } from "react";
import products from "@/data/products.json";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { updateQuantity, removeItem, setCartOpen } from "../store/cartSlice";

interface Product {
  slug: string;
  name: string;
  category: string;
  price: number;
  image: string;
  alt: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const cartOpen = useAppSelector((state) => state.cart.isOpen);

  const handleUpdateQuantity = (slug: string, delta: number) => {
    dispatch(updateQuantity({ slug, delta }));
  };

  const handleRemoveItem = (slug: string) => {
    dispatch(removeItem(slug));
  };

  const handleSetCartOpen = (open: boolean) => {
    dispatch(setCartOpen(open));
  };

  // Compute total bag count
  const bagCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Compute subtotal
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  // Filter search results
  const filteredProducts = searchQuery
    ? products.filter(
      (p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : [];

  return (
    <>
      <header className="site-header">
        <a className="announcement" href="/#waitlist">
          <span>Private launch access</span>
          <span>Sydney atelier preview</span>
          <span>Debut capsule opens soon</span>
        </a>

        <div className="header-inner">
          {/* Left item: Menu button on mobile, Nav on desktop */}
          <button
            className="icon-button mobile-only"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>

          <nav className="nav desktop-only" aria-label="Main navigation">
            <a href="/shop">Shop</a>
            <a href="/shop?sort=new">New Arrivals</a>
            <a href="/collections">Collections</a>
            <a href="/about-orevia">About</a>
            <a href="/contact">Contact</a>
          </nav>

          {/* Center item: Brand mark */}
          <a className="brand-mark" aria-label="ORÉVIA home" href="/">
            ORÉVIA
          </a>

          {/* Right item: Header actions */}
          <div className="header-actions">
            <button className="utility-button" onClick={() => setSearchOpen(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <span>Search</span>
            </button>
            <button className="utility-button" onClick={() => handleSetCartOpen(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span>Bag ({bagCount})</span>
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Mobile Panel */}
      <div className={`mobile-menu ${mobileOpen ? "is-open" : ""}`}>
        <div className="menu-scrim" onClick={() => setMobileOpen(false)} />
        <div className="mobile-panel">
          <div className="mobile-panel-top">
            <a className="brand-mark small" href="/" onClick={() => setMobileOpen(false)}>
              ORÉVIA
            </a>
            <button
              className="icon-button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          <nav className="mobile-nav">
            <a href="/shop" onClick={() => setMobileOpen(false)}>Shop</a>
            <a href="/shop?sort=new" onClick={() => setMobileOpen(false)}>New Arrivals</a>
            <a href="/collections" onClick={() => setMobileOpen(false)}>Collections</a>
            <a href="/about-orevia" onClick={() => setMobileOpen(false)}>About</a>
            <a href="/contact" onClick={() => setMobileOpen(false)}>Contact</a>
          </nav>
        </div>
      </div>

      {/* Cart Drawer / Layer */}
      <div className={`cart-layer ${cartOpen ? "is-open" : ""}`}>
        <div className="modal-scrim" onClick={() => handleSetCartOpen(false)} />
        <div className="cart-drawer">
          <div className="modal-top">
            <h2>Your Edit</h2>
            <button
              className="icon-button"
              onClick={() => handleSetCartOpen(false)}
              aria-label="Close cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          {cartItems.length === 0 ? (
            <div className="empty-state" style={{ textAlign: "center", padding: "48px 0" }}>
              <p style={{ color: "var(--taupe)", fontStyle: "italic" }}>Your private edit is empty.</p>
              <a
                className="btn-primary"
                href="/shop"
                onClick={() => handleSetCartOpen(false)}
                style={{ marginTop: "24px", display: "inline-block" }}
              >
                Browse the collection
              </a>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div className="cart-item" key={item.product.slug}>
                    <img src={item.product.image} alt={item.product.alt} />
                    <div>
                      <a
                        href={`/products/${item.product.slug}`}
                        onClick={() => handleSetCartOpen(false)}
                      >
                        {item.product.name}
                      </a>
                      <p style={{ margin: "4px 0 0", color: "var(--taupe)", fontSize: "12px" }}>
                        {item.product.category}
                      </p>
                      <div className="quantity-control">
                        <button
                          onClick={() => handleUpdateQuantity(item.product.slug, -1)}
                          aria-label="Decrease quantity"
                        >
                          —
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => handleUpdateQuantity(item.product.slug, 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div style={{ textAlign: "right", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", alignItems: "flex-end" }}>
                      <strong>${item.product.price * item.quantity}</strong>
                      <button
                        className="remove-link"
                        onClick={() => handleRemoveItem(item.product.slug)}
                        style={{ marginTop: "12px" }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "auto" }}>
                <p className="drawer-note">
                  Launch pieces are custom tailored. Complimentary fittings, alterations, and shipping are included in the private debut capsule.
                </p>
                <div className="cart-summary">
                  <span>Subtotal</span>
                  <strong>${subtotal}</strong>
                </div>
                <div style={{ marginTop: "24px" }}>
                  <a
                    className="btn-primary full"
                    href="/cart"
                    onClick={() => handleSetCartOpen(false)}
                    style={{ display: "flex", width: "100%", justifyContent: "center" }}
                  >
                    View edit & Checkout
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Search Modal */}
      <div className={`search-modal ${searchOpen ? "is-open" : ""}`}>
        <div className="modal-scrim" onClick={() => setSearchOpen(false)} />
        <div className="search-panel">
          <div className="modal-top">
            <h2>Search Collection</h2>
            <button
              className="icon-button"
              onClick={() => {
                setSearchOpen(false);
                setSearchQuery("");
              }}
              aria-label="Close search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          <input
            type="text"
            className="search-input"
            placeholder="Type material, piece, or capsule..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />

          {searchQuery && (
            <div className="search-results">
              {filteredProducts.length === 0 ? (
                <p style={{ color: "var(--taupe)", fontStyle: "italic", marginTop: "24px" }}>
                  No pieces found matching &ldquo;{searchQuery}&rdquo;.
                </p>
              ) : (
                filteredProducts.map((p) => (
                  <a
                    className="search-result"
                    href={`/products/${p.slug}`}
                    key={p.slug}
                    onClick={() => {
                      setSearchOpen(false);
                      setSearchQuery("");
                    }}
                  >
                    <img src={p.image} alt={p.alt} />
                    <div>
                      <strong>{p.name}</strong>
                      <small>
                        {p.category} &middot; ${p.price} AUD
                      </small>
                    </div>
                  </a>
                ))
              )}
            </div>
          )}

          {!searchQuery && (
            <div style={{ marginTop: "32px" }}>
              <span className="eyebrow" style={{ fontSize: "10px" }}>Suggested Searches</span>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "12px" }}>
                {["Silk", "Blazer", "Slip Dress", "Knit", "Tailoring"].map((term) => (
                  <button
                    key={term}
                    className="btn-capsule"
                    onClick={() => setSearchQuery(term)}
                    style={{ padding: "8px 16px" }}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
