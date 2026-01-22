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
            caregiverID: "",
            serviceType: "",
            time:"",
            shift:"",
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
            endDate: e.endDate,
            caregiverID: e.caregiverID,
            serviceType: e.serviceType,
            time:e.time,
            shift:e.shift,
        });
    };

    const [bookingID, setBookingID] = useState(() =>
        localStorage.getItem("bookingID")
    );
      
    const [billingID, setBillingID] = useState(() =>
        localStorage.getItem("billingID")
    );

    const [caregiverID, setCaregiverID] = useState(() =>
        localStorage.getItem("billingID")
    );

    const [purchaseSummary, setPurchaseSummary] = useState(() => {
      const savedPurchaseSummary = localStorage.getItem("purchaseSummary")

      return savedPurchaseSummary
        ? JSON.parse(savedPurchaseSummary)
        : {
            billingFirstName: "",
            billingLastName: "",
            billingPhone: "",
            billingAddress: "",
            seniorId: "",
            seniorFirstName: "",
            seniorLlastName: "",
            seniorAge: "",
            location: "",
            clientNote: "",
        };
      }
    );

    const [searchQuestion, setSearchQuestion] = useState("");


    return (
        <MessageContext.Provider 
            value={{ API, cart, setCart, handleServiceCart, bookingID, setBookingID, billingID, setBillingID, purchaseSummary, setPurchaseSummary, caregiverID, setCaregiverID, searchQuestion, setSearchQuestion }}
        >
            {children}
        </MessageContext.Provider>
    )
}