import { useEffect, useState } from "react";
import { Board } from "../components/board/Board";
import { Container } from "../components/container/Container";
import { Game as IGame, createGame, emptyGame, moveBoard } from "../services/game";
import { getPlayer } from "../storage";

export function Game(): JSX.Element {
    const [game, setGame] = useState<IGame>(emptyGame);
    const [disabled, setDisabled] = useState<boolean>(false);

    useEffect(() => {
        async function fetchGame() {
            const player = getPlayer();
            if (player) {
                const gameCreated: IGame = await createGame(player.id);
                setGame(gameCreated);
            }
        }

        fetchGame();
    }, []);

    useEffect(() => {
        if (game.winner) {
            setDisabled(true);
            alert(`${game.winner} won!`);
        }
    }, [game.winner]);

    async function handleClickSquare(board: string[]): Promise<string[]> {
        const gameUpdated = await moveBoard({
            ...game,
            board
        });

        setGame(gameUpdated);

        return gameUpdated.board;
    }

    return (
        <Container title='Game'>
            <Board
                disabled={disabled}
                onClickSquare={handleClickSquare}
                squaresBoard={game.board}
            />
        </Container>
    )
}