import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className={`${props.cardStyle} bg-white shadow-sm drop-shadow-sm rounded-md`}>
        {props.children}
      </div>
    </>
  )
}

export default Card
