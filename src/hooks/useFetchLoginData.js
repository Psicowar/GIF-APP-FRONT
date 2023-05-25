import axios from "axios"
import { useNavigate } from "react-router-dom";
import { ALLGIFS } from "../router/path";
import { useAuth } from "../context/AuthContext";
import Swal from "sweetalert2";

export const useFetchLoginData = () => {
    const navigate = useNavigate()
    const { login } = useAuth();

    const sendUserData = (data) => {

        axios.post(import.meta.env.VITE_BACKEND + 'users/authenticate', { data })
            .then(({ status, data }) => {
                const { currentUser, token } = data
                if (status === 201) {
                    login(
                        {
                            id: currentUser._id,
                            firstName: currentUser.name,
                            lastName: currentUser.last_name,
                            email: currentUser.email,
                        }, token
                    );
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Successfully logged in',
                        showConfirmButton: false,
                        background: "#1b1e2a",
                        timer: 1500
                    })
                    localStorage.setItem("userToken", token)
                    navigate(ALLGIFS)
                }
            }).catch((err) => {
                if (err.response.status === 401) {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Incorrect login details',
                        showConfirmButton: false,
                        background: "#1b1e2a",
                        timer: 1500
                    })
                } else {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Something went wrong',
                        showConfirmButton: false,
                        background: "#1b1e2a",
                        timer: 1500
                    })

                }
            })

    }


    return {
        sendUserData
    }
}
