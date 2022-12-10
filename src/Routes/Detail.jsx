import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { useEffect } from 'react'
import { ContextGlobal } from "../Components/utils/global.context";
import axios from 'axios'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  
  const parametro = useParams()

  const [Odontologo, setOdontologo] = useState({})
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  useEffect(() => {
    const fetchData = async () => {
        axios(`https://jsonplaceholder.typicode.com/users/${parametro.id}`)
        .then(res => setOdontologo(res.data))
    }
    fetchData()
})

const { tema } = useContext(ContextGlobal)

  return (
    <div className='detail' style={{background:tema.pagHome, color:tema.color}}>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
          <table>
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Website</th>
                  </tr>
              </thead>
              {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
              <tbody>
                  <tr>
                      <td>{Odontologo.name}</td>
                      <td>{Odontologo.email}</td>
                      <td>{Odontologo.phone}</td>
                      <td>{Odontologo.website}</td>
                  </tr>
              </tbody>
          </table>
        </div>
    
  )
}

export default Detail