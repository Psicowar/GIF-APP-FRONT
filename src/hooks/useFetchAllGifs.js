import axios from "axios"
import { useGlobalContext } from "../context/GlobalContext"

export const useFetchAllGifs = () => {
    const { setAllGifs } = useGlobalContext()

    const getAllGifs = () => {
        axios.get(import.meta.env.VITE_BACKEND + 'giphs/')
            .then(({ data }) => {
                setAllGifs(data);
            })
    }
    return {
        getAllGifs
    }
}
