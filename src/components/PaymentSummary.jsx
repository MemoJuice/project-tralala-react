export default function PaymentSummary({order}) {
  return (
    <div className="rounded-xl p-4 bg-white shadow-sm">
        <h3 className="text-2xl font-semibold text-indigo-900 mb-2">สรุปยอดชำระ</h3>
        <dl className="space-y-2">
            <div className="grid grid-cols-[1fr_auto]">
                <dt className="text-black">ยอดรวมสินค้า</dt>
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
                <dt className="font-bold text-black">รวมทั้งหมด</dt>
                <dd className="bg-blue-50 border border-dashed border-accent rounded px-2 py-1 text-green-600 font-bold">
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
