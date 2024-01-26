import { useEffect, useState } from "react";
import { Crypto } from "../models/crypto";

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
  const [crypto, setCrypto] = useState<Crypto[]>([]);
  const [status, setStatus] = useState<FetchStatus>(FETCH_STATUS.IDLE);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async () => {
      setStatus(FETCH_STATUS.LOADING);

      try {
        const response = await fetch(`${API_URL}?id=${cryptoIds.join(",")}`, {
          // mode: "no-cors",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "public, maxage=3600, stale-if-error=86400",
          },
          signal,
        });

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
  }, []);

  return { crypto, status, error };
}
