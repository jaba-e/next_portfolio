"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { notifyError } from "./lib/notifyError";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [alerted, setAlerted] = useState<boolean>(false);

  useEffect(() => {
    notifyError(error.message).then((isNotified: boolean) => {
      setAlerted(isNotified);
    });
  }, [error.message]);

  return (
    <section>
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <h1 className="mt-3 text-xl text-gray-800 dark:text-white md:text-xl">
            OOPS! SOMETHING WENT WRONG.
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm">
            Apologies for the inconvenience.
            {alerted
              ? "Our team has been alerted, and we are actively working to resolve this issue."
              : "The system is currently notifying engineers."}
            Thank you for your patience.
          </p>
          <div className="flex items-center w-full mt-6 gap-x-3">
            <button
              className="bg-transparent w-full border border-gray-500 text-gray-500 hover:text-neon-green hover:border-gray-700 px-4 py-2 rounded-md transition duration-300 ease-in-out"
              onClick={() => reset()}
            >
              Try again
            </button>
            <button className="bg-transparent w-full border border-gray-500 text-gray-500 hover:text-neon-green hover:border-gray-700 px-4 py-2 rounded-md transition duration-300 ease-in-out">
              <Link href="/">Go Home</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
