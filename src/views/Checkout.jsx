import { Link } from "react-router";
import { useState } from "react";
import CheckoutForm from "../components/CheckoutForm";
import PaymentSummary from "../components/PaymentSummary";
import PaymentForm from "../components/PaymentForm";

export default function Checkout() {
  const [formType, setFormType] = useState("checkout");

  return (
    <div>
      <section className="flex">
        <div className="bg-white my-4 mx-auto w-[90%] rounded-[3rem] font-noto">
          <h1 className="block text-center py-6 px-10 font-bold text-3xl">ข้อมูลใบเสร็จ</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 pb-4">
            <CheckoutForm formType={formType} />
            <div className="px-6 sm:px-12">
              <PaymentSummary />
              <PaymentForm />
            </div>
          </div>
          <div className="mt-2 mb-8">
            <Link to="/order_confirmation">
              <button className="block mx-auto mb-4 rounded-3xl bg-lime-200 px-3 py-2 text-xl font-semibold text-gray-800 outline-1 outline-lime-400 hover:cursor-pointer hover:bg-lime-500 hover:text-gray-100">ยืนยันคำสั่งซื้อ</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
