import Link from "next/link";
import { MenuPropsInterface } from "@/static/interfaces";

export function Menu({ data, activeMenu }: MenuPropsInterface) {
  return (
    <li>
      <Link className="group flex items-center py-3" href={data.href}>
        <span
          className={`nav-indicator mr-4 h-px transition-all ${
            activeMenu === data.name
              ? "w-24 bg-slate-200 neon-green"
              : "w-8 bg-slate-600 group-hover:w-24 group-hover:bg-slate-200"
          } motion-reduce:transition-none`}
        ></span>
        <span
          className={`nav-text text-xs font-bold uppercase tracking-widest ${
            activeMenu === data.name
              ? "text-slate-200"
              : "text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
          }`}
        >
          {data.name}
        </span>
      </Link>
    </li>
  );
}
