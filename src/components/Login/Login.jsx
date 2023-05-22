import { NavLink } from "react-router-dom"
import { REGISTER } from "../../router/path"
import { useFetchLoginData } from "../../hooks/index"
import { useForm } from "react-hook-form"

export const Login = () => {

    const { sendUserData } = useFetchLoginData()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitLogin = async (data) => {
        sendUserData(data)
    }


    return (
        <div className="flex flex-row w-full h-[93vh]">
            <div className="w-full flex justify-center items-center">
                <form className=" w-80" onSubmit={handleSubmit(submitLogin)}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input
                            type="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="example@example.com"
                            {...register("email", { required: true })}
                        />
                        {errors.name?.type === "required" && <p className="text-red-500 text-xs text-center pt-1">The email is required.</p>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input
                            type="password"
                            id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                            placeholder="*******"
                            {...register("password", { required: true, })}
                        />
                        {errors.password?.type === "required" && <p className="text-red-500 text-xs text-center pt-1">The password is required. </p>}
                    </div>
                    <div className="flex items-start mb-6">
                        <span className="text-sm ">
                            Dont have an account?
                        </span>
                        <NavLink to={REGISTER} className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 hover:text-blu hover:underline'>
                            Register
                        </NavLink>
                    </div>
                    <button type="submit" className="text-white w-full bg-red-600 rounded-md p-2">Login</button>
                </form>
            </div>
            <div className="bg-red-600 w-full  flex justify-center items-center">
                <h1 className="text-5xl">Gifter</h1>
            </div>
        </div>
    )
}
