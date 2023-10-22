import { CSSProperties } from "react"

export function Alert({
    message,
}: {
    message: string
}): JSX.Element {
    return (
        <div style={alertStyle} role="alert">
            <p>{message}</p>
        </div>
    )
}

const alertStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f44336',
    padding: '1rem',
}