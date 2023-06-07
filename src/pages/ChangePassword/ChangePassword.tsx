import { Link } from "react-router-dom";
import image from "../../assets/images/image.jpg";

export default function ChangePassword() {
  return (
    <div className="grid sm:grid-cols-2 h-screen">
      <img
        src={image}
        alt="imagem de teste"
        className="sm:h-full h-52 w-full object-cover"
      />
      <div className="flex flex-col items-center sm:justify-center py-12">
        <div className="px-4 flex flex-col space-y-3 w-full sm:w-96">
          <h2 className="text-3xl font-bold">Esqueci minha senha</h2>
          <label className="flex flex-col py-4">
            E-mail:
            <input
              type="email"
              placeholder="Informe seu e-mail"
              className="mt-1 p-4 bg-[#F2F4F8] shadow-md"
            />
          </label>

          <button className="bg-azul-1 text-white py-3">Recuperar senha</button>
          <br />
          <hr className="pb-6" />

          <Link to="/" className="text-azul-2 text-sm h underline text-center">
            Fazer login
          </Link>
        </div>
      </div>
    </div>
  );
}
