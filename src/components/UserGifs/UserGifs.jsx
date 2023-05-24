import { useEffect, useState } from "react"
import { useFetchGetUserGifs } from "../../hooks/useFetchGetUserGifs"
import { useGlobalContext } from "../../context/GlobalContext"
import { Link, NavLink } from "react-router-dom"
import { IoCopySharp } from "react-icons/io5"
import { CopyToClipBoard } from "../CopyToClipBoard/CopyToClipBoard"
import { UPLOAD } from "../../router/path"
import { useFetchDeleteAllGifs } from "../../hooks/useFetchDeleteAll"
import { BsTrashFill } from "react-icons/bs"
import { MdModeEdit } from "react-icons/md"
import { useFetchDeleteOne } from "../../hooks/useFetchDeleteOne"
import { EditGifModal } from "./EditGifModal/EditGifModal"

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

      <div className="bg-slate-900 min-h-[93.2vh] pb-20">
        <div className="flex gap-20 p-10 w-full justify-center h-32 items-center">
          {
            userGifs?.length > 0 &&
            <button className="bg-red-500 p-2 rounded-md" onClick={deleteAllGifs}>
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
                      <div key={gif._id} className="flex flex-col items-center justify-center relative hover:bg-gradient-to-t hover:from-zinc-400 overflow-hidden hover:block">
                        <Link to={gif.giph} target="_blank">
                          <img src={gif.preview_giph} alt={gif.title} className="w-80 h-80 object-cover hover:opacity-20 hover:scale-125 transition-all duration-500 cursor-pointer rounded-lg" />
                        </Link>
                        <span className="pl-3 text-white font-bold absolute bottom-10 w-72 left-0">{gif.title}</span>
                        <IoCopySharp className='hover:scale-110 z-100 absolute top-5 right-5 cursor-pointer' color='white' size={30} onClick={() => copyUrl(gif.giph)} />
                        <BsTrashFill className='hover:scale-110 z-100 absolute top-5 right-16 cursor-pointer' color='white' size={30} onClick={() => deleteGif(gif._id)} />
                        <MdModeEdit className='hover:scale-110 z-100 absolute top-5 right-28 cursor-pointer' color='white' size={30} onClick={() => handleOpenModal(gif.title, gif.preview_giph, gif._id)} />
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
                <span className="text-2xl text-white">You have not uploaded any gif, upload it:</span>
                <NavLink to={UPLOAD}>
                  <button className="w-20 bg-red-500 rounded-lg h-9 text-white">
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
