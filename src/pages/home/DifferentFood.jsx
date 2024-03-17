import React, { useState } from 'react'
import Meals from './Meals'
import DifferentMeals from './MealTabs/DifferentMeals';

const DifferentFood = () => {
const [selected, setSelected] = useState("Rice");

  return (
    <DifferentMeals selected={selected} setSelected={setSelected}/>
  )
}

export default DifferentFood