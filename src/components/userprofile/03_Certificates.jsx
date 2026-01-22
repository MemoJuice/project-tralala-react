import CertificateCard from "./CertificateCard";

export default function Certificates({ certifications }) {
  if (!certifications || certifications.length === 0) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold mb-4">หนังสือรับรอง</h3>
        <p className="text-gray-500">ยังไม่มีหนังสือรับรอง</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h3 className="text-2xl font-bold mb-4">หนังสือรับรอง</h3>

      <div className="space-y-10">
        {certifications.map((cert) => (
          <CertificateCard key={cert._id} cert={cert} />
        ))}
      </div>
    </div>
  );
}