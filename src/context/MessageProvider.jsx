import { useState } from "react";
import { MessageContext } from "./MessageContext";

export default function MessageProvider({children}) {
    const API = import.meta.env.VITE_API_URL;

    const [cart, setCart] = useState(() => {
      const savedCart = localStorage.getItem("cart");

      return savedCart
        ? JSON.parse(savedCart)
        : {
            packageID: "",
            name: "",
            price: "",
            description: "",
            startDate: "",
            endDate: "",
        };
      }
    );

    const handleServiceCart = async (e) => {
        setCart({
            packageID: e.packageID,
            name: e.name,
            price: e.price,
            description: e.description,
            startDate: e.startDate,
            endDate: e.endDate
        });
    };

    const [bookingID, setBookingID] = useState(() =>
    localStorage.getItem("bookingID")
    );
      
    const [paymentID, setPaymentID] = useState(() =>
    localStorage.getItem("paymentID")
    );
    
    const [purchaseSummary, setPurchaseSummary] = useState({
        billingFirstName: "",
        billingLastName: "",
        billingPhone: "",
        billingAddress: "",
        seniorId: "",
        seniorFirstName: "",
        seniorLlastName: "",
        seniorAge: "",
        location: "",
        clientNote: ""
    });

    return (
        <MessageContext.Provider 
            value={{ API, cart, setCart, handleServiceCart, bookingID, setBookingID, paymentID, setPaymentID, purchaseSummary, setPurchaseSummary}}
        >
            {children}
        </MessageContext.Provider>
    )
}