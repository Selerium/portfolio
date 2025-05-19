import type { Metadata } from "next";
import { primary } from "./styles/fonts";
import NavBar from "./components/navbar";
import "./styles/globals.css";
import Footer from "./components/footer";
import { sidebarContextProvider } from "./contexts/SidebarContext";

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
        className={`${primary.className} antialiased w-full flex flex-col overflow-x-clip justify-start items-center`}
      >
        <div className="w-50 h-50 bg-shadow -top-1/6 -left-1/6 z-0 absolute bg-secondary rounded-full"></div>
        <div className="w-50 h-50 bg-shadow -bottom-1/6 -right-1/6 z-0 absolute bg-secondary rounded-full"></div>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
