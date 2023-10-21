import { useEffect, useState } from "react";
import { Board } from "../components/board/Board";
import { Container } from "../components/container/Container";
import { Game as IGame, createGame, moveBoard } from "../services/game";
import { getPlayer } from "../storage";

export function Game(): JSX.Element {
    const [game, setGame] = useState<IGame | null>(null);
    useEffect(() => {
        const fetchGame = async () => {
            const player = getPlayer();
            if (player) {
                const gameCreated: IGame = await createGame(player?.id || '');
                setGame(gameCreated);
            }
        }

        fetchGame();
    }, []);

    const handleClickSquare = (board: string[]) => {
        if (game) {
            moveBoard({
                ...game,
                board
            });
        }
    }
    return (
        <Container title='Game'>
            <Board
                onClickSquare={handleClickSquare}
                squaresBoard={game?.board}
            />
        </Container>
    )
}