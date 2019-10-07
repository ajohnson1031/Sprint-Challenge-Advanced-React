import React, { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [darkMode, setDarkMode] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? item : initialValue;
  });

  const setValue = value => {
    setDarkMode(value);
    localStorage.setItem(key, value);
  };

  return [darkMode, setValue];
};
