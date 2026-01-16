import { Link } from "react-router"

export default function ProductslistCard (){
    return (
            <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
                <div className="border rounded-lg shadow-sm overflow-hidden bg-white">
                    <img src="images/pdlist-1.png" className="w-full h-80 object-cover" />
                    <div className="p-4">
                    <div className="flex justify-between items-center mb-1">
                        <h3 className="font-semibold">นานา จาจา</h3>
                        <span className="text-xs text-blue-600 border border-blue-500 px-2 py-0.5 rounded-4xl">
                            แนะนำ
                        </span>
                    </div>

                    <p className="text-sm text-gray-600 mb-3">
                    Caring hands, trusted hearts — reliable care you can count on.
                    </p>
                        <Link to ="/cart"><button className="bg-pink-400 hover:bg-pink-600 text-white text-sm px-4 py-2 rounded-4xl">
                        จองบริการ
                        </button></Link>
                    </div>
                </div>

                {/* <!-- card 2 --> */}
                <div className="border rounded-lg shadow-sm overflow-hidden bg-white">
                    <img src="images/pdlist-2.png" className="w-full h-80 object-cover" />
                    <div className="p-4">
                    <div className="flex justify-between items-center mb-1">
                        <h3 className="font-semibold">Jone doh</h3>
                        <span className="text-xs text-blue-600 border border-blue-500 px-2 py-0.5 rounded-4xl">
                        แนะนำ
                        </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                        Compassionate caregiver support for your loved ones.
                    </p>
                        <Link to ="/cart"><button className="bg-pink-400 hover:bg-pink-600 text-white text-sm px-4 py-2 rounded-4xl">
                        จองบริการ
                        </button></Link>
                    </div>
                </div>

                    {/* <!-- Card 3--> */}

                <div className="border rounded-lg shadow-sm overflow-hidden bg-white">
                    <img src="images/pdlist-3.png" className="w-full h-80 object-cover" />
                    <div className="p-4">
                    <div className="flex justify-between items-center mb-1">
                        <h3 className="font-semibold">สมศรี ดีจ้า</h3>
                        <span className="text-xs text-blue-600 border border-blue-500 px-2 py-0.5 rounded-4xl">
                        แนะนำ
                        </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                        Quality care at home, delivered with kindness.
                    </p>
                        <Link to ="/cart"><button className="bg-pink-400 hover:bg-pink-600 text-white text-sm px-4 py-2 rounded-4xl">
                        จองบริการ
                        </button></Link>
                    </div>
                </div>

                    {/* <!-- Card 4--> */}

            <div className="border rounded-lg shadow-sm overflow-hidden bg-white">
                <img src="images/pdlist-4.png" className="w-full h-80 object-cover" />
                    <div className="p-4">
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="font-semibold">สมหญิง น่ารัก</h3>
                            <span className="text-xs text-blue-600 border border-blue-500 px-2 py-0.5 rounded-4xl">
                                แนะนำ
                            </span>
                        </div>
                    <p className="text-sm text-gray-600 mb-3">
                        Helping seniors live safely, comfortably, and with dignity.
                    </p>
                        <Link to ="/cart"><button className="bg-pink-400 hover:bg-pink-600 text-white text-sm px-4 py-2 rounded-4xl">
                        จองบริการ
                        </button></Link>
                </div>
            </div>

                    {/* <!-- Card 5--> */}

            <div className="border rounded-lg shadow-sm overflow-hidden bg-white">
                <img src="images/pdlist-5.png" className="w-full h-80 object-cover" />
                    <div className="p-4">
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="font-semibold">สมชาย ใจดี</h3>
                        </div>
                    <p className="text-sm text-gray-600 mb-3">
                        Personalized care for every stage of life.
                    </p>
                        <Link to ="/cart"><button className="bg-pink-400 hover:bg-pink-600 text-white text-sm px-4 py-2 rounded-4xl">
                        จองบริการ
                        </button></Link>
                    </div>
            </div>

                    {/* <!-- Card 6--> */}

            <div className="border rounded-lg shadow-sm overflow-hidden bg-white">
                <img src="images/pdlist-6.png" className="w-full h-80 object-cover" />
                <div className="p-4">
                    <div className="flex justify-between items-center mb-1">
                            <h3 className="font-semibold">สมหวัง ถูกหวย</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                        Support you need, comfort they deserve.
                    </p>
                        <Link to ="/cart"><button className="bg-pink-400 hover:bg-pink-600 text-white text-sm px-4 py-2 rounded-4xl">
                         จองบริการ
                        </button></Link>
                </div>
            </div>
        </div>
    )
};