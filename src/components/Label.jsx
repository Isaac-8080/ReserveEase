import React from 'react'

const Label = (props) => {
  return (
    <>
      <label htmlFor={props.htmlFor} className="block text-sm/6 font-medium text-gray-900">
        {props.text}
      </label>
    </>
  )
}

export default Label