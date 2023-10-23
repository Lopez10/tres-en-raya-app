import { useEffect, useState } from "react";
import { Board } from "../components/board/Board";
import { Container } from "../components/container/Container";
import { Game as IGame, createGame, emptyGame, moveBoard } from "../services/game";
import { getPlayer } from "../storage";

export function Game(): JSX.Element {
    const [game, setGame] = useState<IGame>(emptyGame);
    const [alert, setAlert] = useState<string>('');
    const [openWinnerAlert, setOpenWinnerAlert] = useState<boolean>(false);

    useEffect(() => {
        fetchGame();
    }, []);

    useEffect(() => {
        if (game.status === 'FINISHED') {
            const alertText = game.winner ? `${game.winner} is the winner!` : 'Draw!'
            setAlert(alertText);
            setOpenWinnerAlert(true);
        }
    }, [game.status, game.winner]);

    async function fetchGame() {
        const player = getPlayer();
        if (player) {
            const gameCreated: IGame = await createGame(player.id);
            setGame(gameCreated);
        }
    }

    async function handleClickSquare(board: string[]): Promise<string[]> {
        const gameUpdated = await moveBoard({
            ...game,
            board
        });

        setGame(gameUpdated);

        return gameUpdated.board;
    }

    function restartGame() {
        setOpenWinnerAlert(false);
        fetchGame();
    }

    return (
        <Container
            alert={alert}
            openAlert={openWinnerAlert}
            alertOnClose={restartGame}
        >
            <Board
                key={game.id}
                onClickSquare={handleClickSquare}
                squaresBoard={game.board}
            />
        </Container>
    )
}