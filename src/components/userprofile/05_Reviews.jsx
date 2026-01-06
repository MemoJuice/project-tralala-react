import ReviewCard from "./ReviewCard";

export default function Reviews() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 mb-20">
      <h3 className="text-2xl font-bold mb-6">รีวิวจากลูกค้า</h3>

      <div className="grid md:grid-cols-3 gap-6">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
}
