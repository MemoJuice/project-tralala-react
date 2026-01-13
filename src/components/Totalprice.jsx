import { Link } from "react-router-dom"

export default function TotalPrice (){
    return (
	<div className="rounded-xl p-4 bg-white shadow-sm">
		<h3 className="text-lg font-semibold mb-2">สรุปยอดชำระ</h3>
		<div className="space-y-2">
			<div className="grid grid-cols-[1fr_auto]">
			<dt className="text-gray-400">ยอดรวมสินค้า</dt>
			<dd className="font-bold">฿1,500</dd>
			</div>
			<div className="grid grid-cols-[1fr_auto]"> 
				<dt className="text-gray-400">ส่วนลดคูปอง (5%)</dt>
				<dd className="font-bold">− ฿75</dd>
			</div>
			<div className="grid grid-cols-[1fr_auto]">
				<dt className="font-bold text-text">รวมทั้งหมด</dt>
				<dd className="bg-orange-50 border border-dashed border-accent rounded px-2 py-1 text-orange-800 font-bold">฿1,425</dd>
			</div>
		</div>
			<Link to="/checkout">
				<button className="w-full mt-4 bg-lime-200 outline outline-lime-400 text-gray-900 rounded-lg py-3 font-bold hover:bg-lime-500 hover:text-white hover:cursor-pointer">ดำเนินการสั่งซื้อ</button>
			</Link>
			<p className="text-gray-400 text-sm mt-2">การชำระเงินปลอดภัย รองรับบัตรเครดิต/เดบิต และโอนผ่านธนาคาร</p>
	</div>
    )
}