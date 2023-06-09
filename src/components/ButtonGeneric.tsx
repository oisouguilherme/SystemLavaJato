import { Link } from "react-router-dom";

export function ButtonGeneric({ text, link, style }: any) {
  return (
    <Link
      to={link}
      className={`${style} bg-azul-1 hover:bg-opacity-90 py-3 px-6 sm:px-8 text-white w-fit`}
    >
      {text}
    </Link>
  );
}
