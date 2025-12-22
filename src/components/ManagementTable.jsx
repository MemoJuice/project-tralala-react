import { useState } from "react";

export default function ManagementTable() {
    const [data, setData] = useState([
        {"name": "John Smith", "email": "john.smith@gmail.com", "username": "jonny77", "status": "พร้อมรับงาน", "usertype": "Caregiver", "createdate": "March 12, 2023"},
        {"name": "Olivia Bennett", "email": "ollyben@gmail.com", "username": "olly659", "status": "หยุดรับงาน", "usertype": "Caregiver", "createdate": "June 27, 2022"},
        {"name": "Daniel Warren", "email": "jdwarren3@gmail.com", "username": "dwarren3", "status": "ระงับบัญชี", "usertype": "Caregiver", "createdate": "January 8, 2024"},
        {"name": "Chloe Hayes", "email": "chloehhye@gmail.com", "username": "chloehh", "status": "รอยืนยันตัวตน", "usertype": "Caregiver", "createdate": "October 5, 2021"},
        {"name": "Marcus Reed", "email": "reeds777@gmail.com", "username": "reeds7", "status": "รอยืนยันตัวตน", "usertype": "Caregiver", "createdate": "February 19, 2023"},
        {"name": "Isabelle Clark", "email": "belleclark@gmail.com", "username": "bellecl", "status": "พร้อมรับงาน", "usertype": "Caregiver", "createdate": "August 30, 2022"},
        {"name": "Lucas Mitchell", "email": "lucamich@gmail.com", "username": "lucamich", "status": "พร้อมรับงาน", "usertype": "Caregiver", "createdate": "April 23, 2024"},
        {"name": "Mark Wilburg", "email": "markwill32@gmail.com", "username": "markwill32", "status": "ระงับบัญชี", "usertype": "Caregiver", "createdate": "November 14, 2020"},
        {"name": "Nicholas Agenn", "email": "nicolass009@gmail.com", "username": "nicolass009", "status": "รอยืนยันตัวตน", "usertype": "Caregiver", "createdate": "July 6, 2023"},
        {"name": "Mia Nadinn", "email": "mianaddiin@gmail.com", "username": "mianaddiin", "status": "หยุดรับงาน", "usertype": "Caregiver", "createdate": "December 31, 2021"}
    ]);

    return (
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
                {data.length > 0 ? (
                    data.map((account) => (
                        <tr className="*:h-10">
                            <td className="text-center">
                                <input type="checkbox" className="my-auto scale-125 accent-emerald-600" />
                            </td>
                            <td>
                                <div className="flex border-none justify-center">
                                    <img src="images/user.svg" className="w-7 bg-indigo-100 rounded-full border border-indigo-300" />
                                </div>
                            </td>
                            <td>{account.name}</td>
                            <td>{account.email}</td>
                            <td>{account.username}</td>
                            {account.status=="พร้อมรับงาน" &&
                                <td>
                                    <p className="hidden lg:block border-none bg-green-600 w-fit px-2 py-0.5 rounded-full text-white">{account.status}</p>
                                    <p className="lg:hidden border-none bg-green-600 w-6 h-6 ml-2 text-center text-base font-normal rounded-full text-white">R</p>
                                </td>
                            }
                            {account.status=="หยุดรับงาน" &&
                                <td>
                                    <p className="hidden lg:block border-none bg-gray-400 w-fit px-2 py-0.5 rounded-full text-white">{account.status}</p>
                                    <p className="lg:hidden border-none bg-gray-400 w-6 h-6 ml-2 text-center text-base font-normal rounded-full text-white">/</p>
                                </td>
                            }
                            {account.status=="รอยืนยันตัวตน" &&
                                <td>
                                    <p className="hidden lg:block border-none bg-violet-600 w-fit px-2 py-0.5 rounded-full text-white">{account.status}</p>
                                    <p className="lg:hidden border-none bg-violet-600 w-6 h-6 ml-2 text-center text-base font-normal rounded-full text-white">P</p>
                                </td>
                            }
                            {account.status=="ระงับบัญชี" &&
                                <td>
                                    <p className="hidden lg:block border-none bg-red-600 w-fit px-2 py-0.5 rounded-full text-white">{account.status}</p>
                                    <p className="lg:hidden border-none bg-red-600 w-6 h-6 ml-2 text-center text-base font-normal rounded-full text-white">X</p>
                                </td>
                            }
                            <td>{account.usertype}</td>
                            <td>{account.createdate}</td>
                            <td className="flex gap-2 border-none justify-center items-center *:w-5  *:border-none">
                                <img src="images/PencilSimpleLine.png" />
                                <img src="images/Trash.png" />
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="9" className="h-10 text-center text-gray-500">
                            No account data found.
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}