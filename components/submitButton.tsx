import { useFormStatus } from "react-dom";
import Lottie from "lottie-react";
import submit_animation from "public/submit_animation.json";

export function SubmitButton({ lottieClassName }: { lottieClassName: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-transparent w-full border border-gray-500 text-gray-500 hover:text-neon-green hover:border-gray-700 px-4 py-2 rounded-md transition duration-300 ease-in-out"
    >
      <div className="flex items-center justify-center h-10">
        {pending ? (
          <div className={lottieClassName}>
            <Lottie animationData={submit_animation} loop={true} />
          </div>
        ) : (
          <span className="mr-5">Send</span>
        )}
      </div>
    </button>
  );
}
