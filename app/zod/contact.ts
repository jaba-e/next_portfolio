import { z } from "zod";
import { message } from "@/constants/messages";

export const contactFormValidator = z.object({
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
