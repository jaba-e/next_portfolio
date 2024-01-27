import type { AppProps } from "next/app";
import { useReportWebVitals } from "next/web-vitals";
import { sendToGoogleAnalytics } from "@/lib/sendToGoogleAnalytics";
import "@/static/css/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  useReportWebVitals(sendToGoogleAnalytics);

  return <Component {...pageProps} />;
}
