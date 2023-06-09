import { Link } from "react-router-dom";
import { ButtonGeneric } from "../../../components/ButtonGeneric";
import { Label } from "../../../components/Label";

export function MudarSenha() {
  return (
    <div className="bg-gray-100 h-screen py-4">
      <div className="container py-4 flex flex-col gap-4 bg-white">
        <div className="flex justify-between">
          <h2 className="font-bold sm:text-2xl text-xl">Alterar sua senha</h2>
          <Link to="/menu/info" className="text-red-500">
            Voltar
          </Link>
        </div>
        <Label title="Nova senha" placeholder="Nova senha" type="password" />
        <Label
          title="Confirmar senha"
          placeholder="Confirmar senha"
          type="password"
        />
        <div className="flex justify-end">
          <ButtonGeneric text="Alterar" link="/menu/info" />
        </div>
      </div>
    </div>
  );
}
