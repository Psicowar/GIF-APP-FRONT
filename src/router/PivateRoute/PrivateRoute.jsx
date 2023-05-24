import { Navigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import { ALLGIFS } from "../path"

export const PrivateRoute = ({ children }) => {
    const { authState } = useAuth()
    return authState.isAuthenticated ? children : <Navigate to={ALLGIFS} />
}
