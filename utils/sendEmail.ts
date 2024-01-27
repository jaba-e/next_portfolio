import { ContactFormInterface } from "@/static/interfaces";
import { prepareRequestData } from "./prepareRequestData";

export const sendEmail = async (contactFormData: ContactFormInterface) => {
  return fetch("/api/contact", prepareRequestData(contactFormData)).then(
    (response) => response.json()
  );
};
