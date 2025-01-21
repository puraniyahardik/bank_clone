import React from 'react'
import style from '../style';

import {discount,robot} from '../assets/assets'
import GetStart from './GetStart';
const Hero = () => {
  return (
    <section id='home' 
    className={`flex md:flex-row flex-col ${style.paddingY}`}>

      <div className={`flex-1 ${style.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className='flex items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt=""  className='w-[32px] h-[32px]'/>
          <p className={`${style.paragraph} ml-2 text-stone-400 gap-3 `}>

          <span className='dark:text-white'>20% </span>
           Discount For {' '}
          <span></span>
          <span className='text-white'>1 Month </span>
          Account
          </p>

        </div>


        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold sm:text-[72px] text-[52px] dark:text-white sm:leading-[100px] leading-[75px]'>The Next <br className='sm:block hidden' /> {" "}
          <span className='text-gradient invert dark:invert-0'>Generation</span> {" "}
         
          </h1>

          <div className='sm:flex hidden md:hidden md:mr-4
           mr-0'>
          <GetStart />

          </div>
        </div>

        <h1 className=' font-poppins font-semibold sm:text-[68px] text-[52px] dark:text-white sm:leading-[100px] leading-[75px] w-full'> Payment Method
          </h1>
          <p className={`${style.paragraph} max-w-[470px] mt-5 dark:text-stone-400 `}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore est dignissimos non quia! Nesciunt perferendis consequatur natus qui id illo provident mollitia quisquam maiores similique? Veritatis ea et animi numquam.
          </p>

      </div>


      {/* right side */}
      <div className={`flex flex-1 ${style.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} className='w-[100%] h-[100%] object-contain relative z-[5]' alt="" />

        <div className='absolute z-[0] w-[40%] h-[35%] pink__gradient top-0 '/>
        <div className='absolute z-[1] w-[80%] h-[80%] white__gradient bottom-40 '/>
        <div className='absolute z-[0] w-[50%] h-[55%] blue__gradient bottom-20 right-20 '/>
      </div>

      <div className={`ss:hidden ${style.flexCenter}
      `}>
          <GetStart />
      </div>


    </section>
  )
}

export default Hero