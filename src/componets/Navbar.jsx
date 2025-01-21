import React, { useContext, useState } from 'react'
import { logo, close, menu, darkTheme } from '../assets/assets/index';
import { navLinks } from '../constants'
import { shopContext } from '../context/Theme';

const Navbar = () => {
  const {isDarkMode,setIsDarkMode} = useContext(shopContext);

  const [toggle, setToggle] = useState(false);
  return (

    <nav className='w-full flex py-6 justify-between items-center navbar  dark:bg-black'>
      <img src={logo} alt="hoobbank" className='w-[124px] h-[32px] flex justify-center filter invert dark:invert-0  ' />




      
      <ul className='list-none justify-end items-center sm:flex hidden flex-1'>
        {
          navLinks.map((nav, index) => (
            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16ox] 
                  ${index === navLinks.length - 1
                ? 'mr-0'
                : 'mr-10'} dark:text-white mr-10`}>
              <a href={`#${nav.id}`}>{nav.title}</a>
             
            </li>
            

          ))
}

      </ul>

      <div className='cursor-pointer '>
          <img 
          onClick={()=>setIsDarkMode(!isDarkMode)}
          src={darkTheme} alt="hello"
          className='cursor-pointer dark:invert ml-16 '
          />
        </div>


      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu}
          //chnage previces variable
          // onClick={() => setToggle((prev)=>!prev)} 
          onClick={() => setToggle((prev) => !prev)}
          className='w-[28px] h-[28px] object-contain cursor-pointer invert dark:invert-0' />


        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 ring-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>


          <ul className='list-none justify-end items-center flex  flex-col'>
            {
              navLinks.map((nav, index) => (
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16ox] 
                  ${index === navLinks.length - 1
                    ? 'mr-0'
                    : 'mb-4'} text-white `}>
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>

              ))
            }

          </ul>

        </div>

      </div>
    </nav>


  )
}

export default Navbar  