export default function LatesWorks() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h3 className="text-2xl font-bold mb-2">งานครั้งล่าสุด</h3>
      <p className="text-gray-600 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod
        nunc ut.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        <img
          src="images/caregiver-v1.png"
          className="max-w-sm w-full aspect-square rounded-xl"
        />
        <img
          src="images/caregiver-v2.png"
          className="max-w-sm w-full aspect-square rounded-xl"
        />
        <img
          src="images/caregiver-v3.png"
          className="max-w-sm w-full aspect-square rounded-xl"
        />
      </div>
    </div>
  );
}
