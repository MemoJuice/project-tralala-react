import ProductslistCard from "@/components/Productslist-card"

export default function OurCareGiver (){
    return (
        <div className="min-h-full mx-4 md:mx-24 mt-16 mb-12 bg-white rounded-2xl shadow p-6">

                 {/* <!-- Heading --> */}

            <div className="mb-6">
                <h2 className="text-4xl text-gray-700 font-bold">ผู้ดูแลของเรา</h2>
                <p className="text-gray-700">ทีมผู้ดูแลที่ผ่านการอบรม มีประสบการณ์ ใส่ใจ และดูแลด้วยความอบอุ่นเหมือนคนในครอบครัว</p>
            </div>

                {/* <!-- Body --> */}
            <ProductslistCard />
        </div>
    )
}