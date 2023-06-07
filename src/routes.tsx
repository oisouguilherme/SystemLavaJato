import { lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Custo from "./pages/Custo/Custo";
import Equipe from "./pages/Equipe/Equipe";
import Relatorio from "./pages/Relatorio/Relatorio";
import Info from "./pages/Info/Info";
import Clientes from "./pages/Clientes/Clientes";
import BuscarNovo from "./pages/Atendimento/BuscarNovo";
import { AddNovo } from "./pages/Atendimento/AddNovo";
import NovoCusto from "./pages/Custo/NovoCusto";
import EditarCusto from "./pages/Custo/EditarCusto";

const LayoutMain = lazy(() => import("./layouts/LayoutMain"));
const Home = lazy(() => import("./pages/Home/Home"));
const Atendimento = lazy(() => import("./pages/Atendimento/Atendimento"));

const Login = lazy(() => import("./pages/Login/Login"));
const ChangePassword = lazy(() => import("./pages/ChangePassword/ChangePassword"));

const router = createBrowserRouter([
  {
    path: "/",
    //element: <LayoutMain />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/changepassword",
        element: <ChangePassword />,
      }
    ],
  },
  {
    path: "/menu",
    element: <LayoutMain />,
    children: [
      {
        path: "/menu",
        element: <Home />,
      },
      //Atendimentos
      {
        path: "atendimento",
        element: <Atendimento />,
      },
      {
        path: "buscar-atendimento",
        element: <BuscarNovo />,
      },
      {
        path: "adicionar-atendimento",
        element: <AddNovo />,
      },
      //Custos
      {
        path: "custo",
        element: <Custo />,
      },
      {
        path: "novo-custo",
        element: <NovoCusto />,
      },
      {
        path: "editar-custo",
        element: <EditarCusto />,
      },
      //Clientes
      {
        path: "clientes",
        element: <Clientes />,
      },
      {
        path: "equipe",
        element: <Equipe />,
      },
      {
        path: "relatorio",
        element: <Relatorio />,
      },
      {
        path: "info",
        element: <Info />,
      },
    ],
  },
]);


export default function Routes() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<div>Carregando...</div>}
    />
  )
}