function InputTypeCard({ icon, title, description, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full rounded-2xl border p-6 text-left transition-all
        ${selected 
          ? "border-indigo-500 bg-indigo-50 shadow-lg"
          : "border-gray-200 bg-white hover:border-indigo-300 hover:shadow-md"}
      `}
    >
      <div className="mb-4 text-3xl">{icon}</div>

      <h3 className="text-lg font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-1 text-sm text-gray-600">
        {description}
      </p>
    </button>
  );
}

export default InputTypeCard;
