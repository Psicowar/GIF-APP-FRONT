import axios from "axios";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from 'uuid';


export const useFetchUploadThrowPc = () => {
    const cloudName = import.meta.env.VITE_CLOUDINARY_NAME;
    
    const onSubmitThrowPc = async (file, text, reset, setLoading, setOpen) => {
        const uploadGif = file[0]
        const formData = new FormData();
        formData.append('file', uploadGif);
        formData.append('upload_preset', 'giph_app');
        setLoading(true);
        await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, formData)
            .then(({ status, data }) => {
                if (status === 200) {
                    axios.post(import.meta.env.VITE_BACKEND + "giphs/upload", { giph: data.url, title: text, id: uuidv4() })
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
                } else {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: 'Something went wrong',
                        showConfirmButton: false,
                        background: "#18181b",
                        timer: 1500
                    })
                }
            })

    }

    return {
        onSubmitThrowPc
    }


}
