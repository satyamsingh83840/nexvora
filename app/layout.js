import "./globals.css";
import ScrollProgress from "@/components/layout/scroll-progress";
import { Inter, Cormorant_Garamond } from "next/font/google";
import CursorGlow from "@/components/ui/cursor-glow";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Navbar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer";

import company from "@/data/company";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL(company.website),

  title: {
    default: `${company.name} | ${company.tagline}`,
    template: `%s | ${company.name}`,
  },

  description: company.description,

  keywords: [
    "Law Firm",
    "Corporate Lawyer",
    "Litigation",
    "Legal Advisory",
    "Arbitration",
    "Intellectual Property",
    "Employment Law",
    "Family Law",
    "Real Estate Law",
    "Commercial Law",
    "Delhi Law Firm",
    "India Lawyers",
  ],

  authors: [
    {
      name: company.name,
    },
  ],

  creator: company.name,

  publisher: company.name,

  applicationName: company.name,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: company.name,

    description: company.description,

    url: company.website,

    siteName: company.name,

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og/og-image.jpg",

        width: 1200,

        height: 630,

        alt: company.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: company.name,

    description: company.description,

    images: ["/og/og-image.jpg"],
  },

  robots: {
    index: true,

    follow: true,

    googleBot: {
      index: true,

      follow: true,

      "max-video-preview": -1,

      "max-image-preview": "large",

      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",

    shortcut: "/favicon.ico",

    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${cormorant.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <ScrollProgress />
            <CursorGlow />
            <Navbar />

            <main className="flex-1">{children}</main>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
