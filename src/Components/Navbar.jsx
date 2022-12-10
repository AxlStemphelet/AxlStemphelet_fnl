
import React from 'react'
import { ContextGlobal } from './utils/global.context'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

const Navbar = () => {

  
  const { tema, handleChange } = useContext(ContextGlobal)

  return (
    <nav className='navbar' style={{background:tema.pagNav, color:tema.color}}>
          {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
          <Link to={'/'}><h2>OdontologiaDH</h2></Link>
      <div>
          <Link to="/home">Home</Link>
          <Link to="/contact">Contacto</Link>
          <Link to="/favs">Favs</Link>
      </div>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <i className={(tema.color === 'black') ? "fa-solid fa-moon" : "fa-solid fa-sun"} onClick={handleChange}></i>
    </nav>
  )
}

export default Navbar