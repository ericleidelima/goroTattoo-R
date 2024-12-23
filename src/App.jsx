import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
//import Galeria from "./Pages/Galeria";
import EstilosTattoo from "./Pages/EstilosTattoo";
import Curiosidades from "./Pages/Curiosidades";
import Navegacao from "./Pages/Navegacao"
//import Promo from "./Pages/Promo";
//import Modelo from "./Pages/Modelo";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/*<Route exact path="Galeria" element={<Galeria />} />*/}
          <Route exact path="EstilosTattoo" element={<EstilosTattoo />} />
          <Route exact path="/Pages/Navegacao" element={<Navegacao />} />
          <Route exact path="Pages/Curiosidades" element={<Curiosidades />} />
          {/* <Route exact path="Modelo" element={<Modelo />} />*/}
          {/* <Route exact path="Promo" element={<Promo />} />*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
