import { Link } from "react-router-dom";
import { ButtonGeneric } from "../../../components/ButtonGeneric";
import { Label } from "../../../components/Label";
import "react-toastify/dist/ReactToastify.css";

export default function EditarCusto() {
  return (
    <div>
      <div className="bg-cinza-1 h-screen">
      <div className="container py-4 flex justify-between">
        <h2 className="font-bold sm:text-2xl text-xl">Editar Custo</h2>
        <Link to="/menu/custo" className="text-red-500">Voltar</Link>
      </div>

        <div className="bg-white w-full container flex flex-col gap-6 py-8 border-2">
          <Label title="Nome" type="text" placeholder="Fulado de tal" />
          <Label title="Valor" type="text" placeholder="R$ 00,00" />
          <Label title="Data" type="Date" placeholder="Ex. Gol preto" />
          <div className="flex justify-end">
            <ButtonGeneric link="/menu/custo" text="Alterar" />
          </div>
        </div>
      </div>
    </div>
  );
}
