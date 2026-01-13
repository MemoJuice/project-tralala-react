import OrderCard from "../components/OrderCard";
import Discontfrom from "../components/Discontfrom";
import TotalPrice from "../components/Totalprice";
import { useState, useContext } from "react";
import { MessageContext } from "../context/MessageContext";

export default function Cart() {
	const [mockService, setMockService] = useState({
		name: "บริการดูแลผู้สูงอายุที่บ้าน(รายวัน)",
		price: "1500",
		description: "ดูแลผู้สูงอายุ 1 วัน (ไม่เกิน 12 ชั่วโมง) ช่วยเหลือการทำกิจวัตรพื้นฐาน จัดยาและอาหารตามเวลา วัดและบันทึกสัญญาณชีพ พูดคุยให้กำลังใจผู้สูงอายุ",
		startDate: "05/01/2026",
		endDate: "05/01/2026"
	});

    const {cart, handleServiceCart} = useContext(MessageContext);

	return (
		<div className="w-full px-[5%] pt-4 pb-6">
			<h2 className="text-2xl mb-2 font-semibold">รายการที่เลือก</h2>
			<div className="grid gap-3">

				<ul className="grid grid-cols-[1.4fr_.6fr_.8fr_.8fr_.1fr] gap-3 items-center p-3 rounded-xl bg-white font-semibold shadow-sm">
					<li className="pl-4 sm:justify-self-center lg:justify-self-start lg:pl-45">บริการ</li>
					<li className="justify-self-center">วันที่เลือกใช้บริการ</li>
					<li className="justify-self-center md:pl-2">ราคา</li>
					<li className="col-span-2 justify-self-center">รวมทั้งหมด</li>
				</ul>

				<OrderCard order={mockService} />

				<div className="grid grid-cols-1 md:grid-cols-[1fr_.8fr] gap-4 mt-4">
					<Discontfrom />

					<TotalPrice />

				</div>
			</div>
		</div>
	);
}	