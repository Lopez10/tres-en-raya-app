import { Navigate, Outlet } from "react-router-dom";
import { useLocalStorage } from 'react-use'

export const ProtectedRoute = ({
    children,
}: {
    children: JSX.Element
}) => {
    const [player] = useLocalStorage('player');

    if (!player) {
        return <Navigate to={'/'} replace />;
    }

    return children ? children : <Outlet />;
};