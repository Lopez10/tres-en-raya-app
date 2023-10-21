import { CSSProperties } from "react"
import { FormSubmit } from "./FormSubmit"

export function Form({
    children,
    onSubmit,
    style,
    submitStyle,
    submitLabel,
    id,
}: {
    children: JSX.Element | JSX.Element[]
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    style?: CSSProperties
    submitStyle?: CSSProperties
    submitLabel?: string
    id?: string
}): JSX.Element {
    return (
        <form style={style} onSubmit={onSubmit} id={id}>
            {children}
            <FormSubmit
                style={submitStyle}
                label={submitLabel}
            />
        </form>
    )
}