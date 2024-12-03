import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "/src/Pages/Home";
//import Galeria from "./Pages/Galeria";
//import Estilos from "./Pages/Estilos";
//import Curiosidades from "/Pages/Curiosidades";
import Navegacao from "/src/Pages/Navegacao"
//import Promo from "./Pages/Promo";
//import Modelo from "./Pages/Modelo";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/*<Route exact path="Galeria" element={<Galeria />} />*/}
          {/*<Route exact path="Estilos" element={<Estilos />} />*/}
          <Route exact path="Navegacao" element={<Navegacao />} />
          {/*<Route exact path="Curiosidades" element={<Curiosidades />} />*/}
          {/* <Route exact path="Modelo" element={<Modelo />} />*/}
          {/* <Route exact path="Promo" element={<Promo />} />*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
