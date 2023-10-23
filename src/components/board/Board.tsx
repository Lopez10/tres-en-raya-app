import { CSSProperties, useState } from "react";
import { Square } from "./Square";

export function Board({
    onClickSquare,
    squaresBoard = Array(9).fill(''),
}: {
    onClickSquare: (board: string[]) => Promise<string[]>;
    squaresBoard?: Array<string>;
}): JSX.Element {
    const [squares, setSquares] = useState(squaresBoard);

    async function handleClick(index: number): Promise<void> {
        const boardUpdated = squares.slice();
        boardUpdated[index] = "X";
        setSquares(boardUpdated);
        nextMove(boardUpdated);
    }

    async function nextMove(boardUpdated: string[]): Promise<void> {
        const moveResponse = await onClickSquare(boardUpdated);
        setSquares(moveResponse);
    }

    return (
        <div
            style={gameStyle}
        >
            {
                squares.map((square, index) => (
                    <Square
                        key={index}
                        children={square}
                        onClick={() => handleClick(index)}
                        disabled={square !== ''}
                    />
                ))
            }
        </div>
    );
}

const gameStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: '10px'
}