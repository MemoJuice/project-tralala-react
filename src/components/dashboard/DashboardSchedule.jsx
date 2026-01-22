export default function DashboardSchedule({ schedule }) {
  if (!schedule || schedule.length === 0) {
    return (
      <div className="mt-6 bg-white rounded-2xl shadow-lg p-8 text-center text-gray-400">
        ยังไม่มีประวัติงาน
      </div>
    );
  }

  const statusMap = {
    COMPLETED: "text-green-600 bg-green-50",
    ACTIVE: "text-blue-600 bg-blue-50",
    SCHEDULED: "text-yellow-600 bg-yellow-50",
    CANCELLED: "text-red-600 bg-red-50",
  };

  return (
    <div className="p-8 mt-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        ประวัติงานทั้งหมด
      </h1>

      <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
        <table className="w-full">
          <thead className="bg-yellow-50">
            <tr>
              <th className="px-6 py-4 text-left">ลำดับ</th>
              <th className="px-6 py-4 text-left">วันที่</th>
              <th className="px-6 py-4 text-left">งานที่ได้รับ</th>
              <th className="px-6 py-4 text-left">สถานะ</th>
            </tr>
          </thead>

          <tbody>
            {schedule.map((item, index) => (
              <tr
                key={item.id}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-6 py-4">
                  {String(index + 1).padStart(2, "0")}
                </td>

                <td className="px-6 py-4">
                  {new Date(item.date).toLocaleDateString("th-TH")}
                </td>

                <td className="px-6 py-4">
                  {item.service}
                  <div className="text-sm text-gray-400">{item.time}</div>
                </td>

                <td className="px-6 py-4">
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
          </tbody>
        </table>
      </div>
    </div>
  );
}
