import { aboutMe } from "@/static/constants";

export default function About() {
  return (
    <>
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
        About
      </h2>
      <div className="dark:text-gray-400 text-xs sm:text-lg">
        <div className="mt-4 2xl:mt-4">{aboutMe.text1}</div>
        <div className="mt-3 2xl:mt-5">{aboutMe.text2}</div>
        <div className="mt-3 2xl:mt-5">{aboutMe.text3}</div>
      </div>
    </>
  );
}
