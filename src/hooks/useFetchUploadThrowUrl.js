import axios from "axios";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from 'uuid';

export const useFetchUploadThrowUrl = () => {
    const onSubmitThrowUrl = async (data, setLoading, reset, setOpen) => {
        setLoading(true);
        await axios.post(import.meta.env.VITE_BACKEND + "giphs/upload", { giph: data.url, title: data.title, id: uuidv4() })
            .then(({ status }) => {

                if (status === 200) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Uploaded successfully',
                        showConfirmButton: false,
                        background: "#18181b",
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
