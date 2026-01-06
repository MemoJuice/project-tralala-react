import CertificateCard from "./CertificateCard";

export default function Certificates() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h3 className="text-2xl font-bold mb-4">หนังสือรับรอง</h3>
      <div className="space-y-10">
        <CertificateCard />
        <CertificateCard />
      </div>
    </div>
  );
}
