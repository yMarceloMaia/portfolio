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
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "pt" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
