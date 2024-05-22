import React from 'react'

const SelectMeal = ({ handleSkip }) => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <p className='text-[18px] font-semibold text-[#303237] '>Avalaible Meal</p>
        <p className='text-[#FE7E00] text-[14px] cursor-pointer select-none ' onClick={handleSkip} >Skip</p>
      </div>
    </div>
  )
}

export default SelectMeal
