"use server";

import nodemailer, { Transporter } from "nodemailer";
import { contactFormValidator } from "../zod/contact";
import { message } from "constants/messages";
import { ContactFormDataInterface } from "constants/interfaces";

export async function sendEmail(currentState: any, formData: FormData) {
  const validatedFields = contactFormValidator.safeParse(
    Object.fromEntries(formData)
  );

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const transporterData = prepareTransporterData(validatedFields);
  const transporter = createTransporter();
  await transporter.sendMail(transporterData);

  return {
    success: message.email.success,
  };
}

const createTransporter = (): Transporter => {
  if (
    !process.env.TRANSPORTER_USER_NAME ||
    !process.env.TRANSPORTER_USER_PASS
  ) {
    throw new Error(message.email.error.transporter_keys_not_found);
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.TRANSPORTER_USER_NAME,
      pass: process.env.TRANSPORTER_USER_PASS,
    },
  });
};

const prepareTransporterData = ({
  data,
}: {
  data: ContactFormDataInterface;
}) => ({
  to: process.env.TRANSPORTER_USER_NAME,
  subject: data.subject,
  html: `<div>FROM: ${data.from}<div><div>DETAILS: ${data.details}<div>`,
});
