export default function DashboardSchaedule() {
  return (
    <div class="grid grid-cols-12 gap-6 max-w-7xl mx-auto mt-20 px-6">
      <aside class="col-span-12 md:col-span-3 lg:col-span-2 bg-white shadow-lg rounded-2xl p-8 flex flex-col justify-between min-h-[85vh]">
        <div>
          <div class="text-center">
            <div class="w-14 h-14 bg-purple-300 text-white flex justify-center items-center rounded-full mx-auto text-xl font-bold">
              N
            </div>

            <p class="mt-3 font-semibold text-gray-800">Natalya</p>
            <p class="text-xs text-gray-500">Caregiver</p>
          </div>

          <nav class="flex flex-col gap-3 text-sm mt-4">
            <a
              href="#"
              class="flex items-center gap-3 hover:text-blue-500 font-semibold"
            >
              📊 Dashboard
            </a>
            <a href="#" class="flex items-center gap-3 hover:text-blue-500">
              📅 Schedule
            </a>
            <a href="#" class="flex items-center gap-3 hover:text-blue-500">
              💰 Income
            </a>
          </nav>
        </div>

        <button class="flex items-center gap-2 text-gray-500 hover:text-red-500 mt-6">
          ออกจากระบบ
        </button>
      </aside>

      <section class="col-span-12 md:col-span-9 lg:col-span-10">
        <h2 class="text-2xl font-semibold mb-4">Hello Natalya 👋</h2>
      </section>
    </div>
  );
}
