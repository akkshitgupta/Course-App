"use client";

import "./globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

import { RecoilRoot } from "recoil";
import Provider from "@components/Provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <RecoilRoot>
        <body className="selection:bg-green-200 selection:text-green-950">
          <Provider>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </Provider>
        </body>
      </RecoilRoot>
    </html>
  );
}
