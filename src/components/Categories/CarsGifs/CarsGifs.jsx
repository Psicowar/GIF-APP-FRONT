import { useEffect } from 'react'
import { useGlobalContext } from '../../../context/GlobalContext'
import { useFetchAllGifs } from '../../../hooks/useFetchGetAllGifs'
import { Link } from 'react-router-dom'
import { CopyToClipBoard } from '../../CopyToClipBoard/CopyToClipBoard'
import { IoCopySharp } from 'react-icons/io5'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const CarsGifs = ({ queryParams }) => {
    const { gifsState } = useGlobalContext()
    const { allGifs } = gifsState
    const { getAllGifs } = useFetchAllGifs()
    const { copyUrl } = CopyToClipBoard()
    const carsGifs = allGifs.filter(({ title }) => { return title.toLowerCase().includes('car') })

    useEffect(() => {
        getAllGifs();
    }, [])


    return (
        <div className="grid grid-cols-4 gap-3">
            {
                carsGifs.filter(({ title }) => {
                    if (!queryParams) return true
                    else if (queryParams.length < 3) return true
                    else return title.toLowerCase().includes(queryParams.toLowerCase())

                }).map((gif, i) => {
                    return (
                        <div key={i} className="flex flex-col items-center justify-center relative hover:bg-gradient-to-t hover:from-zinc-400 overflow-hidden  hover:block">
                            <Link to={gif.preview_giph} target="_blank">
                                <LazyLoadImage
                                    alt={gif.title}
                                    src={gif.preview_giph}
                                    className='w-80 h-80 object-cover hover:opacity-20 hover:scale-125 transition-all duration-500 cursor-pointer'
                                    effect='blur'
                                    placeholderSrc={gif.preview_giph}
                                />
                            </Link>
                            <span className="pl-3 text-white font-bold absolute bottom-10 w-72 left-0">{gif.title}</span>
                            <IoCopySharp className='hover:scale-110 z-100 absolute top-5 right-5 cursor-pointer' color='white' size={30} onClick={() => copyUrl(gif.giph)} />
                        </div>
                    )
                })
            }
        </div>
    )
}
