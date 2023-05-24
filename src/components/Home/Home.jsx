import { NavLink, useLocation, useSearchParams } from "react-router-dom"
import { ALLGIFS, SPORTSGIFS, CARSGIFS, DOGSGIFS } from "../../router/path";
import { AllGifs } from "../Categories/AllGifs/Allgifs";
import { SportsGifs } from "../Categories/SportsGifs/SportsGifs";
import { CarsGifs } from "../Categories/CarsGifs/CarsGifs"
import { DogsGifs } from "../Categories/DogsGifs/DogsGifs"
import axios from "axios";




export const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation()
    const { pathname } = location
    
    // Set the value of the input with the search parameters, if there are no parameters it will be an empty string
    const queryParams = searchParams.get('q') ?? "";


    // Set searchParams
    const handleInputData = ({ target }) => {
        setSearchParams({ q: target.value })
    }

    const reloadDB = async () => {
        await axios.get("https://api.giphy.com/v1/gifs/trending?api_key=nlImZGt4re1mONHhlYFJVNQ14Zl6GvCL&limit=25&rating=g")
            .then(({data}) => {
                console.log(data);
                // axios.post(import.meta.env.VITE_BACKEND + "giphs/reload", { data })
            })
    }


    return (
        <div className="bg-slate-900 min-h-[100vh] pb-20">
            <div className="flex gap-20 p-10 w-full justify-center h-32 items-center">
                <NavLink to={ALLGIFS} className={({ isActive }) => (isActive ? "bg-slate-600 rounded-lg w-32 h-11 scale-105 shadow-blue-800 border-2 border-blue-600 shadow-lg transition-all ease-in-out duration-200 text-center flex items-center justify-center" : "h-9 bg-slate-600 rounded-lg w-32 flex items-center justify-center hover:border-2 hover:border-blue-700 ")}>
                    ALL
                </NavLink>
                <NavLink to={SPORTSGIFS} className={({ isActive }) => (isActive ? "bg-slate-600 rounded-lg w-32 h-11 scale-105 shadow-blue-800 border-2 border-blue-600 shadow-lg transition-all ease-in-out duration-200 text-center flex items-center justify-center" : "h-9 bg-slate-600 rounded-lg w-32 flex items-center justify-center hover:border-2 hover:border-blue-700")}>
                    SPORTS
                </NavLink>
                <NavLink to={CARSGIFS} className={({ isActive }) => (isActive ? "bg-slate-600 rounded-lg w-32 h-11 scale-105 shadow-blue-800 border-2 border-blue-600 shadow-lg transition-all ease-in-out duration-200 text-center flex items-center justify-center" : "h-9 bg-slate-600 rounded-lg w-32 flex items-center justify-center hover:border-2 hover:border-blue-700")}>
                    CARS
                </NavLink>
                <NavLink to={DOGSGIFS} className={({ isActive }) => (isActive ? "bg-slate-600 rounded-lg w-32 h-11 scale-105 shadow-blue-800 border-2 border-blue-600 shadow-lg transition-all ease-in-out duration-200 text-center flex items-center justify-center" : "h-9 bg-slate-600 rounded-lg w-32 flex items-center justify-center hover:border-2 hover:border-blue-700")}>
                    DOGS
                </NavLink>
                <button className="bg-red-500" onClick={reloadDB}>RECARGAR DB</button>
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
                {
                    pathname === ALLGIFS &&
                    <AllGifs queryParams={queryParams} />
                }
                {
                    pathname === SPORTSGIFS &&
                    <SportsGifs queryParams={queryParams} />
                }
                {
                    pathname === CARSGIFS &&
                    <CarsGifs queryParams={queryParams} />
                }
                {
                    pathname === DOGSGIFS &&
                    <DogsGifs queryParams={queryParams} />
                }
            </div>
        </div >
    )
}

