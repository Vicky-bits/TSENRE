import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://www.tsenretechnologiesltdng.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TSENRE Technologies Limited | Engineering, Inspection & Calibration",
    template: "%s | TSENRE Technologies Limited",
  },
  description:
    "TSENRE Technologies Limited delivers world-class inspection, calibration, engineering, procurement, instrumentation and industrial solutions across Nigeria's oil & gas and industrial sectors.",
  keywords: [
    "TSENRE Technologies",
    "Non-Destructive Testing Nigeria",
    "Calibration Services Nigeria",
    "Pipeline Inspection",
    "Oil and Gas Engineering Nigeria",
    "Instrumentation Services",
    "Lifting Equipment Inspection",
    "Industrial Engineering Nigeria",
  ],
  authors: [{ name: "TSENRE Technologies Limited" }],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName: "TSENRE Technologies Limited",
    title: "TSENRE Technologies Limited | Engineering Excellence for the Energy & Industrial Sector",
    description:
      "Delivering world-class inspection, calibration, engineering, procurement, instrumentation and industrial solutions across Nigeria.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TSENRE Technologies Limited",
    description:
      "Engineering excellence for the energy & industrial sector across Nigeria.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0077B6",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TSENRE Technologies Limited",
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  description:
    "Indigenous Nigerian engineering company delivering inspection, calibration, fabrication, procurement, instrumentation and engineering solutions for the oil & gas and industrial sectors.",
  identifier: "RC 7449180",
  founder: {
    "@type": "Person",
    name: "Prince Ernest Udoaka",
    jobTitle: "Managing Director",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "#2 Success Lane, Off Shedrack Avenue, Apamini Estate, Elelenwo",
    addressLocality: "Obio/Akpor",
    addressRegion: "Rivers State",
    addressCountry: "NG",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+234-810-597-5042",
    contactType: "customer service",
    email: "tsenretechnologies@gmail.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-surface text-ink">
        <ScrollProgress />
        {children}
        <ScrollToTopButton />
        <WhatsAppButton />
      </body>
    </html>
  );
}
