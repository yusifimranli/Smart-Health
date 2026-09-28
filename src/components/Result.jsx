function Result({ result }) {
  if (!result) return null;

  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/10">

      <div className="border-b border-white/10 p-5">
        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
            🤖
          </div>

          <div>
            <h2 className="font-semibold text-white">
              Agent qərarı
            </h2>

            <p className="text-xs text-slate-500">
              Analysis completed
            </p>
          </div>

        </div>
      </div>

      <div className="space-y-4 p-5">

        <div>
          <p className="text-sm text-slate-400">
            Nəticə
          </p>

          <p className="mt-1 text-lg font-semibold text-white">
            {result.diagnosis}
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
          <p className="text-xs uppercase tracking-wider text-slate-500">
            Aktiv qayda
          </p>

          <p className="mt-2 text-sm text-cyan-300">
            {result.rule}
          </p>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 p-4">

          <span className="text-sm text-slate-400">
            Rule matching
          </span>

          <span className="font-bold text-cyan-400">
            {result.score} / 3
          </span>

        </div>

      </div>
    </div>
  );
}

export default Result;