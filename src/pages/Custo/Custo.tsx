import { ButtonGeneric } from "../../components/ButtonGeneric";
import { ButtonNovoAtendimento } from "../../components/ButtonNovoAtendimento";
import { Pagination } from "./Pagination";
import { TabelaCustos } from "./TabelaCustos";

export default function Custo() {
  return (
    <div className="bg-cinza-1 py-6 pb-64 h-full">
      <div className=" container">
        <div className="flex justify-between items-center pb-4">
          <h2 className="sm:text-2xl text-xl font-bold">Custos</h2>
          <input
            type="date"
            className="font-semibold bg-cinza-1 outline-none cursor-pointer"
          />
          <ButtonGeneric
            link="/menu/novo-custo"
            style="hidden sm:block"
            text="+ NOVO CUSTO"
          />
        </div>
        <TabelaCustos date="02/06/22" />
        <TabelaCustos date="03/06/22" />
        <TabelaCustos date="04/06/22" />
        <TabelaCustos date="05/06/22" />

        <Pagination />
      </div>

      <ButtonNovoAtendimento button="NOVO CUSTO" link="/menu/novo-custo" />
    </div>
  );
}
