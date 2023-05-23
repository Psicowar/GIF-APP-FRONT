import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { BsCloudUpload } from 'react-icons/bs';
import { Puff } from 'react-loader-spinner';
import { v4 as uuidv4 } from 'uuid';

export const UploadThrowUrl = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmitThrowUrl = async (data) => {
        setLoading(true);
        await axios.post(import.meta.env.VITE_BACKEND + "giphs/upload", { giph: data.url, title: data.title, id: uuidv4() })
            .then(({ status }) => {

                if (status === 200) {
                    toast.success("Upload successful",
                        {
                            style: {
                                borderRadius: '10px',
                                background: '#333',
                                color: '#fff',
                            },
                            success: {
                                duration: 2000
                            }
                        }
                    )
                    reset()
                    setLoading(false)

                }
            })
    }
    return (
        <div className='flex justify-center items-center w-full h-[92.2vh]'>
            <form onSubmit={handleSubmit(onSubmitThrowUrl)} className="flex flex-col gap-3 bg-gradient-to-l from-blue-500 border border-blue-500 rounded-lg p-5">
                <h3 className="text-center text-3xl font-bold text-gray-700 dark:text-gray-200"> Upload url of your gifs</h3>
                <label className="text-base leading-relaxed text-gray-500 dark:text-gray-400" htmlFor="fileUpload">
                    <BsCloudUpload className="text-7xl m-auto my-2 cursor-pointer" />
                </label>
                {errors.url?.type === "required" && <p className="text-red-500 text-xs text-center">Select a file before uploading.</p>}
                <div className="flex flex-col gap-2">
                    <span>Select your gif</span>
                    <input type="text"
                        id="giphUrl"
                        className='bg-zinc-600 rounded mb-5 w-full'
                        {...register("url", { required: true })}
                    />
                </div>
                {errors.title?.type === "required" && <p className="text-red-500 text-xs text-center">Select a file before uploading.</p>}
                <div className="flex flex-col gap-2">
                    <span>Write gif name</span>
                    <input type="text"
                        placeholder='Giph Title'
                        id="giphTitle"
                        className='bg-zinc-600 rounded mb-5 w-full'
                        {...register("title", { required: true })}
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
