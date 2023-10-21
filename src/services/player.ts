import { post } from "./services.common";

export type Player = {
    id: string;
    username: string;
    wins: number;
    losses: number;
    draws: number;
};

export const newPlayer = (username: string) => post('http://localhost:3000/players', { username })