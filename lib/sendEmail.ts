"use server";

import { Resend } from "resend";
import { ContactInputInterface } from "@/static/interfaces";

const resend = new Resend(process.env.NEXT_PUBLIC_SENDER_API);

export const sendEmail = async (values: ContactInputInterface) => {
  try {
    await resend.emails.send({
      from: "12@resend.dev",
      to: "javkhaanaaa@gmail.com",
      subject: `[Portfolio contact] ${values.subject}`,
      html: values.message,
    });

    return {
      status: 200,
      message: "Your email is succesfully submitted.",
    };
  } catch (err) {
    console.error(err);
    return { status: 500, message: "Something went wrong. Please try again" };
  }
};
