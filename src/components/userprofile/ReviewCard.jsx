export default function ReviewCard({ review }) {
  const stars = "★★★★★☆☆☆☆☆".slice(5 - review.rating, 10 - review.rating);

  return (
    <div className="bg-white p-4 rounded-xl shadow text-center">
      <p className="font-semibold mb-2">{review.reviewerName || "ผู้ใช้งาน"}</p>

      <p className="text-yellow-500 text-sm mb-3">{stars}</p>

      <p className="text-gray-600 text-sm">{review.comment}</p>

      {review.createdAt && (
        <p className="text-xs text-gray-400 mt-2">
          {new Date(review.createdAt).toLocaleDateString()}
        </p>
      )}
    </div>
  );
}
