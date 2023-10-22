import { CSSProperties } from "react"

export function Alert({
    message,
    buttonMessage,
    onClick,
}: {
    message: string
    buttonMessage: string
    onClick?: () => void
}): JSX.Element {
    return (
        <div style={alertStyle} role="alert">
            <h2>{message}</h2>
            <button style={buttonStyle} onClick={onClick}>
                {buttonMessage}
            </button>
        </div>
    )
}

const alertStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    backgroundColor: '#1a1a1a',
    borderRadius: '0.5rem',
    position: 'absolute',
    opacity: 0.98,
    padding: '3rem',
}

const buttonStyle: CSSProperties = {
    backgroundColor: '#fff',
    color: '#1a1a1a',
    fontSize: '1.5rem',
    cursor: 'pointer',
}