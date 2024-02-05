import { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { meta } from "@/constants/portfolio";
import "./styles/globals.css";

export const metadata: Metadata = {
  ...meta,
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      {process.env.GA_ID && <GoogleAnalytics gaId={process.env.GA_ID} />}
    </html>
  );
}
