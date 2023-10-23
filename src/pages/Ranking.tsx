import { useEffect, useState } from "react";
import { Container } from "../components/container/Container";
import { Player, emptyPlayer, newPlayer } from "../services/player";
import { getPlayer } from "../storage";
import { ResultText } from "../components/text/ResultText";

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
                <ResultText text="Wins" result={player.wins} />
                <ResultText text="Losses" result={player.losses} />
                <ResultText text="Draws" result={player.draws} />
            </div>
        </Container>
    )
}