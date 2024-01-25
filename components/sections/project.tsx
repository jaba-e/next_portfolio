import { projects } from "@/static/constants";
import { MobileTitle } from "../mobileTitle";
import { MediumCard } from "../mediumCard";
import { Divider } from "../divider";

export default function Project() {
  return (
    <>
      <MobileTitle text={"Projects"} />
      <div className="mx-auto max-w-screen-md">
        {projects.map((project) => (
          <>
            <MediumCard key={project.id} data={project} />
            <Divider key={project.id} />
          </>
        ))}
      </div>
    </>
  );
}
