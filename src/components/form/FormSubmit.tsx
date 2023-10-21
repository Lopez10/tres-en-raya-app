import { CSSProperties } from "react"

export function FormSubmit({
    label = 'Enviar',
    style
}: {
    label?: string
    style?: CSSProperties
}): JSX.Element {
    return (
        <button
            type="submit"
            style={style}
        >
            {label}
        </button>
    )
}