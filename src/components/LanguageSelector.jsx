import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "fr", lang: "French" },
  { code: "hi", lang: "Hindi" },
  { code: "ru", lang: "Russian" },
  { code: "fa", lang: "Iranic (Farsi)" },
  { code: "tr", lang: "Turkish" },
  { code: "ur", lang: "Urdu" },
  { code: "ko", lang: "Korean" },
  { code: "ar", lang: "Arabic" },
];
const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lgn) => {
    i18n.changeLanguage(lgn);
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div className="btn-container">
      {languages.map((lng) => {
        return (
          <button
            className={lng.code === i18n.language ? "selected" : ""}
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
          >
            {lng.lang}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
