import type { Metadata } from "next";
import { primary } from "./styles/fonts";
import NavBar from "./components/navbar";
import "./styles/globals.css";
import Footer from "./components/footer";

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
        className={`${primary.className} antialiased w-full flex flex-col justify-start items-center`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
