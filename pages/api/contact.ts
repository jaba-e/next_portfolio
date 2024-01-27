import { Resend } from "resend";
import type { NextApiRequest, NextApiResponse } from "next";
import { ContactFormInterface } from "@/static/interfaces";
import { errorMessage, successMessage } from "@/static/messages";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (!process.env.SENDER_API) {
      throw new Error("Sender API is not defined.");
    }

    const resend = new Resend(process.env.SENDER_API);

    const { subject, message }: ContactFormInterface = req.body;

    await resend.emails.send({
      from: "12@resend.dev",
      to: "javkhaanaaa@gmail.com",
      subject: `[Portfolio contact] ${subject}`,
      html: message,
    });

    res.status(200).json({
      message: successMessage.email.success,
    });
  } catch (e) {
    res.status(500).json({
      message: errorMessage.email.exception,
    });
  }
}
