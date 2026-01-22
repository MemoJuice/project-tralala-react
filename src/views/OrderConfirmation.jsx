import { Link } from "react-router";
import { useState, useContext, useEffect } from "react";
import { MessageContext } from "../context/MessageContext";
import CheckoutForm from "../components/checkout/CheckoutForm";
import PaymentSummary from "../components/checkout/PaymentSummary";
import { useNavigate } from "react-router-dom";


export default function OrderConfirmation() {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  const [formType, setFormType] = useState("confirmation");
  const {purchaseSummary, cart} = useContext(MessageContext);

  useEffect(() => {
    if (!token) {
        console.log("UNAUTHORIZATION, PLEASE LOG IN");
        navigate("/login");
    }
  }, []);

  return (
    <div>
        { !token ?
        <h1 className="text-black text-3xl">UNAUTHORIZATION, PLEASE LOG IN</h1>
        :
        <section className="flex">
            <div className="bg-white my-4 mx-auto w-[90%] rounded-2xl mt-12 ">
                <div className="flex-wrap md:flex justify-center items-center md:gap-8">
                    <div className="flex flex-col justify-center items-center" >
                        <h1 className="text-center font-bold text-4xl md:text-6xl gab-3 mt-8 text-gray-700 md:mt-2">ขอบคุณที่เลือกใช้เรา!</h1>
                        <h1 className="text-center font-semibold text-2xl md:text-4xl gab-3 mt-4 text-gray-700 md:mt-10">ชำระค่าบริการเรียบร้อยแล้ว</h1>
                    </div>
                <img src="/images/check-shark.png" className=" w-85 h-auto  md:w-100 md:h-100" />
                </div>
                <div className="flex flex-col">
                    <CheckoutForm formType={formType} purchaseSummary={purchaseSummary} />
                    <div className="px-6 sm:px-12">
                        <PaymentSummary order={cart} />
                        <div className="flex flex-col items-center gap-4 mt-8">
                            <h3 className="text-4xl font-semibold md:text-6xl text-gray-700 text-center">ขอบคุณที่ไว้วางใจให้เราดูแล</h3>
                            <div className="max-w-100">
                                <img src="images/thank-you-order-service-2.png" className="rounded-3xl border-3 border-red-200" />
                            </div>
                            <Link to="/userdashboard">
                                 <button className="block w-75 md:w-100 mx-auto mb-4 rounded-3xl bg-pink-400 px-3 py-2 text-xl font-semibold text-gray-700 outline-1 hover:cursor-pointer hover:bg-pink-600 hover:text-gray-100">กลับสู่หน้าผู้ใช้งาน</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        }
    </div>
  );
}
