import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://fahimsamady.github.io"
      : "http://localhost:3000"
  ),
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
