import { useState, type ChangeEvent, type FormEvent } from "react";
import { currencies } from "../data";
import { useCryptoStore } from "../store";
import { type Pair } from "../types";
import ErrorMessage from "./ErrorMessage";

export default function CriptoSearchForm() {
  const cryptocurrencies = useCryptoStore((state) => state.cryptocurrencies);
  const fetchData = useCryptoStore((state) => state.fetchData);

  const [pair, setPair] = useState<Pair>({
    currency: "",
    criptocurrency: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(pair).includes("")) {
      setError(true);
      return;
    }
    setError(false);
    fetchData(pair);
  };

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
      {error && <ErrorMessage />}
      <div className="flex flex-col gap-2">
        <label className="text-lg text-black" htmlFor="currency">
          Coin:
        </label>
        <select
          className="p-4 text-lg rounded-md bg-slate-100 border-none"
          name="currency"
          id="currency"
          value={pair.currency}
          onChange={handleChange}
        >
          <option value="">-- Select --</option>
          {currencies.map((currency) => (
            <option
              value={currency.code}
              key={`select-currency-${currency.code}`}
            >
              {currency.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-lg text-black" htmlFor="criptocurrency">
          Cripto:
        </label>
        <select
          className="p-4 text-lg rounded-md bg-slate-100 border-none"
          name="criptocurrency"
          id="criptocurrency"
          value={pair.criptocurrency}
          onChange={handleChange}
        >
          <option value="">-- Select --</option>
          {cryptocurrencies.map((crypto) => (
            <option
              value={crypto.CoinInfo.Name}
              key={`select-crypto-${crypto.CoinInfo.Name}`}
            >
              {crypto.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>
      <input
        type="submit"
        value="search"
        className="p-2 text-black bg-green-400 border-none uppercase font-bold cursor-pointer transition-colors hover:bg-green-500"
      />
    </form>
  );
}
