import { NavLink } from "react-router-dom"
import { LOGIN } from "../../router/path"
import { useForm } from "react-hook-form";
import { useFetchRegisterData } from "../../hooks/index"


export const Register = () => {

  const { sendUserData } = useFetchRegisterData()
  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitRegister = async (data) => {
    sendUserData(data)
  }

  return (
    <div className="flex flex-row w-full min-h-[93.6vh] sticky top-0 z-10 bg-[#181D31]">
      <div className="w-full flex justify-center items-center">
        <form className=" w-80" onSubmit={handleSubmit(submitRegister)}>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-[#E6DDC4] ">Name</label>
            <input
              type="text"
              id="name"
              className="bg-slate-600 border-0 focus:border-t-transparent focus:ring-[#E6DDC4] rounded-md text-[#E6DDC4] text-sm rounde block w-full p-2.5 placeholder-[#E6DDC4]"
              placeholder="Name"
              {...register("name", { required: true, pattern: /^[A-Za-z]+$/i })}
            />
            {errors.name?.type === "required" && <p className="text-red-500 text-xs text-center pt-1">The name is required</p>}
            {errors.name?.type === "pattern" && <p className="text-red-500 text-xs text-center pt-1">The name can only contain letters</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-[#E6DDC4] ">Last Name</label>
            <input
              type="text"
              id="lastName"
              className="bg-slate-600 border-0 focus:border-t-transparent focus:ring-[#E6DDC4] rounded-md text-[#E6DDC4] text-sm rounde block w-full p-2.5 placeholder-[#E6DDC4] "
              placeholder="Last name"
              {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })}
            />
            {errors.lastName?.type === "required" && <p className="text-red-500 text-xs text-center pt-1">The last name is required.</p>}
            {errors.lastName?.type === "pattern" && <p className="text-red-500 text-xs text-center pt-1">The last name can only contain letters.</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#E6DDC4] ">Your email</label>
            <input
              type="email"
              id="email"
              className="bg-slate-600 border-0 focus:border-t-transparent focus:ring-[#E6DDC4] rounded-md text-[#E6DDC4] text-sm rounde block w-full p-2.5 placeholder-[#E6DDC4] "
              placeholder="example@example.com"
              {...register("email", {
                required: true,
                pattern: /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/i
              })}
            />
            {errors.email?.type === "required" && <p className="text-red-500 text-xs text-center pt-1">The email is required. </p>}
            {errors.email?.type === "pattern" && <p className="text-red-500 text-xs text-center pt-1">The email is not valid.</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#E6DDC4] ">Your password</label>
            <input
              type="password"
              id="password"
              className="bg-slate-600 border-0 focus:border-t-transparent focus:ring-[#E6DDC4] rounded-md text-[#E6DDC4] text-sm rounde block w-full p-2.5 placeholder-[#E6DDC4] "
              placeholder="*******"
              {...register("password", {
                required: true,
                pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
              })}
            />
            {errors.password?.type === "required" && <p className="text-red-500 text-xs text-center pt-1">The password is required. </p>}
            {errors.password?.type === "pattern" && <p className="text-red-500 text-xs text-center pt-1">Must contain between 8 and 16 characters, at least one uppercase letter, one number and one special character. </p>}
          </div>
          <div className="flex items-start mb-6">
            <span className="text-sm text-[#E6DDC4]">
              Already have an account?
            </span>
            <NavLink to={LOGIN} className='ml-2 text-sm font-medium text-[#e6ce8c] dark:text-gray-300 hover:text-blu hover:underline'>
              Login
            </NavLink>
          </div>
            <button type="submit" className="w-full flex justify-center items-center h-10 bg-[#7DB9B6] hover:border-2 hover:border-[#E6DDC4] rounded-md text-[#E6DDC4]">Register</button>
        </form>
      </div>
      <div className="w-full flex flex-col justify-center items-center bg-[#7DB9B6] gap-5">
        <span className="text-4xl font-erica text-[#E6DDC4]">WELCOME TO:</span>
        <span className="text-5xl font-erica text-[#E6DDC4]">Gifter.</span>
      </div>
    </div>
  )
}



