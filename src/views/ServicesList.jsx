import { Link } from "react-router"

export default function ServicesList (){
    return (
     <div className="min-h-full mx-4 md:mx-12 mt-12 mb- bg-white rounded-2xl shadow p-6 grid grid-cols-1 md:grid-cols-2 overflow-hidden">
         {/* <!-- Heading --> */}

            {/* <!-- IMAGE --> */}
            <div className="bg-gray-50 flex items-center justify-center overflow-hidden">
              <img 
                src="https://bucknerparkwayplace.org/wp-content/uploads/2023/03/What-Are-the-Duties-of-a-Respite-Caregiver.png"
                alt="Service Image" 
                className="w-full object-contain rounded-2xl shadow-2xs"
              />
            </div>

            {/* <!-- CONTENT --> */}
            <div className="p-4 flex flex-col justify-between">
              
              <div>
                <p className="tracking-widest text-gray-500 text-sm">SERVICE</p>

                <h1 className="text-3xl font-bold mt-2">
                  บริการระยะสั้น
                </h1>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  Short-term care services provide temporary support for individuals who need assistance after illness, surgery, or when the family caregiver needs a break. Our professional caregivers help with daily activities, personal care, medication reminders, and companionship to ensure safety and comfort at home.
                </p>

                <p className="text-gray-500 text-sm mt-4">
                    Booking confirmation in few steps.
                </p>

                <a href="#" className="text-sm mt-1 underline text-gray-500">
                  View more details
                </a>
              </div>

              <div className="mt-6">
                <div className="flex w-full justify-evenly">
                  <p className="text-2xl font-semibold mb-4">299 thb</p>
                  <p className="text-2xl">ต่อชั่วโมง</p>
                </div>
                <Link to ="/order">
                  <button className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded w-full">
                        จองบริการ
                  </button></Link>
              </div>

            </div>
          </div>
  
  );
}