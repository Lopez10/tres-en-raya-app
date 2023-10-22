import { CSSProperties } from "react";
import { Alert } from "./Alert";

export function Container({
    children,
    title,
    alert
}: {
    children: React.ReactNode,
    title: string,
    alert?: string
}): JSX.Element {
    return (
        <div style={containerStyle}>
            {alert && <Alert message={alert} />}
            <h1 style={titleStyle}>{title}</h1>
            <div >
                {children}
            </div>
        </div>
    )
}

const titleStyle: CSSProperties = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    textAlign: "center",
}

const containerStyle: CSSProperties = {
    width: "100%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10rem",
}