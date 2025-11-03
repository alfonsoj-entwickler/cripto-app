import { useMemo } from "react";
import { useCryptoStore } from "../store";
import Spinner from "./Spinner";

export default function CryptoPriceDisplay() {
  const result = useCryptoStore((state) => state.result);
  const loading = useCryptoStore((state) => state.loading);
  const hasResult = useMemo(
    () => !Object.values(result).includes(""),
    [result]
  );

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        hasResult && (
          <>
            <h2 className="mt-8 text-blue-500 text-xl font-bold uppercase text-center">
              current trading info
            </h2>
            <div className="flex justify-center items-center gap-5">
              <img
                src={`https://cryptocompare.com/${result.IMAGEURL}`}
                alt="Image crypto"
                className="w-1/4"
              />
              <div className="flex flex-col gap-1">
                <p>
                  The price: <span className="font-bold">{result.PRICE}</span>
                </p>
                <p>
                  High day: <span className="font-bold">{result.HIGHDAY}</span>
                </p>
                <p>
                  Low day: <span className="font-bold">{result.LOWDAY}</span>
                </p>
                <p>
                  Change 24 Hour:{" "}
                  <span className="font-bold">{result.CHANGEPCT24HOUR}</span>
                </p>
                <p>
                  Last update:{" "}
                  <span className="font-bold">{result.LASTUPDATE}</span>
                </p>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
}
