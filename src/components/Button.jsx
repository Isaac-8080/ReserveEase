import React from 'react'

const Button = (props) => {
  return (
    <>
      <button
        type={props.type}
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {props.text}
      </button>
    </>
  )
}

export default Button
