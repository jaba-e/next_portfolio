"use client";

import { useEffect, useState } from "react";

import LeftSide from "@/components/sides/leftSide";
import RightSide from "@/components/sides/rightSide";

export default function Home() {
  const [activeMenu, setActiveMenu] = useState<string>("ABOUT");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;

      const experienceElement = document.getElementById("experience");
      const projectsElement = document.getElementById("project");

      if (experienceElement && projectsElement) {
        if (scrollPosition < experienceElement.offsetTop) {
          setActiveMenu("ABOUT");
        } else if (scrollPosition < projectsElement.offsetTop) {
          setActiveMenu("EXPERIENCE");
        } else {
          setActiveMenu("PROJECT");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="md:flex md:h-screen">
      <div className="md:w-2/4 md:fixed md:top-0 md:overflow-y-auto px-10 py-10 md:pl-20 md:pt-24 md:pb-24 2xl:pl-64 2xl:pt-40 2xl:pr-24 2xl:pb-24">
        <LeftSide activeMenu={activeMenu} />
      </div>
      <div className="md:w-2/4"></div>
      <div className="md:w-2/4 px-10 md:flex-grow md:pr-24 2xl:pl-32 2xl:pr-48 2xl:pb-24">
        <RightSide />
      </div>
    </div>
  );
}
