export default function PaymentForm() {
  return (
    <div className="flex flex-col mt-8 items-start gap-4 bg-gray-100 p-4 border-3 border-amber-300 rounded-xl">
    <h2 className="text-2xl font-semibold text-indigo-900">เลือกวิธีการชำระเงิน</h2>
    <div className="flex flex-col md:flex-row md:gap-4">
        <div className="flex">
            <input id="payment-radio-2" name="payment-radio" type="radio" value="" checked className="w-4 h-4" />
            <label for="default-radio-2" className="select-none ms-2 text-sm font-medium text-heading">Visa</label>
        </div>
        <div className="flex">
            <input id="payment-radio-2" name="payment-radio" type="radio" value="" className="w-4 h-4" />
            <label for="default-radio-2" className="select-none ms-2 text-sm font-medium text-heading">MasterCard</label>
        </div>
        <div className="flex">
            <input id="payment-radio-1" name="payment-radio" type="radio" value="" className="w-4 h-4" />
            <label for="default-radio-1" className="select-none ms-2 text-sm font-medium text-heading">ธนาคารออนไลน์</label>
        </div>
    </div>
    <div className="flex flex-col w-full gap-4">
        <div className="flex flex-col w-full">
            <label className="block text-xl font-medium text-black">หมายเลขบัตร</label>
            <input type="text" placeholder="xxxx-xxxx-xxxx-xxxx" className="block w-full md:w-45 mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-black outline-1 outline-indigo-600" />
        </div>
        <div className="flex flex-col">
            <div className="grid grid-cols-2 w-45">
                <label className="col-span-2 block text-xl font-medium text-black">วันหมดอายุ</label>
                <div className="row-start-2 grid grid-cols-1 mt-2 w-18">
                    <select className="col-start-1 row-start-1 w-18 appearance-none rounded-xl bg-sky-50 py-1.5 pl-3 text-gray-900 outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600 hover:cursor-pointer">
                        <option disabled selected>เดือน</option>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                        <option>06</option>
                        <option>07</option>
                        <option>08</option>
                        <option>09</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </select>
                    <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4">
                        <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                    </svg>
                </div>
                <div className="grid grid-cols-1 mt-2 w-20 row-start-2">
                    <select className="col-start-1 row-start-1 w-20 appearance-none rounded-xl bg-sky-50 py-1.5 pl-3 text-gray-900 outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600 hover:cursor-pointer">
                        <option disabled selected>ปี</option>
                        <option>2025</option>
                        <option>2026</option>
                        <option>2027</option>
                        <option>2028</option>
                        <option>2029</option>
                        <option>2030</option>
                        <option>2031</option>
                        <option>2032</option>
                        <option>2033</option>
                        <option>2034</option>
                        <option>2035</option>
                    </select>
                    <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4">
                        <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="flex flex-col">
            <label className="block text-xl font-medium text-black">รหัสรักษาความปลอดภัย</label>
            <input type="text" placeholder="xxx" className="block w-15 mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-black outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600" />
        </div>
    </div>
    </div>
  )
}