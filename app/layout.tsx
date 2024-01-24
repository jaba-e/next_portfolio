import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "@/static/css/globals.css";
import { meta } from "@/static/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
    </html>
  );
}
