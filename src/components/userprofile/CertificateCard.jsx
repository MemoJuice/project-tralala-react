export default function CertificateCard() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="text-gray-700 font-semibold">2024</div>
      <div>
        <h4 className="font-semibold mb-1">หลักสูตรดูแลผู้สูงอายุ</h4>
        <p className="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <img src="https://placehold.co/350x220" className="rounded-xl w-full" />
    </div>
  );
}
