import React from 'react';
import style from '../style';
import {arrowUp} from '../assets/assets'


const GetStart = () => {
  return (
    <div className={`${style.flexCenter} w-[140px]  h-[140px] bg-blue-gradient rounded-full p-[2px] cursor-pointer`}>

      <div className={`${style.flexCenter}  hover:bg-[#A5B68D]transition-all ease-in-out flex-col bg-black w-[100%] h-[100%] rounded-full`}>

        <div className={`${style.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px]'>
            <span className='text-gradient'>Get</span>
          </p>
            <img src={arrowUp} className='w-[23px] h-[23px] object-contain' alt="" />

        </div>
        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
            <span className='text-gradient'>Started</span>
            
          </p>

      </div>


    </div>
  )
}

export default GetStart