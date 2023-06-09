import { ButtonGeneric } from "../../../components/ButtonGeneric";
import { Label } from "../../../components/Label";

export function EditDados(){
  return(
    <div className="bg-gray-100 h-screen py-4">
      <div className="container py-4 flex flex-col gap-4 bg-white">
        <h2 className="text-xl font-bold">Alterar sua senha</h2>
        <Label title="Nova senha" placeholder="Nova senha" type="password"/>
        <Label title="Confirmar senha" placeholder="Confirmar senha" type="password"/>
        <div className="flex justify-end">
          <ButtonGeneric text="Alterar" link="/menu/info"/>
        </div>
      </div>
    </div>
  )
}