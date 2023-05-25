import { NavLink, useLocation, useSearchParams } from "react-router-dom"
import { ALLGIFS, SPORTSGIFS, CARSGIFS, DOGSGIFS } from "../../router/path";
import { AllGifs } from "../Categories/AllGifs/Allgifs";
import { SportsGifs } from "../Categories/SportsGifs/SportsGifs";
import { CarsGifs } from "../Categories/CarsGifs/CarsGifs"
import { DogsGifs } from "../Categories/DogsGifs/DogsGifs"




export const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation()
    const { pathname } = location

    const queryParams = searchParams.get('q') ?? "";

    const handleInputData = ({ target }) => {
        setSearchParams({ q: target.value })
    }


    return (
        <div className="bg-[#181D31] min-h-[100vh] pb-20">
            <div className="flex gap-20 p-10 w-full justify-center h-32 items-center">
                <NavLink to={ALLGIFS} className={({ isActive }) => (isActive ? "bg-[#1b1e2a] rounded-lg w-32 h-11 scale-105 shadow-[#E6DDC4] border-2 border-[#E6DDC4] text-[#E6DDC4] shadow-lg transition-all ease-in-out duration-200 text-center flex items-center justify-center" : "h-9 bg-[#1b1e2a] rounded-lg w-32 flex items-center justify-center hover:border-2 hover:border-[#E6DDC4] text-[#E6DDC4]")}>
                    ALL
                </NavLink>
                <NavLink to={SPORTSGIFS} className={({ isActive }) => (isActive ? "bg-[#1b1e2a] rounded-lg w-32 h-11 scale-105 shadow-[#E6DDC4] border-2 border-[#E6DDC4] text-[#E6DDC4] shadow-lg transition-all ease-in-out duration-200 text-center flex items-center justify-center" : "h-9 bg-[#1b1e2a] rounded-lg w-32 flex items-center justify-center hover:border-2 hover:border-[#E6DDC4] text-[#E6DDC4]")}>
                    SPORTS
                </NavLink>
                <NavLink to={CARSGIFS} className={({ isActive }) => (isActive ? "bg-[#1b1e2a] rounded-lg w-32 h-11 scale-105 shadow-[#E6DDC4] border-2 border-[#E6DDC4] text-[#E6DDC4] shadow-lg transition-all ease-in-out duration-200 text-center flex items-center justify-center" : "h-9 bg-[#1b1e2a] rounded-lg w-32 flex items-center justify-center hover:border-2 hover:border-[#E6DDC4] text-[#E6DDC4]")}>
                    CARS
                </NavLink>
                <NavLink to={DOGSGIFS} className={({ isActive }) => (isActive ? "bg-[#1b1e2a] rounded-lg w-32 h-11 scale-105 shadow-[#E6DDC4] border-2 border-[#E6DDC4] text-[#E6DDC4] shadow-lg transition-all ease-in-out duration-200 text-center flex items-center justify-center" : "h-9 bg-[#1b1e2a] rounded-lg w-32 flex items-center justify-center hover:border-2 hover:border-[#E6DDC4] text-[#E6DDC4]")}>
                    DOGS
                </NavLink>

            </div>
            <div className="flex w-full justify-center pb-10">
                <input
                    type="text"
                    id="search"
                    className="border-0 focus:border-t-transparent focus:ring-[#E6DDC4] w-96 rounded-md bg-[#1b1e2a] placeholder-[#E6DDC4] text-[#E6DDC4]"
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

