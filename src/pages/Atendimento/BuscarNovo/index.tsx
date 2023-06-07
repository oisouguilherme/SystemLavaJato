import { Link } from "react-router-dom";
import { ButtonGeneric } from "../../../components/ButtonGeneric";

export default function BuscarNovo(){
  return(
    <div className="bg-cinza-1 h-screen">
      <div className="container py-6 flex justify-between">
        <h2 className="font-bold sm:text-2xl text-xl">Novo Atendimento</h2>
        <Link to="/menu/atendimento" className="text-red-500">Voltar</Link>
      </div>

      <div className="bg-white w-full container flex flex-col gap-6 py-8">
        <label className="space-y-1">
          <p>Telefone</p>
          <input className="bg-cinza-1 p-4 w-full shadow-lg" type="tel"  placeholder="Buscar pelo telefone com DDD"/>
        </label>
        <div className="flex justify-end">
          <ButtonGeneric link="/menu/adicionar-atendimento" text="Buscar"/>
        </div>
      </div>
    </div>
  )
}