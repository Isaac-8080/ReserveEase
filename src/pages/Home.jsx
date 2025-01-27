import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Listing from "../components/Listing"

const Home = () => {
  return (
    <>
      <Hero />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 md:px-30 pb-20 w-full mx-auto font-bold text-4xl">
        <Listing />
      </div>

      <Footer />
    </>
  )
}

export default Home
