import { post } from "./services.common";

export type Game = {
    id: string;
    status: string;
    turn: string;
    board: string[];
    playerId: string;
    winner: string;
};

export const createGame = (playerId: string) => post('http://localhost:3000/games', { playerId })

export const moveBoard = (game: Game) => post('http://localhost:3000/games/move', { ...game })
