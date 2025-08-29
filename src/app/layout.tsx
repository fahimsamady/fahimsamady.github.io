import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
  openGraph: {
    title: "Fahim Samady - Software Engineer Portfolio",
    description:
      "Software Engineer specializing in full-stack development, mobile applications, and cloud technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fahim Samady - Software Engineer Portfolio",
    description:
      "Software Engineer specializing in full-stack development, mobile applications, and cloud technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
