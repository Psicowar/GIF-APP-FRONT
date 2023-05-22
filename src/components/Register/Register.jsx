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
    <div className="flex flex-row w-full h-[93vh]">
      <div className="w-full flex justify-center items-center">
        <form className=" w-80" onSubmit={handleSubmit(submitRegister)}>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 rounded-md border border-gray-300 text-gray-900 text-sm rounde block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
              placeholder="Name"
              {...register("name", { required: true, pattern: /^[A-Za-z]+$/i })}
            />
            {errors.name?.type === "required" && <p className="text-red-500 text-xs text-center pt-1">The name is required</p>}
            {errors.name?.type === "pattern" && <p className="text-red-500 text-xs text-center pt-1">The name can only contain letters</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 ">Last Name</label>
            <input
              type="text"
              id="lastName"
              className="bg-gray-50 rounded-md border border-gray-300 text-gray-900 text-sm rounde block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
              placeholder="Last Name"
              {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })}
            />
            {errors.lastName?.type === "required" && <p className="text-red-500 text-xs text-center pt-1">The last name is required.</p>}
            {errors.lastName?.type === "pattern" && <p className="text-red-500 text-xs text-center pt-1">The last name can only contain letters.</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 rounded-md border border-gray-300 text-gray-900 text-sm rounde block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
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
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 rounded-md border border-gray-300 text-gray-900 text-sm rounde block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
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
            <span className="text-sm ">
              Already have an account?
            </span>
            <NavLink to={LOGIN} className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 hover:text-blu hover:underline'>
              Login
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
