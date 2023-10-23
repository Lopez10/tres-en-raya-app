import { Game } from "../pages/Game";
import { Home } from "../pages/Home";
import { Ranking } from "../pages/Ranking";


export const ROUTE_ITEMS = [
    {
        name: 'Home',
        path: '/',
        element: <Home />
    },
    {
        name: 'Ranking',
        path: '/ranking',
        element: <Ranking />
    },
    {
        name: 'Game',
        path: '/game',
        element: <Game />
    }
];
