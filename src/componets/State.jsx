import React from 'react'
import {stats} from '../constants'
import style from '../style'

const State = () =>  (
    <section className={`${style.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {
        stats.map((key)=> (
          <div key={key.id} className={`flex flex-1 justify-start items-center flex-wrap flex-row m-3`}>
            <h4 className='font-poppins font-semibold xs:test-[40px] text-[30px] xs:leading-[53px] dark:text-white leading-[43px] text-[#FFA38F] '>{key.value}</h4>
            <p className='font-poppins font-normal xs:test-[20px] text-[14px] xs:leading-[20px] text-gradient leading-[20px] uppercase ml-3 invert dark:invert-0 '>{key.title}</p>

          </div>
        ))
      }

    </section>
  )


export default State