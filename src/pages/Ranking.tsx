import { useEffect, useState } from "react";
import { Container } from "../components/container/Container";
import { Player as IPlayer, emptyPlayer, newPlayer } from "../services/player";
import { getPlayer } from "../storage";
import { ResultText } from "../components/text/ResultText";

export function Ranking(): JSX.Element {
    const [player, setPlayer] = useState<IPlayer>(emptyPlayer);

    useEffect(() => {
        async function fetchPlayer(player: IPlayer) {
            const playerCreated: IPlayer = await newPlayer(player.username);
            setPlayer(playerCreated);
        }

        const playerStorage = getPlayer();
        if (playerStorage) {
            fetchPlayer(playerStorage)
                .catch(console.log)
        }
    }, []);

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