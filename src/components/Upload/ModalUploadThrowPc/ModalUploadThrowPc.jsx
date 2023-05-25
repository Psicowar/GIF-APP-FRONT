import { Modal } from 'flowbite-react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsCloudUpload } from 'react-icons/bs';
import { Puff } from 'react-loader-spinner';
import { useFetchUploadThrowPc } from '../../../hooks/useFetchUploadThrowPc';


export const ModalUploadThrowPc = ({ open, setOpen }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const {onSubmitThrowPc} = useFetchUploadThrowPc()

    const onSubmit = async ({ file, text }) => {
        onSubmitThrowPc(file, text, reset, setLoading, setOpen)
    }

    return (
        <Modal
            show={open}
            size="lg"
            popup={true}
            onClose={() => setOpen(false)}
            dismissible
        >
            <Modal.Header className='bg-[#E96479]' />
            <Modal.Body className=' bg-[#E96479]'>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                    <h3 className="text-center text-3xl font-bold text-[#E6DDC4]"> Upload gifs throw pc</h3>
                    <label className="text-base leading-relaxed text-gray-500 dark:text-gray-400" htmlFor="fileUpload">
                        <BsCloudUpload className="text-7xl m-auto my-2 cursor-pointer" color='#E6DDC4' />
                    </label>
                    {errors.file?.type === "required" && <p className="text-red-700 text-xs text-center bg-[#E6DDC4] rounded-lg">Select a file before uploading.</p>}
                    <div className="flex flex-col gap-2">
                        <span className='font-semibold text-[#E6DDC4]'>Select your gif</span>
                        <input
                            type="file"
                            id="fileUpload"
                            className='bg-slate-600 rounded-md mb-5 w-full'
                            {...register("file", { required: true })}
                        />
                    </div>
                    {errors.file?.type === "required" && <p className="text-red-500 text-xs text-center bg-[#E6DDC4] rounded-lg">Select a file before uploading.</p>}
                    <div className="flex flex-col gap-2 pb-5">
                        <span className='font-semibold text-[#E6DDC4]'>Write gif title</span>
                        <input
                            type="text"
                            placeholder='Gif title'
                            id="giphTitle"
                            className='border-0 focus:border-t-transparent focus:ring-0 rounded-md bg-slate-600 placeholder-[#E6DDC4] text-[#E6DDC4]'
                            {...register("text", { required: true })}
                        />
                    </div>
                    <div className='h-10'>
                        <button type="submit" className="bg-red-400 p-2 rounded-lg w-full font-semibold hover:border-2 hover:border-[#E6DDC4] text-center text-[#E6DDC4]">
                            {
                                loading ?
                                    <div className="flex justify-center items-center">
                                        <Puff
                                            height="24"
                                            width="24"
                                            radius={1}
                                            color="#E6DDC4"
                                            ariaLabel="puff-loading"
                                            wrapperClass="m-auto"
                                            visible={true}
                                        />
                                    </div>
                                    :
                                    "Upload giph"
                            }
                        </button>
                    </div>
                </form>
            </Modal.Body>
        </Modal >
    )
}
