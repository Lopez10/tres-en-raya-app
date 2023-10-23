import { CSSProperties } from "react";
import { Alert } from "./Alert";

export function Container({
    children,
    openAlert = false,
    alert = '',
    alertOnClose,
}: {
    children: React.ReactNode,
    openAlert?: boolean
    alert?: string
    alertOnClose?: () => void
}): JSX.Element {

    return (
        <div style={containerStyle}>
            {openAlert && <Alert message={alert} buttonMessage="Close" onClick={alertOnClose} />}
            <div >
                {children}
            </div>
        </div>
    )
}

const containerStyle: CSSProperties = {
    width: "100%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: '10rem'
}