import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Durable Product Database API",
  description: "API for buy-it-for-life product recommendations and reviews. Durability ratings, longevity data, and structured product data for e-commerce and sustainability apps."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="403b95b6-678a-4534-93cb-d8235434d62a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
