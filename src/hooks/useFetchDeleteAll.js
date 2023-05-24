import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useGlobalContext } from "../context/GlobalContext";
import Swal from "sweetalert2";


export const useFetchDeleteAllGifs = () => {
    const { authState } = useAuth();
    const { setUserGifs } = useGlobalContext()
    const deleteUserGifs = async () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            iconColor: '#ef5567',
            showCancelButton: true,
            background: "#18181b",
            confirmButtonColor: '#ef5567',
            cancelButtonColor: '#ef5567',
            confirmButtonText: 'Yes, delete all!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(import.meta.env.VITE_BACKEND + "giphs/deleteAllUserGifs", { headers: { "Authorization": authState.token } })
                    .then(({ status }) => {
                        if (status === 200) {
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'All gifs deleted successfully',
                                showConfirmButton: false,
                                background: "#18181b",
                                timer: 1500
                            })
                            setUserGifs([])
                        } else {
                            Swal.fire({
                                position: 'top-center',
                                icon: 'error',
                                title: 'Something get wron',
                                showConfirmButton: false,
                                background: "#18181b",
                                timer: 1500
                            })
                        }
                    })
            }
        })

    }


    return {
        deleteUserGifs
    }
}
