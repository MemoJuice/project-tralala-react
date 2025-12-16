export default function OrderConfirmation() {
  return (
    <div>
        <section class="flex">
            <div class="bg-white my-4 mx-auto w-[90%] rounded-[3rem] font-noto">
                <h1 class="block text-center py-6 px-10 font-bold text-3xl">รายการสั่งซื้อสำเร็จ</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 pb-4">
                    <div class="px-6 sm:px-12">
                        <h2 class="text-2xl font-semibold text-indigo-900">ข้อมูลผู้สั่งซื้อ</h2>
                        <div class="mt-2 mb-6 flex flex-col gap-2">
                            <div>
                                <h3 class="block text-xl font-medium text-black">ชื่อ-นามสกุล</h3>
                                <p class="block w-fit mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-black">น้องหลามโลมา ตราลาลา</p>
                            </div>

                            <div>
                                <h3 class="block text-xl font-medium text-black">เบอร์โทรศัพท์</h3>
                                <p class="block w-fit mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-black">099-123-6969</p>
                            </div>

                            <div>
                                <h3 class="block text-xl font-medium text-black">ที่อยู่</h3>
                                <p class="block w-fit max-w-140 mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-black">97/684523 หมู่บ้านคงคอย ซอยอุดมชัยใครถาม แขวงยูสพระราม เขตมะขามกินฟรี กรุงแม่น้ำ 101111</p>
                            </div>

                            <div>
                                <h3 class="block text-xl font-medium text-black">หมายเหตุ</h3>
                                <p class="block w-fit max-w-140 mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-black">ขอคนที่ทำกับข้าวเป็น</p>
                            </div>

                        </div>

                        <h2 class="text-2xl font-semibold text-indigo-900">ข้อมูลผู้รับบริการ</h2>
                        <div class="flex gap-2 mt-2 mb-6">
                            <div>
                                <h3 class="block text-xl font-medium text-black">ชื่อ-นามสกุล</h3>
                                <p class="block w-fit mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-black">แม่หลามดำงา ตราลาลา</p>
                            </div>
                            <div>
                                <h3 class="block text-xl font-medium text-black">อายุ</h3>
                                <p class="block w-fit mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-black">86 ปี</p>
                            </div>
                        </div>
                    </div>
                    <div class="px-6 sm:px-12">
                        <h2 class="text-2xl font-semibold text-indigo-900">รายการที่สั่งซื้อ</h2>
                        <div class="flex flex-col text-xl text-black">
                            <div class="flex flex-col md:flex-row w-full">
                                <span class="w-90 mr-2 my-1.5">1. บริการผู้ดูแลรายวัน x 5 วัน</span>
                                <span class="text-right rounded-md min-w-23 h-fit bg-blue-50 px-1 mt-2 ml-auto md:ml-0 text-base text-black outline-1 outline-gray-400">3,250 บาท</span>
                            </div>
                            <div class="flex flex-col md:flex-row w-full">
                                <span class="w-90 mr-2 my-1.5">2. บริการรับส่งผู้สูงอายุ x 3 วัน</span>
                                <span class="text-right rounded-md min-w-23 h-fit bg-blue-50 px-1 mt-2 ml-auto md:ml-0 text-base text-black outline-1 outline-gray-400">300 บาท</span>
                            </div>
                            <div class="flex w-full font-bold">
                                <span class="w-90 mr-2 my-1.5">รวม</span>
                                <span class="text-right rounded-md min-w-23 h-fit bg-blue-50 px-1 mt-2 ml-auto md:ml-0  text-base text-black outline-1 outline-gray-400">3,550 บาท</span>
                            </div>
                        </div>
                        <div class="flex rounded-3xl w-fit bg-lime-200 mt-6 mb-4 px-6 py-3 text-4xl text-black outline-1 outline-lime-500 mx-auto md:mx-0">
                            <h3 class="m-auto">ชำระเงินเสร็จสิ้น</h3>
                        </div>
                        <div class="flex flex-col items-center md:items-start">
                            <h3 class="text-4xl md:ml-2 mb-2 text-indigo-700 text-center">ขอบคุณที่ไว้วางใจให้เราดูแล</h3>
                            <div class="max-w-100">
                                <img src="thank-you-order-service-2.png" class="rounded-3xl border-3 border-red-200" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <a href="../index.html">
                        <button class="block mx-auto md:ml-[25%] mb-4 rounded-3xl bg-violet-200 px-3 py-2 text-xl font-semibold text-gray-800 outline-1 outline-violet-400 hover:cursor-pointer hover:bg-violet-500 hover:text-gray-100">กลับสู่หน้าหลัก</button>
                    </a>
                </div>
            </div>
        </section>
    </div>
  );
}
