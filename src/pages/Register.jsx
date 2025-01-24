import { NavLink } from "react-router-dom"
import Button from "../components/Button"
import Label from "../components/Label"
import TextInput from "../components/TextInput"

const SignIn = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Create an account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

          <form className="space-y-6">
            
            {/* <div>
              <Label htmlFor="fullname" text="Full name" />
              <div className="mt-2">
                <TextInput id="fullname" name="fullname" type="text" autoComplete="text" />
              </div>
            </div> */}

            {/* email */}
            <div>
              <Label htmlFor="email" text="Email address" />
              <div className="mt-2">
                <TextInput id="email" name="email" type="email" autoComplete="email" />
              </div>
            </div>

            {/* password */}
            <div>

              <div className="flex items-center justify-between">
                <Label htmlFor="password" text="Password" />
              </div>

              <div className="mt-2">
                <TextInput id="password" name="password" type="password" autoComplete="current-password" />
              </div>

            </div>
            
            {/* confirm password */}
            <div>

              <div className="flex items-center justify-between">
                <Label htmlFor="confirmPassword" text="Confirm Password" />
              </div>

              <div className="mt-2">
                <TextInput id="confirmPassword" name="confirmPassword" type="password" autoComplete="current-password" />
              </div>

            </div>

            {/* submit button */}
            <div>
              <Button type="submit" text="Create account" />
            </div>

          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Already a member?{' '}
            <NavLink to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Log In!
            </NavLink>
          </p>

        </div>

      </div>
    </>
  )
}

export default SignIn