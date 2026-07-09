"use client";

import { useState, useEffect, FormEvent } from "react";

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

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  // Sync state from localStorage on load
  useEffect(() => {
    const saved = localStorage.getItem("orevia-cart");
    if (saved) {
      try {
        setCartItems(JSON.parse(saved));
      } catch (e) {}
    }
  }, []);

  const updateQuantity = (slug: string, delta: number) => {
    const nextCart = cartItems
      .map((item) => {
        if (item.product.slug === slug) {
          const nextQty = item.quantity + delta;
          return { ...item, quantity: nextQty };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);
    
    setCartItems(nextCart);
    localStorage.setItem("orevia-cart", JSON.stringify(nextCart));
    // Trigger header updates
    window.dispatchEvent(new CustomEvent("cart-updated"));
  };

  const removeItem = (slug: string) => {
    const nextCart = cartItems.filter((item) => item.product.slug !== slug);
    setCartItems(nextCart);
    localStorage.setItem("orevia-cart", JSON.stringify(nextCart));
    // Trigger header updates
    window.dispatchEvent(new CustomEvent("cart-updated"));
  };

  const handleCheckout = (e: FormEvent) => {
    e.preventDefault();
    // Simulate order placement
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(`OR-${randomNum}`);
    setSubmitted(true);
    // Clear cart in storage
    localStorage.removeItem("orevia-cart");
    window.dispatchEvent(new CustomEvent("cart-updated"));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  if (submitted) {
    return (
      <div className="page-shell" style={{ maxWidth: "600px", textAlign: "center" }}>
        <p className="eyebrow">Reservation Confirmed</p>
        <h1 style={{ fontFamily: "Didot, Bodoni\\ 72, Georgia, serif", fontSize: "clamp(32px, 5vw, 54px)", marginBlock: "20px" }}>
          Thank you for your request.
        </h1>
        <p style={{ color: "var(--espresso)", fontSize: "16px", lineHeight: "1.8", marginBottom: "32px" }}>
          Your debut capsule selection has been reserved under reference <strong>{orderNumber}</strong>. 
          A client care associate will contact you at <strong>{email}</strong> within 24 hours to arrange your complimentary fitting and confirm sizing preferences.
        </p>
        <div style={{ padding: "28px", border: "1px solid var(--line)", background: "var(--pearl)", textAlign: "left", marginBottom: "42px" }}>
          <h3 style={{ fontFamily: "Didot, Bodoni\\ 72, Georgia, serif", fontSize: "20px", marginBottom: "16px" }}>Reservation Details</h3>
          <p style={{ fontSize: "14px", color: "var(--espresso)", margin: "4px 0" }}><strong>Client:</strong> {name}</p>
          <p style={{ fontSize: "14px", color: "var(--espresso)", margin: "4px 0" }}><strong>Address:</strong> {address}</p>
          <p style={{ fontSize: "14px", color: "var(--espresso)", margin: "4px 0" }}><strong>Fitting location:</strong> Sydney Atelier / Correspondence</p>
        </div>
        <a className="btn-primary" href="/shop">
          Return to Collection
        </a>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <div className="page-hero">
        <p className="eyebrow">Your Selection</p>
        <h1>Review your edit.</h1>
        <p>
          Maison ORÉVIA launch items are custom tailored in limited numbers. Proceed to request launch preview access and fit reservation.
        </p>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-page" style={{ textAlign: "center", padding: "64px 0" }}>
          <p style={{ color: "var(--taupe)", fontStyle: "italic", fontSize: "18px" }}>
            Your edit is currently empty.
          </p>
          <div style={{ marginTop: "32px" }}>
            <a className="btn-primary" href="/shop">
              Browse pieces
            </a>
          </div>
        </div>
      ) : (
        <div className="cart-page-grid">
          {/* Left Column: Cart Items */}
          <div className="cart-page-items">
            {cartItems.map((item) => (
              <div className="cart-page-item" key={item.product.slug}>
                <img src={item.product.image} alt={item.product.alt} />
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <a
                      href={`/products/${item.product.slug}`}
                      style={{ fontSize: "21px", fontFamily: "Didot, Bodoni\\ 72, Georgia, serif", display: "block" }}
                    >
                      {item.product.name}
                    </a>
                    <span style={{ fontSize: "12px", color: "var(--taupe)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      {item.product.category}
                    </span>
                  </div>
                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(item.product.slug, -1)}>—</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.slug, 1)}>+</button>
                  </div>
                </div>
                <div style={{ textAlign: "right", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", alignItems: "flex-end" }}>
                  <strong style={{ fontSize: "21px", color: "var(--espresso)", fontFamily: "Didot, Bodoni\\ 72, Georgia, serif", fontWeight: "normal" }}>
                    ${item.product.price * item.quantity}
                  </strong>
                  <button className="remove-link" onClick={() => removeItem(item.product.slug)} style={{ cursor: "pointer", display: "inline-block" }}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Checkout Panel (Order note) */}
          <div className="order-note">
            <strong>Edit Summary</strong>
            
            <div style={{ marginBlock: "18px", borderBottom: "1px solid var(--line)", paddingBottom: "18px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", color: "var(--espresso)", margin: "8px 0" }}>
                <span>Subtotal</span>
                <span>${subtotal} AUD</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", color: "var(--espresso)", margin: "8px 0" }}>
                <span>Shipping & Fitting</span>
                <span style={{ color: "var(--champagne)", textTransform: "uppercase", letterSpacing: "0.05em", fontSize: "12px" }}>Complimentary</span>
              </div>
            </div>

            <form onSubmit={handleCheckout} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label htmlFor="checkout-name" style={{ display: "block", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--champagne)", marginBottom: "6px" }}>
                  Full Name
                </label>
                <input
                  id="checkout-name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: "100%",
                    minHeight: "44px",
                    border: "0",
                    borderBottom: "1px solid var(--line)",
                    background: "transparent",
                    color: "var(--ink)",
                    outline: "none"
                  }}
                />
              </div>

              <div>
                <label htmlFor="checkout-email" style={{ display: "block", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--champagne)", marginBottom: "6px" }}>
                  Email Address
                </label>
                <input
                  id="checkout-email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: "100%",
                    minHeight: "44px",
                    border: "0",
                    borderBottom: "1px solid var(--line)",
                    background: "transparent",
                    color: "var(--ink)",
                    outline: "none"
                  }}
                />
              </div>

              <div>
                <label htmlFor="checkout-address" style={{ display: "block", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--champagne)", marginBottom: "6px" }}>
                  Delivery / Fitting Address
                </label>
                <input
                  id="checkout-address"
                  type="text"
                  required
                  placeholder="Enter your fitting address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  style={{
                    width: "100%",
                    minHeight: "44px",
                    border: "0",
                    borderBottom: "1px solid var(--line)",
                    background: "transparent",
                    color: "var(--ink)",
                    outline: "none"
                  }}
                />
              </div>

              <div className="order-services">
                <p style={{ fontSize: "12px", color: "var(--taupe)", margin: 0 }}>
                  ✓ Complimentary fitting & tailoring included
                </p>
                <p style={{ fontSize: "12px", color: "var(--taupe)", margin: 0 }}>
                  ✓ In-home preview available by appointment
                </p>
              </div>

              <button className="btn-primary full" type="submit" style={{ width: "100%", marginTop: "12px" }}>
                Place Reservation Order
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
