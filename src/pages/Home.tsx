import { NewPlayerForm } from "../components/new-player-form/NewPlayerForm";

export function Home(): JSX.Element {
    return (
        <div>
            <NewPlayerForm onSubmit={() => { }} />
        </div>
    )
}