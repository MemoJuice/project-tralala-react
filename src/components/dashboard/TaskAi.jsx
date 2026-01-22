import { useState } from "react";
import apiauth from "@/api/axios";

export default function TaskAi({ booking }) {
  const [summary, setSummary] = useState(booking?.seniorCareSummary || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await apiauth.patch(
        `/bookings/65a05001f1a2b3c4d5e6f701/ai/suggestion`,
        {},
      );

      setSummary(res.data.data.seniorCareSummary);
    } catch (err) {
      setError("ไม่สามารถสร้างสรุปงานจาก AI ได้");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lg:col-span-1 rounded-3xl p-2 shadow-lg bg-white">
      <div className="p-6 md:p-8 flex-1">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900">
            สรุปงานจาก AI
          </h2>

          {!summary && (
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="text-sm px-3 py-1 rounded-lg bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-50"
            >
              {loading ? "กำลังวิเคราะห์..." : "ให้ AI สรุป"}
            </button>
          )}
        </div>

        <div className="bg-linear-to-br from-purple-50 to-pink-100 rounded-2xl p-4 min-h-30">
          {summary ? (
            <p className="text-gray-700 text-sm md:text-base whitespace-pre-line">
              {summary}
            </p>
          ) : (
            <p className="text-gray-500 text-sm">ยังไม่มีสรุปงานจาก AI</p>
          )}
        </div>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <p className="text-xs text-gray-400 mt-3">
          วิเคราะห์จากข้อมูลในระบบ เพื่อช่วยการส่งต่องานผู้ดูแล
        </p>
      </div>
    </div>
  );
}
