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
        <div className="flex flex-row w-full min-h-[93.6vh] sticky top-0 z-10 bg-[#181D31] ">
            <div className="w-full flex justify-center items-center">
                <form className=" w-80" onSubmit={handleSubmit(submitLogin)}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#E6DDC4]">Your email</label>
                        <input
                            type="email"
                            id="email"
                            className="bg-slate-600 border-0 focus:border-t-transparent focus:ring-[#E6DDC4] rounded-md text-[#E6DDC4] text-sm rounde block w-full p-2.5 placeholder-[#E6DDC4]"
                            placeholder="example@example.com"
                            {...register("email", { required: true })}
                        />
                        {errors.name?.type === "required" && <p className="text-red-500 text-xs text-center pt-1">The email is required.</p>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#E6DDC4]">Your password</label>
                        <input
                            type="password"
                            id="password"
                            className="bg-slate-600 border-0 focus:border-t-transparent focus:ring-[#E6DDC4] rounded-md text-[#E6DDC4] text-sm rounde block w-full p-2.5 placeholder-[#E6DDC4]"
                            required
                            placeholder="*******"
                            {...register("password", { required: true, })}
                        />
                        {errors.password?.type === "required" && <p className="text-red-500 text-xs text-center pt-1">The password is required. </p>}
                    </div>
                    <div className="flex items-start mb-6">
                        <span className="text-sm text-[#E6DDC4] ">
                            Dont have an account?
                        </span>
                        <NavLink to={REGISTER} className='ml-2 text-sm font-medium text-[#e6ce8c] dark:text-gray-300 hover:text-blu hover:underline'>
                            Register
                        </NavLink>
                    </div>
                    <button type="submit" className="text-white w-full flex justify-center items-center h-10 bg-[#E96479] hover:border-2 hover:border-[#E6DDC4] rounded-md">Login</button>
                </form>
            </div>
            <div className="w-full flex flex-col justify-center items-center bg-[#E96479] gap-5">
                <span className="text-4xl font-erica text-[#E6DDC4]">WELCOME TO:</span>
                <span className="text-5xl font-erica text-[#E6DDC4]">Gifter.</span>
            </div>
        </div>
    )
}
