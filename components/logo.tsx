import Link from "next/link";
import { socialInterface } from "@/static/interfaces";

interface LogoProps {
  data: socialInterface;
}

export function Logo({ data }: LogoProps) {
  return (
    <div>
      <Link
        target={data.openNewTab ? "_blank" : ""}
        href={data.link}
        className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
      >
        <svg
          className="w-10 h-10"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox={data.svg.viewBox}
        >
          <path d={data.svg.path}></path>
        </svg>
        <span className="sr-only">{data.name}</span>
      </Link>
    </div>
  );
}
