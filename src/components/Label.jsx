import React from 'react'

const Label = (props) => {
  return (
    <>
      <label htmlFor={props.htmlFor} className="block text-[#1E2939] dark:text-white">
        {props.text}
      </label>
    </>
  )
}

export default Label