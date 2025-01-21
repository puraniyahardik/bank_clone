import React, { useContext } from 'react'
import style from './style'
import { Navbar, Hero, Business, Billing, Carddeal, Testimonials, Clients, Footer, CTA, State } from './componets/index.js';
import { shopContext } from './context/Theme.jsx';




const App = () => {
  const {isDarkMode} = useContext(shopContext);
  return (

    <div className={isDarkMode ? 'dark' : ''}>

    <div className='dark:bg-black bg-[#EFF3EA] text-black dark:text-black min-h-screen w-full overflow-hidden'>

      <div className={`${style.paddingX} ${style.flexCenter}  dark:bg-black text-black dark:text-black `}>
        <div className={`${style.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`dark:bg-black dark:text-white ${style.flexStart} dark:bg-black text-black dark:text-black `}>
        <div className={`${style.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`dark:bg-black text-black dark:text-black  ${style.paddingX} ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          <State />
          <Business />
          < Billing />
          < Carddeal />
         < Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>

    </div>
    </div>
  )
}

export default App