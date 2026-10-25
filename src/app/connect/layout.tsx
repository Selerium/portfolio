import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

const pageTitle = "Connect";
const pageDescription =
  "Get in touch with Adi about full-stack software engineering roles in London and across the UK, freelance projects, or collaboration.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: absoluteUrl("/connect/") },
  openGraph: {
    url: absoluteUrl("/connect/"),
    title: `${pageTitle} | Adi`,
    description: pageDescription,
  },
  twitter: {
    title: `${pageTitle} | Adi`,
    description: pageDescription,
  },
};

export default function ConnectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
