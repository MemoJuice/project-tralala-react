import { Link } from "react-router";
import { useEffect, useState } from "react";

export default function ProfileInfoForm() {
  /* ===================== STATE ===================== */
  const [seniorForm, setSeniorForm] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    medicalProfile: {
      mobilityLevel: "",
      cognitiveStatus: "",
      allergies: "",
      chronicConditions: "",
    },
  });

  const [relativeForm, setRelativeForm] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    phone: "",
    email: "",
    relationship: "",
  });

  const [payload, setPayload] = useState(null);

  /* ===================== NORMALIZE BEFORE POST ===================== */
  useEffect(() => {
    const normalizedPayload = {
      senior: {
        ...seniorForm,
        dob: seniorForm.dob ? new Date(seniorForm.dob) : null,
        medicalProfile: {
          ...seniorForm.medicalProfile,
          allergies: seniorForm.medicalProfile.allergies
            ? seniorForm.medicalProfile.allergies.split(",").map(v => v.trim())
            : [],
          chronicConditions: seniorForm.medicalProfile.chronicConditions
            ? seniorForm.medicalProfile.chronicConditions.split(",").map(v => v.trim())
            : [],
        },
      },
      relative: {
        ...relativeForm,
        dob: relativeForm.dob ? new Date(relativeForm.dob) : null,
      },
    };

    setPayload(normalizedPayload);
  }, [seniorForm, relativeForm]);

  /* ===================== SUBMIT ===================== */
  const handleSubmit = async () => {
    console.log("Payload to backend:", payload);

    // await fetch("/api/profile", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(payload),
    // });
  };

  /* ===================== UI ===================== */
  return (
    <section className="min-h-screen flex items-center justify-center font-noto">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl p-6 md:p-10 m-6">
        <h1 className="text-center text-3xl md:text-4xl font-bold mb-8">
          ข้อมูลผู้ใช้บริการ
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* ===================== SENIOR ===================== */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold border-b border-pink-200 pb-2">
              ประวัติส่วนตัว (ผู้สูงอายุ)
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input label="ชื่อ" value={seniorForm.firstName}
                onChange={e => setSeniorForm({ ...seniorForm, firstName: e.target.value })} />
              <Input label="นามสกุล" value={seniorForm.lastName}
                onChange={e => setSeniorForm({ ...seniorForm, lastName: e.target.value })} />
              <Input label="วันเกิด" type="date" value={seniorForm.dob}
                onChange={e => setSeniorForm({ ...seniorForm, dob: e.target.value })} />

              <Select label="เพศ" value={seniorForm.gender}
                onChange={e => setSeniorForm({ ...seniorForm, gender: e.target.value })}
                options={["ชาย", "หญืง", "ไม่ระบุ"]} />
            </div>

                <Select label="ระดับสุขภาพ" 
                    value={seniorForm.medicalProfile.healthLevel || ""} 
                    onChange={e => setSeniorForm({
                      ...seniorForm,
                      medicalProfile: { 
                        ...seniorForm.medicalProfile, 
                        healthLevel: e.target.value 
                      }
                    })}
                    options={["พักรักษาที่รพ.", "ช่วยเหลือตัวเองได้", "ต้องพยุง", "ติดเตียง"]}
                  />

              <Input label="อาการแพ้ยา / อาหาร" value={seniorForm.medicalProfile.allergies}
              onChange={e => setSeniorForm({
                ...seniorForm,
                medicalProfile: { ...seniorForm.medicalProfile, allergies: e.target.value }
              })} />

             <Select 
                    label="โรคประจำตัว" 
                    value={seniorForm.medicalProfile.chronicConditions || ""} 
                    onChange={e => setSeniorForm({...seniorForm,
                      medicalProfile: {...seniorForm.medicalProfile,chronicConditions: e.target.value  }
                    })}
                    options={["ความดันโลหิตสูง","เบาหวาน","ไขมันในเลือดสูง","โรคหัวใจขาดเลือด",
                      "โรคหลอดเลือดสมอง","โรคไตเรื้อรัง","โรคปอดอุดกั้นเรื้อรัง","หอบหืด",
                      "ข้อเข่าเสื่อม","กระดูกพรุน","โรคเก๊าท์","โรคข้ออักเสบรูมาตอยด์",
                      "โรคอัลไซเมอร์","ภาวะสมองเสื่อม","พาร์กินสัน","โรคซึมเศร้า",
                      "โรควิตกกังวล","โรคตับเรื้อรัง","โรคกระเพาะอาหาร","มะเร็ง"
                    ]}
/>

            <UploadBox />
          </div>

          {/* ===================== RELATIVE ===================== */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold border-b border-pink-200 pb-2">
              ประวัติส่วนตัว (ผู้เกี่ยวข้องกับผู้สูงอายุ)
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input label="ชื่อ" value={relativeForm.firstName}
                onChange={e => setRelativeForm({ ...relativeForm, firstName: e.target.value })} />
              <Input label="นามสกุล" value={relativeForm.lastName}
                onChange={e => setRelativeForm({ ...relativeForm, lastName: e.target.value })} />

              <Select label="เพศ" value={relativeForm.gender}
                onChange={e => setRelativeForm({ ...relativeForm, gender: e.target.value })}
                options={["หญิง", "ชาย", "ไม่ระบุ"]} />

              <Input label="วันเกิด" type="date" value={relativeForm.dob}
                onChange={e => setRelativeForm({ ...relativeForm, dob: e.target.value })} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input label="เบอร์โทรศัพท์" value={relativeForm.phone}
                onChange={e => setRelativeForm({ ...relativeForm, phone: e.target.value })} />
              <Input label="อีเมล" type="email" value={relativeForm.email}
                onChange={e => setRelativeForm({ ...relativeForm, email: e.target.value })} />
            </div>

            <Select label="ความสัมพันธ์กับผู้สูงอายุ" value={relativeForm.relationship}
              onChange={e => setRelativeForm({ ...relativeForm, relationship: e.target.value })}
              options={["บุตร", "คู่สมรส", "พี่น้อง", "หลาน", "เพื่อน", "ผู้ดูแล"]} />

            <UploadBox />
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link to="/userdashboard">
            <button onClick={handleSubmit}
              className="px-10 py-3 rounded-full bg-pink-400 text-white text-lg font-semibold shadow-md hover:bg-pink-500 transition">
              บันทึกข้อมูล
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ===================== REUSABLE COMPONENTS ===================== */

function Input({ label, type = "text", value, onChange }) {
  return (
    <div className="flex flex-col">
      <label className="label">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="px-4 py-3 border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-pink-500 transition"
      />
    </div>
  );
}

function Select({ label, value, onChange, options }) {
  return (
    <div className="flex flex-col">
      <label className="label">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="px-4 py-3 border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-pink-500 transition"
      >
        <option value="">-</option>
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function UploadBox() {
  return (
    <div className="mt-4">
      <div className="w-full h-32 border-2 border-dashed border-pink-300 rounded-xl flex items-center justify-center text-pink-500 hover:bg-pink-100 cursor-pointer transition">
        อัปโหลดรูปภาพ
      </div>
    </div>
  );
}
