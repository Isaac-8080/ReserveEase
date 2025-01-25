import Api from "../components/Api"
import { CiSearch } from "react-icons/ci"
import TextInput from "../components/TextInput"

const Home = () => {
  return (
    <>
      <div className="flex flex-row cursor-pointer items-center justify-center mt-20 mb-10 px-5 md:px-12">

        <img src="https://media.istockphoto.com/id/1343182422/photo/empty-rustic-design-restaurant-with-wooden-furniture-and-some-decorative-plants.jpg?s=612x612&w=0&k=20&c=NxyQLdiqVJrMQOfwCgnXGlxW9cXKa1Uk11xqfSaVPs8=" className="w-full h-40 md:h-60 object-cover rounded-3xl" alt="" srcset="" />
        
        <div className="px-5 md:px-12 w-full rounded-3xl absolute">
          <div className="w-full h-40 md:h-60 bg-black opacity-30 rounded-3xl md:px-12"></div>
        </div>

        <div className="border flex flex-row w-fit rounded-full absolute items-center bg-[#FFFFFF] focus-within:border-indigo-600">
          <TextInput id="search" name="search" type="search" placeholder="search guests number" inputStyle="py-2 dark:text-black pl-5 rounded-full border-0 outline-0" autoComplete="current-password" />
          <CiSearch className="font-black text-indigo-600 text-4xl pr-2" />
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 md:px-[50px] pb-20 w-full mx-auto font-bold text-4xl">
        <Api />
      </div>
    </>
  )
}

export default Home
