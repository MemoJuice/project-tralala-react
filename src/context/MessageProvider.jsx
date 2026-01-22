import { useState } from "react";
import { MessageContext } from "./MessageContext";

export default function MessageProvider({children}) {
    const API = import.meta.env.VITE_API_URL;

    const [cart, setCart] = useState(() => {
      let savedCart = "";
      if (sessionStorage.getItem("token")) {
        savedCart = sessionStorage.getItem("cart");
      } else if (localStorage.getItem("token")) {
        savedCart = localStorage.getItem("cart");
      };

      return savedCart
        ? JSON.parse(savedCart)
        : {
            serviceID: "",
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
            serviceID: e.target.serviceID,
            name: e.target.name,
            price: e.target.price,
            description: e.target.description,
            startDate: e.target.startDate,
            endDate: e.target.endDate,
            caregiverID: e.target.caregiverID,
            serviceType: e.target.serviceType,
            time: e.target.time,
            shift: e.target.shift,
        });
    };

    const [bookingID, setBookingID] = useState(() => {
        if (sessionStorage.getItem("token")) {
            sessionStorage.getItem("bookingID");
        } else if (localStorage.getItem("token")) {
            localStorage.getItem("bookingID");
        };
    });
      
    const [billingID, setBillingID] = useState(() => {
        if (sessionStorage.getItem("token")) {
            sessionStorage.getItem("billingID");
        } else if (localStorage.getItem("token")) {
            localStorage.getItem("billingID");
        };
    });

    const [caregiverID, setCaregiverID] = useState(() => {
        if (sessionStorage.getItem("token")) {
            sessionStorage.getItem("caregiverID");
        } else if (localStorage.getItem("token")) {
            localStorage.getItem("caregiverID");
        };
    });

    const [purchaseSummary, setPurchaseSummary] = useState(() => {
      let savedPurchaseSummary = "";
      if (sessionStorage.getItem("token")) {
        savedPurchaseSummary = sessionStorage.getItem("purchaseSummary");
      } else if (localStorage.getItem("token")) {
        savedPurchaseSummary = localStorage.getItem("purchaseSummary");
      };

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