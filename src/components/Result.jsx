function Result({ result }) {
  if (!result) return null;

  return (
    <div className="mt-6 border rounded-2xl p-5">

      <h2 className="font-bold text-lg">
        🤖 Agent qərarı
      </h2>

      <p className="mt-4 font-semibold">
        {result.diagnosis}
      </p>

      <div className="mt-4 bg-gray-100 rounded-xl p-4">
        <p className="text-sm text-gray-500">
          İşləyən qayda
        </p>

        <p className="font-medium mt-1">
          {result.rule}
        </p>
      </div>

      <div className="mt-3 bg-gray-100 rounded-xl p-4">
        <p className="text-sm text-gray-500">
          Qayda uyğunluğu
        </p>

        <p className="font-bold mt-1">
          {result.score} / 3
        </p>
      </div>

    </div>
  );
}

export default Result;