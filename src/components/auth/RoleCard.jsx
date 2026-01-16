import React from "react";

export default function RoleCard({
  title,
  description,
  icon,
  features,
  color,
  onSelect,
}) {
  const bgColor =
    color === "pink" ? "hover:border-pink-500" : "hover:border-purple-500";
  const bgLight = color === "pink" ? "bg-pink-100" : "bg-purple-100";

  return (
    <div
      onClick={onSelect}
      className={`border-2 border-gray-300 rounded-3xl p-8 cursor-pointer ${bgColor} hover:shadow-lg transition duration-300 text-center`}
    >
      <div className="flex justify-center mb-4">
        <div className={`${bgLight} p-6 rounded-full`}>{icon}</div>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-3">{title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="text-left text-sm text-gray-700 space-y-2">
        {features.map((feature, idx) => (
          <p key={idx}>✓ {feature}</p>
        ))}
      </div>
    </div>
  );
}
