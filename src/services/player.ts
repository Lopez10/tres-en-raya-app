import { post } from "./services.common";

export type Player = {
    id: string;
    username: string;
    wins: number;
    losses: number;
    draws: number;
};

export const emptyPlayer: Player = {
    id: '',
    username: '',
    wins: 0,
    losses: 0,
    draws: 0,
};

export const newPlayer = (username: string) => post('http://localhost:3000/players', { username })