import { useState, useEffect } from "react";
import { Upload, AlertCircle, CheckCircle, Loader } from "lucide-react";
import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api/v1/customers";

export default function CustomerProfileForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const [formData, setFormData] = useState({
    // Patient Information
    firstName: "",
    lastName: "",
    gender: "Other",
    dob: "",
    phone: "",
    address: "",
    // Guardian Information
    guardian: {
      firstName: "",
      lastName: "",
      relationship: "",
      phone: "",
      email: "",
    },
    // User ID (required from model)
    userID: "",
  });

  // Fetch customers on mount
  useEffect(() => {
    // Optional: Load existing customers if needed
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGuardianChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      guardian: {
        ...prev.guardian,
        [name]: value,
      },
    }));
  };

  const showMessage = (msg, type) => {
    setMessage(msg);
    setMessageType(type);
    setTimeout(() => setMessage(""), 3000);
  };

  const handleSave = async () => {
    try {
      // Validation
      if (!formData.firstName || !formData.lastName || !formData.phone) {
        showMessage("กรุณากรอกข้อมูลผู้ป่วยให้ครบ", "error");
        return;
      }

      if (
        !formData.guardian.firstName ||
        !formData.guardian.lastName ||
        !formData.guardian.phone
      ) {
        showMessage("กรุณากรอกข้อมูลผู้ดูแลให้ครบ", "error");
        return;
      }

      if (!formData.userID) {
        showMessage("กรุณากรอก User ID", "error");
        return;
      }

      setLoading(true);

      const response = await axios.post(API_BASE_URL, formData);
      const result = response.data;

      if (result.success) {
        showMessage("บันทึกข้อมูลสำเร็จ!", "success");
        setFormData({
          firstName: "",
          lastName: "",
          gender: "Other",
          dob: "",
          phone: "",
          address: "",
          guardian: {
            firstName: "",
            lastName: "",
            relationship: "",
            phone: "",
            email: "",
          },
          userID: "",
        });
      } else {
        showMessage(result.message || "เกิดข้อผิดพลาด", "error");
      }
    } catch (error) {
      showMessage("เกิดข้อผิดพลาด: " + error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="flex justify-center">
        <div className="w-full max-w-6xl bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-gray-800 text-white px-8 py-8">
            <h1 className="text-3xl font-bold text-center">
              กรอกประวัติส่วนตัว
            </h1>
            <p className="text-gray-300 text-center mt-2">
              บันทึกข้อมูลสำคัญสำหรับการดูแลสุขภาพ
            </p>
          </div>

          {/* Message Alert */}
          {message && (
            <div
              className={`mx-8 mt-6 p-4 rounded flex items-center gap-3 ${
                messageType === "success"
                  ? "bg-green-100 border border-green-400 text-green-800"
                  : "bg-red-100 border border-red-400 text-red-800"
              }`}
            >
              {messageType === "success" ? (
                <CheckCircle size={20} />
              ) : (
                <AlertCircle size={20} />
              )}
              <span>{message}</span>
            </div>
          )}

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Patient Information Section */}
            <div className="space-y-6">
              <div className="border-l-4 border-gray-400 pl-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  ประวัติส่วนตัว (ผู้ป่วย)
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    User ID *
                  </label>
                  <input
                    type="text"
                    name="userID"
                    placeholder="กรอก User ID"
                    value={formData.userID}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ชื่อ *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="กรอกชื่อ"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      นามสกุล *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="กรอกนามสกุล"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      เพศ
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                    >
                      <option value="Male">ชาย</option>
                      <option value="Female">หญิง</option>
                      <option value="Other">อื่นๆ</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      วันเกิด
                    </label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    เบอร์โทรศัพท์ *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="0XX-XXX-XXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ที่อยู่
                  </label>
                  <textarea
                    name="address"
                    placeholder="กรอกที่อยู่"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent resize-none"
                  />
                </div>

                {/* Upload Section */}
                <div className="flex justify-center pt-4">
                  <label className="flex flex-col items-center justify-center w-32 h-32 bg-gray-100 rounded border-2 border-dashed border-gray-300 hover:bg-gray-50 cursor-pointer transition-all">
                    <Upload size={32} className="text-gray-600" />
                    <span className="text-xs text-gray-600 font-medium mt-2 text-center px-2">
                      อัปโหลดรูป
                    </span>
                    <input type="file" accept="image/*" className="hidden" />
                  </label>
                </div>
              </div>
            </div>

            {/* Guardian Information Section */}
            <div className="space-y-6">
              <div className="border-l-4 border-gray-400 pl-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  ประวัติส่วนตัว (ผู้ดูแล)
                </h2>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ชื่อ *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="กรอกชื่อ"
                      value={formData.guardian.firstName}
                      onChange={handleGuardianChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      นามสกุล *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="กรอกนามสกุล"
                      value={formData.guardian.lastName}
                      onChange={handleGuardianChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ความสัมพันธ์ *
                  </label>
                  <input
                    type="text"
                    name="relationship"
                    placeholder="เช่น พ่อ แม่ ลูก"
                    value={formData.guardian.relationship}
                    onChange={handleGuardianChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      เบอร์โทรศัพท์ *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="0XX-XXX-XXXX"
                      value={formData.guardian.phone}
                      onChange={handleGuardianChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      อีเมล *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="example@email.com"
                      value={formData.guardian.email}
                      onChange={handleGuardianChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Upload Section */}
                <div className="flex justify-center pt-12">
                  <label className="flex flex-col items-center justify-center w-32 h-32 bg-gray-100 rounded border-2 border-dashed border-gray-300 hover:bg-gray-50 cursor-pointer transition-all">
                    <Upload size={32} className="text-gray-600" />
                    <span className="text-xs text-gray-600 font-medium mt-2 text-center px-2">
                      อัปโหลดรูป
                    </span>
                    <input type="file" accept="image/*" className="hidden" />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-8 py-6 flex justify-center border-t border-gray-200">
            <button
              onClick={handleSave}
              disabled={loading}
              className="bg-gray-800 hover:bg-gray-700 disabled:bg-gray-400 text-white font-bold py-2 px-8 rounded transition-colors duration-200 flex items-center gap-2"
            >
              {loading ? (
                <>
                  <Loader size={20} className="animate-spin" />
                  กำลังบันทึก...
                </>
              ) : (
                <>บันทึก</>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
