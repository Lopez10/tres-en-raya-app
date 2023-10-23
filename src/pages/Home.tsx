import { useNavigate } from "react-router-dom";
import { Container } from "../components/container/Container";
import { NewPlayerForm } from "../components/new-player-form/NewPlayerForm";
import { Player, newPlayer } from "../services/player";
import { savePlayer } from "../storage";

export function Home(): JSX.Element {
    const navigate = useNavigate();

    async function handleSubmitNewPlayer(username: string) {
        const player: Player = await newPlayer(username);
        savePlayer(player);
        navigate('/game');
    }

    return (
        <Container>
            <NewPlayerForm onNewPlayer={handleSubmitNewPlayer} />
        </Container>
    )
}