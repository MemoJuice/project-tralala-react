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

					<div className="grid grid-cols-[1.4fr_.6fr_.8fr_.8fr_.1fr] gap-3 items-center p-3 rounded-xl bg-white shadow-sm">
						<div className="grid grid-cols-[96px_1fr] gap-3 items-center">
							<div className="rounded-xl overflow-hidden bg-gray-100 hidden md:block">
								<img src="images/p1-post2.png" className="w-24 h-auto" />
							</div>
							<div>
								<h3 className="text-base font-semibold ">แพคเกจการดูแลระยะสั้น 3 ชั่วโมง</h3>
								<p className="text-muted text-sm">ดูแลผู้สูงอายุ โดนผู้ผ่านการอบรมจากกรม</p>
							</div>
						</div>
						<div className="font-bold">฿1,500</div>
						<div className="">
							<div className="flex flex-col-reverse md:flex-row w-fit items-center border shadow-sm rounded-full md:px-1 py-1 bg-white ">
								<button className="w-7 h-7 rounded-full bg-gray-50 text-xl font-bold hover:bg-gray-100 hover:cursor-pointer">−</button>
								<input type="number" value="1" className="w-12 pl-2 text-center font-bold border-none outline-none" />
								<button className="w-7 h-7 rounded-full bg-white text-xl font-bold hover:bg-gray-100 hover:cursor-pointer">+</button>
							</div>
						</div>
						<div className="font-bold col-span-2 text-center md:col-span-1 md:text-start md:pl-4">฿1,500</div>
						<div className="text-right">
							<button className="hidden md:block underline text-red-400 hover:cursor-pointer hover:text-red-600">ลบ</button>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-[1fr_.8fr] gap-4 mt-4">
							<div className="rounded-xl p-4 bg-white shadow-sm">
							<h3 className="text-lg font-semibold mb-2">คูปองส่วนลด</h3>
							<form className="grid grid-cols-[1fr_auto] gap-2 mt-2">
							<input type="text" placeholder="เช่น: SAVE5" className="border rounded-lg px-3 py-2 text-sm bg-sky-50 focus:outline focus:outline-offset-1 focus:outline-indigo-600" />
							<button className="bg-pink-200 hover:bg-pink-600 text-black rounded px-4 py-2 font-bold hover:text-white hover:cursor-pointer">ใช้คูปอง</button>
							</form>
							<p className="text-muted text-sm mt-2">ตัวอย่างส่วนลด 5% สำหรับรหัสที่ร่วมรายการ</p>
						</div>


						<div className="rounded-xl p-4 bg-white shadow-sm">
							<h3 className="text-lg font-semibold mb-2">สรุปยอดชำระ</h3>
							<div className="space-y-2">
								<div className="grid grid-cols-[1fr_auto]">
								<dt className="text-muted">ยอดรวมสินค้า</dt>
								<dd className="font-bold">฿1,500</dd>
								</div>
								<div className="grid grid-cols-[1fr_auto]"> 
								<dt className="text-muted">ส่วนลดคูปอง (5%)</dt>
								<dd className="font-bold">− ฿75</dd>
								</div>
								<div className="grid grid-cols-[1fr_auto]">
								<dt className="font-bold text-text">รวมทั้งหมด</dt>
								<dd className="bg-orange-50 border border-dashed border-accent rounded px-2 py-1 text-orange-800 font-bold">฿1,425</dd>
								</div>
							</div>
							<a href="checkout.html">
								<button className="w-full mt-4 bg-lime-200 outline outline-lime-400 text-gray-900 rounded-lg py-3 font-bold hover:bg-lime-500 hover:text-white hover:cursor-pointer">ดำเนินการสั่งซื้อ</button>
							</a>
							<p className="text-muted text-sm mt-2">การชำระเงินปลอดภัย รองรับบัตรเครดิต/เดบิต และโอนผ่านธนาคาร</p>
						</div>
					</div>
				</div>
			</div>
        );
    }