import { LeftSide } from "@/components/sides/leftSide";
import { RightSide } from "@/components/sides/rightSide";

export default function Home() {
  return (
    <div className="md:flex md:h-screen">
      <div className="md:w-2/4 md:fixed md:top-0 md:overflow-y-auto px-10 py-10 md:pl-20 md:pt-24 md:pb-24 2xl:pl-64 2xl:pt-40 2xl:pr-24 2xl:pb-24">
        <LeftSide />
      </div>
      <div className="md:w-2/4"></div>
      <div className="md:w-2/4 px-10 md:flex-grow md:pr-24 2xl:pl-32 2xl:pr-48 2xl:pb-24">
        <RightSide />
      </div>
    </div>
  );
}
