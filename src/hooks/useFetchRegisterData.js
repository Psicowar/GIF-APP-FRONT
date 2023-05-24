import axios from "axios"
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { LOGIN } from "../router/path";

export const useFetchRegisterData = () => {
    const navigate = useNavigate()
    
    const sendUserData = (data) => {
        axios.post(import.meta.env.VITE_BACKEND + 'users/register', { data })
            .then(({ status }) => {
                if (status === 201) {
                    navigate(LOGIN)
                    toast.success("Registered Successfully!", {
                        style: {
                            borderRadius: '5px',
                            background: '#333',
                            color: '#fff',
                        },
                        error: {
                            duration: 5000,
                        }
                    });
                }
                else if (status === 204) {
                    toast.error("User already exists!", {
                        style: {
                            borderRadius: '5px',
                            background: '#333',
                            color: '#fff',
                        },
                        error: {
                            duration: 5000,
                        }
                    });
                }
                else {
                    toast.error("Something went wrong!", {
                        style: {
                            borderRadius: '5px',
                            background: '#333',
                            color: '#fff',
                        },
                        error: {
                            duration: 5000,
                        }
                    });
                }
            });

    }


    return {
        sendUserData
    }
}
