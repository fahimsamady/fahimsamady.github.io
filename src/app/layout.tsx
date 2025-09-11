import type { Metadata } from "next";
import "./globals.css";
import { metadata as siteMetadata } from "@/lib/metadata";
import Providers from "@/lib/providers";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Providers>
          {children}
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
