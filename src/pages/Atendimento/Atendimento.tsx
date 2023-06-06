import IconSearch from "../../assets/images/search.svg";
import { ButtonNovoAtendimento } from "../../components/ButtonNovoAtendimento";
import { Kaban } from "../../components/Kaban";

export default function Atendimento() {
  return (
    <div className=" bg-cinza-1 py-8 h-full">
      <div className="container">
        <div className="flex justify-between ">
          <h2 className="text-2xl font-bold">Atendimentos</h2>
          <input
            type="date"
            className="font-semibold bg-cinza-1 outline-none cursor-pointer"
          />
        </div>

        <div className="py-8 flex justify-between text-lg font-semibold text-cinza-2">
          <p className="flex gap-2 items-center cursor-pointer hover:text-azul-2 pb-2 hover:border-b-2 hover:border-azul-2">
            Na fila{" "}
            <div className="bg-cinza-3 rounded-full w-5 h-5 flex items-center justify-center text-white font-light text-sm">
              7
            </div>{" "}
          </p>
          <p className="flex gap-2 items-center cursor-pointer hover:text-azul-2 pb-2 hover:border-b-2 hover:border-azul-2">
            Finalizados
            <div className="bg-cinza-3 rounded-full w-5 h-5 flex items-center justify-center text-white font-light text-sm">
              2
            </div>{" "}
          </p>
          <p className="flex gap-2 items-center cursor-pointer hover:text-azul-2 pb-2 hover:border-b-2 hover:border-azul-2">
            Entregues
            <div className="bg-cinza-3 rounded-full w-fit p-1 h-5 flex items-center justify-center text-white font-light text-sm">
              99+
            </div>{" "}
          </p>
        </div>

        <label className="flex gap-4 bg-white p-3 mb-4">
          <img src={IconSearch} alt="lupa de busca" className="w-7" />
          <input type="text" placeholder="Buscar" className="outline-none" />
        </label>
        <div className="space-y-4 pb-12">
            <Kaban/>
            <Kaban/>
        </div>
      </div>
      <ButtonNovoAtendimento />
    </div>
  );
}
