import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "AG Media — Food & Beverage Marketing Agency",
  description:
    "AG Media is a results-driven marketing agency exclusively focused on the food & beverage industry. We combine strategic thinking, creative storytelling, and data-backed marketing to help food brands grow, scale, and dominate their market.",
  keywords: [
    "food marketing agency",
    "beverage marketing",
    "food brand strategy",
    "social media marketing food",
    "food photography",
    "AG Media",
  ],
  openGraph: {
    title: "AG Media — Food & Beverage Marketing Agency",
    description:
      "Results-driven marketing for modern food & beverage brands. 50+ brands served, 3X ROI delivered.",
    type: "website",
    images: [
      {
        url: "/ag-media_icon.jpeg",
        width: 800,
        height: 800,
        alt: "AG Media Logo",
      },
    ],
  },
};

import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth`}
      style={{ background: "#050505" }}
    >
      <body className="bg-background text-white antialiased overflow-x-hidden">
        {children}
        <Toaster position="bottom-right" theme="dark" richColors />
      </body>
    </html>
  );
}
