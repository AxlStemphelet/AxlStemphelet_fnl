import { createContext, useState } from "react";


export const initialState = {
  theme: {
    dark: {
      pagHome:'#141414',
      pagNav:'#131313',
      color:'white'
    },
    light: {
      pagHome:'#f5f2f2',
      pagNav:'#e8e8dc',
      color:'black'
    }
  }, 
  data:JSON.parse(localStorage.getItem("Favoritos")||"[]")
}

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {

  const [Favoritos, setFavoritos] = useState(initialState.Favoritos)

  const [ tema, setTema ] = useState(initialState.themes.light)
  const handleChange = () => {
    if(tema === initialState.theme.dark) setTema(initialState.theme.light)
    if(tema === initialState.theme.light) setTema(initialState.theme.dark)
}

  return (
    <ContextGlobal.Provider value={{tema, handleChange, Favoritos, setFavoritos}}>
      {children}
    </ContextGlobal.Provider>
  );
};

