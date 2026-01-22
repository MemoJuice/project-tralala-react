import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { MessageContext } from "../context/MessageContext";
import CheckoutForm from "../components/checkout/CheckoutForm";
import PaymentSummary from "../components/checkout/PaymentSummary";
import PaymentForm from "../components/checkout/PaymentForm";
import apiauth from "@/api/axios";

export default function Checkout() {
  const navigate = useNavigate();
  // const [loading, setLoading] = useState(false);
  let token = "";
  let user = "";
  if (sessionStorage.getItem("token")) {
    token = sessionStorage.getItem("token");
    user = JSON.parse(sessionStorage.getItem("user"));
  } else if (localStorage.getItem("token")) {
    token = localStorage.getItem("token");
    user = JSON.parse(localStorage.getItem("user"));
  };

  const customer = JSON.parse(localStorage.getItem("customer"));

  const formType = "checkout";
  const {API, cart, billingID, setPurchaseSummary} = useContext(MessageContext);
  const bookingID = localStorage.getItem("bookingID");
  // const [customer, setCustomer] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    billingFirstName: "",
    billingLastName: "",
    billingPhone: "",
    billingAddress: "",
    seniorId: "",
    customerNote: "",
    location: "",
    paymentMethod: ""
  });

  const [seniorData, setSeniorData] = useState({
    id: "65a03001f1a2b3c4d5e6f501",
    firstName: "นางรื่นรมย์",
    lastName: "คมบาดใจ",
    age: "65"
  });

  function calculateAge(dob) {
    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const hasHadBirthdayThisYear =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate());

    if (!hasHadBirthdayThisYear) {
      age--;
    }

    return age;
  };

  // const fetchCustomer = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await axios.get(`${API}/customers/user/${user._id}`);
  //     setCustomer(res.data.data);
  //   } catch {
  //     alert("Failed to fetch customer");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!bookingID) {
      console.error("Missing bookingID");
      return;
    } else if (!billingID) {
      console.error("Missing billingID");
    }

    try {
      const bookingSeniorInfo = {
        seniorID: customer.seniors[0],
        customerNote: formData.customerNote,
        location: formData.location,
        billingID: billingID,
        status: "SCHEDULED"
      };

      console.log(bookingSeniorInfo);
      await apiauth.patch(`/bookings/${bookingID}`, bookingSeniorInfo);

      const billingUpdatedInfo = {
        billingSnapshot: {
          firstName: formData.billingFirstName,
          lastName: formData.billingLastName,
          phone: formData.billingPhone,
          address: formData.billingAddress
        },
        paymentMethod: formData.paymentMethod,
        status: "PAID"
      };

      console.log(billingUpdatedInfo);
      await apiauth.patch(`/bookings/${bookingID}/billings/${billingID}`, billingUpdatedInfo);

      const summary = {
        billingFirstName: formData.billingFirstName,
        billingLastName: formData.billingLastName,
        billingPhone: formData.billingPhone,
        billingAddress: formData.billingAddress,
        seniorId: formData.seniorId,
        seniorFirstName: seniorData.firstName,
        seniorLastName: seniorData.lastName,
        seniorAge: seniorData.age,
        location: formData.location,
        customerNote: formData.customerNote
      };

      setPurchaseSummary(summary);
      localStorage.setItem("purchaseSummary", JSON.stringify(summary));
      console.log(summary);

      setFormData({
        billingFirstName: "",
        billingLastName: "",
        billingPhone: "",
        billingAddress: "",
        customerNote: ""
      });
      navigate("/order_confirmation");

      //  Generate ai suggestion after navigate to not delay the page changing
      const response = await apiauth.patch(`/bookings/${bookingID}/ai/suggestion`);
      console.log(response.data.data);

    } catch (error) {
      console.error("Error submitting checkout info:", error);
    } finally {
      setSubmitting(false);
    }
  };

	// useEffect(() => {
  //   fetchCustomer();
	// 	if (!token) {
	// 		console.log("UNAUTHORIZATION, PLEASE LOG IN");
	// 		navigate("/login");
	// 	}
	// }, []);

  return (
    <div>
			{ !token ?
			<h1 className="text-black text-3xl">UNAUTHORIZATION, PLEASE LOG IN</h1>
			:
      <section className="flex">
        <form onSubmit={handleFormSubmit} className="bg-white my-4 mx-auto w-[90%] rounded-[3rem] font-noto">
          <h1 className="block text-center text-gray-700 py-6 px-10 font-bold text-4xl">ข้อมูลคำสั่งซื้อ</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 pb-4">
            <CheckoutForm formType={formType} submitting={submitting} formData={formData} handleFormChange={handleFormChange} seniorData={seniorData} customer={customer} calculateAge={calculateAge} />
            <div className="px-6 sm:px-12">
                <PaymentSummary order={cart} />
                <PaymentForm formData={formData} handleFormChange={handleFormChange} />

                <div className="mt-12 mb-2">
                  { cart.price &&
                    <button type="submit" className="block mx-auto w-100 text-2xl bg-lime-300  outline-lime-400 text-gray-700 rounded-4xl py-3 font-bold hover:bg-lime-500 hover:text-white hover:cursor-pointer">ยืนยันคำสั่งซื้อ</button>
                  }
                </div>
            </div>
          </div>
        </form>
      </section>
      }
    </div>
  );
}
