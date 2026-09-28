function Header() {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-3xl shadow-lg shadow-cyan-500/20">
        🤖
      </div>

      <h1 className="mt-5 text-4xl font-bold tracking-tight text-white">
        Smart<span className="text-cyan-400">Agent</span>
      </h1>

      <p className="mt-2 text-sm text-slate-400">
        Rule-based health expert system
      </p>

      <div className="mx-auto mt-5 flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs text-emerald-400">
        <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
        Agent Ready
      </div>
    </div>
  );
}

export default Header;