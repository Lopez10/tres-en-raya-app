import { CSSProperties, useState } from "react";
import { Square } from "./Square";

export function Board(): JSX.Element {
    const [squares, setSquares] = useState(Array(9).fill(null));
    function handleClick(index: number): void {
        const nextSquares = squares.slice();
        nextSquares[index] = "X";
        setSquares(nextSquares);
    }
    return (
        <div style={gameStyle}>
            {
                squares.map((square, index) => (
                    <Square
                        children={square}
                        onClick={() => handleClick(index)}
                        disabled={false}
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