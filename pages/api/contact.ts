import { Resend } from "resend";
import type { NextApiRequest, NextApiResponse } from "next";
import { ContactFormInterface } from "@/static/interfaces";
import { message } from "@/static/messages";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (!process.env.SENDER_API) {
      throw new Error("Sender API is not defined.");
    }

    const resend = new Resend(process.env.SENDER_API);

    const { subject, details }: ContactFormInterface = req.body;

    await resend.emails.send({
      from: "12@resend.dev",
      to: "javkhaanaaa@gmail.com",
      subject: `[Portfolio contact] ${subject}`,
      html: details,
    });

    res.status(200).json({
      message: message.email.success,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: message.email.exception,
    });
  }
}
