import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import ProfileHeader from "@/components/userprofile/01_ProfileHeader";
import Certificates from "@/components/userprofile/03_Certificates";
import Reviews from "@/components/userprofile/05_Reviews";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CareGiverCard() {
  const { id } = useParams(); // caregiver ID from URL
  const navigate = useNavigate();
  const location = useLocation();
  const [caregiver, setCaregiver] = useState(null);

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

  async function handleBookingSubmit({ startDate, endDate, shift, caregiverId }) {
    try {
      const res = await axios.post("/api/bookings", {
        startDate,
        endDate,
        shift,
        caregiverId,
      });
      if (res.status === 200) {
        navigate("/cart");
      }
    } catch (err) {
      alert("เกิดข้อผิดพลาดในการจอง");
    }
  }

  // if (!caregiver) return <p>Loading...</p>;

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
        <div className="w-full bg-pink-50 rounded-2xl p-6 mt-8">
          <h3 className="text-xl font-bold mb-4">กรุณาเลือกบริการและวันเวลา</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formStart = e.target.startDate.value;
              const formEnd = e.target.endDate.value;
              const formShift = e.target.shift.value;

              if (!formStart || !formEnd || !formShift) {
                alert("กรุณากรอกข้อมูลให้ครบ");
                return;
              }

              handleBookingSubmit({
                startDate: formStart,
                endDate: formEnd,
                shift: formShift,
                caregiverId: id,
              });
            }}
            className="flex flex-col gap-4"
          >
            <label className="text-lg">วันเริ่ม</label>
            <input type="date" name="startDate" className="border rounded px-3 py-2" />

            <label className="text-lg">วันสิ้นสุด</label>
            <input type="date" name="endDate" className="border rounded px-3 py-2" />

            <label className="text-lg">เลือกเวร</label>
            <select name="shift" className="border rounded px-3 py-2">
              <option value="">เลือกเวร</option>
              <option value="dayshift">เวรเช้า (8.00-19.00)</option>
              <option value="nightshift">เวรดึก (19.00-8.00)</option>
            </select>

            <button
              type="submit"
              className="bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-600 mt-4"
            >
              จองบริการ
            </button>
          </form>
        </div>
      )}
    </div>
  );
}