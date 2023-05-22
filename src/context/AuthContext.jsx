import { createContext, useCallback, useContext, useEffect, useMemo, useReducer } from "react";
import { TYPES } from "./types";
import axios from "axios";


const AuthContext = createContext();
const token = localStorage.getItem('userToken') || undefined;

export const useAuth = () => {

    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {

    
    useEffect(() => {
        const checkUser = async () => {
            axios.post(import.meta.env.VITE_BACKEND + "users/userData", {}, {
                headers: {
                    "Authorization": token
                }
            })
                .then(res => {
                    const { data, status } = res
                    if (status === 200) {
                        refresh(
                            {
                                id: data.id,
                                firstName: data.name,
                                lastName: data.last_name,
                                email: data.email,
                            }, token
                        );
                    }
                })
        }
        checkUser()
    }, [])


    const initialState = {
        isAuthenticated: false,
        user: {
            id: -1,
            firstName: "",
            lastName: "",
            email: "",
        },
        token: "",
        error: "",
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case TYPES.LOGIN_SUCCESS:
                return {
                    isAuthenticated: true,
                    user: action.payload.user,
                    token: action.payload.token,
                    error: "",
                };
            case TYPES.LOGIN_UNSUCCESS:
                return {
                    ...state,
                    error: action.payload.error,
                };
            case TYPES.LOGOUT:
                return {
                    ...state,
                    isAuthenticated: false,
                    user: "",
                    token: "",
                    error: "",
                };

            case TYPES.REFRESH_PAGE:
                return {
                    isAuthenticated: true,
                    user: action.payload.user,
                    token: action.payload.token,
                    error: ""
                };
            default:
                return state;
        }
    };

    const [authState, dispatch] = useReducer(
        reducer,
        initialState
    );

    const login = useCallback((user, token, error) => {
        if (!error) {
            dispatch({ type: TYPES.LOGIN_SUCCESS, payload: { user, token } })
        } else
            dispatch({ type: TYPES.LOGIN_ERROR, payload: error })
    }, [])

    const refresh = useCallback((user, token, error) => {
        if (!error) {
            dispatch({ type: TYPES.REFRESH_PAGE, payload: { user, token } })
        } else
            dispatch({ type: TYPES.LOGIN_ERROR, payload: error })
    }, [])

    const logout = useCallback(() => {
        localStorage.removeItem('userToken');
        dispatch({ type: TYPES.LOGOUT })
    }, []);

    const authData = useMemo(() => ({
        authState,
        refresh,
        login,
        logout,
    }), [authState, login, logout, refresh,]);

    return (
        <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
    );
}
