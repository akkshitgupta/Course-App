"use client";

import "./globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

import { RecoilRoot } from "recoil";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <RecoilRoot>
        <body>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </body>
      </RecoilRoot>
    </html>
  );
}
