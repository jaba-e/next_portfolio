import Image from "next/image";
import Link from "next/link";

import { my, menus, socials } from "@/static/constants";
import { LeftSidePropsInterface } from "@/static/interfaces";

export default function LeftSide({ activeMenu }: LeftSidePropsInterface) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="flex items-center gap-4">
        <Image
          className="rounded-full"
          width={60}
          height={60}
          src={my.avatar}
          alt="profile_image"
          style={{ backgroundColor: "#40ffc0" }}
        />
        <div>
          <div className="font-bold text-xl lg:text-4xl">
            {my.firstName}
            {my.lastName}
          </div>
          <div className="font-bold text-slate-200 text-xxl sm:text-xxl mt-1 sm:mt-2">
            {my.role} at {my.currentCompany}
          </div>
        </div>
      </div>
      <div>
        <div className="dark:text-gray-400 text-xs sm:text-xl mt-5">
          {my.shortDescription}
        </div>
      </div>
      <div className="mt-4 sm:mt-20">
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {menus.map((menu, i) => (
              <li key={i}>
                <Link className="group flex items-center py-3" href={menu.href}>
                  <span
                    className={`nav-indicator mr-4 h-px transition-all ${
                      activeMenu === menu.name
                        ? "w-24 bg-slate-200 neon-green"
                        : "w-8 bg-slate-600 group-hover:w-24 group-hover:bg-slate-200"
                    } motion-reduce:transition-none`}
                  ></span>
                  <span
                    className={`nav-text text-xs font-bold uppercase tracking-widest ${
                      activeMenu === menu.name
                        ? "text-slate-200"
                        : "text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                    }`}
                  >
                    {menu.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex sm:mt-12 md:mt-80 lg:mt-80 xl:mt-36">
        {socials.map((social, i) => (
          <div key={i}>
            <Link
              target={social.openNewTab ? "_blank" : ""}
              href={social.link}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-10 h-10"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox={social.svg.viewBox}
              >
                <path d={social.svg.path}></path>
              </svg>
              <span className="sr-only">{social.name}</span>
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-2">
        <Link target="_blank" download rel="noopener noreferrer" href="cv.pdf">
          <div className="inline-flex font-bold rounded-full bg-teal-400/10 px-5 py-2 text-xs leading-5 dark:hover:text-neon-green">
            Download CV
          </div>
        </Link>
      </div>
    </section>
  );
}
