  import { Link } from "react-router"
  import { useNavigate } from "react-router-dom";
  import { useEffect, useState } from "react"



  const products = [
    {
      id: 1,
      name: "นานา จาจา",
      image: "images/pdlist-1.png",
      description: "Caring hands, trusted hearts — reliable care you can count on.",
      recommended: true,
    },
    {
      id: 2,
      name: "Jone doh",
      image: "images/pdlist-2.png",
      description: "Compassionate caregiver support for your loved ones.",
      recommended: true,
    },
    {
      id: 3,
      name: "สมศรี ดีจ้า",
      image: "images/pdlist-3.png",
      description: "Quality care at home, delivered with kindness.",
      recommended: true,
    },
    {
      id: 4,
      name: "สมหญิง น่ารัก",
      image: "images/pdlist-4.png",
      description: "Helping seniors live safely, comfortably, and with dignity.",
      recommended: true,
    },
    {
      id: 5,
      name: "สมชาย ใจดี",
      image: "images/pdlist-5.png",
      description: "Personalized care for every stage of life.",
      recommended: false,
    },
    {
      id: 6,
      name: "สมหวัง ถูกหวย",
      image: "images/pdlist-6.png",
      description: "Support you need, comfort they deserve.",
      recommended: false,
    },
  ]

  export default function ProductslistCard ({caregivers, recommended, askResult, caregiverID, setCaregiverID}){
    const navigate = useNavigate();

    const handleCaregiverID = (e) => {
      setCaregiverID(e.target.value);
      navigate("/serviceslist");
    };

    useEffect(() => {
      console.log(`caregiverID: ${caregiverID}`);
    }, [caregiverID]);

    return (
      <div className="flex flex-col gap-6">
        {recommended && askResult &&
          <h3 className="text-3xl text-gray-700 font-bold">ผู้ดูแลที่ตรงกับผลการค้นหา</h3>
        }
        { !recommended && askResult &&
          <h3 className="text-3xl text-gray-700 font-bold">ผู้ดูแลอื่นๆ</h3>
        }
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
          {caregivers.map((item) => (
            <div
              key={item._id}
              className="border rounded-lg shadow-sm overflow-hidden bg-white hover:scale-105"
            >
              <img
                src={item.imageUrl}
                className="w-full h-80 object-cover"
                alt={item.firstName}
              />
              <div className="p-4">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-semibold">{item.firstName} {item.lastName}</h3>

                  {recommended && (
                    <span className="text-xs text-blue-600 border border-blue-500 px-2 py-0.5 rounded-4xl">
                      แนะนำ
                    </span>
                  )}
                </div>

                <p className="text-sm text-gray-600 mb-3">
                  {item.introduction}
                </p>
                
                <div className="flex-wrap md:justify-evenly items-start ">
                  <Link to="/caregivercard">
                    <button
                    type="readmore"
                    className="w-35 mr-6  bg-sky-300 hover:bg-sky-500 text-white text-xl text-shadow-2xs px-4 py-2 rounded-4xl">
                      ดูข้อมูลเพิ่ม
                    </button>
                  </Link>
                  
                  <button
                    type="booking"
                    className="bg-pink-400 w-55 mt-2 md-4 hover:bg-pink-600 text-white text-xl text-shadow-2xs px-4 py-2 rounded-4xl" value={item._id}
                    onClick={handleCaregiverID}
                  >
                    จองบริการ
                  </button>
                
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
      )
  };