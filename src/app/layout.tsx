import type { Metadata, Viewport } from "next";
import { primary } from "@/styles/fonts";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import JsonLd from "@/components/json-ld";
import { personSchema, websiteSchema } from "@/lib/schema";
import {
  absoluteUrl,
  person,
  siteDescription,
  siteName,
  siteTitle,
  siteUrl,
} from "@/lib/site";
import "@/styles/globals.css";

const ogImage = {
  url: absoluteUrl("/og-image.png"),
  width: 1200,
  height: 630,
  alt: "Adi — Full-Stack Developer relocating to London and open to UK roles",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Adi",
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: person.name, url: absoluteUrl("/") }],
  creator: person.name,
  publisher: person.name,
  category: "technology",
  keywords: [
    "Adi",
    "John Adithya",
    "full-stack developer",
    "software engineer",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "developer relocating to London",
    "software engineer London",
    "software engineer UK",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: absoluteUrl("/"),
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08090c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className="overflow-x-clip">
      <body
        className={`${primary.className} overflow-x-clip relative antialiased w-full`}
      >
        <JsonLd data={[personSchema(), websiteSchema()]} />
        <div className="w-full flex flex-col overflow-y-clip justify-start items-center relative">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
