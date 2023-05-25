import axios from "axios";
import Swal from "sweetalert2";
import { useAuth } from "../context/AuthContext";

export const useFetchUploadThrowUrl = () => {
    const { authState } = useAuth();
    const { user } = authState
    const onSubmitThrowUrl = async (data, setLoading, reset, setOpen) => {
        setLoading(true);
        await axios.post(import.meta.env.VITE_BACKEND + "giphs/upload", { giph: data.url, title: data.title, id: user.id })
            .then(({ status }) => {

                if (status === 200) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Uploaded successfully',
                        showConfirmButton: false,
                        background: "#1b1e2a",
                        timer: 1500
                    })
                    reset()
                    setLoading(false)
                    setOpen(false)
                }
            })
    }
    return {
        onSubmitThrowUrl
    }
}
