import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import Card from './Card'

const Modal = ({ onClickAction }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalOpen = () => setIsModalOpen(true)
  const handleModalClose = () => setIsModalOpen(false)

  return (
    <>
      {/* Open Modal Button */}
      <IoMdClose 
        onClick={handleModalOpen} 
        className="text-xl text-red-500 cursor-pointer -translate-y-1.5" 
      />

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="h-screen w-full bg-black fixed z-10 opacity-60 transition-all ease-in-out duration-1000"></div>
          {/* Modal Card */}
          <Card cardStyle="p-5 bg-white rounded-lg shadow-lg w-[80%] max-w-sm relative z-50">
            <div className="flex flex-col items-center text-center">
              <p className='font-semibold'>This action can't be undone.</p>
              <p className='font-semibold'>Do you want to proceed?</p>

              {/* Buttons */}
              <div className="flex gap-3 items-center mt-3">
                <input 
                  type="button" 
                  className="btn bg-black border-0 hover:opacity-80 text-white" 
                  onClick={handleModalClose} 
                  value="Cancel" 
                />
                <input 
                  type="button" 
                  className="btn bg-red-500 hover:bg-red-400 border-0 text-white" 
                  onClick={onClickAction} 
                  value="Proceed" 
                />
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  )
}

export default Modal
