import React from 'react'
import './mealDetails.css'


const MealDetails = ({ onClose, mealId }) => {
  return (
    <div className='meal-modal fixed top-0 left-0 w-[100%] h-[100%] flex justify-center items-center overflow-scroll z-[1000] '>
      <div className='meal-content bg-white p-[20px] fixed top-0 right-0 w-[552px] h-[100vh] flex flex-col '>
        <div>
        <div className="cart-header">
          <h2>Meal Details</h2>
          <button className="close-btn" onClick={onClose}>
            x
          </button>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default MealDetails

