import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import CheckoutForm from "../components/CheckoutForm";
import PaymentSummary from "../components/PaymentSummary";
import PaymentForm from "../components/PaymentForm";

export default function Checkout() {
  const navigate = useNavigate();
  const formType = "checkout";
  const {cart} = useContext(MessageContext);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    clientNote: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
    //   await axios.post(`${API}`, formData);
      console.log(formData);
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
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
        <form onSubmit={handleSubmit} className="bg-white my-4 mx-auto w-[90%] rounded-[3rem] font-noto">
          <h1 className="block text-center py-6 px-10 font-bold text-3xl">ข้อมูลใบเสร็จ</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 pb-4">
            <CheckoutForm formType={formType} submitting={submitting} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
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
