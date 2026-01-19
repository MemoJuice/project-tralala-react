import {Clock} from 'lucide-react';

export default function ReportClient() {
  return (
    <div className="col-span-12 md:col-span-8 flex justify-end items-start pt-6">
      <div className="bg-gray-200 rounded-2xl p-4 w-150 h-100 flex flex-col pt-6 mr-8 mb-8">
        <h1 className="text-lg text-black font-semibold mb-4">
          บันทึกรายละเอียดของผู้ใช้บริการ
        </h1>
        <p classname="text-gray">--ข้อมูล--</p>
      </div>
    </div>
  );
}
