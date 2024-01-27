"use client";

import ReactGA from "react-ga";
import { GoogleAnalyticsEventInterface } from "@/static/interfaces";

export async function sendToGoogleAnalytics({
  name,
  value,
  delta,
  id,
}: GoogleAnalyticsEventInterface) {
  if (process.env.NEXT_PUBLIC_GA_ID) {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GA_ID);
    ReactGA.event({
      category: "Web Vitals",
      action: name,
      value: Math.round(name === "CLS" ? delta * 1000 : delta),
      label: id,
      nonInteraction: true,
    });
  } else {
    console.error("Google Analytics tracking ID is not defined.");
  }
}
