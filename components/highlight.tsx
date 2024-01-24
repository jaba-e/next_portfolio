import Link from "next/link";
import { HighlightPropsInterface } from "@/static/interfaces";

export default function Highlight({ text, link }: HighlightPropsInterface) {
  return (
    <span className="text-slate-200">
      {link ? (
        <Link target="_blank" href={link}>
          {text}
        </Link>
      ) : (
        <span>{text}</span>
      )}
    </span>
  );
}
