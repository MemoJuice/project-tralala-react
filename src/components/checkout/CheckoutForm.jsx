export default function CheckoutForm({formType, formData, handleFormChange, seniorData, purchaseSummary}) {
    
  return (
    <div className="bg-sky-50 rounded-2xl shadow-2xs pt-8 px-6 sm:px-12 m-10">
        { formType==="checkout" &&
        <div className="px-2 sm:px-4">
            <h2 className="text-3xl mb-4 font-semibold text-gray-700">ผู้สั่งซื้อ</h2>

            <div className="flex flex-col mt-2 mb-6 gap-2">
                <div className="flex gap-4">
                    <div>
                        <label className="block text-xl font-semibold text-gray-700">ชื่อ</label>
                        <input type="text" className="block w-full mt-2 mr-auto rounded-4xl bg-sky-50 px-3 py-2 text-base text-gray outline-1 outline-pink-400 focus:outline-2 focus:outline-pink-600 " name="billingFirstName" value={formData.billingFirstName} onChange={handleFormChange} required />
                    </div>
                    <div>
                        <label className="block text-xl font-semibold text-gray-700">นามสกุล</label>
                        <input type="text" className="block w-full mt-2 mr-auto rounded-4xl bg-sky-50 px-3 py-2 text-base text-gray outline-1 outline-pink-400 focus:outline-2 focus:outline-pink-600 v" name="billingLastName" value={formData.billingLastName} onChange={handleFormChange} required />
                    </div>
                </div>

                <div>
                    <label className="lock text-xl font-semibold text-gray-700">เบอร์โทรศัพท์</label>
                    <input type="text" className="block w-full md:w-40 mt-2 mr-auto rounded-4xl bg-sky-50 px-3 py-2 text-base text-gray outline-1 outline-pink-400 focus:outline-2 focus:outline-pink-600 " name="billingPhone" value={formData.billingPhone} onChange={handleFormChange} required />
                </div>

                <div>
                    <label className="lock text-xl font-semibold text-gray-700">ที่อยู่</label>
                    <textarea className="block w-full md:w-[65%] h-21 md:h-16 mt-2 mr-auto rounded-2xl bg-sky-50 px-3 py-2 text-base text-gray outline-1 outline-pink-400 focus:outline-2 focus:outline-pink-600 appearance-none" name="billingAddress" value={formData.billingAddress} onChange={handleFormChange} required />
                </div>

            </div>

            <h2 className="text-2xl font-semibold text-gray-700">ข้อมูลผู้รับบริการ</h2>

            <div className="flex flex-col mt-2 mb-6 gap-2">
                
                <div className="">
                    <label className="col-span-2 lock text-xl font-semibold text-gray-700">ชื่อ-นามสกุล</label>
                    <div className="row-start-2 grid grid-cols-1 mt-2">
                        <select className="col-start-1 row-start-1 w-[50%] rounded-4xl bg-sky-50 py-1.5 pl-3 text-gray-900 outline-1 outline-sky-400 focus:outline-2 focus:outline-pink-600  hover:cursor-pointer" name="seniorId" value={formData.seniorId} onChange={handleFormChange} required>
                            <option value="" disabled>เลือกผู้รับบริการ</option>
                            <option value={seniorData.id}>{seniorData.firstName} {seniorData.lastName}</option>
                        </select>
                    </div>
                </div>

                <div className="">
                    <label className="lock text-xl font-semibold text-gray-700">อายุ</label>
                    { formData.seniorId ?
                        <p className="block w-15 mt-2 mr-auto rounded-4xl bg-sky-50 px-3 py-2 text-base text-gray outline-1 outline-sky-400 focus:outline-2 focus:outline-pink-600">
                            {seniorData.age} ปี
                        </p>
                        : <p className="block w-15 mt-2 mr-auto rounded-4xl bg-sky-50 px-3 py-2 text-base text-gray outline-1 outline-sky-400 focus:outline-2 focus:outline-pink-600">
                            - ปี
                        </p>

                    }
                </div>

                <div>
                    <label className="lock text-xl font-semibold text-gray-700">สถานที่รับบริการ</label>
                    <textarea className="block w-[75%] mt-2 mr-auto rounded-4xl bg-sky-50 px-3 py-2 text-base text-gray outline-1 outline-sky-400 focus:outline-2 focus:outline-pink-600 " name="location" value={formData.location} onChange={handleFormChange} required />
                </div>

                <div>
                    <label className="lock text-xl font-semibold text-gray-700">หมายเหตุ</label>
                    <textarea className="block w-[75%] mt-2 mr-auto rounded-4xl bg-sky-50 px-3 py-2 text-base text-gray outline-1 outline-sky-400 focus:outline-2 focus:outline-pink-600" name="clientNote" value={formData.clientNote} onChange={handleFormChange} required />
                </div>
            </div>

        </div>
        }
        { formType==="confirmation" &&
        <div className="px-6 sm:px-12">
            <h2 className="text-2xl font-semibold text-indigo-900">ข้อมูลผู้สั่งซื้อ</h2>
            <div className="mt-2 mb-6 flex flex-col gap-2">
                <div>
                    <h3 className="lock text-xl font-semibold text-gray-700">ชื่อ-นามสกุล</h3>
                    <p className="block w-fit mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-gray">{purchaseSummary.billingFirstName} {purchaseSummary.billingLastName}</p>
                </div>

                <div>
                    <h3 className="lock text-xl font-semibold text-gray-700">เบอร์โทรศัพท์</h3>
                    <p className="block w-fit mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-gray">{purchaseSummary.billingPhone}</p>
                </div>

                <div>
                    <h3 className="lock text-xl font-semibold text-gray-700">ที่อยู่</h3>
                    <p className="block w-fit max-w-140 mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-gray">{purchaseSummary.billingAddress}</p>
                </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-700">ข้อมูลผู้รับบริการ</h2>
            <div className="flex flex-col gap-2 mt-2 mb-6">
                <div className="flex gap-2">
                    <div>
                        <h3 className="lock text-xl font-semibold text-gray-700">ชื่อ-นามสกุล</h3>
                        <p className="block w-fit mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-gray">{purchaseSummary.seniorFirstName} {purchaseSummary.seniorLastName}</p>
                    </div>
                    <div>
                        <h3 className="lock text-xl font-semibold text-gray-700">อายุ</h3>
                        <p className="block w-fit mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-gray">{purchaseSummary.seniorAge} ปี</p>
                    </div>
                </div>
                <div>
                    <h3 className="lock text-xl font-semibold text-gray-700">หมายเหตุ</h3>
                    <p className="block w-fit max-w-140 mt-2 mr-auto rounded-xl bg-sky-50 px-3 py-2 text-base text-gray">{purchaseSummary.clientNote}</p>
                </div>
            </div>
        </div>
        }
    </div>
  )
}