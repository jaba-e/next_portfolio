"use client";

import React, { useState } from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import Lottie from "lottie-react";

import { ContactInputInterface } from "@/static/interfaces";
import { SmallCard } from "../smallCard";
import { sendEmail } from "@/lib/sendEmail";
import submit_animation from "public/submit_animation.json";

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (
    values: ContactInputInterface,
    { setSubmitting }: FormikHelpers<ContactInputInterface>
  ) => {
    setSending(true);

    const mailResponse = await sendEmail(values);

    mailResponse.status === 200
      ? setSubmitMessage(
          "Your message has been successfully submitted. I'll get back to you as soon as possible. Thank you."
        )
      : setSubmitMessage(
          "Oops! Something went wrong. I've been working to fix it."
        );

    setSending(false);
    setSubmitting(false);
  };

  return (
    <section id="contact">
      <div className="py-20 lg:py-32 mx-auto max-w-lg">
        <Formik
          initialValues={{
            email: "",
            message: "",
            subject: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="space-y-3 mx-5">
              <div>
                <span className="block mb-2">
                  <SmallCard label="Your email" />
                </span>
                <Field
                  id="email"
                  type="email"
                  name="email"
                  className="bg-transparent shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="mail@example.com"
                  required
                />
              </div>
              <div>
                <span className="block mb-2">
                  <SmallCard label="Subject" />
                </span>
                <Field
                  id="subject"
                  type="text"
                  name="subject"
                  className="bg-transparent block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let me know how I can help you."
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <span className="block mb-2">
                  <SmallCard label="Your Message" />
                </span>
                <Field
                  id="message"
                  as="textarea"
                  name="message"
                  rows={6}
                  className="bg-transparent block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-transparent w-full border border-gray-500 text-gray-500 hover:text-neon-green hover:border-gray-700 px-4 py-2 rounded-md transition duration-300 ease-in-out"
              >
                <div className="flex items-center justify-center h-10">
                  {sending ? (
                    <div className="w-10">
                      <Lottie animationData={submit_animation} loop={true} />
                    </div>
                  ) : (
                    <span className="mr-5">Send</span>
                  )}
                </div>
              </button>
            </div>
            {submitMessage && (
              <div className="m-5 text-sm text-gray-500">{submitMessage}</div>
            )}
          </Form>
        </Formik>
      </div>
    </section>
  );
}
