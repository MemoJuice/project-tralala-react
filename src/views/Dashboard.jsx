import NavbarDashboard from "@/components/NavbarDashboard";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto mt-20 px-6">
      <aside className="col-span-12 md:col-span-3 lg:col-span-2 bg-white shadow-lg rounded-2xl p-8 flex flex-col justify-between min-h-[85vh]">
        <NavbarDashboard />
      </aside>

      <section className="col-span-12 md:col-span-9 lg:col-span-10">
        <h2 className="text-2xl font-semibold mb-4">Hello Natalya 👋</h2>

        <div className="bg-white rounded-2xl p-6 shadow">
          <h3 className="text-lg font-semibold mb-6">งานวันนี้</h3>

          <ul className="space-y-6">
            <li className="flex justify-between items-center border-b pb-3">
              <div className="flex items-center gap-3">
                <span className="text-blue-500 text-xl">🚌</span>
                <p className="text-gray-800">พาคุณสมจิตไปโรงพยาบาล</p>
              </div>
              <span className="text-sm text-gray-600">8:00 น.</span>
            </li>

            <li className="flex justify-between items-center border-b pb-3">
              <div className="flex items-center gap-3">
                <span className="text-orange-500 text-xl">🏡</span>
                <p className="text-gray-800">Lorem ipsum dolor sit amet.</p>
              </div>
              <span className="text-sm text-gray-600">0:00 น.</span>
            </li>

            <li className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="text-orange-500 text-xl">🏡</span>
                <p className="text-gray-800">Lorem ipsum dolor sit amet.</p>
              </div>
              <span className="text-sm text-gray-600">0:00 น.</span>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-12 gap-6 mt-8">
          <div className="col-span-12 md:col-span-4">
            <div className="rounded-2xl shadow p-6 text-center from-purple-200 via-purple-400 to-purple-700 text-white h-full">
              <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full"></div>
              <h4 className="mt-4 font-semibold text-lg">สมจิต ใจดี</h4>
              <p className="text-sm">อายุ 66 ปี</p>
              <button className="mt-4 bg-white text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-100">
                ดูเพิ่มเติม
              </button>
            </div>
          </div>

          <div className="col-span-12 md:col-span-8">
            <div className="bg-gray-200 rounded-2xl h-64 p-4 text-sm text-gray-700">
              บันทึกงาน…
              <p className="mt-2 text-gray-500 text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                minima dolores eum.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
