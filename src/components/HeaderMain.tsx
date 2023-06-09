import { useState } from "react";
import { Link } from "react-router-dom";
import { ButtonLogout } from "./ButtonLogout";

export default function HeaderMain() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleLinkClick = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="flex items-center justify-between py-6 container">
      <Link to="/menu">
        <img src="https://designbygio.it/images/logo.png" alt="logo" />
      </Link>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 cursor-pointer"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON py-8 w-full flex justify-end container cursor-pointer"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center w-full">
              <li className=" text-lg my-3 uppercase">
                <Link onClick={handleLinkClick} to="atendimento">
                  Atendimento
                </Link>
              </li>
              <li className="text-lg my-3 uppercase">
                <Link onClick={handleLinkClick} to="custo">
                  Custos
                </Link>
              </li>
              <li className="text-lg my-3 uppercase">
                <Link onClick={handleLinkClick} to="equipe">
                  Equipe
                </Link>
              </li>
              <li className="text-lg my-3 uppercase">
                <Link onClick={handleLinkClick} to="relatorio">
                  Relatório
                </Link>
              </li>
              <li className="text-lg my-3 uppercase">
                <Link onClick={handleLinkClick} to="clientes">
                  Clientes
                </Link>
              </li>
              <li className="text-lg my-3 uppercase">
                <Link onClick={handleLinkClick} to="info">
                  Meus dados
                </Link>
              </li>
            </ul>
            <ButtonLogout />
          </div>
        </section>

        <ul className="hidden space-x-8 lg:flex uppercase">
          <li>
            <Link to="atendimento">Atendimento</Link>
          </li>
          <li>
            <Link to="custo">Custos</Link>
          </li>
          <li>
            <Link to="equipe">Equipe</Link>
          </li>
          <li>
            <Link to="relatorio">Relatório</Link>
          </li>
          <li>
            <Link to="clientes">Clientes</Link>
          </li>
          <li>
            <Link to="info">Meus dados</Link>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: #F2F4F8;
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
