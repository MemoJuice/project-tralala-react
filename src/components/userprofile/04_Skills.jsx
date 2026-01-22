export default function Skills({ skills }) {
  if (!skills || skills.length === 0) {
    return null;
  }

  return (
    <div className="max-w-5xl mx-52 py-6 text-left">
      <h3 className="text-3xl font-bold mb-4">ทักษะ และความถนัด</h3>

      <div>
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-pink-100 px-6 py-2 rounded-full text-sm font-medium "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
