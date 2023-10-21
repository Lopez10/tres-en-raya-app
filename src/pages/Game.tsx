import { Board } from "../components/board/Board";
import { Container } from "../components/container/Container";

export function Game(): JSX.Element {
    return (
        <Container title='Game'>
            <Board />
        </Container>
    )
}