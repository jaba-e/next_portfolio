import ReactGA from "react-ga";
import type { NextApiRequest, NextApiResponse } from "next";
import { GoogleAnalyticsEventInterface } from "@/static/interfaces";
import { message } from "@/static/messages";

export default function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!process.env.GA_ID) {
      throw new Error(message.analytics.exception);
    }

    const {
      navigationType,
      entries,
      rating,
      ...rest
    }: GoogleAnalyticsEventInterface = req.body;

    ReactGA.initialize(process.env.GA_ID);

    ReactGA.set({
      rating: rating,
      entries: entries,
      navigationType: navigationType,
    });

    ReactGA.event({
      category: "Web Vitals",
      value: Math.round(rest.name === "CLS" ? rest.delta * 1000 : rest.delta),
      label: rest.id,
      action: rest.name,
      nonInteraction: true,
    });

    return Response.json({
      message: message.analytics.success,
    });
  } catch (e) {
    return Response.json({
      message: `Something went wrong ${e}`,
    });
  }
}
