import React from 'react'
import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'



const Footer = () => {

  const { tema } = useContext(ContextGlobal)
  return (
    <footer style={{background:tema.pagNav, color:tema.color}}>
      <div>
          <p>Powered by</p>
          <img src="./img/DH.png" alt='DH-logo' />
      </div>
      <div>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-tiktok"></i>
        <i className="fa-brands fa-whatsapp"></i>        
      </div>
    </footer>
  )
}

export default Footer
