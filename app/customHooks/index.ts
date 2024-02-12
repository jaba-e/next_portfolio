import { MENU_TYPES } from "@/constants/enums";
import { useEffect, useState } from "react";

export const useSelectActiveMenu = () => {
  const [activeMenu, setActiveMenu] = useState(MENU_TYPES.ABOUT);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;

      const experienceElement = document.getElementById(
        MENU_TYPES.EXPERIENCE.toLowerCase()
      );

      const projectsElement = document.getElementById(
        MENU_TYPES.PROJECT.toLowerCase()
      );

      if (experienceElement && projectsElement) {
        if (scrollPosition < experienceElement.offsetTop) {
          setActiveMenu(MENU_TYPES.ABOUT);
        } else if (scrollPosition < projectsElement.offsetTop) {
          setActiveMenu(MENU_TYPES.EXPERIENCE);
        } else {
          setActiveMenu(MENU_TYPES.PROJECT);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return activeMenu;
};
