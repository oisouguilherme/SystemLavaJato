import IconSearch from "../../assets/images/search.svg";
import { ButtonGeneric } from "../../components/ButtonGeneric";
import { ButtonNovoAtendimento } from "../../components/ButtonNovoAtendimento";
import { Tables } from "../../components/Tables";

export default function Atendimento() {
  return (
    <div className=" bg-cinza-1 py-6 h-full">
      <div className="container">
        <div className="flex justify-between items-center">
          <h2 className="sm:text-2xl text-lg font-bold">Atendimentos</h2>
          <input
            type="date"
            className="font-semibold text-sm sm:text-base bg-cinza-1 outline-none cursor-pointer"
          />
          <ButtonGeneric
            link="/menu/buscar-atendimento"
            style="hidden sm:block"
            text="+ NOVO ATENDIMENTO"
          />
        </div>

        <div className="py-6 flex justify-between text-lg font-semibold text-cinza-2">
          <p className="flex gap-2 items-center text-sm sm:text-base cursor-pointer hover:text-azul-2 pb-2 border-b-2 border-cinza-1 hover:border-azul-2">
            Na fila
            <span className="bg-cinza-3 rounded-full w-5 h-5 flex items-center justify-center text-white font-light text-sm">
              7
            </span>
          </p>
          <p className="flex gap-2 items-center cursor-pointer hover:text-azul-2 pb-2 border-b-2 border-cinza-1 hover:border-azul-2 text-sm sm:text-base">
            Finalizados
            <span className="bg-cinza-3 rounded-full w-5 h-5 flex items-center justify-center text-white font-light text-sm">
              2
            </span>
          </p>
          <p className="flex gap-2 items-center cursor-pointer hover:text-azul-2 pb-2 border-b-2 border-cinza-1 hover:border-azul-2 text-sm sm:text-base">
            Entregues
            <span className="bg-cinza-3 rounded-full w-fit p-1 h-5 flex items-center justify-center text-white font-light text-sm">
              99+
            </span>
          </p>
        </div>

        <label className="flex gap-4 bg-white p-3 mb-4">
          <img src={IconSearch} alt="lupa de busca" className="w-7" />
          <input type="text" placeholder="Buscar" className="outline-none" />
        </label>
        <div className="space-y-4 pb-12">
          <Tables />
          <Tables />
        </div>
      </div>
      <ButtonNovoAtendimento
        button="NOVO ATENDIMENTO"
        link="/menu/buscar-atendimento"
      />
    </div>
  );
}
