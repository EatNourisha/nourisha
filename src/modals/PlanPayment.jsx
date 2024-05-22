import React from 'react'
import paypal from '../assets/paypal.png'
import wallet from '../assets/wallet-icon.png'
import visa from '../assets/visa.png'
import master from '../assets/master.png'

const PlanPayment = ({ handleSkip }) => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <p className='text-[18px] font-semibold text-[#303237] '>Payment</p>
        <p className='text-[#FE7E00] text-[14px] cursor-pointer select-none ' onClick={handleSkip}>Skip</p>
      </div>

      <div className='mt-4'>
        <p className='font-bold text-[12px] text-[#7E8494] mb-4 leading-[18px] '>CHOOSE A PAYMENT TYPE</p>

        <div className='flex justify-center items-center rounded-lg gap-3 border border-[#BDC0CE] py-3 mb-4 hover:border-orange-500 cursor-pointer'>
            <img src={wallet} alt="" width={24} />
            <p className='font-semibold text-[16px] text-[#303237]'>Credit/Debit Card</p>
        </div>
        <div className='flex justify-center items-center rounded-lg gap-3 border border-[#BDC0CE] py-3 hover:border-orange-500 cursor-pointer'>
            <img src={paypal} alt="" width={25} />
            <p className='font-semibold text-[16px] text-[#303237] '>Paypal</p>
        </div>

        <div className='mt-8 flex flex-col'>
            <p className='font-bold text-[#7E8494] text-[12px] mb-4 '>WE ACCEPT</p>
            <div className='flex justify-start gap-4 items-center'>
                <img src={paypal} alt="paypal logo" width={30}  />
                <img src={master} alt="master logo" width={30} className='h-[20px]' />
                <img src={visa} alt="visa logo" width={50} className='h-[20px]' />
            </div>
        </div>

        <div className='flex flex-col mt-10'>
            <div className='flex justify-between items-center mb-5'>
                <p className='text-[14px] text-[#7E8494]'>Sub-total</p>
                <p className='text-[14px] font-bold text-[#565C69] '>£157.00</p>
            </div>
            <div className='flex justify-between items-center mb-5'>
                <p className='text-[14px] text-[#7E8494]'>Sub-total</p>
                <p className='text-[14px] font-bold text-[#565C69] '>Free</p>
            </div>
            <div className='flex justify-between items-center mb-5'>
                <p className='text-[14px] text-[#565C69] font-bold'>Total to pay</p>
                <p className='text-[14px] font-bold text-[#565C69] '>£157.00</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PlanPayment
