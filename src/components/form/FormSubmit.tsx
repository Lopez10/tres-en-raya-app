export function FormSubmit({
    label = 'Enviar',
    className
}: {
    label?: string
    className?: string
}): JSX.Element {
    return (
        <button
            type="submit"
            className={className}
        >
            {label}
        </button>
    )
}