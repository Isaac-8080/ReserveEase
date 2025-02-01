import { CiSearch } from "react-icons/ci"
import TextInput from "../components/TextInput"

const Hero = () => {
  return (
    <>
      {/* <div className="flex flex-row items-center justify-center mt-20 mb-10 px-5 md:px-30">

        <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" className="w-full h-90 md:h-90 object-cover rounded-xl" alt="hero image" />

        <div className="px-5 md:px-30 w-full rounded-xl absolute">
          <div className="w-full h-90 md:h-90 opacity-60 rounded-xl md:px-30 bg-gray-900/70 mix-blend-multiply"></div>
        </div>
        
        <div className="flex flex-col items-center rounded-full absolute text-white">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Dining Made Simple</h1>
          <p className="w-[80%] md:w-[50%] mt-4 sm:mt-6 text-base text-center text-[20px] text-gray-100">
            ReserveEase transforms your dining experience with seamless table reservations. Skip the wait, secure your perfect table, and focus on what matters – enjoying great food with great company.
          </p>
        </div>
      </div> */}

      <div className="relative h-90 mt-20 flex flex-col justify-center items-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80" alt="Restaurant interior" loading="eager" />
          <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-5 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Dining Made Simple</h1>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-100 max-w-3xl mx-auto">ReserveEase transforms your dining experience with seamless table reservations. Skip the wait, secure your perfect table, and focus on what matters – enjoying great food with great company.</p>
        </div>
      </div>
    </>
  )
}

export default Hero
