function Symptoms({ symptoms, handleChange }) {
  const symptomList = [
    ["fever", "🌡️ Temperatur"],
    ["cough", "😷 Öskürək"],
    ["headache", "🤕 Baş ağrısı"],
    ["soreThroat", "😣 Boğaz ağrısı"],
    ["runnyNose", "🤧 Burun axması"],
  ];

  return (
    <div className="mt-8">

      <h2 className="font-bold text-lg mb-4">
        Simptomları seç
      </h2>

      <div className="grid grid-cols-2 gap-3">

        {symptomList.map(([name, label]) => (
          <label
            key={name}
            className="border p-3 rounded-xl flex gap-3 items-center cursor-pointer"
          >
            <input
              type="checkbox"
              name={name}
              checked={symptoms[name]}
              onChange={handleChange}
            />

            {label}
          </label>
        ))}

      </div>

    </div>
  );
}

export default Symptoms;