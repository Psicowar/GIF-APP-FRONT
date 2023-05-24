import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useGlobalContext } from "../context/GlobalContext";


export const useFetchGetUserGifs = () => {
    const { authState } = useAuth();
    const { setUserGifs } = useGlobalContext()

    const getGifs = async () => {
        await axios.get(import.meta.env.VITE_BACKEND + "giphs/userGifs", { headers: { "Authorization": authState.token } })
            .then(({ data, status }) => {
                if (status === 200) {
                    setUserGifs(data)
                }
            })
    }
    return {
        getGifs
    }
}
