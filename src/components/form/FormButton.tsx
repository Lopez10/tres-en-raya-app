import { CSSProperties } from "react"

export function FormButton({
    label = 'Enviar',
    onClick,
    style
}: {
    label?: string
    onClick: () => void
    style?: CSSProperties
}): JSX.Element {
    return (
        <button
            type="submit"
            style={style}
            onClick={onClick}
        >
            {label}
        </button>
    )
}