import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Burger Zone Grill & Cafeteria | MBZ City",
  description: "Fresh & Tasty — Sandwiches & Juices, Exclusive Charcoal! Order delivery online from Burger Zone Grill & Cafeteria located near Etihad Railway Station, Shabiya 10, MBZ City - Abu Dhabi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="antialiased selection:bg-yellow-accent selection:text-charcoal bg-off-white">
        {children}
      </body>
    </html>
  );
}
