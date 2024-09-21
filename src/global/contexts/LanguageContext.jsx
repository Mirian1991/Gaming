import React, { createContext, useState, useEffect } from "react";
import en from "../langs/En.json";
import ka from "../langs/Ka.json";

export const LanguageContext = createContext();

const languageOptions = {
  en: en,
  ka: ka,
};

export const LanguageProvider = ({ children }) => {
  const defaultLang = "en";
  const storedLang = localStorage.getItem("appLanguage");
  const [language, setLanguage] = useState(storedLang || defaultLang);

  const [dictionary, setDictionary] = useState(languageOptions[language]);
  const changeLanguage = (lang) => {
    setLanguage(lang);
    setDictionary(languageOptions[lang]);
    localStorage.setItem("appLanguage", lang);
    console.log("Language changed to:", lang);
  };

  useEffect(() => {
    if (!storedLang) {
      localStorage.setItem("appLanguage", defaultLang);
    } else {
      setLanguage(storedLang);
      setDictionary(languageOptions[storedLang]);
    }
  }, [storedLang]);

  return (
    <LanguageContext.Provider value={{
      language,
      dictionary,
      changeLanguage
    }}>
      {children}
    </LanguageContext.Provider>
  );
};
