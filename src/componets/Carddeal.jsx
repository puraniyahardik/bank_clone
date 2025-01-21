import React from 'react';
import {card} from '../assets/assets'
import styles,{layout} from '../style';
import Button from './Button'

const Carddeal = () => {
  return (
    <section className={layout.section}>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a btter card Deal <br className='hidden sm:block' />
        in few easy steps.
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5 dark:text-slate-400`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, aliquid placeat! Necessitatibus incidunt asperiores ipsam, facilis quis consequatur tenetur sit?</p>

      <Button style='mt-10' />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card"  className='h-[100%] w-[100%] object-contain'/>

      </div>


    </section>
  )
}

export default Carddeal