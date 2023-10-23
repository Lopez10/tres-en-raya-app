import { post } from "./services.common";

export type Game = {
    id: string;
    status: string;
    turn: string;
    board: string[];
    playerId: string;
    winner: string;
};

export const emptyGame: Game = {
    id: '',
    board: Array(9).fill(''),
    winner: '',
    playerId: '',
    status: '',
    turn: ''
};

export const createGame = (username: string) => post('http://localhost:3000/games', { username })

export const moveBoard = (game: Game) => post('http://localhost:3000/games/move', { ...game })
