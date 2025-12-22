import ManagementTable from "../components/ManagementTable";

export default function AdminManagement() {
    return (
        <div>
            <section className="flex flex-col">
                <div className="bg-white my-8 mx-auto w-[90%] rounded-[3rem] font-noto">
                    <h1 className="block text-center pt-6 pb-3 font-semibold text-3xl md:text-start md:pl-10">จัดการบัญชีผู้ใช้</h1>
                    <section>
                        <div className="flex flex-col gap-4 xl:flex-row px-10 py-2">
                            <div className="hidden lg:flex gap-4 *:h-10">
                                <div className="*:h-full">
                                    <input type="text" placeholder="ค้นหา" className="w-80 min-w-40 rounded-full bg-white px-3 py-1.5 text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600" />
                                </div>
                                <div className="grid grid-cols-1">
                                    <select className="col-start-1 row-start-1 w-full appearance-none rounded-full bg-white py-1.5 pr-8 pl-3 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 hover:cursor-pointer">
                                        <option disabled selected>ประเภทผู้ใช้งาน</option>
                                        <option>Caregiver</option>
                                        <option>Client</option>
                                        <option>Admin</option>
                                    </select>
                                    <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4">
                                        <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                                    </svg>
                                </div>
                                <div className="grid grid-cols-1">
                                    <select className="col-start-1 row-start-1 w-fit appearance-none rounded-full bg-white py-1.5 pr-8 pl-3 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 hover:cursor-pointer">
                                        <option disabled selected>สถานะ</option>
                                        <option>พร้อมรับงาน</option>
                                        <option>หยุดรับงาน</option>
                                        <option>รอยืนยันตัวตน</option>
                                        <option>ระงับบัญชี</option>
                                    </select>
                                    <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4">
                                        <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                                    </svg>
                                </div>
                                <div className="grid grid-cols-1">
                                    <select className="col-start-1 row-start-1 w-fit appearance-none rounded-full bg-white py-1.5 pr-8 pl-3 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 hover:cursor-pointer">
                                        <option disabled selected>วันที่</option>
                                    </select>
                                    <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4">
                                        <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex lg:hidden gap-4 *:h-10">
                                <div className="*:h-full">
                                    <button className="flex w-10 rounded-full bg-white outline-1 outline-gray-300 hover:cursor-pointer hover:outline-indigo-500 active:bg-indigo-300">
                                        <img src="images/search-icon.png" className="w-5 h-5 m-auto" />
                                    </button>
                                </div>
                                <div>
                                    <button className="flex w-15 h-full rounded-full bg-white outline-1 outline-gray-300 hover:cursor-pointer hover:outline-indigo-500 active:bg-indigo-300">
                                        <img src="images/user.svg" className="w-5 h-5 my-auto ml-2 mr-1" />
                                        <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4">
                                            <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                                <div>
                                    <button className="flex lg:hidden w-15 h-full rounded-full bg-white outline-1 outline-gray-300 hover:cursor-pointer hover:outline-indigo-500 active:bg-indigo-300">
                                        <img src="images/status-icon.png" className="w-4 h-5 my-auto ml-3 mr-1" />
                                        <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4">
                                            <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="grid grid-cols-1">
                                    <button className="flex lg:hidden w-15 h-full rounded-full bg-white outline-1 outline-gray-300 hover:cursor-pointer hover:outline-indigo-500 active:bg-indigo-300">
                                        <img src="images/calendar-icon.png" className="w-4 h-5 my-auto ml-3 mr-1" />
                                        <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4">
                                            <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-between gap-4 *:h-10 xl:ml-auto mr-0">
                                <button type="submit" className="flex w-fit rounded-full bg-indigo-100 px-4 py-2 font-semibold hover:bg-indigo-500 text-gray-900 outline-1 outline-indigo-300 hover:text-white hover:cursor-pointer">
                                    <img src="images/export-icon.png" className="w-4 h-5 mr-2" />
                                    <p>Export</p>
                                </button>
                                <button type="submit" className="flex gap-1 w-fit items-center rounded-full bg-indigo-600  px-4 py-2 font-semibold text-white hover:bg-indigo-500 focus-visible:outline-2 hover:cursor-pointer"><span className="text-3xl font-light mt-0.5 mr-1">+</span>เพิ่มผู้ใช้งาน</button>
                            </div>
                        </div>
                    </section>
                    <hr className="border-2 border-gray-300 m-4" />
                    <section className="flex flex-col mb-8">
                        <ManagementTable />
                        <div className="flex flex-col md:flex-row gap-4 m-4">
                            <div className="flex items-center">
                                <p>Rows per page</p>
                                <div className="grid grid-cols-1">
                                    <select className="col-start-1 row-start-1 w-fit appearance-none rounded-full bg-white py-1 pr-6 pl-3 mx-2 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 hover:cursor-pointer">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                        <option>13</option>
                                    </select>
                                    <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4">
                                        <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                                    </svg>
                                </div>
                                <p>of 130 rows</p>
                            </div>
                            <div className="flex gap-2 ml-auto *:w-7 *:h-7 md:*:w-8 md:*:h-8">
                                <button className="m-auto rounded-full text-base font-bold text-gray-700 bg-indigo-100 outline-1 outline-gray-300 hover:bg-indigo-300 hover:text-white hover:cursor-pointer focus:bg-indigo-500 focus:text-white">{`<`}{`<`}</button>
                                <button className="m-auto rounded-full text-base font-bold text-gray-700 bg-indigo-100 outline-1 outline-gray-300 hover:bg-indigo-300 hover:text-white hover:cursor-pointer focus:bg-indigo-500 focus:text-white">{`<`}</button>
                                <button className="m-auto rounded-full text-base font-bold text-gray-700 bg-indigo-100 outline-1 outline-gray-300 hover:bg-indigo-300 hover:text-white hover:cursor-pointer focus:bg-indigo-500 focus:text-white">1</button>
                                <button className="m-auto rounded-full text-base font-bold text-gray-700 bg-indigo-100 outline-1 outline-gray-300 hover:bg-indigo-300 hover:text-white hover:cursor-pointer focus:bg-indigo-500 focus:text-white">2</button>
                                <button className="m-auto rounded-full text-base font-bold text-gray-700 bg-indigo-100 outline-1 outline-gray-300 hover:bg-indigo-300 hover:text-white hover:cursor-pointer focus:bg-indigo-500 focus:text-white">...</button>
                                <button className="m-auto rounded-full text-base font-bold text-gray-700 bg-indigo-100 outline-1 outline-gray-300 hover:bg-indigo-300 hover:text-white hover:cursor-pointer focus:bg-indigo-500 focus:text-white">12</button>
                                <button className="m-auto rounded-full text-base font-bold text-gray-700 bg-indigo-100 outline-1 outline-gray-300 hover:bg-indigo-300 hover:text-white hover:cursor-pointer focus:bg-indigo-500 focus:text-white">13</button>
                                <button className="m-auto rounded-full text-base font-bold text-gray-700 bg-indigo-100 outline-1 outline-gray-300 hover:bg-indigo-300 hover:text-white hover:cursor-pointer focus:bg-indigo-500 focus:text-white">{`>`}</button>
                                <button className="m-auto rounded-full text-base font-bold text-gray-700 bg-indigo-100 outline-1 outline-gray-300 hover:bg-indigo-300 hover:text-white hover:cursor-pointer focus:bg-indigo-500 focus:text-white">{`>`}{`>`}</button>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
}
