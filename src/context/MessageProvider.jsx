import { useState } from "react";
import { MessageContext } from "./MessageContext";

export default function MessageProvider({children}) {
    const [cart, setCart] = useState({
        name: "",
        price: "",
        description: "",
        startDate: "",
        endDate: ""
    });

  const handleServiceCart = async (e) => {
    setCart({
        name: e.name,
        price: e.price,
        description: e.description,
        startDate: e.startDate,
        endDate: e.endDate
    });
  };
    
    return (
        <MessageContext.Provider 
            value={{ cart, handleServiceCart}}
        >
            {children}
        </MessageContext.Provider>
    )
}