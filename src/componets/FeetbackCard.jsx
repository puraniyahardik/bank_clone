import React from 'react';
import {quotes} from '../assets/assets'

const FeetbackCard = ({content,title,name,img}) => {
  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>

      <img src={quotes} alt="" className='w-[42px] h-[27px] object-contain invert dark:invert-0' />
      <p className='font-poppins leading-[32px] dark:text-white text-[18px] font-normal my-10'>{content}</p>

      <div className='flex flex-row'>
        <img src={img} alt={name} className='w-[48px] h-[48px] rounded-full' />
        <div className='flex flex-col ml-4'>
          <h4 className='dark:text-white font-semibold font-mono leading-[32px] text-[20px] '>{name}</h4>
          <p className='text-stone-400 font-normal leading-[22px] text-[16px] '>{title}</p>

        </div>

      </div>

    </div>
  )
}

export default FeetbackCard