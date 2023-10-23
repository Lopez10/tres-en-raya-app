import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ROUTE_ITEMS } from "./RouteItems";
import { NavBar } from "./navbar/NavBar";


export function Router(): JSX.Element {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                {
                    ROUTE_ITEMS.map((route, index) =>
                        <Route key={index} path={route.path} element={route.element} />
                    )
                }
            </Routes>
        </BrowserRouter>
    )
}
