export function Input({
    label,
    name,
    value,
    onChange,
    type,
    placeholder,
    className,
    id,
    disabled,
    required
}: {
    label: string
    name: string
    value: string | number
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    type?: string
    placeholder?: string
    className?: string
    id?: string
    disabled?: boolean
    required?: boolean
}): JSX.Element {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input
                name={name}
                value={value}
                onChange={onChange}
                type={type}
                placeholder={placeholder}
                className={className}
                id={id}
                disabled={disabled}
                required={required}
            />
        </>
    )
}