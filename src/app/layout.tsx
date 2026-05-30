import type { Metadata } from "next";
import { Pacifico, Playfair_Display, Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sunshinesips.vercel.app"),
  title: {
    default: "Sunshine Sips | Bright drinks, cozy recipes, happy hearts",
    template: "%s | Sunshine Sips",
  },
  description:
    "Sunshine Sips is a cozy lemonade, drink inspiration, and pastel lifestyle brand for bright days and happy rituals.",
  applicationName: "Sunshine Sips",
  appleWebApp: {
    capable: true,
    title: "Sunshine Sips",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Sunshine Sips",
    description:
      "Bright drinks, cozy recipes, pastel boutique finds, and sunshine-filled lifestyle inspiration.",
    images: ["/images/generated/hero-lemonade.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${quicksand.variable} ${playfair.variable} ${pacifico.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
