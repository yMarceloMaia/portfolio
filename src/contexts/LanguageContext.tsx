import { createContext, useState, useContext } from "react";

const LanguageContext = createContext({
  language: "en",
  toggleLanguage: () => {},
});

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => {
      const newLanguage = prevLanguage === "en" ? "pt" : "en";
      localStorage.setItem("language", newLanguage);
      return newLanguage;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
