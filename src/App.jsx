import { useState } from "react";

import Header from "./components/Header";
import Symptoms from "./components/Symptoms";
import Result from "./components/Result";

function App() {
  const [symptoms, setSymptoms] = useState({
    fever: false,
    cough: false,
    headache: false,
    soreThroat: false,
    runnyNose: false,
  });

  const [result, setResult] = useState(null);

  function handleChange(e) {
    const { name, checked } = e.target;

    setSymptoms({
      ...symptoms,
      [name]: checked,
    });
  }

  function analyze() {
    const {
      fever,
      cough,
      headache,
      soreThroat,
      runnyNose,
    } = symptoms;

    if (fever && cough && soreThroat) {
      setResult({
        diagnosis: "Qrip ehtimalı yüksəkdir.",
        rule: "Temperatur + Öskürək + Boğaz ağrısı",
        score: 3,
      });
    } else if (runnyNose && cough && soreThroat) {
      setResult({
        diagnosis: "Soyuqdəymə ehtimalı yüksəkdir.",
        rule: "Burun axması + Öskürək + Boğaz ağrısı",
        score: 3,
      });
    } else if (headache && fever) {
      setResult({
        diagnosis: "Baş ağrısı və temperatur müşahidə olunur.",
        rule: "Baş ağrısı + Temperatur",
        score: 2,
      });
    } else if (cough && soreThroat) {
      setResult({
        diagnosis: "Tənəffüs yolu infeksiyası əlamətləri ola bilər.",
        rule: "Öskürək + Boğaz ağrısı",
        score: 2,
      });
    } else if (runnyNose) {
      setResult({
        diagnosis: "Yüngül soyuqdəymə əlaməti ola bilər.",
        rule: "Burun axması",
        score: 1,
      });
    } else {
      setResult({
        diagnosis: "Kifayət qədər məlumat yoxdur.",
        rule: "Heç bir qayda uyğun gəlmədi",
        score: 0,
      });
    }
  }

  function reset() {
    setSymptoms({
      fever: false,
      cough: false,
      headache: false,
      soreThroat: false,
      runnyNose: false,
    });

    setResult(null);
  }

  return (
    <div className="min-h-screen bg-[#070b14] px-4 py-10">

      <div className="mx-auto max-w-xl">

        <Header />

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-xl">

          <Symptoms
            symptoms={symptoms}
            handleChange={handleChange}
          />

          <div className="mt-7 flex gap-3">

            <button
              onClick={analyze}
              className="flex-1 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 py-3 font-semibold text-black transition hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20"
            >
              🤖 Analyze
            </button>

            <button
              onClick={reset}
              className="rounded-xl border border-white/10 bg-white/5 px-5 text-sm text-slate-300 transition hover:bg-white/10"
            >
              Reset
            </button>

          </div>

          <Result result={result} />

        </div>

        <p className="mt-6 text-center text-xs text-slate-600">
          Rule-based system • React • Tailwind CSS
        </p>

      </div>
    </div>
  );
}

export default App;