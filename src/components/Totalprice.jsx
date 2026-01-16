import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { MessageContext } from "../context/MessageContext";


export default function TotalPrice (){
  const navigate = useNavigate();
  const {API, cart, setBookingID, bookingID, setPaymentID, paymentID} = useContext(MessageContext);
  const [submitting, setSubmitting] = useState(false);

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const booking = {
		clientID: "65a02001f1a2b3c4d5e6f401",
		packageID: cart.packageID,
		schedule: {
			startDate: new Date(cart.startDate),
			endDate: new Date(cart.endDate)
		},
		status: "SCHEDULED"
      };

      console.log(booking);

      const bookingResponse = await axios.post(`${API}/bookings`, booking);
	  const bookingInfoID = bookingResponse.data.data._id;
	  setBookingID(bookingInfoID);

      const payment = {
		clientID: "65a02001f1a2b3c4d5e6f401",
		shoppingCart: [
			{
				"bookingID": bookingInfoID,
				"packageID": booking.packageID
			}
		],
		numberPackage: 1,
		totalAmount: parseInt(cart.price),
		netAmount: parseInt(cart.price),
		status: "PENDING"
      };

      console.log(payment);

      const paymentResponse = await axios.post(`${API}/bookings/${bookingInfoID}/payments`, payment);
	  const paymentInfoID = paymentResponse.data.data._id;
	  setPaymentID(paymentInfoID);
	  
      navigate("/checkout");

    } catch (error) {
      console.error("Error submitting booking info:", error);
    } finally {
      setSubmitting(false);
    }
  };

	useEffect(() => {
	if (bookingID) {
		localStorage.setItem("bookingID", bookingID);
	}
	}, [bookingID]);

	useEffect(() => {
	if (paymentID) {
		localStorage.setItem("paymentID", paymentID);
	}
	}, [paymentID]);

    return (
	<div className="rounded-xl p-4 bg-white shadow-sm">
		<h3 className="text-lg font-semibold mb-2">สรุปยอดชำระ</h3>
		<div className="space-y-2">
			<div className="grid grid-cols-[1fr_auto]">
			<dt className="text-gray-400">ยอดรวมสินค้า</dt>
			<dd className="font-bold px-2">{cart.price} บาท</dd>
			</div>
            {/* discount */}
			{/* <div className="grid grid-cols-[1fr_auto]"> 
				<dt className="text-gray-400">ส่วนลดคูปอง (5%)</dt>
				<dd className="font-bold">− ฿75</dd>
			</div> */}
			<div className="grid grid-cols-[1fr_auto] items-center">
				<dt className="font-bold text-text">รวมทั้งหมด</dt>
				<dd className="bg-blue-50 border border-dashed border-accent rounded px-2 py-1 text-green-600 font-bold">{cart.price} บาท</dd>
			</div>
		</div>
			<button className="w-full mt-4 bg-lime-200 outline outline-lime-400 text-gray-900 rounded-lg py-3 font-bold hover:bg-lime-500 hover:text-white hover:cursor-pointer" onClick={handleBookingSubmit}>
				ดำเนินการสั่งซื้อ
			</button>
			<p className="text-gray-400 text-sm mt-2">การชำระเงินปลอดภัย รองรับบัตรเครดิต/เดบิต และโอนผ่านธนาคาร</p>
	</div>
    )
}