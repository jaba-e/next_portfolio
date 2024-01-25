import { TitlePropsInterface } from "@/static/interfaces";

export function MobileTitle({ text }: TitlePropsInterface) {
  return (
    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
      {text}
    </h2>
  );
}
