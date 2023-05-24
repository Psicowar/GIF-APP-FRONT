import { useEffect } from 'react';
import { useGlobalContext } from '../../../context/GlobalContext'
import { useFetchAllGifs } from '../../../hooks/useFetchAllGifs';
import { Link } from 'react-router-dom';
import { CopyToClipBoard } from '../CopyToClipBoard/CopyToClipBoard';
import { IoCopySharp } from 'react-icons/io5';

export const SportsGifs = ({ queryParams }) => {
    const { gifsState } = useGlobalContext()
    const { allGifs } = gifsState
    const { getAllGifs } = useFetchAllGifs()
    const { copyUrl } = CopyToClipBoard()
    const sportsGifs = allGifs.filter(({ title }) => { return title.toLowerCase().includes('sport') })

    useEffect(() => {
        getAllGifs();
    }, [])


    return (
        <div className="grid grid-cols-4 gap-3">
            {
                sportsGifs.filter(({ title }) => {
                    if (!queryParams) return true
                    else if (queryParams.length < 3) return true
                    else return title.toLowerCase().includes(queryParams.toLowerCase())

                }).map((gif, i) => {
                    return (
                        <div key={i} className="flex flex-col items-center justify-center relative hover:bg-gradient-to-t hover:from-zinc-400 overflow-hidden  hover:block">
                            <Link to={gif.preview_giph} target="_blank">
                                <img src={gif.preview_giph} alt={gif.title} className="w-80 h-80 object-cover hover:opacity-20 hover:scale-125 transition-all duration-500 cursor-pointer" />
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
