import {Clock} from 'lucide-react';


export default function ViewHistoryLog() {
  return (
    <div>
    {/* History Log*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  <div className="bg-white rounded-2xl p-6 shadow-sm w-150 h-100 mt-6 ml-20">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-teal-50 rounded-lg">
        <Clock className="w-6 h-6 text-teal-600" />
      </div>
      <h2 className="text-xl font-bold text-gray-800">
        รายการย้อนหลัง
      </h2>
    </div>
    
    <div className="text-center py-8">
      <p className="text-gray-400">--ข้อมูล--</p>
    </div>
  </div>
</div>
</div>
 )
}
