import { SmallCardPropsInterface } from "constants/interfaces";

export function SmallCard({ label }: SmallCardPropsInterface) {
  return (
    <div className="inline-flex items-center rounded-full bg-teal-400/10 px-3 py-1 my-0.5 text-xs font-medium leading-5 text-neon-green">
      {label}
    </div>
  );
}
