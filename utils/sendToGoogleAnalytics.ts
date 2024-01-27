import { GoogleAnalyticsEventInterface } from "@/static/interfaces";
import { prepareRequestData } from "./prepareRequestData";

export const sendToGoogleAnalytics = async (
  googleAnalyticsData: GoogleAnalyticsEventInterface
) => {
  return await fetch("/api/analytics", prepareRequestData(googleAnalyticsData));
};
