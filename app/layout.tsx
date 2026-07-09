import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Providers from "./components/Providers";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "ORÉVIA — Quiet luxury womenswear, designed in Australia.",
  description:
    "Discover ORÉVIA, a premium Australian womenswear maison guided by Parisian restraint, refined essentials, and enduring silhouettes.",
  robots: "index, follow",
  openGraph: {
    title: "ORÉVIA — Quiet luxury womenswear, designed in Australia.",
    description: "Quiet luxury womenswear for a considered wardrobe.",
    url: "https://oreviaclothing.com",
    siteName: "ORÉVIA",
    images: [
      {
        url: "https://oreviaclothing.com/images/orevia-hero-editorial.png",
        width: 1200,
        height: 900,
        alt: "ORÉVIA editorial hero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ORÉVIA — Quiet luxury womenswear, designed in Australia.",
    description: "Quiet luxury womenswear for a considered wardrobe.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ORÉVIA",
              url: "https://oreviaclothing.com",
              email: "info@oreviaclothing.com",
              description:
                "Quiet luxury womenswear, designed in Australia.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Sydney",
                addressCountry: "AU",
              },
            }),
          }}
        />
        <Providers>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
