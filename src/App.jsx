import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main"

export default function App() {

  const   [cartItems, setCartItems] = useState([]);
  return(
    <div>
      <Header cartItems={cartItems} setCartItems={setCartItems}/>
      <Main setCartItems={setCartItems}/>
    </div>
  )
  
  
}