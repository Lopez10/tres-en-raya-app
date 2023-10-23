import { Route, BrowserRouter, Routes } from "react-router-dom";
import { NavBar } from "../components/navbar/NavBar";
import { ProtectedRoute } from "./ProtectedRoute";
import { ROUTE_ITEMS } from "./RouteItems";

export function Router(): JSX.Element {
    return (
        <BrowserRouter>
            <NavBar routes={ROUTE_ITEMS} />
            <Routes>
                {ROUTE_ITEMS.map(({ path, element, logged }) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            logged
                                ? <ProtectedRoute>{element}</ProtectedRoute>
                                : element
                        }
                    />
                ))}
            </Routes>
        </BrowserRouter>
    )
}