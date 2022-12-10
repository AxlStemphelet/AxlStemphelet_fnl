import React from 'react'
import { useState, useEffect } from 'react'
import Card from '../Components/Card'
import axios from 'axios'
import { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Home = () => {

    const [Odontologo, setOdontologo] = useState([])

    const { tema } = useContext(ContextGlobal)

    useEffect(() => {
      const fetchData = async () => {
          axios('https://jsonplaceholder.typicode.com/users')
          .then(res => setOdontologo(res.data))
      }
      fetchData()
  }, [])


  return (
    <main className="Home" style={{background:tema.pagHome, color:tema.color}}>
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {Odontologo.map(item => {
          return <Card key={item.id} id={item.id} name={item.name} username={item.username} />
        })}
      </div>
    </main>
  )
}

export default Home