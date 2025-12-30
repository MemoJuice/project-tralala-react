import OrderCard from "../components/Order-card";
import Discontfrom from "../components/Discontfrom";
import TotalPrice from "../components/Totalprice";

export default function Order() {
	return (
		<div className="w-full px-4 pt-4 pb-6">
			<h2 className="text-2xl mb-2 font-semibold">รายการที่เลือก</h2>
			<div className="grid gap-3">

				<div className="grid grid-cols-[1.4fr_.6fr_.8fr_.8fr_.1fr] gap-3 items-center p-3 rounded-xl bg-white font-semibold shadow-sm">
					<div className="pl-4 sm:justify-self-center lg:justify-self-start lg:pl-45">สินค้า</div>
					<div className="justify-self-center md:justify-self-start md:pl-2">ราคา</div>
					<div className="justify-self-center md:justify-self-start md:pl-10">จำนวน</div>
					<div className="col-span-2 justify-self-center md:justify-self-start md:text-start">รวมทั้งหมด</div>
				</div>

			<OrderCard />

				<div className="grid grid-cols-1 md:grid-cols-[1fr_.8fr] gap-4 mt-4">
					<Discontfrom />

					<TotalPrice />

				</div>
			</div>
		</div>
	);
}	