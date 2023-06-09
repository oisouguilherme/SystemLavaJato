import { Link } from "react-router-dom";

export function ButtonNovoAtendimento({link,button}:any){
  return(
    <button className="bg-azul-1 hover:bg-opacity-90 duration-300 w-full fixed bottom-0 py-3 text-center text-xl text-white sm:hidden">
      <Link to={link} className="flex items-center justify-center gap-4"><span className="text-3xl">+</span>{button}</Link>
    </button>
  )
}