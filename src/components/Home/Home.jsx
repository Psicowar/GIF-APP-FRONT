import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"

export const Home = () => {

    const [giphs, setGiphs] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();

    // Set the value of the input with the search parameters, if there are no parameters it will be an empty string
    const queryParams = searchParams.get('q') ?? "";


    // Get data from backend
    const getAllGiphs = () => {
        axios.get(import.meta.env.VITE_BACKEND + 'giphs/')
            .then(({ data }) => {
                setGiphs(data)

            })
    }

    useEffect(() => {
        getAllGiphs();
    }, [])


    // Set searchParams
    const handleInputData = ({ target }) => {
        setSearchParams({ q: target.value })
    }



    return (
        <div className="bg-slate-900 h-full">
            <div className="flex gap-20 p-10 w-full justify-center h-32 items-center">
                <button className="bg-slate-600 rounded-lg w-32 h-6 hover:h-9 hover:scale-105 hover:shadow-blue-800 hover:border-2 border-blue-600 shadow-lg transition-all ease-in-out duration-200">ALL</button>
                <button className="bg-slate-600 rounded-lg w-32 h-6 hover:h-9 hover:scale-105 hover:shadow-blue-800 hover:border-2 border-blue-600 shadow-lg transition-all ease-in-out duration-200">SPORTS</button>
                <button className="bg-slate-600 rounded-lg w-32 h-6 hover:h-9 hover:scale-105 hover:shadow-blue-800 hover:border-2 border-blue-600 shadow-lg transition-all ease-in-out duration-200">CARS</button>
                <button className="bg-slate-600 rounded-lg w-32 h-6 hover:h-9 hover:scale-105 hover:shadow-blue-800 hover:border-2 border-blue-600 shadow-lg transition-all ease-in-out duration-200">DOGS</button>
            </div>
            <div className="flex w-full justify-center pb-10">
                <input
                    type="text"
                    id="search"
                    className="border-0 focus:border-t-transparent focus:ring-0 rounded-lg w-96 bg-slate-600 placeholder-black"
                    placeholder="Search..."
                    value={queryParams}
                    onChange={handleInputData}
                />
            </div>
            <div className='flex justify-center'>

                <div className="grid grid-cols-4 gap-3">
                    {
                        giphs.filter(({ title }) => {
                            if (!queryParams) return true
                            else if (queryParams.length < 3) return true
                            else return title.toLowerCase().includes(queryParams.toLowerCase())

                        }).map((giph, i) => {
                            return (
                                <div key={i} className="flex flex-col items-center justify-center relative hover:bg-gradient-to-t hover:from-zinc-400 overflow-hidden  hover:block">
                                    <Link to={giph.preview_giph} target="_blank">
                                        <img src={giph.preview_giph} alt={giph.title} className="w-80 h-80 object-cover hover:opacity-20 hover:scale-125 transition-all duration-500 cursor-pointer" />
                                        <span className="pl-3 text-white font-bold absolute bottom-10 w-72 left-0">{giph.title}</span>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}

