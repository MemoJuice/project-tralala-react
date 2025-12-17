export default function Checkout() {
  return (
    <div>
      <section class="flex">
        <div class="bg-white my-4 mx-auto w-[90%] rounded-[3rem] font-noto">
          <h1 class="block text-center py-6 px-10 font-bold text-3xl">ข้อมูลใบเสร็จ</h1>
          <div class="grid grid-cols-1 md:grid-cols-2 pb-4">
            <div class="px-6 sm:px-12">
              <h2 class="text-2xl font-semibold text-indigo-900">ข้อมูลผู้สั่งซื้อ</h2>
              <div class="flex flex-col mt-2 mb-6 gap-2">
                <div>
                  <label class="block text-xl font-medium text-black">ชื่อ-นามสกุล</label>
                  <input type="text" placeholder="น้องหลามโลมา ตราลาลา" class="block w-full md:w-[50%] mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-black outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600" />
                </div>

                <div>
                  <label class="block text-xl font-medium text-black">เบอร์โทรศัพท์</label>
                  <input type="text" placeholder="099-123-6969" class="block w-full md:w-40 mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-black outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600" />
                </div>

                <div>
                  <label class="block text-xl font-medium text-black">ที่อยู่</label>
                  <textarea class="block w-full md:w-[65%] h-21 md:h-16 mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-black outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600">97/684523 หมู่บ้านคงคอย ซอยอุดมชัยใครถาม แขวงยูสพระราม เขตมะขามกินฟรี กรุงแม่น้ำ 101111</textarea>
                </div>

                <div>
                  <label class="block text-xl font-medium text-black">หมายเหตุ</label>
                  <textarea class="block w-full md:w-[50%] mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-black outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600">ขอคนที่ทำกับข้าวเป็น</textarea>
                </div>

              </div>

              <h2 class="text-2xl font-semibold text-indigo-900">ข้อมูลผู้รับบริการ</h2>
              <div class="flex gap-2 mt-2 mb-6">
                <div class="w-[80%] md:w-[50%]">
                  <label class="block text-xl font-medium text-black">ชื่อ-นามสกุล</label>
                  <input type="text" placeholder="แม่หลามดำงา ตราลาลา" class="block w-full mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-black outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600" />
                </div>
                <div class="w-15">
                  <label class="block text-xl font-medium text-black">อายุ</label>
                  <input type="text" placeholder="86 ปี" class="block w-full mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-black outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600" />
                </div>
              </div>
            </div>
            <div class="px-6 sm:px-12">
              <div class="rounded-xl p-4 bg-white shadow-sm">
                <h3 class="text-2xl font-semibold text-indigo-900 mb-2">สรุปยอดชำระ</h3>
                <dl class="space-y-2">
                  <div class="grid grid-cols-[1fr_auto]">
                  <dt class="text-muted">ยอดรวมสินค้า</dt>
                  <dd class="font-bold">฿1,500</dd>
                  </div>
                  <div class="grid grid-cols-[1fr_auto]"> 
                  <dt class="text-muted">ส่วนลดคูปอง (5%)</dt>
                  <dd class="font-bold">− ฿75</dd>
                  </div>
                  <div class="grid grid-cols-[1fr_auto]">
                  <dt class="font-bold text-text">รวมทั้งหมด</dt>
                  <dd class="bg-orange-50 border border-dashed border-accent rounded px-2 py-1 text-orange-800 font-bold">฿1,425</dd>
                  </div>
                </dl>
              </div>
              <div class="flex flex-col mt-8 items-start gap-4 bg-gray-100 p-4 border-3 border-amber-300 rounded-xl">
                <h2 class="text-2xl font-semibold text-indigo-900">เลือกวิธีการชำระเงิน</h2>
                <div class="flex flex-col md:flex-row md:gap-4">
                  <div class="flex">
                    <input id="payment-radio-2" name="payment-radio" type="radio" value="" checked class="w-4 h-4" />
                    <label for="default-radio-2" class="select-none ms-2 text-sm font-medium text-heading">Visa</label>
                  </div>
                  <div class="flex">
                    <input id="payment-radio-2" name="payment-radio" type="radio" value="" class="w-4 h-4" />
                    <label for="default-radio-2" class="select-none ms-2 text-sm font-medium text-heading">MasterCard</label>
                  </div>
                  <div class="flex">
                    <input id="payment-radio-1" name="payment-radio" type="radio" value="" class="w-4 h-4" />
                    <label for="default-radio-1" class="select-none ms-2 text-sm font-medium text-heading">ธนาคารออนไลน์</label>
                  </div>
                </div>
                <div class="flex flex-col w-full gap-4">
                  <div class="flex flex-col w-full">
                    <label class="block text-xl font-medium text-black">หมายเลขบัตร</label>
                    <input type="text" placeholder="xxxx-xxxx-xxxx-xxxx" class="block w-full md:w-45 mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-black outline-1 outline-indigo-600" />
                  </div>
                  <div class="flex flex-col">
                    <div class="grid grid-cols-2 w-45">
                      <label class="col-span-2 block text-xl font-medium text-black">วันหมดอายุ</label>
                      <div class="row-start-2 grid grid-cols-1 mt-2 w-18">
                        <select class="col-start-1 row-start-1 w-18 appearance-none rounded-xl bg-sky-50 py-1.5 pl-3 text-gray-900 outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600 hover:cursor-pointer">
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
                        <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4">
                          <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                      </div>
                      <div class="grid grid-cols-1 mt-2 w-20 row-start-2">
                        <select class="col-start-1 row-start-1 w-20 appearance-none rounded-xl bg-sky-50 py-1.5 pl-3 text-gray-900 outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600 hover:cursor-pointer">
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
                        <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4">
                          <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col">
                    <label class="block text-xl font-medium text-black">รหัสรักษาความปลอดภัย</label>
                    <input type="text" placeholder="xxx" class="block w-15 mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-black outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-2 mb-8">
            <a href="order-confirmation.html">
              <button class="block mx-auto mb-4 rounded-3xl bg-lime-200 px-3 py-2 text-xl font-semibold text-gray-800 outline-1 outline-lime-400 hover:cursor-pointer hover:bg-lime-500 hover:text-gray-100">ยืนยันคำสั่งซื้อ</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
