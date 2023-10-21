export type Game = {
    id: string;
    status: string;
    turn: string;
    board: string[];
    playerId: string;
    winner: string;
};

const post = async (url: string, data: unknown) => {
    await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    });
}

export const createGame = (playerId: string) => post('http://localhost:3000/games', { playerId })

export const moveBoard = (game: Game) => post('http://localhost:3000/games/move', { ...game })
