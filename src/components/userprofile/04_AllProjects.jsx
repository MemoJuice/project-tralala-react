import UserprojectCard from "./UserProjectCard";

export default function AllProjects() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h3 className="text-2xl font-bold mb-6">งานทั้งหมด</h3>

      <div className="grid md:grid-cols-2 gap-8">
        <UserprojectCard />
        <UserprojectCard />
        <UserprojectCard />
        <UserprojectCard />
      </div>
    </div>
  );
}
