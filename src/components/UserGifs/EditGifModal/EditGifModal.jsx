
import { Modal } from 'flowbite-react'
import { useForm } from 'react-hook-form';
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
            size="md"
            popup={true}
            onClose={() => setOpen(false)}
            dismissible
        >
            <Modal.Header className='bg-[#256D85]' />
            <Modal.Body className='bg-[#256D85]'>
                <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="text-center text-3xl font-bold text-[#E6DDC4]"> Edit gif title</h3>
                    <div className='w-full flex justify-center'>
                        <img src={img} alt={title} className='w-50 h-40 object-cover rounded-md' />
                    </div>
                    {errors.title?.type === "required" && <p className="text-red-500 text-xs text-center">Select a file before uploading.</p>}
                    <div className="flex flex-col gap-2 pb-5">
                        <span className='font-semibold text-[#E6DDC4]'>Write gif title</span>
                        <input
                            type="text"
                            className='bg-slate-600 border-0 focus:border-t-transparent focus:ring-[#E6DDC4] rounded-md text-[#E6DDC4] text-sm rounde block w-full p-2.5 placeholder-[#E6DDC4]'
                            placeholder={title}
                            {...register("gifTitle", { required: true })}
                        />
                    </div>
                    <div className='h-10'>
                        <button type="submit" className="bg-[#467686] p-2 rounded-lg w-full font-semibold hover:border-2 hover:border-[#E6DDC4] text-center text-[#E6DDC4]">
                            Update gif title
                        </button>
                    </div>
                </form>
            </Modal.Body>
        </Modal >
    )
}
