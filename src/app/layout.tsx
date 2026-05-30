
import GoogleAnalytics from "@/components/GoogleAnalytics";
import type { Metadata } from "next";

import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agmedia.global"),
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
    "food marketing services",
    "beverage brand agency",
    "restaurant marketing",
    "FMCG food branding",
    "ROI food marketing",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AG Media — Food & Beverage Marketing Agency",
    description:
      "Results-driven marketing exclusively for modern food & beverage brands. 50+ brands served, 3X average ROI delivered. Scale your brand today.",
    type: "website",
    url: "https://agmedia.global",
    siteName: "AG Media",
    images: [
      {
        url: "/ag-media_icon.jpeg",
        width: 800,
        height: 800,
        alt: "AG Media Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AG Media — Food & Beverage Marketing Agency",
    description:
      "Results-driven marketing exclusively for modern food & beverage brands. 50+ brands served, 3X average ROI delivered.",
    images: ["/ag-media_icon.jpeg"],
  },
  verification: {
    google: "DndEEXhgk9BFzWqWh7O4lHxSOGqvM-Zanb2-By5cku8",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AG Media",
    "url": "https://agmedia.global",
    "logo": "https://agmedia.global/ag-media_icon.jpeg",
    "sameAs": [
      "https://instagram.com/agmedia_global"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-70433-59487",
      "contactType": "customer service",
      "email": "ojhasumit677@gmail.com",
      "areaServed": "Global",
      "availableLanguage": "English"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "AG Media",
    "image": "https://agmedia.global/ag-media_icon.jpeg",
    "@id": "https://agmedia.global/#professional-service",
    "url": "https://agmedia.global",
    "telephone": "+917043359487",
    "email": "ojhasumit677@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "23.0225",
      "longitude": "72.5714"
    },
    "areaServed": "Global"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Organization",
      "name": "AG Media",
      "url": "https://agmedia.global"
    },
    "serviceType": "Food & Beverage Marketing Services",
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AG Media Marketing Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Brand Strategy",
            "description": "Positioning your food brand to stand out in a crowded market through deep audience research and competitive analysis."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Marketing",
            "description": "Platform-specific content that drives engagement, builds community, and converts followers into loyal customers."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Food Photography",
            "description": "Drool-worthy visual assets that capture the essence of your product and make audiences crave your food."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Content Marketing",
            "description": "SEO-optimized blogs, newsletters, and digital content that establish authority and drive organic traffic."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Paid Advertising",
            "description": "Data-driven Meta, TikTok, and Google ad campaigns designed specifically for high-ROI food & beverage conversions."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Influencer Marketing",
            "description": "Connecting your brand with authentic food creators to scale reach and build trust instantly."
          }
        }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does AG Media specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AG Media is a results-driven marketing agency exclusively focused on the food & beverage industry. We combine strategic thinking, creative storytelling, and data-backed marketing to help food brands grow, scale, and dominate their market."
        }
      },
      {
        "@type": "Question",
        "name": "What services does AG Media offer for food and beverage brands?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer comprehensive 360-degree marketing solutions including Brand Strategy, Social Media Marketing, Food Photography, Content Marketing, Paid Advertising, and Influencer Marketing."
        }
      },
      {
        "@type": "Question",
        "name": "What pricing plans are available at AG Media?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We have three transparent pricing packages designed to scale with your food brand's growth: Starter (₹11,999/month for local cafes/single-location restaurants), Growth (₹19,999/month for growing food brands looking to scale), and Premium (₹39,999/month for established chains and FMCG brands)."
        }
      },
      {
        "@type": "Question",
        "name": "Why should I choose a specialized food marketing agency like AG Media?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unlike generalist agencies, we are 100% focused on the food and beverage industry. We speak your language and understand the specific nuances that make food audiences engage, trust, and buy, delivering an average of 3X ROI for modern food brands."
        }
      }
    ]
  }
];

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
      <head>
        <GoogleAnalytics />
        
      </head>
      <body className="bg-background text-white antialiased overflow-x-hidden">
        {children}
        <Toaster position="bottom-right" theme="dark" richColors />
      </body>
    </html>
  );
}
