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
            position: 'top-center',
            icon: 'success',
            title: 'Logged out successfully',
            showConfirmButton: false,
            background: "#18181b",
            timer: 1500
        })
    }

    return (
        <>
            <nav className="bg-[url('../../assets/imgs/background-navbar.jpg')] bg-cover sticky top-0 z-10 overflow-hidden">
                <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                    <NavLink to={ALLGIFS} className="flex items-center">
                        <span className="text-white text-2xl border-2 p-1 font-erica text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">Gifter</span>
                    </NavLink>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                        <ul className="flex flex-row items-center justify-cebnter gap-10 text-white p-4 md:p-0 font-medium ">
                            <li>
                                <NavLink to={ALLGIFS} className=" pr-4 text-white " aria-current="page">Home</NavLink>
                            </li>
                            {
                                isAuthenticated
                                    ?
                                    <>
                                        <li>
                                            <NavLink to={UPLOAD} className=" pr-4 ">Upload</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={USERGIFS} className=" pr-4 ">My gifs</NavLink>
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
                                <span className="text-white mr-3">Hello {firstName}!</span>
                                <button className="text-white bg-red-500 rounded-lg p-2" onClick={handleLogout}>Logout</button>
                            </div>
                            :
                            pathname === REGISTER
                                ?
                                <div className=" flex items-center justify-between w-ful md:w-auto order-1" id="navbar-authenticate">
                                    <NavLink to={LOGIN} className='w-16 text-center'>
                                        <span className="text-white">Login</span>
                                    </NavLink>
                                </div>
                                :

                                <div className=" flex items-center justify-between w-full md:w-auto order-1" id="navbar-authenticate">
                                    <NavLink to={REGISTER} className='w-16 text-center'>
                                        <span className="text-white">Register</span>
                                    </NavLink>
                                </div>
                    }
                </div>

            </nav >
        </>

    )
}
