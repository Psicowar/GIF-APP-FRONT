import { Link } from 'react-router-dom'
import errorPageImg from "../../assets/imgs/404page.gif"
import { ALLGIFS } from '../../router/path'

export const ErrorPage = () => {
    return (
        <>
            <div className='w-full min-h-[93.6vh] absolute'>
                <img src={errorPageImg} alt="Error 404 ilustration" className=' object-cover w-full h-full' />
            </div>
            <div className="m-auto text-center top-96 relative pt-10">
                <Link to={ALLGIFS}>
                    <button className='bg-red-500 w-20 hover:scale-110 rounded-lg p-2'>
                        Go back!
                    </button>
                </Link>
            </div>
        </>
    )
}
