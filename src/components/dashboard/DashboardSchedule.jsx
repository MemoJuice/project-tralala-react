export default function DashboardSchedule({ schedule }) {
  // 👉 ไม่มีตารางงาน
  if (!schedule || schedule.length === 0) {
    return (
      <div className="mt-6 bg-white rounded-2xl shadow-lg p-8 text-center text-gray-400">
        ยังไม่มีตารางงานที่กำลังจะมาถึง
      </div>
    );
  }

  // map status → สี
  const statusMap = {
    COMPLETED: "text-green-600 bg-green-50",
    ACTIVE: "text-blue-600 bg-blue-50",
    SCHEDULED: "text-yellow-600 bg-yellow-50",
    CANCELLED: "text-red-600 bg-red-50",
  };

  return (
    <div className="min-h-screen p-8 mt-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        ตารางงาน
      </h1>

      <div className="flex justify-center">
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-yellow-50">
              <tr>
                <th className="text-left px-6 py-4 font-semibold text-gray-700 border-b">
                  ลำดับ
                </th>
                <th className="text-left px-6 py-4 font-semibold text-gray-700 border-b">
                  วันที่ปฏิบัติงาน
                </th>
                <th className="text-left px-6 py-4 font-semibold text-gray-700 border-b">
                  รายละเอียดงาน
                </th>
                <th className="text-left px-6 py-4 font-semibold text-gray-700 border-b">
                  สถานะ
                </th>
              </tr>
            </thead>

            <tbody>
              {schedule.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="px-6 py-4 border-b text-gray-700">
                    {String(index + 1).padStart(2, "0")}
                  </td>

                  <td className="px-6 py-4 border-b text-gray-700">
                    {new Date(item.date).toLocaleDateString("th-TH")}
                  </td>

                  <td className="px-6 py-4 border-b text-gray-700">
                    {item.service} ({item.time})
                  </td>

                  <td className="px-6 py-4 border-b">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        statusMap[item.status] || "text-gray-600 bg-gray-100"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}

              {/* เติมแถวเปล่าให้ table ดูนิ่ง */}
              {[...Array(Math.max(0, 5 - schedule.length))].map((_, i) => (
                <tr key={`empty-${i}`} className="bg-white">
                  <td className="px-6 py-4 border-b">&nbsp;</td>
                  <td className="px-6 py-4 border-b">&nbsp;</td>
                  <td className="px-6 py-4 border-b">&nbsp;</td>
                  <td className="px-6 py-4 border-b">&nbsp;</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
