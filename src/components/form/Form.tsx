import { CSSProperties } from "react"
import { FormButton } from "./FormButton"

export function Form({
    children,
    onClick,
    style,
    submitStyle,
    submitLabel,
    id,
}: {
    children: JSX.Element | JSX.Element[]
    onClick: () => void
    style?: CSSProperties
    submitStyle?: CSSProperties
    submitLabel?: string
    id?: string
}): JSX.Element {
    return (
        <div style={style} id={id}>
            {children}
            <FormButton
                style={submitStyle}
                label={submitLabel}
                onClick={onClick}
            />
        </div>
    )
}