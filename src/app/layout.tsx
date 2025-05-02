import type { Metadata } from "next";
import { Outfit, Raleway } from "next/font/google";
import NavBar from "./navbar";
import "./globals.css";

export const primary = Outfit({
  subsets: ["latin"],
});

export const secondary = Raleway({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "adi. - Portfolio",
  description: "Software Developer and Creative",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${primary.className} antialiased w-dvw max-w-dvw py-4 px-8 box-border`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
