import { Resend } from "resend";
import type { NextApiRequest, NextApiResponse } from "next";
import { ContactFormInterface } from "@/static/interfaces";
import { message } from "@/static/messages";

export async function POST(req: NextApiRequest) {
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

    return Response.json({
      message: message.email.success,
    });
  } catch (e) {
    return Response.json({
      message: message.email.exception,
    });
  }
}
