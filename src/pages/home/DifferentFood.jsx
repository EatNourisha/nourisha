import React, { useState } from 'react'
import DifferentMeals from './MealTabs/DifferentMeals';

const DifferentFood = () => {
const [selected, setSelected] = useState("Rice");

  return (
    <>
       {/* <div className="">
        <h1>Our Menu</h1>
        <p>Available meals on our menu</p>
      </div> */}
    <DifferentMeals selected={selected} setSelected={setSelected}/>
    
    </>
  )
}

export default DifferentFood