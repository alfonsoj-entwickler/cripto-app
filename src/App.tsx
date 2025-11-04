import { useEffect } from "react";
import CriptoSearchForm from "./components/CriptoSearchForm";
import { useCryptoStore } from "./store";
import CryptoPriceDisplay from "./components/CryptoPriceDisplay";
function App() {
  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos);

  useEffect(() => {
    fetchCryptos();
  }, []);

  return (
    <div className="flex justify-center h-screen">
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="mt-10 mb-8 text-4xl font-black text-white">
          Market of
          <br />
          <span className="text-5xl text-green-400">Cripto Coins</span>
        </h1>
        <div className="px-4 py-8 bg-white rounded-md shadow-lg">
          <CriptoSearchForm />
          <CryptoPriceDisplay />
        </div>
      </div>
    </div>
  );
}

export default App;
