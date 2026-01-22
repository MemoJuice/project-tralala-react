import { useNavigate } from "react-router-dom";

export default function ProductslistCard({
  caregivers,
  askResult,
  recommended,
  caregiverID,
  setCaregiverID,
}) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
        {caregivers.map((item) => (
          <div key={item._id} className="border rounded-lg shadow-sm bg-white">
            <img
              src={item.imageUrl}
              className="w-full h-80 object-cover"
              alt={item.firstName}
            />

            <div className="p-4">
              <h3 className="font-semibold">
                {item.firstName} {item.lastName}
              </h3>

              <p className="text-sm text-gray-600 mb-3">{item.introduction}</p>

              <div className="flex gap-3">
                {/* 🔥 จุดสำคัญ */}
                <button
                  type="button"
                  onClick={() => navigate(`/caregivers/${item._id}`)}
                  className="bg-sky-300 hover:bg-sky-500 text-white px-4 py-2 rounded-full"
                >
                  ดูข้อมูลเพิ่ม
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setCaregiverID(item._id);
                    navigate("/serviceslist");
                  }}
                  className="bg-pink-400 hover:bg-pink-600 text-white px-4 py-2 rounded-full"
                >
                  จองบริการ
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
