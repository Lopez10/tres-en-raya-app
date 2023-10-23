import { Route, BrowserRouter, Routes } from "react-router-dom";
import { NavBar } from "../components/navbar/NavBar";
import { getPlayer } from "../storage";
import { ProtectedRoute } from "../components/route/ProtectedRoute";
import { Game } from "../pages/Game";
import { Ranking } from "../pages/Ranking";
import { Home } from "../pages/Home";
import { useEffect, useState } from "react";
import { Player } from "../services/player";

export function Router(): JSX.Element {
    const [player, setPlayer] = useState<Player | null>(null);

    useEffect(() => {
        const player = getPlayer();
        setPlayer(player);
    }, []);

    return (
        <BrowserRouter>
            <NavBar routes={ROUTE_ITEMS} />
            <Routes>
                {ROUTE_ITEMS.map(({ path, element, logged }) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            logged ? (
                                <ProtectedRoute
                                    redirectTo="/"
                                    isAllowed={!!player}
                                >
                                    {element}
                                </ProtectedRoute>
                            ) : (
                                element
                            )
                        }
                    />
                ))}
            </Routes>
        </BrowserRouter>
    )
}

const ROUTE_ITEMS: routeItems = [
    {
        name: 'Home',
        path: '/',
        element: <Home />,
        logged: false
    },
    {
        name: 'Ranking',
        path: '/ranking',
        element: <Ranking />,
        logged: true
    },
    {
        name: 'Game',
        path: '/game',
        element: <Game />,
        logged: true
    }
];

export type routeItems = {
    name: string;
    path: string;
    element: JSX.Element;
    logged: boolean;
}[]