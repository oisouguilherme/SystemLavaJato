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
      {
        path: "/menuatendimento",
        element: <Atendimento />,
      },
      {
        path: "/menuclientes",
        element: <Clientes />,
      },
      {
        path: "/menucusto",
        element: <Custo />,
      },
      {
        path: "/menuequipe",
        element: <Equipe />,
      },
      {
        path: "/menurelatorio",
        element: <Relatorio />,
      },
      {
        path: "/menuinfo",
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