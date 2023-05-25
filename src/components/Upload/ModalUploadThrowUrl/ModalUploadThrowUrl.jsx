import { Modal } from 'flowbite-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { BsCloudUpload } from 'react-icons/bs'
import { Puff } from 'react-loader-spinner';
import { useFetchUploadThrowUrl } from '../../../hooks/useFetchUploadThrowUrl';

export const ModalUploadThrowUrl = ({ open, setOpen }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const { onSubmitThrowUrl } = useFetchUploadThrowUrl()
    
    const onSubmit = async (data) => {
        onSubmitThrowUrl(data, setLoading, reset, setOpen)
    }

    return (
        <Modal
            show={open}
            size="lg"
            popup={true}
            onClose={() => setOpen(false)}
            dismissible
        >
            <Modal.Header className='bg-[#7DB9B6]' />
            <Modal.Body className='bg-[#7DB9B6]'>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                    <h3 className="text-center text-3xl font-bold text-[#E6DDC4]"> Upload url of your gifs</h3>
                    <label className="text-base leading-relaxed text-gray-500" htmlFor="fileUpload">
                        <BsCloudUpload className="text-7xl m-auto my-2 cursor-pointer" color='#E6DDC4' />
                    </label>
                    {errors.url?.type === "required" && <p className="text-red-700 text-sm text-center bg-[#E6DDC4] rounded-lg">Paste url before uploading.</p>}
                    <div className="flex flex-col gap-2">
                        <span className='font-semibold text-[#E6DDC4]'>Select your gif</span>
                        <input
                            type="text"
                            id="giphUrl"
                            className='border-0 focus:border-t-transparent focus:ring-[#E6DDC4] rounded-md bg-slate-600 placeholder-[#E6DDC4] text-[#E6DDC4]'
                            placeholder='Gif url'
                            {...register("url", { required: true })}
                        />
                    </div>
                    {errors.title?.type === "required" && <p className="text-red-500 text-xs text-center bg-[#E6DDC4] rounded-lg">Select a file before uploading.</p>}
                    <div className="flex flex-col gap-2 pb-5">
                        <span className='font-semibold text-[#E6DDC4]'>Write gif title</span>
                        <input
                            type="text"
                            placeholder='Giph title'
                            id="giphTitle"
                            className='border-0 focus:border-t-transparent focus:ring-[#E6DDC4] rounded-md bg-slate-600 placeholder-[#E6DDC4] text-[#E6DDC4]'
                            {...register("title", { required: true })}
                        />
                    </div>
                    <div className='h-10'>
                        <button type="submit" className="bg-[#639e9a] p-2 rounded-lg w-full font-semibold hover:border-2 hover:border-[#E6DDC4] text-center text-[#E6DDC4]">
                            {loading ?
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
