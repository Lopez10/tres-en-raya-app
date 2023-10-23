import { Game } from "../pages/Game";
import { Home } from "../pages/Home";
import { Ranking } from "../pages/Ranking";

export const ROUTE_ITEMS: routeItems = [
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