import { useState } from "react";
import { Form } from "../form/Form";
import { Input } from "../form/InputWithLabel";

export function NewPlayerForm({
    onSubmit,
}: {
    onSubmit: () => void
}): JSX.Element {
    const [username, setUsername] = useState("");
    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }
    return (
        <Form onSubmit={onSubmit} submitLabel="Acceder" style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        }}>
            <Input
                label="Nombre de usuario"
                type="text"
                name="username"
                value={username}
                onChange={handleUsername}
                required={true}
                placeholder="Introduce tu nombre de usuario"
            />
        </Form>
    )
}