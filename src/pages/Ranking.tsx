import { useEffect, useState } from "react";
import { Container } from "../components/container/Container";
import { Player, emptyPlayer, newPlayer } from "../services/player";
import { getPlayer } from "../storage";

export function Ranking(): JSX.Element {
    const [player, setPlayer] = useState<Player>(emptyPlayer);

    useEffect(() => {
        const playerStorage = getPlayer();
        if (playerStorage) {
            fetchPlayer()
        }
    }, []);

    async function fetchPlayer() {
        const player = getPlayer();
        if (player) {
            const playerCreated: Player = await newPlayer(player.username);
            setPlayer(playerCreated);
        }
    }

    return (
        <Container>
            <div>
                <h1>{player.username}</h1>
                <h2>{player.wins}</h2>
                <h2>{player.losses}</h2>
            </div>
        </Container>
    )
}