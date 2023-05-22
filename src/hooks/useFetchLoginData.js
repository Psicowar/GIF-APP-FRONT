import axios from "axios"
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { HOME } from "../router/path";
import { useAuth } from "../context/AuthContext";

export const useFetchLoginData = () => {
    const navigate = useNavigate()
    const { login } = useAuth();
    const sendUserData = (data) => {
        try {
            axios.post(import.meta.env.VITE_BACKEND + 'users/authenticate', { data })
                .then(({ status, data }) => {
                    const { currentUser, token } = data
                    if (status === 201) {
                        console.log(currentUser);
                        login(
                            {
                                id: currentUser._id,
                                firstName: currentUser.name,
                                lastName: currentUser.last_name,
                                email: currentUser.email,
                            }, token
                        );
                        toast.success("Login Successfully!", {
                            style: {
                                borderRadius: '5px',
                                background: '#333',
                                color: '#fff',
                            },
                            error: {
                                duration: 5000,
                            }
                        });
                        localStorage.setItem("userToken", token)
                        navigate(HOME)
                    }
                });
        } catch (err) {
            if (err.response.status === 401) {
                toast.error("Incorrect login data", {
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                    error: {
                        duration: 2000,
                    },
                });
            }
            else {
                toast.error("Something went wrong", {
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                    error: {
                        duration: 2000,
                    },
                });

            }
        }


    }


    return {
        sendUserData
    }
}
