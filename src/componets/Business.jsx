import React from 'react'
import style,{layout} from '../style'
import Button from '../componets/Button'
import {features} from '../constants/index'


const FeatureCard = ({icon,title,content,index}) => (
  <div className={`flex flex-row p-6 rounded-[20px]
  ${index !== features.length - 1 ? 'mb-6' : 'mb-0'}
   feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${style.flexCenter} bg-stone-800`}>
      <img 
      src={icon} 
      className='w-[50%] h-[50%] object-contain' />
    </div>

    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins text-[24px] dark:text-white leading-[23px] font-semibold mb-1 text-slate-900'>{title}</h4>

      <p className='dark:text-white text-[14px] font-normal leading-[23px] mb-1 text-gray-500'>
        {content}
      </p>

    </div>

  </div>
)


const Business = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>

        <h2 className={`${style.heading2} dark:text-white text-black`}>You do the business, <br className='sm:block hidden' />
        we'll handle the money. </h2>
        <p className={`${style.paragraph} max-w-[470px] dark:text-stone-500 mt-5`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem sed a exercitationem, quam ut eveniet aut eos ea ad, porro velit.
        </p>

        <Button style='mt-10'/>

      </div>

      <div className={`${layout.sectionImg} flex-col`}>

        {
          features.map((feature,index) =>(
            // using ... sysntax render the all data of feature
            <FeatureCard  key={feature.id} {...feature} index={index}/>
          ))
        }

      </div>

    </section>
  )
}

export default Business