import ProductslistCard from "@/components/ourcaregiver/Productslist-card";
import { useState, useEffect } from "react";

export default function OurCareGiver (){
// const [caregivers, setCaregivers] = useState([])
// const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     fetch("http://localhost:3000/caregivers")
//       .then(res => res.json())
//       .then(data => {
//         setCaregivers(data)
//         setLoading(false)
//       })
//   }, [])

    return (
        <div className="min-h-full mx-4 md:mx-24 mt-16 mb-12 bg-white rounded-2xl shadow p-6">
            <div className="mb-6">
                <h2 className="text-4xl text-gray-700 font-bold">ผู้ดูแลของเรา</h2>
                <p className="text-gray-700">ทีมผู้ดูแลที่ผ่านการอบรม มีประสบการณ์ ใส่ใจ และดูแลด้วยความอบอุ่นเหมือนคนในครอบครัว</p>
            </div>
                <ProductslistCard/>
             {/* {loading ? (
        <p className="text-center text-gray-500">กำลังโหลดข้อมูล...</p>
      ) : (
        <ProductslistCard data={caregivers} />
      )} */}
        </div>
    );
}       