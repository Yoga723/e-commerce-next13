import { Footer, NextAuthProvider } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { BrowserRouter, HashRouter } from "react-router-dom";

export const metadata: Metadata = {
  title: "E-Commerce from scratch with Coding with Dawid || Yoga723",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          {/* BrowserRouter diganti jadi Hash soalna kabeh saengges # diaggap client side fragment jadi te nyebabken error
          While this approach is easier and doesn't require server configuration, it does mean your URLs will contain #, which might not be as clean or SEO-friendly. */}
          {/* <BrowserRouter> */}
          {children}
          {/* </BrowserRouter> */}
        </NextAuthProvider>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
