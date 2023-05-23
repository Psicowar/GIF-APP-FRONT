import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsCloudUpload } from 'react-icons/bs';
import { Puff } from 'react-loader-spinner';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';


export const UploadThrowPc = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const cloudName = import.meta.env.VITE_CLOUDINARY_NAME;

    const onSubmitThrowCloudinary = async ({ file, text }) => {
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
                                    timer: 1500
                                })
                                reset()
                                setLoading(false)
                            }
                        })
                } else {
                    console.log(status);
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: 'Something went wrong',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }
    return (
        <div className='flex justify-center items-center w-full h-[92.2vh]'>
            <form onSubmit={handleSubmit(onSubmitThrowCloudinary)} className="flex flex-col gap-3 bg-gradient-to-r from-indigo-500 border border-indigo-500 rounded-lg p-5">
                <h3 className="text-center text-3xl font-bold text-gray-700 dark:text-gray-200"> Upload your gifs</h3>
                <label className="text-base leading-relaxed text-gray-500 dark:text-gray-400" htmlFor="fileUpload">
                    <BsCloudUpload className="text-7xl m-auto my-2 cursor-pointer" />
                </label>
                {errors.file?.type === "required" && <p className="text-red-500 text-xs text-center">Select a file before uploading.</p>}
                <div className="flex flex-col gap-2">
                    <span>Select your gif</span>
                    <input
                        type="file"
                        id="fileUpload"
                        className='bg-zinc-600 rounded mb-5 w-full'
                        {...register("file", { required: true })}
                    />
                </div>
                {errors.file?.type === "required" && <p className="text-red-500 text-xs text-center">Select a file before uploading.</p>}
                <div className="flex flex-col gap-2">
                    <span>Write gif name</span>
                    <input
                        type="text"
                        placeholder='Giph Title'
                        id="giphTitle"
                        className='bg-zinc-600 rounded mb-5 w-full'
                        {...register("text", { required: true })}
                    />
                </div>
                <button type="submit" className="bg-red-400 p-2 rounded-lg w-full text-center">
                    {loading ?
                        <div className="flex justify-center items-center">
                            <Puff
                                height="24"
                                width="24"
                                radius={1}
                                color="#000000"
                                ariaLabel="puff-loading"
                                wrapperClass="m-auto"
                                visible={true}
                            />
                        </div>
                        :
                        "Upload giph"
                    }
                </button>
            </form>
        </div>

    )
}
