import { Link } from "react-router-dom";

export function ButtonGeneric({text,link}:any){
  return(
    <Link to={link} className="bg-azul-1 py-3 px-8 text-white w-fit">{text}</Link>
  )
}