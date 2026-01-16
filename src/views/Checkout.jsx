import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import CheckoutForm from "../components/CheckoutForm";
import PaymentSummary from "../components/PaymentSummary";
import PaymentForm from "../components/PaymentForm";

export default function Checkout() {
  const navigate = useNavigate();
  const formType = "checkout";
  const {API, cart, bookingID, paymentID, setPurchaseSummary} = useContext(MessageContext);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    billingFirstName: "",
    billingLastName: "",
    billingPhone: "",
    billingAddress: "",
    seniorId: "",
    clientNote: "",
    location: ""
  });
  const [seniorData, setSeniorData] = useState({
    id: "65a03001f1a2b3c4d5e6f501",
    firstName: "นางรื่นรมย์",
    lastName: "คมบาดใจ",
    age: "65"
  });

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
    } else if (!paymentID) {
      console.error("Missing paymentID");
    }

    try {
      const bookingSeniorInfo = {
        seniorID: seniorData.id,
        clientNote: formData.clientNote,
        location: formData.location
      };

      console.log(bookingSeniorInfo);
      await axios.patch(`${API}/bookings/${bookingID}`, bookingSeniorInfo);

      const paymentUpdatedInfo = {
        billingSnapshot: {
          firstName: formData.billingFirstName,
          lastName: formData.billingLastName,
          phone: formData.billingPhone,
          address: formData.billingAddress
        },
        paymentMethod: "TRANSFER",
        status: "PAID"
      };

      console.log(paymentUpdatedInfo);
      await axios.patch(`${API}/bookings/${bookingID}/payments/${paymentID}`, paymentUpdatedInfo);

      console.log(formData);
      setPurchaseSummary({
        billingFirstName: formData.billingFirstName,
        billingLastName: formData.billingLastName,
        billingPhone: formData.billingPhone,
        billingAddress: formData.billingAddress,
        seniorId: formData.seniorId,
        seniorFirstName: seniorData.firstName,
        seniorLastName: seniorData.lastName,
        seniorAge: seniorData.age,
        location: formData.location,
        clientNote: formData.clientNote
      });
      setFormData({
        billingFirstName: "",
        billingLastName: "",
        billingPhone: "",
        billingAddress: "",
        clientNote: ""
      });
      navigate("/order_confirmation"); 
    } catch (error) {
      console.error("Error submitting checkout info:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <section className="flex">
        <form onSubmit={handleFormSubmit} className="bg-white my-4 mx-auto w-[90%] rounded-[3rem] font-noto">
          <h1 className="block text-center py-6 px-10 font-bold text-3xl">ข้อมูลใบเสร็จ</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 pb-4">
            <CheckoutForm formType={formType} submitting={submitting} formData={formData} handleFormChange={handleFormChange} seniorData={seniorData} />
            <div className="px-6 sm:px-12">
              <PaymentSummary order={cart} />
              <PaymentForm />
            </div>
          </div>
          <div className="mt-2 mb-8">
              { cart.price &&
                <button type="submit" className="block mx-auto mb-4 rounded-3xl bg-lime-200 px-3 py-2 text-xl font-semibold text-gray-800 outline-1 outline-lime-400 hover:cursor-pointer hover:bg-lime-500 hover:text-gray-100">ยืนยันคำสั่งซื้อ</button>
             }
          </div>
        </form>
      </section>
    </div>
  );
}
