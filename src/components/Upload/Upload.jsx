import { ModalUploadThrowPc } from "./ModalUploadThrowPc/ModalUploadThrowPc"
import { useState } from "react"
import { ModalUploadThrowUrl } from "./ModalUploadThrowUrl/ModalUploadThrowUrl"


export const Upload = () => {
  const [openUploadThrowPc, setOpenUploadThrowPc] = useState(false)
  const [openUploadThrowUrl, setOpenUploadThrowUrl] = useState(false)

  const handleOpenUploadThrowPc = () => {
    setOpenUploadThrowPc(true)
  }

  const handleOpenUploadThrowUrl = () => {
    setOpenUploadThrowUrl(true)
  }

  return (
    <>
      <ModalUploadThrowPc open={openUploadThrowPc} setOpen={setOpenUploadThrowPc} />
      <ModalUploadThrowUrl open={openUploadThrowUrl} setOpen={setOpenUploadThrowUrl} />
      <div className='flex justify-center items-center w-full h-[93.2vh] overflow-hidden bg-slate-900'>
        <div className="h-full w-full flex justify-center items-center" onClick={handleOpenUploadThrowPc}>
          <div className="flex justify-center bg-red-500 items-center gap-4 flex-col hover:scale-150 transition hover:ease-in-out duration-500 cursor-pointer p-40 rounded-lg">
            <span className="text-white font-bold text-2xl">Upload gif from pc</span>
          </div>
        </div>
        <div className="h-full w-full flex justify-center items-center" onClick={handleOpenUploadThrowUrl}>
          <div className="flex justify-center bg-blue-500 items-center gap-4 flex-col hover:scale-150 transition hover:ease-in-out duration-500 cursor-pointer p-40 rounded-lg">
            <span className="text-white font-bold text-2xl">Upload gif from url</span>
          </div>
        </div>
      </div>
    </>

  )
}


