import { useEffect } from 'react'
import { useFetchAllGifs } from "../../../hooks/useFetchGetAllGifs"
import { useGlobalContext } from '../../../context/GlobalContext'
import { Link } from 'react-router-dom'
import { IoCopySharp } from 'react-icons/io5';
import { CopyToClipBoard } from '../../CopyToClipBoard/CopyToClipBoard';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


export const AllGifs = ({ queryParams }) => {
    const { gifsState } = useGlobalContext()
    const { allGifs } = gifsState
    const { getAllGifs } = useFetchAllGifs()
    const { copyUrl } = CopyToClipBoard()

    useEffect(() => {
        getAllGifs();
    }, [])



    return (
        <div className="grid grid-cols-4 gap-4">
            {
                allGifs?.filter(({ title }) => {
                    if (!queryParams) return true
                    else if (queryParams.length < 3) return true
                    else return title.toLowerCase().includes(queryParams.toLowerCase())
                }).map((gif, i) => {
                    return (
                        <div key={i} className="flex flex-col items-center justify-center relative overflow-hidden hover:block">
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
                        </div>
                    )
                })
            }
        </div>
    )
}
