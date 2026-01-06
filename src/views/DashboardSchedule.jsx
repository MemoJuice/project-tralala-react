import NavbarDashboard from "@/components/NavbarDashboard";

export default function DashboardSchedule() {
  return (
    <div class="grid grid-cols-12 gap-6 max-w-7xl mx-auto mt-20 px-6">
      <aside className="col-span-12 md:col-span-3 lg:col-span-2 bg-white shadow-lg rounded-2xl p-8 flex flex-col justify-between min-h-[85vh]">
        <NavbarDashboard />
      </aside>
      <section class="col-span-12 md:col-span-9 lg:col-span-10">
        <h2 class="text-2xl font-semibold mb-4">
          Hello schedule กำลังมาจ้า 👋
        </h2>
      </section>
    </div>
  );
}
