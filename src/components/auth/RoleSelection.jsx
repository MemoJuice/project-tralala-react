import React from "react";
import { User, Stethoscope } from "lucide-react";
import RoleCard from "./RoleCard";

export default function RoleSelection({ onRoleSelect }) {
  return (
    <div className="min-h-screen from-pink-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-purple-800 mb-3">
          เลือกบทบาท
        </h1>
        <p className="text-center text-gray-600 mb-10">
          คุณต้องการใช้งานเป็นผู้รับบริการหรือผู้ให้บริการ?
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <RoleCard
            role="customer"
            title="ผู้รับบริการ"
            description="ฉันกำลังหาผู้ดูแลเพื่อช่วยเหลือ"
            icon={<User size={48} className="text-pink-600" />}
            features={[
              "ค้นหาผู้ดูแลที่เหมาะสม",
              "บ่งบอกความต้องการทางการแพทย์",
              "ติดต่อผู้ดูแลโดยตรง",
            ]}
            color="pink"
            onSelect={() => onRoleSelect("customer")}
          />

          <RoleCard
            role="caregiver"
            title="ผู้ให้บริการ"
            description="ฉันเป็นผู้ดูแล / ผู้เชี่ยวชาญด้านการดูแล"
            icon={<Stethoscope size={48} className="text-purple-600" />}
            features={[
              "เสนอบริการของคุณ",
              "แสดงความเชี่ยวชาญและประสบการณ์",
              "เชื่อมต่อกับผู้ที่ต้องการความช่วยเหลือ",
            ]}
            color="purple"
            onSelect={() => onRoleSelect("caregiver")}
          />
        </div>
      </div>
    </div>
  );
}
