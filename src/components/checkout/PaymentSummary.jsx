export default function PaymentSummary({order}) {
  return (
    <div className="rounded-2xl p-4 bg-pink-100 shadow-sm">
        <h3 className="text-2xl font-semibold text-gray-700 mb-2">รายการที่สั่งซื้อ</h3>
        <dl className="space-y-2">
            <div className="grid grid-cols-[1fr_auto]">
                <dt className="flex flex-col text-black">
                    <p>{order.name}</p>
                    <p className="text-sm font-semibold">วันที่: {order.startDate}</p>
                </dt>
                <dd className="font-bold px-2">
                    { order.price==="" ?
                        `-`
                        : `${order.price} บาท`
                    }
                </dd>
            </div>
            {/* discount */}
            {/* <div className="grid grid-cols-[1fr_auto]"> 
                <dt className="text-black">ส่วนลดคูปอง (5%)</dt>
                <dd className="font-bold">− ฿75</dd>
            </div> */}
            <div className="grid grid-cols-[1fr_auto]">
                <dt className="font-bold mt-4 text-2xl text-gray-700">รวมทั้งหมด</dt>
                <dd className="bg-blue-50 mt-4 border border-dashed border-accent rounded-2xl px-2 py-1 text-green-600 font-bold">
                    { order.price==="" ?
                        `-`
                        : `${order.price} บาท`
                    }
                </dd>
            </div>
        </dl>
    </div>
  )
}
