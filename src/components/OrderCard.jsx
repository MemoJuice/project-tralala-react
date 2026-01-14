export default function OrderCard ({order}){
    return (
		<div className="grid grid-cols-[1.4fr_.6fr_.8fr_.1fr] gap-3 items-center p-3 rounded-xl bg-white shadow-sm">
					<div className="grid grid-cols-[96px_1fr] gap-3 items-center">
						<div className="rounded-xl overflow-hidden bg-gray-100 hidden md:block">
							<img src="images/p1-post2.png" className="w-24 h-auto" />
						</div>
						<div>
							<h3 className="text-base font-semibold ">{order.name}</h3>
							<p className="text-gray-400 text-sm">{order.description}</p>
						</div>
					</div>
					<div className="font-bold justify-self-center">{order.startDate}</div>
					<div className="font-bold justify-self-center">{order.price} บาท</div>
					<div className="text-right">
						<button className="hidden md:block underline text-red-400 hover:cursor-pointer hover:text-red-600">ลบ</button>
					</div>
		</div>
    )
}