import { Link } from "react-router-dom";
import { ButtonGeneric } from "../../components/ButtonGeneric";

export default function Info() {
    return (
        <div className="bg-gray-100 h-screen">
            <div className="h-6">
                
            </div>
            <div className="container space-y-3 py-4 bg-white">
                <p className="font-bold  text-xl">Seus dados</p>
                <p className="font-bold">Nome: <span className="font-normal">Guilherme Henrique</span></p>
                <div className="flex justify-between">
                    <Link className="text-azul-1 hover:opacity-80 py-3 sm:px-8" to={"/menu/editar-dados"}>
                        Mudar sua senha
                    </Link>
                    <ButtonGeneric link="/menu/alterar-senha" text="Editar dados"/>
                </div>
            </div>
        </div>
    )
}