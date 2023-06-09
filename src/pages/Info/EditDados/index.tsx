import { Link } from "react-router-dom";
import { ButtonGeneric } from "../../../components/ButtonGeneric";
import { Label } from "../../../components/Label";

export function EditDados() {
  return (
    <div className="bg-gray-100 h-screen py-4">
      <div className="bg-white flex flex-col gap-4 container py-4">
        <div className="flex justify-between">
          <h2 className="font-bold sm:text-2xl text-xl">Seus dados</h2>
          <Link to="/menu/info" className="text-red-500">
            Voltar
          </Link>
        </div>
        <Label title="Nome" placeholder="Digite seu nome completo" />
        <div className="flex justify-end">
          <ButtonGeneric text="Alterar" link="/menu/info" />
        </div>
      </div>
    </div>
  );
}
