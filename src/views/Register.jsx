import { Link } from "react-router";

export default function Register() {
    return (
        <div>
            <section className="flex">
                <div className="flex flex-col items-center bg-white my-4 mx-auto w-[90%] rounded-[3rem] font-noto">

					<h1 className="block text-center py-6 px-10 font-bold text-3xl">กรอกประวัติส่วนตัว</h1>
					<div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] pb-4 md:max-w-300">
						<div className="px-6 md:pl-12 md:pr-4">
							<h2 className="text-2xl font-semibold text-indigo-900">ประวัติส่วนตัว (ผู้ป่วย)</h2>
                            <form className="flex flex-col md:flex-row">
                                <div className="flex flex-col md:flex-row my-2 gap-8">
                                    <div className="flex flex-col my-2 gap-2">
                                        <div>
                                            <label className="block text-xl font-medium text-black">ชื่อ</label>
                                            <input type="text" className="block w-full mt-1 rounded-md bg-sky-50 px-3 py-1 text-base text-black outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600" />
                                        </div>
                                        <div>
                                            <label className="block text-lg font-medium text-black">นามสกุล</label>
                                            <input type="text" className="block w-full mt-1 rounded-md bg-sky-50 px-3 py-1 text-base text-black outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600" />
                                        </div>
                                        <div>
                                            <label className="block text-lg font-medium text-black">วันเกิด</label>
                                            <input type="text" className="block w-full mt-1 rounded-md bg-sky-50 px-3 py-1 text-base text-black outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600" />
                                        </div>
                                        <div>
                                            <label className="block text-lg font-medium text-black">ที่อยู่</label>
                                            <input type="text" className="block w-full mt-1 rounded-md bg-sky-50 px-3 py-1 text-base text-black outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600" />
                                        </div>
                                        <div>
                                            <label className="block text-lg font-medium text-black">อาการป่วย</label>
                                            <input type="text" className="block w-full mt-1 rounded-md bg-sky-50 px-3 py-1 text-base text-black outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col my-2 gap-2">
                                        <div>
                                            <label className="block text-lg font-medium text-black">เบอร์โทรศัพท์</label>
                                            <input type="text" className="block w-full mt-1 rounded-md bg-sky-50 px-3 py-1 text-base text-black outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600" />
                                        </div>
                                        <div>
                                            <label className="block text-lg font-medium text-black">สิ่งที่ต้องการให้ดูแลพิเศษ</label>
                                            <input type="text" className="block w-full mt-1 rounded-md bg-sky-50 px-3 py-1 text-base text-black outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600" />
                                        </div>
                                        <div>
                                            <label className="block text-lg font-medium text-black">ยาที่รับประทานประจำ</label>
                                            <input type="text" className="block w-full mt-1 rounded-md bg-sky-50 px-3 py-1 text-base text-black outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600" />
                                        </div>
                                        <div>
                                            <label className="block text-lg font-medium text-black">เพิ่มเติม</label>
                                            <textarea className="block w-full h-21 md:h-16 mt-2 mr-auto rounded-md bg-sky-50 px-3 py-2 text-base text-black outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600">ตั้งแต่เป็นสาวเต็มกาย หาผู้ชายถูกใจไม่มี</textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex mx-auto md:ml-8 my-4 item">
                                    <p className="w-20 h-20 pt-5 text-sm text-center rounded-[10%] bg-slate-300"> อัปโหลดรูปภาพ</p>
                                </div>
                            </form>
                        </div>

						<div className="px-6 md:pl-12 md:pr-4 mt-4 md:mt-0">
							<h2 className="text-2xl font-semibold text-indigo-900">ประวัติส่วนตัว (ญาติผู้ป่วย)</h2>
                            <div className="flex flex-col md:flex-row">
                                <form className="flex flex-col my-2 gap-2">
                                    <div>
                                        <label className="block text-xl font-medium text-black">ชื่อ</label>
                                        <input type="text" className="block w-full mt-1 rounded-md bg-sky-50 px-3 py-1 text-base text-black outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600" />
                                    </div>
                                    <div>
                                        <label className="block text-lg font-medium text-black">นามสกุล</label>
                                        <input type="text" className="block w-full mt-1 rounded-md bg-sky-50 px-3 py-1 text-base text-black outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600" />
                                    </div>
                                    <div>
                                        <label className="block text-lg font-medium text-black">เบอร์โทรศัพท์</label>
                                        <input type="text" className="block w-full mt-1 rounded-md bg-sky-50 px-3 py-1 text-base text-black outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600" />
                                    </div>
                                    <div>
                                        <label className="block text-lg font-medium text-black">ความสัมพันธ์กับผู้ป่วย</label>
                                        <div className="grid grid-cols-1">
                                            <select className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-sky-50 py-1.5 pr-8 pl-3 mt-1 text-gray-900 outline-1 outline-indigo-400 focus:outline-2 focus:outline-indigo-600 hover:outline-indigo-600 hover:cursor-pointer">
                                                <option disabled selected>-</option>
                                                <option>ลูก</option>
                                                <option>พี่น้อง</option>
                                                <option>หลาน</option>
                                                <option>เพื่อน</option>
                                            </select>
                                            <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4">
                                                <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </form>
                                <div className="flex mx-auto md:ml-8 my-4 item">
                                    <p className="w-20 h-20 pt-5 text-sm text-center rounded-[10%] bg-slate-300"> อัปโหลดรูปภาพ</p>
                                </div>
                            </div>
                        </div>
                    </div>
					<div>
						<Link to="/userdashboard">
							<button className="block mx-auto md:ml-[25%] mb-4 rounded-3xl bg-violet-200 px-6 py-2 text-xl font-semibold text-gray-800 outline-1 outline-violet-400 hover:cursor-pointer hover:bg-violet-500 hover:text-gray-100">บันทึก</button>
						</Link>
					</div>

                </div>
            </section>
        </div>
    )
}