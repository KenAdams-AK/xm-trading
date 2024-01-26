import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Item<T> = {
  value: T;
  expiry: number;
};

export function useLocalStorage<T>(
  key: string,
  initialValue: T | (() => T),
  timeToLive: number = 3600, // must be in seconds, 1 hour by default
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    let jsonValue: string | null = null;

    if (typeof window !== "undefined") {
      jsonValue = localStorage.getItem(key);
    }

    if (jsonValue !== null) {
      const item: Item<T> = JSON.parse(jsonValue);

      if (item.expiry && Date.now() > item.expiry) {
        localStorage.removeItem(key);

        return typeof initialValue === "function"
          ? (initialValue as () => T)()
          : initialValue;
      }

      return item.value;
    }

    return typeof initialValue === "function"
      ? (initialValue as () => T)()
      : initialValue;
  });

  useEffect(() => {
    const item: Item<T> = {
      value,
      expiry: Date.now() + timeToLive * 1000,
    };

    localStorage.setItem(key, JSON.stringify(item));
  }, [key, value, timeToLive]);

  return [value, setValue];
}
