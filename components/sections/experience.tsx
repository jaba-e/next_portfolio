import { MobileTitle } from "../mobileTitle";
import { TimeLine } from "../timeline";
import { experiences } from "@/static/constants";

export function Experience() {
  return (
    <>
      <MobileTitle text={"Experience"} />
      <div className="mt-5 mx-auto max-w-screen-md">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {experiences.map((experience) => (
            <TimeLine key={experience.id} data={experience} />
          ))}
        </ol>
      </div>
    </>
  );
}
