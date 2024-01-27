import ReactGA from "react-ga";
import type { NextApiRequest, NextApiResponse } from "next";
import { GoogleAnalyticsEventInterface } from "@/static/interfaces";
import { message } from "@/static/messages";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
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

    res.status(200).json({ message: message.analytics.success });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: `Something went wrong ${e}` });
  }
}
