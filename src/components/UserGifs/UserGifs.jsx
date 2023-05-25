import { useEffect, useState } from "react"
import { useFetchGetUserGifs, useFetchDeleteAllGifs, useFetchDeleteOne } from "../../hooks/index"
import { CopyToClipBoard, EditGifModal } from "../index"
import { useGlobalContext } from "../../context/GlobalContext"
import { Link, NavLink } from "react-router-dom"
import { IoCopySharp } from "react-icons/io5"
import { UPLOAD } from "../../router/path"
import { BsTrashFill } from "react-icons/bs"
import { MdModeEdit } from "react-icons/md"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const UserGifs = () => {
  const { getGifs } = useFetchGetUserGifs()
  const { gifsState } = useGlobalContext()
  const { copyUrl } = CopyToClipBoard()
  const { deleteUserGifs } = useFetchDeleteAllGifs()
  const { deleteUserGif } = useFetchDeleteOne()
  const [gifTitle, setGifTitle] = useState("")
  const [open, setOpen] = useState(false)
  const [gifImg, setGifImg] = useState("")
  const [gifId, setGifId] = useState("")
  const { userGifs } = gifsState


  useEffect(() => {
    getGifs()
  }, [])

  const deleteAllGifs = () => {
    deleteUserGifs()
  }

  const deleteGif = (_id) => {
    deleteUserGif(_id)
  }

  const handleOpenModal = (title, img, id) => {
    setGifTitle(title)
    setGifImg(img)
    setGifId(id)
    setOpen(true)
  }

  return (
    <>

      <div className="bg-[#181D31] min-h-[93.2vh] pb-20">
        <div className="flex gap-20 p-10 w-full justify-center h-32 items-center">
          {
            userGifs?.length > 0 &&
            <button className="bg-[#E96479] p-2 rounded-md text-[#E6DDC4] hover:border-2 hover:border-[#E6DDC4]" onClick={deleteAllGifs}>
              Delete all
            </button>
          }
        </div>
        <div className='flex justify-center'>
          {
            userGifs?.length > 0
              ?
              <div className="grid grid-cols-4 gap-3">
                {
                  userGifs.map((gif) => {
                    return (
                      <div key={gif._id} className="flex flex-col items-center justify-center relative overflow-hidden hover:block">
                        <Link to={gif.giph} target="_blank">
                          <LazyLoadImage
                            alt={gif.title}
                            src={gif.preview_giph}
                            className='w-80 h-80 rounded-lg object-cover hover:scale-95 hover:rounded-lg hover:border-4 border-[#E6DDC4] cursor-pointer'
                            effect='blur'
                            placeholderSrc={gif.preview_giph}
                          />

                        </Link>
                        <span className="pl-5 font-bold absolute bottom-10 w-72 left-0 text-[#E6DDC4]">{gif.title}</span>
                        <IoCopySharp className='hover:scale-110 z-100 absolute top-5 right-5 cursor-pointer' color='#E6DDC4' size={30} onClick={() => copyUrl(gif.giph)} />
                        <BsTrashFill className='hover:scale-110 z-100 absolute top-5 right-16 cursor-pointer' color='#E6DDC4' size={30} onClick={() => deleteGif(gif._id)} />
                        <MdModeEdit className='hover:scale-110 z-100 absolute top-5 right-28 cursor-pointer' color='#E6DDC4' size={30} onClick={() => handleOpenModal(gif.title, gif.preview_giph, gif._id)} />
                      </div>
                    )
                  })
                }
                {
                  gifTitle &&
                  <EditGifModal title={gifTitle} open={open} setOpen={setOpen} img={gifImg} id={gifId} />
                }

              </div>
              :
              <div className="flex justify-center items-center w-full h-[70vh] gap-5">
                <span className="text-2xl text-[#E6DDC4]">You have not uploaded any gif, upload it:</span>
                <NavLink to={UPLOAD}>
                  <button className="h-9 bg-slate-600 rounded-lg w-32 hover:border-2 hover:border-[#E6DDC4] text-[#E6DDC4]">
                    Here
                  </button>
                </NavLink>
              </div>
          }
        </div>
      </div>
    </>
  )
}
