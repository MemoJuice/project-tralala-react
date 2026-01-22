export default function ProfileHeader({ caregiver }) {
  // 🔥 บรรทัดนี้ “จำเป็นต้องมี”
  if (!caregiver) {
    return null; // หรือ return <div>Loading...</div>
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">
        {caregiver.firstName} {caregiver.lastName}
      </h2>

      <img
        src={caregiver.imageUrl}
        alt={caregiver.firstName}
        className="rounded-xl w-full max-h-105 object-cover"
      />

      <p className="mt-4 text-gray-600">{caregiver.introduction}</p>
    </div>
  );
}
