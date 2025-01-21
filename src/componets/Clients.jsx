import React from 'react'
import {clients} from '../constants'
import styles from '../style'

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {
          clients.map((client) => (
            <div key={client.id} className={`flex-1 ${styles.flexCenter} min-w-[120px] sm:min-w-[192px]`}>
              <img 
              src={client.logo} 
              alt=""
              className='sm:w-[192px] w-[100px] object-contain
              hover:invert  hover:filter transition-all duration-300
              '

              // className="sm:w-[192px] w-[100px] object-contain transition-all duration-300 hover:filter hover:brightness-0 hover:invert hover:sepia hover:saturate-[300%] hover:hue-rotate-[310deg]"
   
              
              />
            </div>
          ))
        }

      </div>

    </section>
  )
}

export default Clients