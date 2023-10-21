import { CSSProperties } from "react"

export function Input({
    label,
    name,
    value,
    onChange,
    type,
    placeholder,
    inputStyle,
    id,
    disabled,
    required,
    labelStyle,
}: {
    label: string
    name: string
    value: string | number
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    type?: string
    placeholder?: string
    inputStyle?: CSSProperties
    id?: string
    disabled?: boolean
    required?: boolean
    labelStyle?: CSSProperties
}): JSX.Element {
    return (
        <>
            <label htmlFor={name} style={labelStyle}>{label}</label>
            <input
                name={name}
                value={value}
                onChange={onChange}
                type={type}
                placeholder={placeholder}
                style={inputStyle}
                id={id}
                disabled={disabled}
                required={required}
            />
        </>
    )
}