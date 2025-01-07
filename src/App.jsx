import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import EstilosTattoo from "/src/Pages/EstilosTattoo";
import Galeria from "/src/Pages/Galeria";
import Curiosidades from "/src/Pages/Curiosidades";
import Modelo from "/src/Pages/Modelo";
//import Navegacao from "./Pages/Navegacao"
//import Promo from "./Pages/Promo";
import Disponiveis from "/src/Pages/Disponiveis";




function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="Pages/EstilosTattoo" element={<EstilosTattoo />} />
          <Route exact path="Pages/Galeria" element={<Galeria />} />
          {/*<Route exact path="/Pages/Navegacao" element={<Navegacao />} />*/}
          <Route exact path="Pages/Curiosidades" element={<Curiosidades />} />
          <Route exact path="Pages/Modelo" element={<Modelo />} />
          {/* <Route exact path="Promo" element={<Promo />} />*/}
          <Route exact path="Pages/Disponiveis" element={<Disponiveis />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
