import {FileText} from 'lucide-react';

export default function ReportClient() {
  return (
    // <div className="col-span-12 md:col-span-8 flex justify-end items-start pt-6">
    //   <div className="bg-gray-200 rounded-2xl p-4 w-150 h-100 flex flex-col pt-6 mr-8 mb-8">
    //     <div className="p-2 bg-amber-50 rounded-lg">
    //             <FileText className="w-6 h-6 text-amber-600" />
    //           </div>
    //     <h1 className="text-lg text-black font-semibold mb-4">
    //       บันทึกรายละเอียดของผู้ใช้บริการ
    //     </h1>
    <div className="col-span-12 md:col-span-8 flex justify-end items-start pt-6">
  <div className="bg-gray-200 rounded-2xl p-4 w-150 h-100 flex flex-col pt-6 mr-8 mb-8">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-teal-50 rounded-lg">
        <FileText className="w-6 h-6 text-teal-600" />
      </div>
      <h2 className="text-xl font-bold text-gray-800">
        บันทึกข้อมูลเพิ่มเติมผู้ใช้บริการ
      </h2>
    </div>
        <div className="text-center py-8">
      <p className="text-gray-400">--ข้อมูล--</p>
      </div>
    </div>
    </div>
  );
}
