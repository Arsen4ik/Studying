import { useEffect, useState } from "react";

export function useStorageState(defaultState, key) {
  const loadData = JSON.parse(localStorage.getItem(key)) ?? defaultState;

  const [value, setValue] = useState(loadData);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}