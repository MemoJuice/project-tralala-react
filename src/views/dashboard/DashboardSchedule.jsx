export default function DashboardSchedule() {
  const schedules = [
    {
      id: 1,
      date: "11/01/2569",
      detail: "ดูแลรายวันเวลา 10.00-18.00 น.",
      income: "1,500.-",
      status: "สำเร็จ",
      statusColor: "text-green-600 bg-green-50",
    },
    {
      id: 2,
      date: "20/01/2569",
      detail: "พาผู้ป่วยไปหาหมอและพากลับบ้าน",
      income: "1,200.-",
      status: "กำลังดำเนินการ",
      statusColor: "text-blue-600 bg-blue-50",
    },
    {
      id: 3,
      date: "30/01/2569",
      detail: "ดูแลรายวันเวลา 8.00-16.00 น.",
      income: "1,500.-",
      status: "กำลังดำเนินการ",
      statusColor: "text-blue-600 bg-blue-50",
    },
  ];

  return (
    <div className="min-h-screen bg-pink-300 p-8">
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
                  รายได้
                </th>
                <th className="text-left px-6 py-4 font-semibold text-gray-700 border-b">
                  สถานะ
                </th>
              </tr>
            </thead>
            <tbody>
              {schedules.map((schedule, index) => (
                <tr 
                  key={schedule.id}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="px-6 py-4 border-b text-gray-700">
                    {String(schedule.id).padStart(2, '0')}
                  </td>
                  <td className="px-6 py-4 border-b text-gray-700">
                    {schedule.date}
                  </td>
                  <td className="px-6 py-4 border-b text-gray-700">
                    {schedule.detail}
                  </td>
                  <td className="px-6 py-4 border-b text-gray-700">
                    {schedule.income}
                  </td>
                  <td className="px-6 py-4 border-b">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${schedule.statusColor}`}>
                      {schedule.status}
                    </span>
                  </td>
                </tr>
              </thead>
              <tbody>
                {schedules.map((schedule, index) => (
                  <tr
                    key={schedule.id}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-6 py-4 border-b text-gray-700">
                      {String(schedule.id).padStart(2, "0")}
                    </td>
                    <td className="px-6 py-4 border-b text-gray-700">
                      {schedule.date}
                    </td>
                    <td className="px-6 py-4 border-b text-gray-700">
                      {schedule.detail}
                    </td>
                    <td className="px-6 py-4 border-b text-gray-700">
                      {schedule.income.toLocaleString()}.-
                    </td>
                    <td className="px-6 py-4 border-b">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${schedule.statusColor}`}
                      >
                        {schedule.status}
                      </span>
                    </td>
                  </tr>
                ))}

                {/* Empty rows */}
                {[...Array(3)].map((_, index) => (
                  <tr key={`empty-${index}`} className="bg-white">
                    <td className="px-6 py-4 border-b">&nbsp;</td>
                    <td className="px-6 py-4 border-b">&nbsp;</td>
                    <td className="px-6 py-4 border-b">&nbsp;</td>
                    <td className="px-6 py-4 border-b">&nbsp;</td>
                    <td className="px-6 py-4 border-b">&nbsp;</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Total Income Section */}
          <div className="bg-yellow-100 rounded-2xl shadow-lg p-6 mt-4 flex justify-between items-center">
            <span className="text-lg font-bold text-gray-800">
              รายได้รวมทั้งหมด
            </span>
            <span className="text-lg font-bold text-green-600">
              {totalIncome.toLocaleString()}.- บาท
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
