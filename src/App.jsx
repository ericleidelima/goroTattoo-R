import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import EstilosTattoo from "/src/Pages/EstilosTattoo";
import Galeria from "/src/Pages/Galeria";
import Curiosidades from "/src/Pages/Curiosidades";
import Modelo from "/src/Pages/Modelo";
import Disponiveis from "/src/Pages/Disponiveis";
import MaisInfo from "./Pages/MaisInfo";
import Construcao from "./Pages/Construcao";

import LocalStudi from "./Pages/LocalStudi";

//import Navegacao from "./Pages/Navegacao"
//import Promo from "./Pages/Promo";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="Pages/EstilosTattoo" element={<EstilosTattoo />} />
          <Route exact path= "/Pages/Galeria" element={<Galeria />} />
          <Route exact path="Pages/Curiosidades" element={<Curiosidades />} />
          <Route exact path="Pages/Modelo" element={<Modelo />} />
          <Route exact path="Pages/Disponiveis" element={<Disponiveis />} />
          <Route exact path="Pages/Construcao" element={<Construcao />} />
          <Route exact path="Pages/MaisInfo" element={<MaisInfo />} />
          <Route exact path="Pages/LocalStudi" element={<LocalStudi />} />
          
        {/* <Route exact path="Promo" element={<Promo />} />
           <Route exact path="/Pages/Navegacao" element={<Navegacao />} />
          <*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
