import { NavLink } from "react-router-dom"
import { HOME, LOGIN, REGISTER, SEARCH, UPLOAD } from "../../router/path"
import { useLocation } from 'react-router-dom'
import { useAuth } from "../../context/AuthContext"
import { toast } from "react-hot-toast"



export const Navbar = () => {
    const { authState, logout } = useAuth()
    const { isAuthenticated, user } = authState
    const { firstName } = user
    const location = useLocation()
    const { pathname } = location




    const handleLogout = () => {
        logout(null)
        toast.success("Logged out successfully",
            {
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
                success: {
                    duration: 2000
                }
            }
        )
    }




    return (
        <>
            <nav className="bg-[url('../../assets/imgs/background-navbar.jpg')] bg-cover">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <NavLink to={HOME} className="flex items-center">
                        {/* <img src={gifterLogo} className="h-8 mr-3" alt="Gifter Logo" /> */}
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Gifter</span>
                    </NavLink>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                        <ul className="flex flex-row items-center justify-cebnter gap-10 text-white p-4 md:p-0 font-medium ">
                            <li>
                                <NavLink to={HOME} className=" pr-4 text-white " aria-current="page">Home</NavLink>
                            </li>
                            {
                                isAuthenticated
                                    ?
                                    <li>
                                        <NavLink to={UPLOAD} className=" pr-4 ">Upload</NavLink>
                                    </li>
                                    :
                                    ""
                            }
                            <li>
                                <NavLink to={SEARCH} className=" pr-4 ">Search</NavLink>
                            </li>
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
                                <div className=" flex items-center justify-between w-ful md:w-auto" id="navbar-authenticate">
                                    <NavLink to={LOGIN} className='w-16 text-center'>
                                        <span className="text-white">Login</span>
                                    </NavLink>
                                </div>
                                :

                                <div className=" flex items-center justify-between w-full md:w-auto" id="navbar-authenticate">
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
