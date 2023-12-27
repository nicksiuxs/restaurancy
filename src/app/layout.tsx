import type {Metadata} from "next";

import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export const metadata: Metadata = {
  title: "Restaurancy",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] px-4">
        <Header />
        <main className="py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
