import { useEffect, useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import OrderCard from "../components/cart/OrderCard";
import Discontfrom from "../components/cart/Discontfrom";
import TotalPrice from "../components/cart/Totalprice";
import { useNavigate } from "react-router-dom";

export default function Cart() {
	const navigate = useNavigate();
	const checkSession = sessionStorage.getItem("checkSession");
	const mockService = {
		serviceID: "659e1001f1a2b3c4d5e6f002",
		name: "บริการดูแลผู้สูงอายุที่บ้าน(รายวัน)",
		price: "1500",
		description: "ดูแลผู้สูงอายุ 1 วัน (ไม่เกิน 12 ชั่วโมง) ช่วยเหลือการทำกิจวัตรพื้นฐาน จัดยาและอาหารตามเวลา วัดและบันทึกสัญญาณชีพ พูดคุยให้กำลังใจผู้สูงอายุ",
		startDate: "2026-03-14",
		endDate: "2026-03-14"
	};

    const {cart, setCart} = useContext(MessageContext);
	useEffect(() => {
		setCart(mockService);
		localStorage.setItem("cart", JSON.stringify(mockService));
		console.log(cart);
		if (!checkSession) {
			console.log("UNAUTHORIZATION, PLEASE LOG IN");
			navigate("/login");
		}
	}, []);

	return (
		<div>
			{ !checkSession ?
			<h1 className="text-black text-3xl">UNAUTHORIZATION, PLEASE LOG IN</h1>
			:
			<div className="w-full px-[5%] pt-4 pb-6">
				<h2 className="text-2xl mb-2 font-semibold">รายการที่เลือก</h2>
				<div className="grid gap-3">

					<ul className="grid grid-cols-[1.4fr_.6fr_.8fr_.1fr] gap-4 md-2 items-center p-3 rounded-2xl md:mb-4 bg-white font-semibold shadow-sm">
						<li className="pl-4 sm:justify-self-center lg:justify-self-start lg:pl-45">บริการ</li>
						<li className="justify-self-center">วันที่เลือกใช้บริการ</li>
						<li className="justify-self-center md:pl-2">ราคา</li>
					</ul>

					<OrderCard order={cart} />

					<div className="grid grid-cols-1 md:grid-cols-[1fr_.8fr] gap-4 mt-2">
						<Discontfrom />

						<TotalPrice />

					</div>
				</div>
			</div>
			}
		</div>
	);
}	