import type { Metadata } from "next";
import HomeExperience from "@/components/home-experience";
import JsonLd from "@/components/json-ld";
import { profilePageSchema } from "@/lib/schema";
import { absoluteUrl, siteDescription, siteTitle } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: siteTitle },
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    url: absoluteUrl("/"),
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    title: siteTitle,
    description: siteDescription,
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={profilePageSchema()} />
      <HomeExperience />
    </>
  );
}
