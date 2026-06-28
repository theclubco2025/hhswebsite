import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const heading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading"
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Harmony Home Services | Professional Property Care You Can Trust",
  description:
    "Reliable local lawn maintenance, weed whacking, tree trimming, and property cleanup for homeowners who expect quality work. Free estimates. Call Blake today.",
  openGraph: {
    title: "Harmony Home Services",
    description:
      "Professional property care you can trust. Lawn maintenance, tree trimming, property cleanup, and seasonal services.",
    type: "website"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Harmony Home Services",
  founder: "Blake Winn",
  telephone: "+1-530-334-6503",
  priceRange: "$$",
  areaServed: "Local Service Area",
  description:
    "Professional lawn maintenance, weed whacking, tree trimming, property cleanup, and seasonal property services."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
