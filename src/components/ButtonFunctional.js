import React, { useEffect, useState } from 'react'

const ButtonFunction = ({ increment, name }) => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <span>{counter}</span>
      <br />
      <button onClick={() => setCounter(counter + increment)}>{name}</button>
    </div>
  )
}

export default ButtonFunction
