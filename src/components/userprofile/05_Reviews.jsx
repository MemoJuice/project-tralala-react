import ReviewCard from "./ReviewCard";

export default function Reviews({ reviews, ratingSummary }) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 mb-8">
      <h3 className="text-2xl font-bold mb-2">รีวิวจากลูกค้า</h3>

      {/* คะแนนรวม */}
      {ratingSummary && (
        <p className="text-gray-600 mb-6">
          ⭐ {ratingSummary.average} / 5 จาก {ratingSummary.totalReviews} รีวิว
        </p>
      )}

      {/* ถ้ายังไม่มีรีวิว */}
      {!reviews || reviews.length === 0 ? (
        <p className="text-gray-500">ยังไม่มีรีวิวจากลูกค้า</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))}
        </div>
      )}
    </div>
  );
}
