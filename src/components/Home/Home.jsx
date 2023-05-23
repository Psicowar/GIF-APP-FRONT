import axios from "axios"
import { useEffect, useState } from "react"

export const Home = () => {

    const [giphs, setGiphs] = useState([])

    const getAllGiphs = () => {
        axios.get(import.meta.env.VITE_BACKEND + 'giphs/')
            .then(({ data }) => {
                setGiphs(data)
            })
    }

    console.log(giphs);
    useEffect(() => {
        getAllGiphs();
    }, [])


    return (
        <div className='flex justify-center'>
            <div className="grid grid-cols-4 bg-slate-900 gap-3">
                {
                    giphs.map((giph, i) => {
                        return (
                            <div key={i} className="flex flex-col items-center justify-center relative hover:bg-gradient-to-t hover:from-zinc-400 overflow-hidden">
                                <img src={giph.preview_giph} alt={giph.title} className="w-80 h-80 object-cover hover:opacity-20 hover:scale-125 transition-all duration-500 cursor-pointer" />
                                <span className="pl-3 text-white font-bold absolute bottom-10 w-72 left-0">{giph.title}</span>

                            </div>
                        )

                    })
                }
            </div>
        </div>
    )
}

