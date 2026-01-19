import {Clock} from 'lucide-react';


export default function ViewHistoryLog() {
  return (
    <div>
    {/* History and Reports Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* History Log */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-teal-50 rounded-lg">
                <Clock className="w-6 h-6 text-teal-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">
                รายการย้อนหลัง
              </h2>
            </div>
        <p classname="text-gray">--ข้อมูล--</p>
      </div>
    </div>
    </div>
  )
}
