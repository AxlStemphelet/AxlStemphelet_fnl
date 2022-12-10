import React from "react";

import { ContextGlobal } from "./utils/global.context";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {

const{Favoritos, setFavoritos} = useContext(ContextGlobal)

const addFav = () => {
        let odoEx = false 
        let favoritos = Favoritos
        favoritos.forEach(e => { 
            if (e.id === id) { 
                odoEx = true
                let index = Favoritos.indexOf(e)
                Favoritos.splice(index,1) 
            }
        })
        if (odoEx === false) { 
            favoritos.push({ 
                "name":name,
                "username":username,
                "id":id
            })
            localStorage.setItem("favs", JSON.stringify(Favoritos))
            alert("Su Odontologo se encuentra en favoritos")
        } else {
            localStorage.setItem("favs", JSON.stringify(Favoritos))
            alert("Su Odontologo fue eliminado de favoritos")
        }
        setFavoritos(favoritos)
    }

return (
    <div className="card">
        <img src="/images/doctor.jpg" alt="imagen de odontologo"/>
            {/* En cada card deberan mostrar en name - username y el id */}
        <h1><Link to={`/${id}`}>{name}</Link></h1>
            {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <h2>{username}</h2>
            {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
);
};

export default Card;
