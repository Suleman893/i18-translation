import "./App.css";
import { Trans, useTranslation } from "react-i18next";
import LanguageSelector from "./components/LanguageSelector";

function App() {
  const { t } = useTranslation();

  const { line1, line2 } = t("description");

  return (
    <div className="container">
      <LanguageSelector />
      <h1>{t("greeting", { name: "suleman" })}</h1>
      <span>
        <Trans i18nKey={line1} components={{ b: <b />, 1: <i /> }} />
      </span>
      <span>{line2}</span>
    </div>
  );
}

export default App;
