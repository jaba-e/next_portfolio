"use client";

import React from "react";
import { useFormState } from "react-dom";

import { SmallCard } from "@/components/smallCard";

import { SubmitButton } from "@/components/submitButton";
import { sendEmail } from "../actions/sendEmail";

export default function ContactPage() {
  const [state, formAction] = useFormState(sendEmail, null);

  return (
    <section id="contact">
      <div className="py-20 lg:py-32 mx-auto max-w-lg">
        <form action={formAction}>
          <div className="space-y-3 mx-5">
            <span className="block mb-2">
              <SmallCard label="Your email" />
            </span>
            <input
              type="email"
              name="from"
              maxLength={255}
              className="bg-transparent shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="mail@example.com"
              required
            />
            {state?.errors?.from?.map((error: string) => (
              <p>{error}</p>
            ))}
            <span className="block mb-2">
              <SmallCard label="Subject" />
            </span>
            <input
              name="subject"
              maxLength={100}
              className="bg-transparent block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let me know how I can help you."
              required
            />
            <p aria-live="polite">
              {state?.errors?.subject?.map((error: string) => (
                <p>{error}</p>
              ))}
            </p>
            <div className="sm:col-span-2">
              <span className="block mb-2">
                <SmallCard label="Your Message" />
              </span>
              <textarea
                maxLength={500}
                name="details"
                rows={6}
                className="bg-transparent block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>
            {state?.errors?.details?.map((error: string) => (
              <p>{error}</p>
            ))}
            <SubmitButton lottieClassName="w-10" />
          </div>
          {state?.success && (
            <div className="m-5 text-sm text-gray-500">{state.success}</div>
          )}
        </form>
      </div>
    </section>
  );
}
