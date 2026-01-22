import { Clock, MapPin, Users } from "lucide-react";

export default function TodayTaskCard({ task }) {
  // 👉 กรณีไม่มีงานวันนี้
  if (!task) {
    return (
      <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 text-gray-400 flex items-center justify-center">
        วันนี้ยังไม่มีงาน
      </div>
    );
  }

  return (
    <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow flex flex-col">
      <div className="p-6 md:p-8 flex-1">
        {/* Header */}
        <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-linear-to-br from-pink-400 to-pink-600 rounded-full shrink-0 flex items-center justify-center">
            <Users className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </div>

          <div className="flex-1">
            <p className="text-blue-600 font-semibold text-sm md:text-lg">
              งานวันนี้
            </p>
            <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-1 md:mb-2 line-clamp-2">
              {task.title}
            </h2>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
          {task.description}
        </p>

        {/* Info */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6">
          {/* เวลาทำงาน */}
          <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl p-3 md:p-4">
            <div className="flex items-center gap-2 mb-1 md:mb-2">
              <Clock className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
              <span className="text-xs md:text-sm text-gray-600">
                เวลาทำงาน
              </span>
            </div>
            <p className="text-base md:text-xl font-bold text-gray-900">
              {task.workHours}
            </p>
          </div>

          {/* ระยะเวลา */}
          <div className="bg-linear-to-br from-purple-50 to-purple-100 rounded-2xl p-3 md:p-4">
            <div className="flex items-center gap-2 mb-1 md:mb-2">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
              <span className="text-xs md:text-sm text-gray-600">ระยะเวลา</span>
            </div>
            <p className="text-base md:text-xl font-bold text-gray-900">
              {task.duration}
            </p>
          </div>

          {/* ราคา */}
          <div className="bg-linear-to-br from-green-50 to-green-100 rounded-2xl p-3 md:p-4 col-span-2 md:col-span-1">
            <span className="text-xs md:text-sm text-gray-600">ราคาต่อวัน</span>
            <p className="text-base md:text-xl font-bold text-purple-600">
              {task.price?.toLocaleString("th-TH")} บาท
            </p>
          </div>
        </div>

        {/* Status */}
        <div className="text-sm text-gray-500">
          สถานะงาน:{" "}
          <span className="font-semibold text-gray-700">{task.status}</span>
        </div>
      </div>
    </div>
  );
}
