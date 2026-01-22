import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import ProfileHeader from "@/components/userprofile/01_ProfileHeader";
import Certificates from "@/components/userprofile/03_Certificates";
import Reviews from "@/components/userprofile/05_Reviews";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { MessageContext } from "../context/MessageContext"; 
import ServiesBar from "@/components/caregivercard/ServiesBar";

export default function CareGiverCard() {
  const { id } = useParams(); // caregiver ID from URL
  const navigate = useNavigate();
  const location = useLocation();
  const [caregiver, setCaregiver] = useState(null);

  const { cart, setCart } = useContext(MessageContext); // ✅ use context

  // read booking details from query params
  const searchParams = new URLSearchParams(location.search);
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const shift = searchParams.get("shift");
  const hasBookingDetails = startDate && endDate && shift;

  useEffect(() => {
    async function fetchCaregiver() {
      if (!id) return;
      try {
        const res = await axios.get(`/api/caregivers/${id}`);
        setCaregiver(res.data);
      } catch (err) {
        console.error("Failed to fetch caregiver", err);
      }
    }
    fetchCaregiver();
  }, [id]);

  function handleBookingSubmit({ startDate, endDate, shift, caregiverId }) {
    // ✅ Save booking details into context cart
    setCart({
      ...cart,
      serviceType: "custom", // or daily/hospital/monthly depending on flow
      startDate,
      endDate,
      shift,
      caregiverID: caregiverId,
    });

    // ✅ Navigate to cart page
    navigate("/cart");
  }

  return (
    <div className="min-h-full mx-6 p-2 md:mx-40 mt-16 mb-8 bg-white rounded-2xl overflow-auto flex flex-col justify-center items-center">
      <ProfileHeader />
      <Certificates />
      <Reviews />

      {/* Action buttons */}
      <div className="flex flex-wrap justify-center items-center md:gap-4 mt-6">
        {hasBookingDetails ? (
          <button
            onClick={() =>
              handleBookingSubmit({
                startDate,
                endDate,
                shift,
                caregiverId: id,
              })
            }
            type="button"
            className="bg-pink-400 text-2xl w-80 md:w-100 hover:bg-pink-600 text-white px-4 py-2 rounded-4xl"
          >
            จองบริการ
          </button>
        ) : (
          <button
            onClick={() => navigate("/cart")}
            type="button"
            className="bg-pink-400 text-2xl w-80 md:w-100 hover:bg-pink-600 text-white px-4 py-2 rounded-4xl"
          >
            เลือกบริการและวันเวลา
          </button>
        )}
      </div>

      {/* Inline booking section if no details */}
      {!hasBookingDetails && (
          <ServiesBar />
      )}
    </div>
  );
}
