import { useState } from "react";
import { MyContext } from "./MyContext";

function ParentComponent({ children }) {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <MyContext.Provider value={{ cartItems, setCartItems }}>
        {children}
      </MyContext.Provider>
    </div>
  );
}

export default ParentComponent;
