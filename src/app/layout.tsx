export const dynamic = "force-dynamic"

import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/app/components/Navbar";
import type { Metadata } from "next";
import { buildRootMetadata, jsonLd, organizationJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildRootMetadata();


const satoshiFont = localFont({
  src: [
    {
      path: "../fonts/satoshi-cdnfonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/satoshi-cdnfonts/Satoshi-Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../fonts/satoshi-cdnfonts/Satoshi-Italic.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../fonts/satoshi-cdnfonts/Satoshi-Bold.otf",
      weight: "500",
      style: "medium",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://pulse-track.onrender.com/tracker.min.js"
          data-key="pk_live_6f0aa68db3a259f5909cc33e"
          defer
        />
      </head>
      <body
        className={`antialiased ${satoshiFont.className}`}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(organizationJsonLd) }} />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
