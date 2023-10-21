import { FormSubmit } from "./FormSubmit"

export function Form({
    children,
    onSubmit,
    className,
    submitClassName,
    submitLabel,
    id,
}: {
    children: JSX.Element | JSX.Element[]
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    className?: string
    submitClassName?: string
    submitLabel?: string
    id?: string
}): JSX.Element {
    return (
        <form className={className} onSubmit={onSubmit} id={id}>
            {children}
            <FormSubmit
                className={submitClassName}
                label={submitLabel}
            />
        </form>
    )
}