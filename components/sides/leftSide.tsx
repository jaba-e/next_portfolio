import Link from "next/link";

import { menus, socials } from "@/static/constants";
import { LeftSidePropsInterface } from "@/static/interfaces";
import { Me } from "../me";
import { Menu } from "../menu";
import { Logo } from "../logo";

export default function LeftSide({ activeMenu }: LeftSidePropsInterface) {
  return (
    <section className="relative isolate overflow-hidden">
      <Me />
      <div className="mt-4 sm:mt-20">
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {menus.map((menu) => (
              <Menu key={menu.id} data={menu} activeMenu={activeMenu} />
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex sm:mt-12 md:mt-80 lg:mt-80 xl:mt-36">
        {socials.map((social) => (
          <Logo key={social.id} data={social} />
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
