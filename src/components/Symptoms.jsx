function Symptoms({ symptoms, handleChange }) {
  const symptomList = [
    ["fever", "🌡️", "Temperatur"],
    ["cough", "😷", "Öskürək"],
    ["headache", "🤕", "Baş ağrısı"],
    ["soreThroat", "😣", "Boğaz ağrısı"],
    ["runnyNose", "🤧", "Burun axması"],
  ];

  return (
    <div className="mt-10">

      <div className="mb-4">
        <h2 className="text-lg font-semibold text-white">
          Simptomları seç
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Agentə müşahidə etdiyin simptomları bildir.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">

        {symptomList.map(([name, icon, label]) => (
          <label
            key={name}
            className={`cursor-pointer rounded-2xl border p-4 transition-all duration-200 ${
              symptoms[name]
                ? "border-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-500/10"
                : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
            }`}
          >
            <input
              type="checkbox"
              name={name}
              checked={symptoms[name]}
              onChange={handleChange}
              className="hidden"
            />

            <div className="flex items-center gap-3">
              <span className="text-2xl">
                {icon}
              </span>

              <span className="text-sm font-medium text-slate-200">
                {label}
              </span>
            </div>
          </label>
        ))}

      </div>
    </div>
  );
}

export default Symptoms;