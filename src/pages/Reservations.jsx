import Card from "../components/Card"

const Reservations = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-5">

        <div>

          <div className="mt-20">My Reservations</div>

          <Card cardStyle="py-3 px-5 w-full md:w-[500px]">

            <div>
              reservation id
            </div>

            <div className="flex">
              <div>date icon</div>
              <div>date</div>
            </div>

            <div className="flex">
              <div>guests icon</div>
              <div>no. of guests</div>
            </div>

          </Card>

        </div>

      </div>
    </>
  )
}

export default Reservations
