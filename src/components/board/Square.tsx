import { CSSProperties } from "react";

export function Square({
    children,
    disabled,
    onClick,
}: {
    children: React.ReactNode;
    disabled: boolean;
    onClick: () => void;
}): JSX.Element {
    return (
        <button
            style={squareStyle}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

const squareStyle: CSSProperties = {
    width: '70px',
    height: '70px',
    borderColor: 'transparent'
};