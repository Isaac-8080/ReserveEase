import { NavLink } from "react-router-dom"
import Button from "../components/Button"
import Label from "../components/Label"
import TextInput from "../components/TextInput"

const Login = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          /> */}
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight">
            Log in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

          <form className="space-y-6">
            
            <div>
              <Label htmlFor="email" text="Email address" />
              <div className="mt-2">
                <TextInput id="email" name="email" type="email" autoComplete="email" />
              </div>
            </div>

            <div>

              <div className="flex items-center justify-between">
                <Label htmlFor="password" text="Password" />
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>

              <div className="mt-2">
                <TextInput id="password" name="password" type="password" autoComplete="current-password" />
              </div>

            </div>

            <div>
              <Button type="submit" text="Sign in" />
            </div>

          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500 dark:text-[#F2F2F2]">
            Not a member?{' '}
            <NavLink to="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Sign up!
            </NavLink>
          </p>

        </div>

      </div>
    </>
  )
}

export default Login