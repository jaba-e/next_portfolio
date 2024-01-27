import Link from "next/link";
import { SmallCard } from "./smallCard";
import { MediumCardPropsInterface } from "@/static/interfaces";

export function MediumCard({ data }: MediumCardPropsInterface) {
  return (
    <div>
      <Link href={data.link || ""} target="_blank">
        <div className="group relative">
          <div className="flex items-center hover:bg-gray-900 sm:px-2 py-2 rounded-md transition duration-100 ease-in-out">
            <div>
              <div className="text-sm md:text-lg text-gray-500 dark:text-gray-300 font-bold">
                {data.name}
              </div>
              <div className="text-xs text-gray-500 sm:text-base">
                {data.description}
              </div>
              <div className="mt-1">
                {data.technologies.map((tech: any, i: any) => (
                  <span key={i} className="pr-0.5">
                    <SmallCard label={tech} />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
