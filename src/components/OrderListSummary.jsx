export default function OrderListSummary() {
  return (
    <div className="rounded-xl p-4 bg-white shadow-sm">
        <h2 className="text-2xl font-semibold text-indigo-900">รายการที่สั่งซื้อ</h2>
        <div className="flex flex-col text-xl text-black">
            <div className="flex flex-col md:flex-row w-full">
                <span className="w-90 mr-2 my-1.5">1. บริการผู้ดูแลรายวัน x 5 วัน</span>
                <span className="text-right rounded-md min-w-23 h-fit bg-blue-50 px-1 mt-2 ml-auto md:ml-0 text-base text-black outline-1 outline-gray-400">3,250 บาท</span>
            </div>
            <div className="flex flex-col md:flex-row w-full">
                <span className="w-90 mr-2 my-1.5">2. บริการรับส่งผู้สูงอายุ x 3 วัน</span>
                <span className="text-right rounded-md min-w-23 h-fit bg-blue-50 px-1 mt-2 ml-auto md:ml-0 text-base text-black outline-1 outline-gray-400">300 บาท</span>
            </div>
            <div className="flex w-full font-bold">
                <span className="w-90 mr-2 my-1.5">รวม</span>
                <span className="text-right rounded-md min-w-23 h-fit bg-blue-50 px-1 mt-2 ml-auto md:ml-0  text-base text-black outline-1 outline-gray-400">3,550 บาท</span>
            </div>
        </div>
    </div>
  )
}
