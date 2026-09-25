import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl = "https://portfolio-abdo-dd14.vercel.app";
const title = "Abdo | Full-Stack Developer";
const description =
  "Full-stack developer specializing in React and Next.js, available for freelance web development work.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Abdo",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Frontend Developer Egypt",
    "Freelance Web Developer",
    "TypeScript",
  ],
  authors: [{ name: "Abdo" }],
  creator: "Abdo",
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Abdo | Full-Stack Developer",
    images: [
      {
        url: "/me.jpg",
        width: 996,
        height: 1053,
        alt: "Abdo - Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/me.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}