import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteName = "Real Work Learning";
const siteDescription =
  "Training, facilitation, and AI enablement that people can actually use, plus bespoke AI tools built around how the work really happens.";

export const metadata: Metadata = {
  // Set NEXT_PUBLIC_SITE_URL in your deployment for correct absolute URLs in
  // Open Graph tags and the sitemap. Falls back to localhost for local dev.
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: siteName,
  description: siteDescription,
  openGraph: {
    title: siteName,
    description: siteDescription,
    type: "website",
    images: [
      {
        url: "/images/panel3.jpg",
        width: 2048,
        height: 1365,
        alt: "Chris Smith speaking on stage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/images/panel3.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-warm-white text-dark-text">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
