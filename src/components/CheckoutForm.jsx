export default function CheckoutForm({formType, formData, handleChange, seniorData}) {
    
  return (
    <div>
        { formType==="checkout" &&
        <div className="px-6 sm:px-12">
            <h2 className="text-2xl font-semibold text-indigo-900">ข้อมูลผู้สั่งซื้อ</h2>

            <div className="flex flex-col mt-2 mb-6 gap-2">
                <div className="flex gap-4">
                    <div>
                        <label className="block text-xl font-medium text-black">ชื่อ</label>
                        <input type="text" className="block w-full mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-black outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600" name="billingFirstName" value={formData.billingFirstName} onChange={handleChange} required />
                    </div>
                    <div>
                        <label className="block text-xl font-medium text-black">นามสกุล</label>
                        <input type="text" className="block w-full mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-black outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600" name="billingLastName" value={formData.billingLastName} onChange={handleChange} required />
                    </div>
                </div>

                <div>
                    <label className="block text-xl font-medium text-black">เบอร์โทรศัพท์</label>
                    <input type="text" className="block w-full md:w-40 mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-black outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600" name="billingPhone" value={formData.billingPhone} onChange={handleChange} required />
                </div>

                <div>
                    <label className="block text-xl font-medium text-black">ที่อยู่</label>
                    <textarea className="block w-full md:w-[65%] h-21 md:h-16 mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-black outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600" name="billingAddress" value={formData.billingAddress} onChange={handleChange} required />
                </div>

            </div>

            <h2 className="text-2xl font-semibold text-indigo-900">ข้อมูลผู้รับบริการ</h2>

            <div className="flex flex-col mt-2 mb-6 gap-2">
                
                <div className="">
                    <label className="col-span-2 block text-xl font-medium text-black">ชื่อ-นามสกุล</label>
                    <div className="row-start-2 grid grid-cols-1 mt-2">
                        <select className="col-start-1 row-start-1 w-[50%] rounded-xl bg-sky-50 py-1.5 pl-3 text-gray-900 outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600 hover:cursor-pointer" name="seniorId" value={formData.seniorId} onChange={handleChange} required>
                            <option value="" disabled>เลือกผู้รับบริการ</option>
                            <option value={seniorData.id}>{seniorData.firstName} {seniorData.lastName}</option>
                        </select>
                    </div>
                </div>

                <div className="">
                    <label className="block text-xl font-medium text-black">อายุ</label>
                    {}
                    <p type="number" className="block w-15 mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-black outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600">
                        {seniorData.age} ปี
                    </p>
                </div>

                <div>
                    <label className="block text-xl font-medium text-black">หมายเหตุ</label>
                    <textarea className="block w-[75%] mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-black outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600" name="clientNote" value={formData.clientNote} onChange={handleChange} required />
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