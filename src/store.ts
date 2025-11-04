import { create } from "zustand";
import type { Cryptocurrency, CryptoPrice, Pair } from "./types";
import { fetchCurrentCryptoPrice, getCrytos } from "./services/CryptoServices";

type CryptoStore = {
  cryptocurrencies: Cryptocurrency[];
  result: CryptoPrice;
  loading: boolean,
  fetchCryptos: () => Promise<void>;
  fetchData: (pair: Pair) => Promise<void>;
};

export const useCryptoStore = create<CryptoStore>((set) => ({
  cryptocurrencies: [],
  result: {
    IMAGEURL: '',
    PRICE: '',
    HIGHDAY: '',
    LOWDAY: '',
    CHANGEPCT24HOUR: '',
    LASTUPDATE: '',
  },
  loading: false,
  fetchCryptos: async () => {
    const cryptocurrencies = await getCrytos();
    set(() => ({
      cryptocurrencies: cryptocurrencies,
    }));
  },
  fetchData: async (pair) => {
    set(() => ({
      loading: true,
    }));
    const result = await fetchCurrentCryptoPrice(pair);

    set(() => ({
      result: result,
      loading: false,
    }));
  },
}));
