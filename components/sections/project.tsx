import Link from "next/link";
import { projects } from "@/static/constants";
import { SmallCard } from "@/components/smallCard";

export default function Project() {
  return (
    <>
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only pb-5">
        Projects
      </h2>
      <div className="mx-auto max-w-screen-md">
        <div>
          {projects.map((project, i) => (
            <div key={i}>
              <Link href={project.link || ""} target="_blank">
                <div className="group relative">
                  <div className="flex items-center hover:bg-gray-900 sm:px-2 py-2 rounded-md transition duration-100 ease-in-out">
                    <div>
                      <div className="text-sm md:text-lg text-gray-500 dark:text-gray-300 font-bold">
                        {project.name}
                      </div>
                      <div className="text-xs text-gray-500 sm:text-base">
                        {project.description}
                      </div>
                      <div className="mt-1">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="pr-0.5">
                            <SmallCard label={tech} />
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              {i !== projects.length - 1 && (
                <div className="border-t border-slate-800 my-0.5"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
