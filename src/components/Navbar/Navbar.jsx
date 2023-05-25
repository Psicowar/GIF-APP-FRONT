import { NavLink } from "react-router-dom"
import { ALLGIFS, LOGIN, REGISTER, UPLOAD, USERGIFS } from "../../router/path"
import { useLocation } from 'react-router-dom'
import { useAuth } from "../../context/AuthContext"
import Swal from "sweetalert2"


export const Navbar = () => {
    const { authState, logout } = useAuth()
    const { isAuthenticated, user } = authState
    const { firstName } = user
    const location = useLocation()
    const { pathname } = location


    const handleLogout = () => {
        logout(null)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Logged out successfully',
            showConfirmButton: false,
            background: "#1b1e2a",
            timer: 1500
        })
    }

    return (
        <>
            <nav className="bg-[#1b1e2a] shadow-2xl bg-cover sticky top-0 z-10 overflow-hidden">
                <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                    <NavLink to={ALLGIFS} className="flex items-center">
                        <span className="text-[#E6DDC4] text-2xl border-2 border-[#E6DDC4] p-1 font-erica rounded-lg">Gifter</span>
                    </NavLink>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                        <ul className="flex flex-row items-center justify-cebnter gap-10 text-white p-4 md:p-0 font-medium ">
                            <li>
                                <NavLink to={ALLGIFS} className={({ isActive }) => (isActive ? "bg-[#1b1e2a] rounded-lg w-32 h-11 scale-105 shadow-[#E6DDC4] border-2 border-[#E6DDC4] text-[#E6DDC4] shadow-md transition-all ease-in-out duration-200 text-center flex items-center justify-center" : "h-9 bg-[#1b1e2a] rounded-lg w-32 flex items-center justify-center hover:border-2 hover:border-[#E6DDC4] text-[#E6DDC4]")} aria-current="page">Home</NavLink>
                            </li>
                            {
                                isAuthenticated
                                    ?
                                    <>
                                        <li>
                                            <NavLink to={UPLOAD} className={({ isActive }) => (isActive ? "bg-[#1b1e2a] rounded-lg w-32 h-11 scale-105 shadow-[#E6DDC4] border-2 border-[#E6DDC4] text-[#E6DDC4] shadow-md transition-all ease-in-out duration-200 text-center flex items-center justify-center" : "h-9 bg-[#1b1e2a] rounded-lg w-32 flex items-center justify-center hover:border-2 hover:border-[#E6DDC4] text-[#E6DDC4]")}>Upload</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={USERGIFS} className={({ isActive }) => (isActive ? "bg-[#1b1e2a] rounded-lg w-32 h-11 scale-105 shadow-[#E6DDC4] border-2 border-[#E6DDC4] text-[#E6DDC4] shadow-md transition-all ease-in-out duration-200 text-center flex items-center justify-center" : "h-9 bg-[#1b1e2a] rounded-lg w-32 flex items-center justify-center hover:border-2 hover:border-[#E6DDC4] text-[#E6DDC4]")}>My gifs</NavLink>
                                        </li>
                                    </>
                                    :
                                    ""
                            }
                        </ul>
                    </div>
                    {
                        isAuthenticated
                            ?
                            <div className="flex items-center justify-between w-full md:w-auto order-1" id="navbar-authenticate">
                                <span className="text-[#E6DDC4] mr-3">Hello {firstName}!</span>
                                <button className="border-2 border-[#E6DDC4] text-[#E6DDC4] rounded-lg p-2" onClick={handleLogout}>Logout</button>
                            </div>
                            :
                            pathname === REGISTER
                                ?
                                <div className=" flex items-center justify-between w-ful md:w-auto order-1 border-2 border-[#E6DDC4] rounded-lg">
                                    <NavLink to={LOGIN} className='w-16 h-10 text-center flex items-center justify-center '>
                                        <span className="text-[#E6DDC4]">Login</span>
                                    </NavLink>
                                </div>      
                                :
                                <div className=" flex items-center justify-between w-full md:w-auto order-1 border-2 border-[#E6DDC4] rounded-lg">
                                    <NavLink to={REGISTER} className='w-20 h-10 text-center flex items-center justify-center'>
                                        <span className="text-[#E6DDC4]">Register</span>
                                    </NavLink>
                                </div>
                    }

                </div>

            </nav >
        </>

    )
}
