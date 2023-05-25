import axios from "axios"
import Swal from "sweetalert2"
import { useFetchGetUserGifs } from "./useFetchGetUserGifs"


export const useFetchUpdateTitleGif = () => {
    const { getGifs } = useFetchGetUserGifs()

    const onSubmitTitleGif = (gifTitle, reset, id, setOpen) => {
        console.log(id);
        axios.patch(import.meta.env.VITE_BACKEND + "giphs/updateTitleUserGif", { gifTitle, id })
            .then(({ status }) => {
                if (status === 200) {
                    getGifs()
                    reset()
                    setOpen(false)
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'deleted successfully',
                        showConfirmButton: false,
                        background: "#1b1e2a",
                        timer: 1500
                    })
                } else {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'error',
                        title: 'Something get wron',
                        showConfirmButton: false,
                        background: "#1b1e2a",
                        timer: 1500
                    })
                }
            })
    }

    return {
        onSubmitTitleGif
    }
}
