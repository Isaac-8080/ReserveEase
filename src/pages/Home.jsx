import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Listing from "../components/Listing"

const Home = () => {
  return (
    <>
      <Hero />
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white px-5 md:px-30 mt-15 mb-5">Available Tables</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 md:px-30 pb-15 w-full mx-auto font-bold text-4xl">
        <Listing />
      </div>

      <Footer />
    </>
  )
}

export default Home
