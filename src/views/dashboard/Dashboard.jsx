import TodayTaskCard from "./TodayTaskCard";
import SeniorsCard from "./SeniorsCard";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        Hello Natalya 👋
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 ">
        <TodayTaskCard />
        <SeniorsCard />
      </div>
    </div>
  );
}
