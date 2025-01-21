import React from 'react';
import { logo } from '../assets/assets'
import { footerLinks, socialMedia } from '../constants';
import styles from '../style'



const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>

      <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full`}>

        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img src={logo} alt="hoobank"
            className='w-[266px] h[72px] object-contain filter invert dark:invert-0 ' />

          <p className={`${styles.paragraph} dark:text-slate-700 mt-4 max-w-[310px]`}>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>

        </div>



        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>

          {
            footerLinks.map((footerlink) => (
              <div key={footerlink.key} className=' flex flex-col sm:my-0 my-4 min-w-[150px]'>
                <h4 className={`font-poppins font-medium text-[18px] leading-[27px] dark:text-white`}>
                  {footerlink.title}
                </h4>

                <ul className='list-none mt-3'>
                  {
                    footerlink.links.map((link, index) => (

                      <li key={link.name} className={`font-poppins text-[16px] leading-[24px] dark:text-slate-300 cursor-pointer font-normal  hover:text-[#FF0000]
                       ${footerlink.links.length !== - 1 ? 'mb-4' : 'mb-0'

                        }
                      `}>{link.name}
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }

        </div>

      </div>





      <div className='w-full flex justify-between items-center md:flex-row flex-col border-t-[1px] border-t-[#3F3E45]'>
        <p className='dark:text-white leading-[27px] text-[16px] font-normal text-center font-poppins'>2022 Hoobank.ALl Rights Reserved.</p>

        <div className='flex flex-row md:mt-4 mt-6'>
          {
            socialMedia.map((social, index) => (
              <img src={social.icon}
                key={social.id}
                alt={social.id}
                className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}  filter invert dark:invert-0  `}
              />
            ))
          }

        </div>
      </div>

    </section>
  )
}

export default Footer