import { Container } from "../components/container/Container";
import { NewPlayerForm } from "../components/new-player-form/NewPlayerForm";
import { Player, newPlayer } from "../services/player";

export function Home(): JSX.Element {
    async function handleSubmitNewPlayer(username: string) {
        const player: Player = await newPlayer(username);
        console.log(player)
        window.localStorage.setItem('player', JSON.stringify(player));
    }

    return (
        <Container title='Home'>
            <NewPlayerForm onNewPlayer={handleSubmitNewPlayer} />
        </Container>
    )
}