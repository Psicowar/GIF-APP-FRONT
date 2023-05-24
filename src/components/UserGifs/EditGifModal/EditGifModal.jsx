
import { Modal } from 'flowbite-react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Puff } from 'react-loader-spinner';
import { useFetchUpdateTitleGif } from '../../../hooks/useFetchUpdateTitleGif';


export const EditGifModal = ({ title, open, setOpen, img, id }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { onSubmitTitleGif } = useFetchUpdateTitleGif()


    const onSubmit = ({ gifTitle }) => {
        onSubmitTitleGif(gifTitle, reset, id, setOpen)

    }





    return (
        <Modal
            show={open}
            size="lg"
            popup={true}
            onClose={() => setOpen(false)}
            dismissible
        >
            <Modal.Header className='bg-blue-500' />
            <Modal.Body className='bg-blue-500'>
                <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="text-center text-3xl font-bold text-black dark:text-gray-200"> Edit gif title</h3>
                    <div className='w-full flex justify-center'>
                        <img src={img} alt={title} className='w-full h-full object-cover rounded-md' />
                    </div>
                    {errors.title?.type === "required" && <p className="text-red-500 text-xs text-center">Select a file before uploading.</p>}
                    <div className="flex flex-col gap-2 pb-5">
                        <span className='font-semibold'>Write gif title</span>
                        <input
                            type="text"
                            className='border-0 focus:border-t-transparent focus:ring-black rounded-md bg-slate-600 placeholder-black'
                            placeholder={title}
                            {...register("gifTitle", { required: true })}
                        />
                    </div>
                    <div className='h-10'>
                        <button type="submit" className="bg-blue-400 p-2 rounded-lg w-full font-semibold hover:border-2 hover:border-black text-center">
                            Update gif title
                        </button>
                    </div>
                </form>
            </Modal.Body>
        </Modal >
    )
}
