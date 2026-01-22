import { useEffect } from "react";

export default function CertificateCard({certificate}) {
  useEffect(() => {
    console.log(certificate);
  }, []);
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="text-gray-700 font-semibold">
        {new Date(certificate.certifiedDate).toLocaleDateString("th-TH")}
      </div>
      <div>
        <h4 className="font-semibold mb-1">{certificate.title}</h4>
        {/* <p className="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p> */}
      </div>
      <img src={certificate.documentUrl} className="rounded-xl w-full" />
    </div>
  );
}
