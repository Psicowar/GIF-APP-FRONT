import { createContext, useCallback, useContext, useMemo, useReducer } from "react";
import { TYPES } from "./types";

export const GlobalContext = createContext()

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}

export const GlobalProvider = ({ children }) => {

    const initialState = {
        allGifs: [],
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case TYPES.SET_ALL_GIFS:
                return {
                    allGifs: action.payload.allGifs
                };
            default:
                return state;
        }
    };

    const setAllGifs = useCallback((allGifs) => {
        dispatch({ type: TYPES.SET_ALL_GIFS, payload: { allGifs } })
    }, [])



    const [gifsState, dispatch] = useReducer(reducer, initialState)

    const data = useMemo(() => ({
        gifsState,
        setAllGifs,
    }), [gifsState, setAllGifs])

    return <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>

}


