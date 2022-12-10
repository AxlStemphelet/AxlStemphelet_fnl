import React from "react";
import { useState } from "react";


const Form = () => {

    const [Datos, setDatos] = useState({
      "nombre":"",
      "email":""
  })
    const handleChange = e => {
      let datNom = e.target.name
      let datVal = e.target.value
      setDatos({...Datos,[datNom]:datVal})
  }
    const handleSubmit = e => {
        e.preventDefault()
        let nameTst = test(Datos.nombre)
        let emailTst = test(Datos.email)
        let form = document.querySelector('form')
        let mensaje = document.querySelectorAll('p')
        mensaje.forEach(e => {
            e.remove()
        })
        if (nameTst === false || emailTst === false) {
            let valErrores = document.createElement('p')
            valErrores.innerHTML = "Su informacion no es correcta"
            form.after(valErrores)
        } else {
            let msg = document.createElement('p')
            msg.innerHTML = `Hola ${Datos.nombre}, se te contactara a la brevedad`
            form.after(msg)
        }
    }  

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <input type="text" name="nombre" id="nombre" placeholder="Nombre" onChange={handleChange} />
          <input type="email" name="email" id="email" placeholder="Email" onChange={handleChange} />
          <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Form;
