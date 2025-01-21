import React from 'react';
import {apple,bill,google} from '../assets/assets'
import styles,{layout} from '../style';


const Billing = () => {
  return (
    <section id='product' className={`${layout.sectionReverse}`}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="" className='w-[100%] h-[100%] relative z-[5] object-contain' />
        <div className='absolute z-[3] -left-1/2 top-0  w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] -left-1/2 bottom-0  w-[50%] h-[50%] rounded-full pink__gradient' />

      </div>


      <div className={layout.sectionInfo}>
        <h2 className={`dark:text-white ${styles.heading2}`}>Easily Control your <br className='hidden sm:block' />
        billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-stone-500`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis animi cupiditate enim excepturi officia voluptates velit nisi molestias iste corrupti!

        </p>


        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} className='w-[128px] h-[42px] mr-5 cursor-pointer object-contain' alt="" />
          <img src={google} className='w-[128px] h-[42px] mr-5 cursor-pointer object-contain' alt="" />

        </div>

      </div>

    </section>
  )
}

export default Billing