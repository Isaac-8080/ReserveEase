import { CiSearch } from "react-icons/ci"
import TextInput from "../components/TextInput"

const Hero = () => {
  return (
    <>
      <div className="flex flex-row cursor-pointer items-center justify-center mt-20 mb-10 px-5 md:px-30">

        <img src="https://media.istockphoto.com/id/1343182422/photo/empty-rustic-design-restaurant-with-wooden-furniture-and-some-decorative-plants.jpg?s=612x612&w=0&k=20&c=NxyQLdiqVJrMQOfwCgnXGlxW9cXKa1Uk11xqfSaVPs8=" className="w-full h-40 md:h-60 object-cover rounded-3xl" alt="hero image" />

        <div className="px-5 md:px-30 w-full rounded-3xl absolute">
          <div className="w-full h-40 md:h-60 bg-black opacity-60 rounded-3xl md:px-30"></div>
        </div>

        <div className="flex flex-row w-fit rounded-full  absolute items-center bg-black">
          <TextInput id="search" name="search" type="search" placeholder="Search guests number" inputStyle="py-2 dark:text-black px-5 rounded-full rounded-r-none border-0 border-r outline-0 bg-white" autoComplete="current-password" />
          <CiSearch className="font-black text-4xl bg-black p-2 rounded-r-full text-white" />
        </div>

      </div>
    </>
  )
}

export default Hero
