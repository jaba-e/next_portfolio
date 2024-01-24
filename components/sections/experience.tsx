import { experiences } from "@/static/constants";
import { SmallCard } from "@/components/smallCard";

export default function Experience() {
  return (
    <>
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
        Experience
      </h2>
      <div className="mt-5 mx-auto max-w-screen-md">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {experiences.map((experience, i) => (
            <li className="mb-5 ms-6" key={i}>
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <div className="">
                <div className="items-center justify-between sm:flex">
                  <time className="mb-1 text-sm text-gray-400 sm:order-last sm:mb-0">
                    {experience.startedYear} - {experience.finishedYear}
                  </time>
                  <div className="text-sm sm:text-lg font-bold text-gray-500 dark:text-gray-300">
                    {experience.role}・{experience.place}
                  </div>
                </div>
                <div className="text-xs text-gray-500">
                  {experience.responsibleFor}
                </div>
                <div className="p-3 text-xs sm:text-sm text-gray-500">
                  <ul className="list-disc">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i} className="list-item">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                {experience.technologies.map((tech, i) => (
                  <span key={i} className="pl-1">
                    <SmallCard label={tech} />
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
