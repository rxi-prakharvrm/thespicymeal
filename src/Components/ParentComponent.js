import { useState } from "react";
import { MyContext } from "./MyContext";
import ResMenu from "./ResMenu";
import Cart from "./Cart";

function ParentComponent() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      {/* Provide the cartItems and setCartItems state to child components via context */}
      <MyContext.Provider value={{ cartItems, setCartItems }}>
        <ResMenu />
        <Cart />
      </MyContext.Provider>
    </div>
  );
}

export default ParentComponent;
