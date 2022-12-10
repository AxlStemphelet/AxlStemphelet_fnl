import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home"
import Detalle from "./Routes/Detail"
import Contacto from "./Routes/Contact"
import Favs from "./Routes/Favs"
import { ContextProvider } from "./Components/utils/global.context";



function App() {
  return (
    <ContextProvider>
      <div className="App">
          <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/detail" element={<Detalle/>}/>
                <Route path="/detail/:odontologoid" element={<Detalle/>}/>
                <Route path="/contact" element={<Contacto/>}/>
                <Route path="/favs" element={<Favs/>}/>
            </Routes>
          <Footer/>
      </div>
    </ContextProvider>
  );
}

export default App;
