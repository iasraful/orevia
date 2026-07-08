"use client";

import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="announcement" href="/#waitlist">
        <span>Private launch access</span>
        <span>Sydney atelier preview</span>
        <span>Debut capsule opens soon</span>
      </a>

      <div className="header-inner">
        {/* Mobile menu button */}
        <button
          className="icon-button mobile-only"
          aria-label="Open menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>

        {/* Desktop nav */}
        <nav className="nav desktop-only" aria-label="Main navigation">
          <a href="/shop">Shop</a>
          <a href="/shop?sort=new">New Arrivals</a>
          <a href="/collections">Collections</a>
          <a href="/about-orevia">About</a>
          <a href="/contact">Contact</a>
        </nav>

        {/* Brand mark */}
        <a className="brand-mark" aria-label="ORÉVIA home" href="/">
          ORÉVIA
        </a>

        {/* Header actions */}
        <div className="header-actions">
          <button className="utility-button desktop-only">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <span>Search</span>
          </button>
          <button className="utility-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span>Bag (0)</span>
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div className="mobile-nav-overlay" onClick={() => setMobileOpen(false)}>
          <nav className="mobile-nav" onClick={(e) => e.stopPropagation()}>
            <button className="mobile-nav-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            <a href="/shop" onClick={() => setMobileOpen(false)}>Shop</a>
            <a href="/shop?sort=new" onClick={() => setMobileOpen(false)}>New Arrivals</a>
            <a href="/collections" onClick={() => setMobileOpen(false)}>Collections</a>
            <a href="/about-orevia" onClick={() => setMobileOpen(false)}>About</a>
            <a href="/contact" onClick={() => setMobileOpen(false)}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}
