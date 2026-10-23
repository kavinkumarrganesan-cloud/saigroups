import type { Metadata } from "next";
import { Inter, Playfair_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Sai Groups — Two Businesses. One Trusted Group.",
  description:
    "Sai Groups unites Sai Paint House (paints, finishes & colour solutions) and Sai Event (weddings, celebrations & corporate events). Discover colours that transform spaces and celebrations that create lasting memories.",
  keywords: ["Sai Groups", "Sai Paint House", "Sai Event", "paint shop", "event planner", "wedding decoration"],
  openGraph: {
    title: "Sai Groups — Two Businesses. One Trusted Group.",
    description: "Colours that transform spaces. Celebrations that create lasting memories.",
    type: "website",
    url: "https://saigroups.example",
  },
  metadataBase: new URL("https://saigroups.example"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${space.variable}`}>
      <body className="bg-[#FFF8F0] text-[#0F1213] antialiased">
        <Header />
        {children}
        <Footer />
        {/* WhatsApp floating */}
        <a
          href="https://wa.me/919999999999?text=Hi%20Sai%20Groups%2C%20I%20found%20you%20on%20your%20website%20and%20would%20like%20to%20enquire."
          target="_blank"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-xl hover:scale-105 transition"
        >
          <span className="h-2 w-2 rounded-full bg-white animate-pulse" /> WhatsApp Enquiry
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sai Groups",
              url: "https://saigroups.example",
              description: "Parent brand for Sai Paint House and Sai Event",
              sameAs: ["https://maps.app.goo.gl/73qNyst6vKRhAG1T7"],
              subOrganization: [
                { "@type": "Store", name: "Sai Paint House" },
                { "@type": "EventVenue", name: "Sai Event" },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
