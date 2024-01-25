import Image from "next/image";
import { my } from "@/static/constants";

export function Me() {
  return (
    <>
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
    </>
  );
}
