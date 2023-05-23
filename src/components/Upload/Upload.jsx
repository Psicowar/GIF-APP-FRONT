import { NavLink } from "react-router-dom"
import { UPLOAD } from "../../router/path"


export const Upload = () => {



  const handleUploadFromPc = () => {

  }


  return (

    <div className='flex justify-center items-center w-full h-[92.2vh] overflow-hidden bg-red-400'>
      <div className="h-full w-full flex justify-center items-center" onClick={handleUploadFromPc}>
        <NavLink to={`${UPLOAD}/PC`}>
          <div className="flex justify-center bg-red-500 items-center gap-4 flex-col hover:scale-150 transition hover:ease-in-out duration-500 cursor-pointer p-40 rounded-lg">
            <span className="text-white font-bold text-2xl">Upload gifs from pc!</span>
          </div>
        </NavLink >
      </div>

      <div className="h-full w-full flex justify-center items-center">
        <NavLink to={`${UPLOAD}/URL`}>
          <div className="flex justify-center bg-blue-500 items-center gap-4 flex-col hover:scale-150 transition hover:ease-in-out duration-500 cursor-pointer p-40 rounded-lg">
            <span className="text-white font-bold text-2xl">Upload gifs from url!</span>
          </div>
        </NavLink >
      </div>

    </div>

  )
}


