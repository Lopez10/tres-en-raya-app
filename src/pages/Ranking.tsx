import { useEffect, useState } from "react";
import { Container } from "../components/container/Container";
import { Player, emptyPlayer } from "../services/player";
import { getPlayer } from "../storage";

export function Ranking(): JSX.Element {
    const [player, setPlayer] = useState<Player>(emptyPlayer);

    useEffect(() => {
        const playerStorage = getPlayer();
        if (playerStorage) {
            setPlayer(playerStorage);
        }
    }, []);

    return (
        <Container title='Ranking'>
            <div>
                <h1>{player.username}</h1>
                <h2>{player.wins}</h2>
                <h2>{player.losses}</h2>
            </div>
        </Container>
    )
}