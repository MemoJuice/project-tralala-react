export default function CheckoutForm({formType, formData, handleChange, handleSubmit}) {
    
  return (
    <div>
        { formType==="checkout" &&
        <div className="px-6 sm:px-12">
            <h2 className="text-2xl font-semibold text-indigo-900">ข้อมูลผู้สั่งซื้อ</h2>
            <div className="flex flex-col mt-2 mb-6 gap-2">
                <div>
                    <label className="block text-xl font-medium text-black">ชื่อ-นามสกุล</label>
                    <input type="text" className="block w-full md:w-[50%] mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-black outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>

                <div>
                    <label className="block text-xl font-medium text-black">เบอร์โทรศัพท์</label>
                    <input type="text" placeholder="099-123-6969" className="block w-full md:w-40 mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-black outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600" />
                </div>

                <div>
                    <label className="block text-xl font-medium text-black">ที่อยู่</label>
                    <textarea className="block w-full md:w-[65%] h-21 md:h-16 mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-black outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600" />
                </div>

                <div>
                    <label className="block text-xl font-medium text-black">หมายเหตุ</label>
                    <textarea className="block w-full md:w-[50%] mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-black outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600" />
                </div>

            </div>

            <h2 className="text-2xl font-semibold text-indigo-900">ข้อมูลผู้รับบริการ</h2>
                <div className="flex gap-2 mt-2 mb-6">
                <div className="w-[80%] md:w-[50%]">
                    <label className="block text-xl font-medium text-black">ชื่อ-นามสกุล</label>
                    <input type="text" placeholder="แม่หลามดำงา ตราลาลา" className="block w-full mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-black outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600" />
                </div>
                <div className="w-15">
                    <label className="block text-xl font-medium text-black">อายุ</label>
                    <input type="text" placeholder="86 ปี" className="block w-full mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-black outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600" />
                </div>
            </div>
        </div>
        }
        { formType==="confirmation" &&
        <div className="px-6 sm:px-12">
            <h2 className="text-2xl font-semibold text-indigo-900">ข้อมูลผู้สั่งซื้อ</h2>
            <div className="mt-2 mb-6 flex flex-col gap-2">
                <div>
                    <h3 className="block text-xl font-medium text-black">ชื่อ-นามสกุล</h3>
                    <p className="block w-fit mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-black">น้องหลามโลมา ตราลาลา</p>
                </div>

                <div>
                    <h3 className="block text-xl font-medium text-black">เบอร์โทรศัพท์</h3>
                    <p className="block w-fit mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-black">099-123-6969</p>
                </div>

                <div>
                    <h3 className="block text-xl font-medium text-black">ที่อยู่</h3>
                    <p className="block w-fit max-w-140 mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-black">97/684523 หมู่บ้านคงคอย ซอยอุดมชัยใครถาม แขวงยูสพระราม เขตมะขามกินฟรี กรุงแม่น้ำ 101111</p>
                </div>

                <div>
                    <h3 className="block text-xl font-medium text-black">หมายเหตุ</h3>
                    <p className="block w-fit max-w-140 mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-black">ขอคนที่ทำกับข้าวเป็น</p>
                </div>

            </div>

            <h2 className="text-2xl font-semibold text-indigo-900">ข้อมูลผู้รับบริการ</h2>
            <div className="flex gap-2 mt-2 mb-6">
                <div>
                    <h3 className="block text-xl font-medium text-black">ชื่อ-นามสกุล</h3>
                    <p className="block w-fit mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-black">แม่หลามดำงา ตราลาลา</p>
                </div>
                <div>
                    <h3 className="block text-xl font-medium text-black">อายุ</h3>
                    <p className="block w-fit mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-black">86 ปี</p>
                </div>
            </div>
        </div>
        }
    </div>
  )
}