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
                    <table className="max-w-full mx-4 table-auto">
                        <thead className=" bg-indigo-600 text-white">
                            <tr className="*:h-8 [&_th:not(:first-child):not(:last-child)]:text-left [&_:not(:first-child):not(:nth-child(2)):not(:nth-child(3)):not(:last-child)]:md:pl-2">
                                <th className="hidden sm:table-cell border-none text-center px-1">
                                    <input type="checkbox" className="mt-2 scale-125 accent-white" />
                                </th>
                                <th className="w-9">
                                    <p className="block sm:hidden w-9 text-end">ชื่อ-</p>
                                </th>
                                <th>
                                    <div className="flex *:self-center">
                                        <p className="inline-block sm:hidden">สกุล</p>
                                        <p className="hidden sm:inline-block">ชื่อ-สกุล</p>
                                        <div className="flex flex-col gap-1 w-3 ml-auto mr-2 right-0 *:hover:cursor-pointer">
                                            <img src="images/Polygon 1.png" />
                                            <img src="images/Polygon 2.png" />
                                        </div>
                                    </div>
                                </th>
                                <th className="hidden md:table-cell">
                                    <div className="flex *:self-center">
                                        <p>Email</p>
                                        <div className="flex flex-col gap-1 w-3 ml-auto mr-2 right-0 *:hover:cursor-pointer">
                                            <img src="images/Polygon 1.png" />
                                            <img src="images/Polygon 2.png" />
                                        </div>
                                    </div>
                                </th>
                                <th className="hidden sm:table-cell">
                                    <div className="flex *:self-center">
                                        <p>Username</p>
                                        <div className="flex flex-col gap-1 w-3 ml-auto mr-2 right-0 *:hover:cursor-pointer">
                                            <img src="images/Polygon 1.png" />
                                            <img src="images/Polygon 2.png" />
                                        </div>
                                    </div>
                                </th>
                                <th>
                                    <div className="flex *:self-center">
                                        <p>สถานะ</p>
                                        <div className="flex flex-col gap-1 w-3 ml-auto mr-2 right-0 *:hover:cursor-pointer">
                                            <img src="images/Polygon 1.png" />
                                            <img src="images/Polygon 2.png" />
                                        </div>
                                    </div>
                                </th>
                                <th>
                                    <div className="flex *:self-center">
                                        <p>ประเภท</p>
                                        <div className="flex flex-col gap-1 w-3 ml-auto mr-2 right-0 *:hover:cursor-pointer">
                                            <img src="images/Polygon 1.png" />
                                            <img src="images/Polygon 2.png" />
                                        </div>
                                    </div>
                                </th>
                                <th className="hidden xl:table-cell">
                                    <div className="flex *:self-center">
                                        <p>วันที่เข้าร่วม</p>
                                        <div className="flex flex-col gap-1 w-3 ml-auto mr-2 right-0 *:hover:cursor-pointer">
                                            <img src="images/Polygon 1.png" />
                                            <img src="images/Polygon 2.png" />
                                        </div>
                                    </div>
                                </th>
                                <th className="">
                                    <div className="flex *:self-center w-15 mx-auto">
                                        <p>แก้ไข</p>
                                        <div className="flex flex-col gap-1 w-3 ml-auto mr-2 right-0 *:hover:cursor-pointer">
                                            <img src="images/Polygon 1.png" />
                                            <img src="images/Polygon 2.png" />
                                        </div>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="**:border-y text-gray-800 *:[&_td:not(:first-child):not(:nth-child(2)):not(:nth-child(3)):not(:last-child)]:md:pl-2 [&_td:nth-child(8)]:hidden xl:[&_td:nth-child(8)]:table-cell [&_td:nth-child(4)]:hidden [&_td:nth-child(4)]:md:table-cell [&_td:nth-child(5)]:hidden [&_td:nth-child(5)]:sm:table-cell [&_td:nth-child(1)]:hidden [&_td:nth-child(1)]:sm:table-cell [&_img:nth-child(2)]:hidden [&_img:nth-child(2)]:md:block text-xs font-semibold md:text-base md:font-normal">
                            <tr className="*:h-10">
                                <td className="text-center">
                                    <input type="checkbox" className="my-auto scale-125 accent-emerald-600" />
                                </td>
                                <td>
                                    <div className="flex border-none justify-center">
                                        <img src="images/user.svg" className="w-7 bg-indigo-100 rounded-full border border-indigo-300" />
                                    </div>
                                </td>
                                <td>John Smith</td>
                                <td>john.smith@gmail.com</td>
                                <td>jonny77</td>
                                <td>
                                    <p className="hidden lg:block border-none bg-green-600 w-fit px-2 py-0.5 rounded-full text-white">พร้อมรับงาน</p>
                                    <p className="lg:hidden border-none bg-green-600 w-6 h-6 ml-2 text-center text-base font-normal rounded-full text-white">R</p>
                                </td>
                                <td>Caregiver</td>
                                <td>March 12, 2023</td>
                                <td className="flex gap-2 border-none justify-center items-center *:w-5  *:border-none">
                                    <img src="images/PencilSimpleLine.png" />
                                    <img src="images/Trash.png" />
                                </td>
                            </tr>
                            <tr className="*:h-10">
                                <td className="text-center">
                                    <input type="checkbox" className="my-auto scale-125 accent-emerald-600" />
                                </td>
                                <td>
                                    <div className="flex border-none justify-center">
                                        <img src="images/user.svg" className="w-7 bg-indigo-100 rounded-full border border-indigo-300" />
                                    </div>
                                </td>
                                <td>Olivia Bennett</td>
                                <td>ollyben@gmail.com</td>
                                <td>olly659</td>
                                <td>
                                    <p className="hidden lg:block border-none bg-gray-400 w-fit px-2 py-0.5 rounded-full text-white">หยุดรับงาน</p>
                                    <p className="lg:hidden border-none bg-gray-400 w-6 h-6 ml-2 text-center text-base font-normal rounded-full text-white">/</p>
                                </td>
                                <td>Caregiver</td>
                                <td>June 27, 2022</td>
                                <td className="flex gap-2 border-none justify-center items-center *:w-5  *:border-none">
                                    <img src="images/PencilSimpleLine.png" />
                                    <img src="images/Trash.png" />
                                </td>
                            </tr>
                            <tr className="*:h-10">
                                <td className="text-center">
                                    <input type="checkbox" className="my-auto scale-125 accent-emerald-600" />
                                </td>
                                <td>
                                    <div className="flex border-none justify-center">
                                        <img src="images/user.svg" className="w-7 bg-indigo-100 rounded-full border border-indigo-300" />
                                    </div>
                                </td>
                                <td>Daniel Warren</td>
                                <td>jdwarren3@gmail.com</td>
                                <td>dwarren3</td>
                                <td>
                                    <p className="hidden lg:block border-none bg-red-600 w-fit px-2 py-0.5 rounded-full text-white">ระงับบัญชี</p>
                                    <p className="lg:hidden border-none bg-red-600 w-6 h-6 ml-2 text-center text-base font-normal rounded-full text-white">X</p>
                                </td>
                                <td>Caregiver</td>
                                <td>January 8, 2024</td>
                                <td className="flex gap-2 border-none justify-center items-center *:w-5  *:border-none">
                                    <img src="images/PencilSimpleLine.png" />
                                    <img src="images/Trash.png" />
                                </td>
                            </tr>
                            <tr className="*:h-10">
                                <td className="text-center">
                                    <input type="checkbox" className="my-auto scale-125 accent-emerald-600" />
                                </td>
                                <td>
                                    <div className="flex border-none justify-center">
                                        <img src="images/user.svg" className="w-7 bg-indigo-100 rounded-full border border-indigo-300" />
                                    </div>
                                </td>
                                <td>Chloe Hayes</td>
                                <td>chloehhye@gmail.com</td>
                                <td>chloehh</td>
                                <td>
                                    <p className="hidden lg:block border-none bg-violet-600 w-fit px-2 py-0.5 rounded-full text-white">รอยืนยันตัวตน</p>
                                    <p className="lg:hidden border-none bg-violet-600 w-6 h-6 ml-2 text-center text-base font-normal rounded-full text-white">P</p>
                                </td>
                                <td>Caregiver</td>
                                <td>October 5, 2021</td>
                                <td className="flex gap-2 border-none justify-center items-center *:w-5  *:border-none">
                                    <img src="images/PencilSimpleLine.png" />
                                    <img src="images/Trash.png" />
                                </td>
                            </tr>
                            <tr className="*:h-10">
                                <td className="text-center">
                                    <input type="checkbox" className="my-auto scale-125 accent-emerald-600" />
                                </td>
                                <td>
                                    <div className="flex border-none justify-center">
                                        <img src="images/user.svg" className="w-7 bg-indigo-100 rounded-full border border-indigo-300" />
                                    </div>
                                </td>
                                <td>Marcus Reed</td>
                                <td>reeds777@gmail.com</td>
                                <td>reeds7</td>
                                <td>
                                    <p className="hidden lg:block border-none bg-violet-600 w-fit px-2 py-0.5 rounded-full text-white">รอยืนยันตัวตน</p>
                                    <p className="lg:hidden border-none bg-violet-600 w-6 h-6 ml-2 text-center text-base font-normal rounded-full text-white">P</p>
                                </td>
                                <td>Caregiver</td>
                                <td>February 19, 2023</td>
                                <td className="flex gap-2 border-none justify-center items-center *:w-5  *:border-none">
                                    <img src="images/PencilSimpleLine.png" />
                                    <img src="images/Trash.png" />
                                </td>
                            </tr>
                            <tr className="*:h-10">
                                <td className="text-center">
                                    <input type="checkbox" className="my-auto scale-125 accent-emerald-600" />
                                </td>
                                <td>
                                    <div className="flex border-none justify-center">
                                        <img src="images/user.svg" className="w-7 bg-indigo-100 rounded-full border border-indigo-300" />
                                    </div>
                                </td>
                                <td>Isabelle Clark</td>
                                <td>belleclark@gmail.com</td>
                                <td>bellecl</td>
                                <td>
                                    <p className="hidden lg:block border-none bg-green-600 w-fit px-2 py-0.5 rounded-full text-white">พร้อมรับงาน</p>
                                    <p className="lg:hidden border-none bg-green-600 w-6 h-6 ml-2 text-center text-base font-normal rounded-full text-white">R</p>
                                </td>
                                <td>Caregiver</td>
                                <td>August 30, 2022</td>
                                <td className="flex gap-2 border-none justify-center items-center *:w-5  *:border-none">
                                    <img src="images/PencilSimpleLine.png" />
                                    <img src="images/Trash.png" />
                                </td>
                            </tr>
                            <tr className="*:h-10">
                                <td className="text-center">
                                    <input type="checkbox" className="my-auto scale-125 accent-emerald-600" />
                                </td>
                                <td>
                                    <div className="flex border-none justify-center">
                                        <img src="images/user.svg" className="w-7 bg-indigo-100 rounded-full border border-indigo-300" />
                                    </div>
                                </td>
                                <td>Lucas Mitchell</td>
                                <td>lucamich@gmail.com</td>
                                <td>lucamich</td>
                                <td>
                                    <p className="hidden lg:block border-none bg-green-600 w-fit px-2 py-0.5 rounded-full text-white">พร้อมรับงาน</p>
                                    <p className="lg:hidden border-none bg-green-600 w-6 h-6 ml-2 text-center text-base font-normal rounded-full text-white">R</p>
                                </td>
                                <td>Caregiver</td>
                                <td>April 23, 2024</td>
                                <td className="flex gap-2 border-none justify-center items-center *:w-5  *:border-none">
                                    <img src="images/PencilSimpleLine.png" />
                                    <img src="images/Trash.png" />
                                </td>
                            </tr>
                            <tr className="*:h-10">
                                <td className="text-center">
                                    <input type="checkbox" className="my-auto scale-125 accent-emerald-600" />
                                </td>
                                <td>
                                    <div className="flex border-none justify-center">
                                        <img src="images/user.svg" className="w-7 bg-indigo-100 rounded-full border border-indigo-300" />
                                    </div>
                                </td>
                                <td>Mark Wilburg</td>
                                <td>markwill32@gmail.com</td>
                                <td>markwill32</td>
                                <td>
                                    <p className="hidden lg:block border-none bg-red-600 w-fit px-2 py-0.5 rounded-full text-white">ระงับบัญชี</p>
                                    <p className="lg:hidden border-none bg-red-600 w-6 h-6 ml-2 text-center text-base font-normal rounded-full text-white">X</p>
                                </td>
                                <td>Caregiver</td>
                                <td>November 14, 2020</td>
                                <td className="flex gap-2 border-none justify-center items-center *:w-5  *:border-none">
                                    <img src="images/PencilSimpleLine.png" />
                                    <img src="images/Trash.png" />
                                </td>
                            </tr>
                            <tr className="*:h-10">
                                <td className="text-center">
                                    <input type="checkbox" className="my-auto scale-125 accent-emerald-600" />
                                </td>
                                <td>
                                    <div className="flex border-none justify-center">
                                        <img src="images/user.svg" className="w-7 bg-indigo-100 rounded-full border border-indigo-300" />
                                    </div>
                                </td>
                                <td>Nicholas Agenn</td>
                                <td>nicolass009@gmail.com</td>
                                <td>nicolass009</td>
                                <td>
                                    <p className="hidden lg:block border-none bg-violet-600 w-fit px-2 py-0.5 rounded-full text-white">รอยืนยันตัวตน</p>
                                    <p className="lg:hidden border-none bg-violet-600 w-6 h-6 ml-2 text-center text-base font-normal rounded-full text-white">P</p>
                                </td>
                                <td>Caregiver</td>
                                <td>July 6, 2023</td>
                                <td className="flex gap-2 border-none justify-center items-center *:w-5  *:border-none">
                                    <img src="images/PencilSimpleLine.png" />
                                    <img src="images/Trash.png" />
                                </td>
                            </tr>
                            <tr className="*:h-10">
                                <td className="text-center">
                                    <input type="checkbox" className="my-auto scale-125 accent-emerald-600" />
                                </td>
                                <td>
                                    <div className="flex border-none justify-center">
                                        <img src="images/user.svg" className="w-7 bg-indigo-100 rounded-full border border-indigo-300" />
                                    </div>
                                </td>
                                <td>Mia Nadinn</td>
                                <td>mianaddiin@gmail.com</td>
                                <td>mianaddiin</td>
                                <td>
                                    <p className="hidden lg:block border-none bg-gray-400 w-fit px-2 py-0.5 rounded-full text-white">หยุดรับงาน</p>
                                    <p className="lg:hidden border-none bg-gray-400 w-6 h-6 ml-2 text-center text-base font-normal rounded-full text-white">/</p>
                                </td>
                                <td>Caregiver</td>
                                <td>December 31, 2021</td>
                                <td className="flex gap-2 border-none justify-center items-center *:w-5  *:border-none">
                                    <img src="images/PencilSimpleLine.png" />
                                    <img src="images/Trash.png" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
