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
      runnyNose
    } = symptoms;

    if (fever && cough && soreThroat) {
      setResult({
        diagnosis: "Qrip ehtimalı yüksəkdir.",
        rule: "Temperatur + Öskürək + Boğaz ağrısı",
        score: 3,
      });
    }

    else if (runnyNose && cough && soreThroat) {
      setResult({
        diagnosis: "Soyuqdəymə ehtimalı yüksəkdir.",
        rule: "Burun axması + Öskürək + Boğaz ağrısı",
        score: 3,
      });
    }

    else if (headache && fever) {
      setResult({
        diagnosis: "Baş ağrısı və temperatur müşahidə olunur.",
        rule: "Baş ağrısı + Temperatur",
        score: 2,
      });
    }

    else if (cough && soreThroat) {
      setResult({
        diagnosis: "Tənəffüs yolu infeksiyası əlamətləri ola bilər.",
        rule: "Öskürək + Boğaz ağrısı",
        score: 2,
      });
    }

    else if (runnyNose) {
      setResult({
        diagnosis: "Yüngül soyuqdəymə əlaməti ola bilər.",
        rule: "Burun axması",
        score: 1,
      });
    }

    else {
      setResult({
        diagnosis: "Kifayət qədər məlumat yoxdur.",
        rule: "Heç bir qayda uyğun gəlmədi",
        score: 0,
      });
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">

      <div className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-lg">

        <Header />

        <Symptoms
          symptoms={symptoms}
          handleChange={handleChange}
        />

        <div className="flex gap-3 mt-6">

          <button
            onClick={analyze}
            className="flex-1 bg-black text-white py-3 rounded-xl"
          >
            🤖 Analiz et
          </button>

          <button
            onClick={() => setResult(null)}
            className="px-5 border rounded-xl"
          >
            Reset
          </button>

        </div>

        <Result result={result} />

      </div>

    </div>
  );
}

export default App;