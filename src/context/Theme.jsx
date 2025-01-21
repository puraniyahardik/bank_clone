import React, { useEffect, useState } from 'react'
import { createContext } from 'react'


//create context

export const shopContext = createContext({
    isDarkMode:false,
    setIsDarkMode: () => {},
})

const Theme = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(()=>{
        localStorage.setItem('dark',isDarkMode)
    },[isDarkMode])

    useEffect(()=>{
      const dark =  localStorage.getItem('dark');
        setIsDarkMode(dark)
    },[])



    const value = {
            isDarkMode,
            setIsDarkMode
    }
  return (
    <shopContext.Provider value={value}>

        {children}
    </shopContext.Provider>
  )
}

export default Theme