"use server";

import nodemailer, { Transporter } from "nodemailer";
import { z } from "zod";
import { message } from "@/static/messages";
import { ContactFormDataInterface } from "@/static/interfaces";

const schema = z.object({
  from: z
    .string({
      invalid_type_error: message.email.validation.from.invalid_type_error,
    })
    .email({ message: message.email.validation.from.not_mail_error })
    .max(255, { message: message.email.validation.from.max_exceed_error }),
  subject: z
    .string({
      invalid_type_error: message.email.validation.subject.invalid_type_error,
    })
    .max(100, { message: message.email.validation.subject.max_exceed_error }),
  details: z
    .string({
      invalid_type_error: message.email.validation.details.invalid_type_error,
    })
    .max(500, { message: message.email.validation.details.max_exceed_error }),
});

export async function sendEmail(currentState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    from: formData.get("from")?.toString(),
    subject: formData.get("subject")?.toString(),
    details: formData.get("details")?.toString(),
  });

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
  html: `<div> FROM: ${data.from}<div><div>DETAILS: ${data.details}<div>`,
});
