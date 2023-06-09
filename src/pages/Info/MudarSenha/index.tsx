import { ButtonGeneric } from "../../../components/ButtonGeneric";
import { Label } from "../../../components/Label";

export function MudarSenha(){
  return(
    <div className="bg-gray-100 h-screen py-4">
      <div className="bg-white flex flex-col gap-4 container py-4">
          <h2 className="text-xl font-bold">Alterar sua senha</h2>
          <Label title="Nome" placeholder="Digite seu nome completo" />
          <div className="flex justify-end">
            <ButtonGeneric text="Alterar" link="/menu/info" />
          </div>
      </div>
    </div>
  )
}