import axios from "axios";
import ProductslistCard from "@/components/ourcaregiver/Productslist-card";
import { useState, useEffect, useContext } from "react";
import { MessageContext } from "../context/MessageContext";

export default function OurCareGiver (){
  const {API, caregiverID, setCaregiverID} = useContext(MessageContext);
  const [question, setQuestion] = useState("");
  const [askLoading, setAskLoading] = useState(false);
  const [askError, setAskError] = useState(null);
  const [askResult, setAskResult] = useState(null);
  const [suggestedCaregivers, setSuggestedCaregivers] = useState([]);

  const [caregivers, setCaregivers] = useState([])
  const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     fetch("http://localhost:3000/caregivers")
//       .then(res => res.json())
//       .then(data => {
//         setCaregivers(data)
//         setLoading(false)
//       })
//   }, [])

  const fetchCaregivers = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API}/caregivers`);
      setCaregivers(res.data);
    } catch {
      alert("Failed to fetch users");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCaregivers();
  }, []);

//   Ask AI to search suitable caregiver feature
  const askAi = async (e) => {
    e.preventDefault();
    const q = String(question || "").trim();

    if (!q) return;

    setAskLoading(true);
    setAskError(null);
    setAskResult(null);

    try {
      const response = await axios.post(
        `${API}/caregivers/ai/suggestion`,
        { question: q, topK: 5 },
        { withCredentials: true }
      );
      console.log(response);

      const responseAnswer = JSON.parse(response.data?.data.answer.replace(/\s*```$/, ""));
      console.log(responseAnswer);
      setAskResult(responseAnswer || null);

      const matchedCaregiverId = caregivers.filter((cg) =>
        responseAnswer.caregiverID.includes(cg._id)
      );

      setSuggestedCaregivers(matchedCaregiverId);

      const unmatchedCaregiverId = caregivers.filter((cg) =>
        !responseAnswer.caregiverID.includes(cg._id)
      );

      setCaregivers(unmatchedCaregiverId);

    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        error?.response?.data?.details ||
        error?.message;
      setAskError(message || "Failed to ask AI");
    } finally {
      setAskLoading(false);
    }
  };


    return (
        <div className="min-h-full mx-4 md:mx-24 mt-16 mb-12 bg-white rounded-2xl shadow p-6">
            <div className="mb-6">
                <h2 className="text-4xl text-gray-700 font-bold">ผู้ดูแลของเรา</h2>
                <p className="text-gray-700">ทีมผู้ดูแลที่ผ่านการอบรม มีประสบการณ์ ใส่ใจ และดูแลด้วยความอบอุ่นเหมือนคนในครอบครัว</p>
            </div>
            <section className="w-full flex justify-center mb-6">
                <div className="w-full max-w-3xl bg-pink-50 rounded-2xl p-5">
                    <div className="font-bold text-lg">ค้นหาผู้ดูแลที่เหมาะสม</div>
                    {/* {authLoading ? (
                        <div className="text-sm mt-2">Checking login…</div>
                    ) : user ? ( */}
                        <form onSubmit={askAi} className="mt-3 flex gap-x-2">
                        <input
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            placeholder='ใส่คุณสมบัติของผู้ดูแลที่คุณต้องการ'
                            className="flex-1 border rounded px-3 py-2 bg-white"
                        />
                        <button
                            type="submit"
                            disabled={askLoading}
                            className="bg-sky-500 hover:bg-sky-600 disabled:bg-sky-300 text-white px-4 py-2 rounded"
                        >
                            {askLoading ? "กำลังค้นหา..." : "ค้นหา"}
                        </button>
                        </form>
                    {/* ) : (
                        <div className="text-sm mt-2 font-bold">
                        Please log in to use the AI feature
                        </div>
                    )} */}

                    {askError ? (
                        <div className="mt-3 text-sm bg-rose-100 border border-rose-200 text-rose-900 p-3 rounded">
                        {askError}
                        </div>
                    ) : null}

                    {askResult ? (
                        <div className="mt-3 text-md py-3">
                            <div className="font-bold">ผลการค้นหา</div>
                            <div className="mt-1 whitespace-pre-wrap">
                                {askResult.answer || "ไม่มีผลลัพธ์"}
                            </div>

                            {/* <div className="font-bold mt-3">Sources</div>
                            {Array.isArray(askResult.sources) && askResult.sources.length ? (
                                <ul className="list-disc pl-6 mt-1">
                                {askResult.sources.map((s) => (
                                    <li key={s._id}>
                                    {s.username} ({s.role}) — {s.email}
                                    </li>
                                ))}
                                </ul>
                            ) : (
                                <div className="mt-1">No sources found.</div>
                            )} */}
                        </div>
                    ) : null}
                </div>
            </section>
            {loading ? 
                <div className="text-4xl font-bold animate-bounce text-black text-center">Loading...</div>
                : <section className="flex flex-col gap-6">
                    {askResult && askResult.caregiverID ?
                        <ProductslistCard caregivers={suggestedCaregivers} askResult={askResult} recommended={true} caregiverID={caregiverID} setCaregiverID={setCaregiverID} />
                        : null
                    }
                    <ProductslistCard caregivers={caregivers} askResult={askResult} caregiverID={caregiverID} setCaregiverID={setCaregiverID} />
                </section>
            }
             {/* {loading ? (
        <p className="text-center text-gray-500">กำลังโหลดข้อมูล...</p>
      ) : (
        <ProductslistCard data={caregivers} />
      )} */}
        </div>  
    );
}       