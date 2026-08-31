import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { studio } from "@/lib/data";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { PageTransition } from "@/components/PageTransition";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

// Update this once/if a custom domain is attached to GitHub Pages.
const siteUrl = "https://xlsafat.github.io/fahims-photography";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${studio.name} — Wedding, Portrait & Editorial Photographer in Sydney`,
    template: `%s — ${studio.name}`,
  },
  description: studio.subTagline,
  keywords: [
    "photographer Sydney",
    "wedding photographer Australia",
    "editorial photographer",
    "portrait photography",
    "fine art wedding photography",
  ],
  authors: [{ name: studio.firstName }],
  // Unlike openGraph.images, metadata.icons is NOT resolved against
  // metadataBase — spell these out as absolute URLs so they stay correct
  // on GitHub Pages' /repo-name/ basePath.
  icons: {
    icon: `${siteUrl}/icon`,
    apple: `${siteUrl}/apple-icon`,
  },
  openGraph: {
    title: studio.name,
    description: studio.subTagline,
    url: siteUrl,
    siteName: studio.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: studio.name,
    description: studio.subTagline,
  },
};

export const viewport: Viewport = {
  themeColor: "#faf5ec",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: studio.firstName,
    alternateName: studio.name,
    jobTitle: "Photographer",
    email: studio.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sydney",
      addressCountry: "AU",
    },
    url: siteUrl,
    sameAs: ["https://instagram.com", "https://pinterest.com", "https://behance.net"],
  };

  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="min-h-full bg-ivory text-charcoal antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded focus:bg-charcoal focus:px-4 focus:py-2 focus:text-ivory"
        >
          Skip to content
        </a>
        <div className="grain-overlay" aria-hidden />
        <ScrollProgress />
        <CustomCursor />
        <PageTransition>{children}</PageTransition>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
