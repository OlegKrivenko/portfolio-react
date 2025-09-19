// Кастомный хук с видео в ютубе
// Взято с просторв интернета https://webcademy.ru/blog/949/
import { useState, useEffect } from 'react';

function getStorageValue(key, defaultValue) {
  const saved = localStorage.getItem(key);

  if (!saved) return defaultValue;

  try {
    return JSON.parse(saved);
  } catch {
    return defaultValue;
  }
}

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => getStorageValue(key, defaultValue));

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
