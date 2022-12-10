import React from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import Card from "../Components/Card";
import { useContext } from "react";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {tema, Favoritos} = useContext(ContextGlobal)

  return (
    <div className="favs" style={{background:tema.pagHome, color:tema.color}}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {Favoritos.map(item => {
            return <Card key={item.id} id={item.id} name={item.name} username={item.username} />
          })
          }
      </div>
    </div>
  );
};

export default Favs;
