import { Link } from "react-router-dom";
import IconApagaInput from "../../../assets/images/apagaInput.svg";
import { ButtonGeneric } from "../../../components/ButtonGeneric";
import { Label } from "../../../components/Label";

export function AddNovo() {
  return (
    <div className="bg-cinza-1 h-screen">
      <div className="container py-6">
        <div className="flex justify-between">
          <h2 className="font-bold sm:text-2xl text-xl">Novo custo</h2>
          <Link to="/menu/buscar-atendimento" className="text-red-500">
            Voltar
          </Link>
        </div>
        <label className="flex w-full justify-between p-2 border-b-2">
          <input
            type="text"
            className="bg-cinza-1 w-full outline-none placeholder-cinza-3"
            placeholder="José Onofre"
          />
          <button className="cursor-pointer">
            <img src={IconApagaInput} alt="Limpar caixa de texto" />
          </button>
        </label>
      </div>

      <div className="bg-white w-full container flex flex-col gap-6 py-8 border-2">
        <Label
          title="Nome do produto"
          type="text"
          placeholder="Ex. Gol preto"
        />
        <Label title="Placa" type="text" placeholder="Ex. Gol preto" />
        <Label title="Serviços" type="text" placeholder="Ex. Gol preto" />
        <div className="flex justify-end">
          <ButtonGeneric link="/menu/adicionar-atendimento" text="Buscar" />
        </div>
      </div>
    </div>
  );
}
