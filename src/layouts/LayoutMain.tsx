import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
const HeaderMain = lazy(() => import("../components/HeaderMain"));

function RouteFallback() {
 return (
    <div className="p-5 text-center">Carregando...</div>
 )
}

export default function LayoutMain() {
    return (
        <>
            <HeaderMain />
            <main>
                <Suspense fallback={<RouteFallback />}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    )
}