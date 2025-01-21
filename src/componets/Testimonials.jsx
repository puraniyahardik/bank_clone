import React from 'react';
import {feedback} from '../constants'
import styles,{layout} from '../style';
import FeetbackCard from './FeetbackCard'


const Testimonials = () => (
  <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    {/* TODO z-0 means apear behind container */}
    <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient' />

    <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>

      <h1 className={styles.heading2}>What People are <br className='hidden sm:block' /> saying about us.</h1>
      <div className='w-full md:mt-0 mt-6'>
        <p className={`${styles.paragraph} text-slate-400 text-left max-w-[450px] leading-6 `}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, nihil Lorem ipsum dolor sit amet consectetur.</p>

      </div>
    </div>


    <div className='flex flex-wrap sm:justify-start justify-center z-[1] w-full feedback-container relative'>

      {
        feedback.map((card)=>(
          <FeetbackCard key={card.id} {...card}/>
        ))
      }

    </div>

  </section>
)

export default Testimonials