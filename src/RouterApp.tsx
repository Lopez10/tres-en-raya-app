import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Game } from "./pages/Game";
import { Home } from "./pages/Home";
import { Ranking } from "./pages/Ranking";

export function Router(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                {
                    routes.map((route, index) =>
                        <Route key={index} path={route.path} element={route.element} />
                    )
                }
            </Routes>
        </BrowserRouter>
    )
}

const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/ranking',
        element: <Ranking />
    },
    {
        path: '/game',
        element: <Game />
    }
]