import React from 'react';
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
      <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col dark:bg-black-gradient-2 rounded-[20px] box-shadow`}>
        <div className='flex-1 flex flex-col'>
          <h2 className={styles.heading2}>Let's try our services now!</h2>
          <p  className={`${styles.paragraph} max-w-[470px] mt-5 dark:text-white`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nobis fugiat animi, sunt aspernatur eveniet repellendus voluptatem ea esse quod!</p>
        </div>


        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
          <Button />
        </div>
      </section>
  )
}

export default CTA
