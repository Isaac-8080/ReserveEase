import { Link } from "react-router-dom"

const PageNotFound = () => {
  return (
    <>
      <div className="flex flex-col gap-5 h-[80dvh] items-center p-10 justify-center">
        <div>
          <p className="font-bold text-2xl text-center">404 | Page not found</p>
          <p className="font-bold text-md text-center">Let's start from <Link to="/" className="text-green-500 underline">home</Link> page</p>
        </div>
      </div>
    </>
  )
}

export default PageNotFound
