import axios from 'axios'
import Swal from 'sweetalert2'
import { useAuth } from '../context/AuthContext';
import { useFetchGetUserGifs } from './useFetchGetUserGifs';

export const useFetchDeleteOne = () => {
    const { authState } = useAuth()
    const { getGifs } = useFetchGetUserGifs()

    const deleteUserGif = (_id) => {
        axios.delete(import.meta.env.VITE_BACKEND + "giphs/deleteOneUserGif/" + _id, { headers: { "Authorization": authState.token } })
            .then(({ status }) => {
                if (status === 200) {
                    getGifs()
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
        deleteUserGif
    }


}
