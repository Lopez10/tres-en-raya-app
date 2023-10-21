import { CSSProperties, useState } from "react";
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
        <Form
            onSubmit={onSubmit}
            style={formStyle}
            submitLabel="Acceder"
            submitStyle={{
                marginTop: "12px",
                width: "100px",
            }}>
            <Input
                type="text"
                name="username"
                value={username}
                onChange={handleUsername}
                required={true}
                placeholder="Escribe aquí tu nombre de usuario"
                inputStyle={inputStyle}
                label="¿Cual es tu nombre de usuario?"
                labelStyle={labelStyle}
            />
        </Form>
    )
}

const formStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
}

const inputStyle: CSSProperties = {
    padding: "20px",
    border: 'none',
    borderBottom: "1px solid #ccc",
    backgroundColor: "#242424",
    fontSize: "20px",
}

const labelStyle: CSSProperties = {
    paddingBottom: "16px",
    fontWeight: "bold",
    fontSize: "32px",
}