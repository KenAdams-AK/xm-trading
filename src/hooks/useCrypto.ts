import { useEffect, useState } from "react";

import { Crypto } from "../models/crypto";
import { useLocalStorage } from "./useLocalStorage";

export const FETCH_STATUS = {
  IDLE: "IDLE",
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
} as const;

const API_URL = "https://api.coinlore.net/api/ticker/";
const cryptoIds = [90, 80, 58, 1, 2321];

type FetchStatus = keyof typeof FETCH_STATUS;

export function useCtypto() {
  const [crypto, setCrypto] = useLocalStorage<Crypto[]>("crypto", []);
  const [status, setStatus] = useState<FetchStatus>(FETCH_STATUS.IDLE);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (crypto.length > 0) {
      return undefined;
    }

    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async () => {
      setStatus(FETCH_STATUS.LOADING);

      try {
        const response = await fetch(`${API_URL}?id=${cryptoIds.join(",")}`, {
          method: "GET",
          // mode: "no-cors",
          // headers: {
          //   "Content-Type": "application/json",
          //   "Cache-Control": "public, max-age=3600, stale-if-error=86400",
          // },
          signal,
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data: Crypto[] = await response.json();
        setCrypto(data);
        setStatus(FETCH_STATUS.SUCCESS);
      } catch (err) {
        if (err instanceof Error) {
          if (err.name === "AbortError") {
            console.warn("Fetch crypto data aborted");
            return;
          }
          setError(err.message);
          setStatus(FETCH_STATUS.ERROR);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [crypto.length, setCrypto]);

  return { crypto, status, error };
}
