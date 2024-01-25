import { SmallCard } from "@/components/smallCard";
import { TimelineProps } from "@/static/interfaces";

export function TimeLine({ data }: TimelineProps) {
  return (
    <li className="mb-5 ms-6">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <div className="">
        <div className="items-center justify-between sm:flex">
          <time className="mb-1 text-sm text-gray-400 sm:order-last sm:mb-0">
            {data.startedYear} - {data.finishedYear}
          </time>
          <div className="text-sm sm:text-lg font-bold text-gray-500 dark:text-gray-300">
            {data.role}・{data.place}
          </div>
        </div>
        <div className="text-xs text-gray-500">{data.responsibleFor}</div>
        <div className="p-3 text-xs sm:text-sm text-gray-500">
          <ul className="list-disc">
            {data.achievements.map((achievement, i) => (
              <li key={i} className="list-item">
                {achievement}
              </li>
            ))}
          </ul>
        </div>
        {data.technologies.map((tech, i) => (
          <span key={i} className="pl-1">
            <SmallCard label={tech} />
          </span>
        ))}
      </div>
    </li>
  );
}
