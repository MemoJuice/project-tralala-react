export default function OrderCard (){
    return (
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
    )
}