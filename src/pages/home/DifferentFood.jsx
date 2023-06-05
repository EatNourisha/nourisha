import React, { useState } from 'react'
import Meals from './Meals'

const DifferentFood = () => {
const [selected, setSelected] = useState("Rice");

  return (
    <Meals selected={selected} setSelected={setSelected}/>
  )
}

export default DifferentFood