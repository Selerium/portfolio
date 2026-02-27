import type { Metadata } from "next";
import { primary } from "../styles/fonts";
import NavBar from "../components/navbar";
import "../styles/globals.css";
import Footer from "../components/footer";

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
    <html lang="en" className="overflow-x-clip">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
      ></meta>
      <body className={`${primary.className} overflow-x-clip relative antialiased w-full`}>
        <div className="w-full flex flex-col overflow-y-clip justify-start items-center relative">
          <div className="max-w-50 max-h-50 w-[30vw] h-[30vh] bg-shadow -top-1/6 -left-1/6 z-0 absolute bg-secondary rounded-full"></div>
          <div className="max-w-50 max-h-50 w-[30vw] h-[30vh] bg-shadow  bottom-1/6 -right-1/6 z-0 absolute bg-secondary rounded-full"></div>
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
