import React, { useState } from "react";
import { FileText } from "lucide-react";
import TaskLogCard from "./TaskLogCard";

export default function DashboardLog() {
  const [isWorking, setIsWorking] = useState(false);
  const [checkInTime, setCheckInTime] = useState(null);

  const [vitals, setVitals] = useState({
    pulse: "",
    bpSys: "",
    bpDia: "",
    sugar: "",
  });

  const [notes, setNotes] = useState([]);
  const [noteInput, setNoteInput] = useState("");

  const startWork = () => {
    setIsWorking(true);
    setCheckInTime(
      new Date().toLocaleTimeString("th-TH", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    );
  };

  const addNote = () => {
    if (!noteInput.trim()) return;

    setNotes((prev) => [
      ...prev,
      {
        text: noteInput,
        time: new Date().toLocaleTimeString("th-TH", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
    setNoteInput("");
  };

  const finishWork = async () => {
    const payload = {
      vitals,
      notes,
      checkInTime,
      finishedAt: new Date().toISOString(),
    };

    console.log("SEND TO SERVER", payload);
    // await axios.post("/api/", payload);

    setIsWorking(false);
  };

  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">บันทึกการดูแล</h2>

        {!isWorking ? (
          <button
            onClick={startWork}
            className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-semibold"
          >
            เริ่มงาน
          </button>
        ) : (
          <span className="text-sm bg-green-100 text-green-700 px-4 py-2 rounded-full">
            กำลังดูแล
          </span>
        )}
      </div>

      {/* ===== TOP CARDS ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Vital Signs*/}
        <TaskLogCard />

        <div className="lg:col-span-1 bg-white rounded-3xl shadow overflow-hidden flex flex-col">
          <div className="p-6 md:p-8 flex-1 overflow-y-auto">
            {/* Header */}
            <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="flex-1">
                <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">
                  บันทึกสัญญาณชีพ
                </h2>
              </div>
            </div>

            {/* Pulse + Sugar */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-2 mb-4 md:mb-6">
              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-600 mb-1">
                  ชีพจร (Pulse)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="70"
                    value={vitals.pulse}
                    onChange={(e) =>
                      setVitals({ ...vitals, pulse: e.target.value })
                    }
                    className="w-48 border rounded-xl px-2 py-3"
                  />
                  <span className="bg-gray-100 rounded-xl px-4 py-3 text-sm font-medium">
                    bpm
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-600 mb-1">
                  น้ำตาลในเลือด (Blood Sugar)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="110"
                    value={vitals.sugar}
                    onChange={(e) =>
                      setVitals({ ...vitals, sugar: e.target.value })
                    }
                    className="w-48 border rounded-xl px-2 py-3"
                  />
                  <span className="bg-gray-100 rounded-xl px-4 py-3 text-sm font-medium">
                    mg/dL
                  </span>
                </div>
              </div>
            </div>

            {/* Blood Pressure */}
            <div className="mb-4 md:mb-6">
              <label className="block text-xs md:text-sm font-medium text-gray-600 mb-1">
                ความดันโลหิต (Blood Pressure)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="115"
                  value={vitals.bpSys}
                  onChange={(e) =>
                    setVitals({ ...vitals, bpSys: e.target.value })
                  }
                  className="w-50 border rounded-xl px-2 py-3"
                />
                <span className="font-semibold text-gray-400">/</span>
                <input
                  type="number"
                  placeholder="75"
                  value={vitals.bpDia}
                  onChange={(e) =>
                    setVitals({ ...vitals, bpDia: e.target.value })
                  }
                  className="w-50 border rounded-xl px-2 py-3"
                />
                <span className="bg-gray-100 rounded-xl px-4 py-3 text-sm font-medium">
                  mmHg
                </span>
              </div>
            </div>

            {/* Save */}
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-2xl font-semibold">
              บันทึกสัญญาณชีพ
            </button>
          </div>
        </div>
      </div>

      {/* Notes */}
      <div className="bg-white rounded-2xl shadow p-6 mt-6 mb-6">
        <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-indigo-600" />
          บันทึกการทำงาน
        </h4>

        <textarea
          rows="2"
          value={noteInput}
          onChange={(e) => setNoteInput(e.target.value)}
          placeholder="บันทึกงาน..."
          className="w-full border rounded-lg p-3 mb-2"
        />

        <button
          onClick={addNote}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold mb-4"
        >
          เพิ่มบันทึก
        </button>

        {notes.map((note, i) => (
          <div
            key={i}
            className="bg-indigo-50 p-3 rounded-lg border-l-4 border-indigo-500 mb-2"
          >
            <p>{note.text}</p>
            <p className="text-xs text-gray-500">{note.time}</p>
          </div>
        ))}
      </div>

      {/*  Finish Work */}
      {isWorking && (
        <button
          onClick={finishWork}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold"
        >
          เสร็จการทำงาน
        </button>
      )}

      {checkInTime && (
        <p className="text-xs text-gray-400 mt-3">เข้างานเวลา {checkInTime}</p>
      )}
    </>
  );
}
