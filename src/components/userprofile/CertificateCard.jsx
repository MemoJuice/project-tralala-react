export default function CertificateCard({ cert }) {
  const year = cert.certifiedDate
    ? new Date(cert.certifiedDate).getFullYear()
    : "-";

  return (
    <div className="grid md:grid-cols-3 gap-6 items-start">
      {/* ปี */}
      <div className="text-gray-700 font-semibold">{year}</div>

      {/* รายละเอียด */}
      <div>
        <h4 className="font-semibold mb-1">{cert.title}</h4>

        <p className="text-gray-600 text-sm">ออกโดย {cert.issuedBy}</p>

        {cert.expiryDate && (
          <p className="text-xs text-gray-500 mt-1">
            หมดอายุ: {new Date(cert.expiryDate).toLocaleDateString()}
          </p>
        )}
      </div>

      {/* รูปเอกสาร */}
      <img
        src={cert.documentUrl || "https://placehold.co/350x220"}
        alt={cert.title}
        className="rounded-xl w-full"
      />
    </div>
  );
}
