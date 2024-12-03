
import { NavLink } from "react-router-dom";

let linkCorrente = {
    color: "#027399"
};
const Navegacao =() => {
  return(
    <header>
       <ul>
         <li>
           <NavLink exact activeStyle = {linkCorrente} to="/">Home</NavLink>
         </li>
         <li>
           <NavLink exact activeStyle = {linkCorrente} to="/Curiosidades">Curiosidades</NavLink>
         </li>
         <li>
         <NavLink exact activeStyle = {linkCorrente} to="/Promo">Promoção</NavLink>
         </li>
       </ul>
   </header>
)
  }
export default Navegacao;