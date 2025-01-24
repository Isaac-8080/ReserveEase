import { Link } from "react-router-dom"

const PageNotFound = () => {
  return (
    <>
      <div className="flex flex-col gap-5 h-[80dvh] items-center md:w-50 p-10 justify-center">
        <p className="font-bold text-2xl">404 | Page not found</p>
        <p className="font-bold text-md">Let's start from <Link to="/" className="text-green-500 underline">home</Link> page</p>
      </div>
    </>
  )
}

export default PageNotFound
