import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/BackToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fahim Samady - Software Engineer Portfolio",
  description:
    "Software Engineer specializing in full-stack development, mobile applications, and cloud technologies. View my projects, experience, and skills.",
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Node.js",
    "Mobile Development",
    "Portfolio",
  ],
  authors: [{ name: "Fahim Samady" }],
  creator: "Fahim Samady",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/logo.png", type: "image/png" },
    ],
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Fahim Samady - Software Engineer Portfolio",
    description:
      "Software Engineer specializing in full-stack development, mobile applications, and cloud technologies.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Fahim Samady Portfolio Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fahim Samady - Software Engineer Portfolio",
    description:
      "Software Engineer specializing in full-stack development, mobile applications, and cloud technologies.",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
