export default function PaymentSummary() {
  return (
    <div className="rounded-xl p-4 bg-white shadow-sm">
        <h3 className="text-2xl font-semibold text-indigo-900 mb-2">สรุปยอดชำระ</h3>
        <dl className="space-y-2">
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
        </dl>
    </div>
  )
}
