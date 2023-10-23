import { CSSProperties } from "react"

export function ResultText({
    text,
    result
}: {
    text: string
    result: string | number
}): JSX.Element {
    return (
        <div style={resultStyle}>
            <h2>{text}:</h2>
            <h2>{result}</h2>
        </div>
    )
}

const resultStyle: CSSProperties = {
    display: 'flex',
    gap: '10px'
}