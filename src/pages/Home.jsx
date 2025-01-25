import Api from "../components/Api"

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 md:px-[50px] py-20 w-full mx-auto font-bold text-4xl">
        <Api />
      </div>
    </>
  )
}

export default Home
