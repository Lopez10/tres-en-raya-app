import { Container } from "../components/container/Container";
import { NewPlayerForm } from "../components/new-player-form/NewPlayerForm";

export function Home(): JSX.Element {
    return (
        <div>
            <Container title='Home'>
                <NewPlayerForm onSubmit={() => { }} />
            </Container>
        </div>
    )
}