import { Link } from "react-router";
import { useState } from "react";
import CheckoutForm from "../components/CheckoutForm";
import OrderListSummary from "../components/OrderListSummary";

export default function OrderConfirmation() {
  const [formType, setFormType] = useState("confirmation");

  return (
    <div>
        <section className="flex">
            <div className="bg-white my-4 mx-auto w-[90%] rounded-[3rem] font-noto">
                <h1 className="block text-center py-6 px-10 font-bold text-3xl">รายการสั่งซื้อสำเร็จ</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 pb-4">
                    <CheckoutForm formType={formType} />
                    <div className="px-6 sm:px-12">
                        <OrderListSummary />
                        <div className="flex rounded-3xl w-fit bg-lime-200 mt-6 mb-4 px-6 py-3 text-4xl text-black outline-1 outline-lime-500 mx-auto md:mx-0">
                            <h3 className="m-auto">ชำระเงินเสร็จสิ้น</h3>
                        </div>
                        <div className="flex flex-col items-center md:items-start">
                            <h3 className="text-4xl md:ml-2 mb-2 text-indigo-700 text-center">ขอบคุณที่ไว้วางใจให้เราดูแล</h3>
                            <div className="max-w-100">
                                <img src="images/thank-you-order-service-2.png" className="rounded-3xl border-3 border-red-200" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to="/">
                        <button className="block mx-auto md:ml-[25%] mb-4 rounded-3xl bg-violet-200 px-3 py-2 text-xl font-semibold text-gray-800 outline-1 outline-violet-400 hover:cursor-pointer hover:bg-violet-500 hover:text-gray-100">กลับสู่หน้าหลัก</button>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  );
}
