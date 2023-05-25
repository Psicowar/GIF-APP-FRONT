import axios from "axios"
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../router/path";
import Swal from "sweetalert2";

export const useFetchRegisterData = () => {
    const navigate = useNavigate()
    
    const sendUserData = (data) => {
        axios.post(import.meta.env.VITE_BACKEND + 'users/register', { data })
            .then(({ status }) => {
                if (status === 201) {
                    navigate(LOGIN)
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Registered Successfully!',
                        showConfirmButton: false,
                        background: "#1b1e2a",
                        timer: 1500
                    })
                    
                }
                else if (status === 204) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'User already exists!',
                        showConfirmButton: false,
                        background: "#1b1e2a",
                        timer: 1500
                    })
                    
                }
                else {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Something went wrong!',
                        showConfirmButton: false,
                        background: "#1b1e2a",
                        timer: 1500
                    })
                   
                }
            });

    }


    return {
        sendUserData
    }
}
