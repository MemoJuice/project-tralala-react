export default function ProfileHeader({caregiver}) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Caregiver {caregiver.firstName} {caregiver.lastName}
      </h2>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <img src={caregiver.imageUrl} className="rounded-xl" />

        <div>
          <h3 className="text-xl font-semibold mb-2">แนะนำตัว</h3>
          <p className="text-gray-600 leading-relaxed">
            {caregiver.introduction}
          </p>
        </div>
      </div>
    </div>
  );
}
