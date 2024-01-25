import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Project from "@/components/sections/project";

export default function RightSide() {
  return (
    <div className="2xl:pr-16">
      <section
        id="about"
        className="pt-12 md:pt-28 lg:pt-44 xl:pt-44 2xl:pt-60 2xl:pb-20"
      >
        <About />
      </section>
      <section id="experience" className="pt-20 sm:pt-24 2xl:pt-44">
        <Experience />
      </section>
      <section
        id="project"
        className="pt-24 pb-24 sm:pt-28 2xl:pt-40 2xl:pb-44"
      >
        <Project />
      </section>
    </div>
  );
}
