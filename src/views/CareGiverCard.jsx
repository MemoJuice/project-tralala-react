import { Link } from "react-router-dom";
import ProfileHeader from "@/components/userprofile/01_ProfileHeader";
import Certificates from "@/components/userprofile/03_Certificates";
import Reviews from "@/components/userprofile/05_Reviews";

export default function CareGiverCard (){
  
      return (
        <div className="min-h-full mx-6 p-2 md:mx-12 mt-16 mb-8 bg-white rounded-2xl overflow-auto flex flex-col justify-center items-center">
            <ProfileHeader />
              <Link to="/cart">
                <button
                  // onClick={handleBookingSubmit}
                  type="booking"
                  className="bg-pink-400 text-2xl w-50 hover:bg-pink-600 text-white px-4 py-2 rounded-4xl">
                      จองบริการ
                </button>
              </Link>
            <Certificates />
            <Reviews />
            <div className="flex flex-wrap justify-center items-center overflow-hidden md:flex md:gap-4">
              <Link to="/ourcaregiver">
                <button
                  type="booking"
                  className="bg-sky-300 text-2xl w-50 hover:bg-sky-400 text-white px-4 py-2 rounded-4xl ">
                          กลับไปหน้าก่อน
                </button>
              </Link>
              <Link to="/cart">
                <button
                  // onClick={handleBookingSubmit}
                  type="booking"
                  className="bg-pink-400 text-2xl w-80 md:w-100 hover:bg-pink-600 text-white px-4 py-2 rounded-4xl ">
                    จองบริการ
                </button>
              </Link>
			</div>
		</div>
    )
}