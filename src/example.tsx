import { useTranslation } from "react-i18next";
import { useState } from "react";

const {
  t,
  i18n: { changeLanguage, language },
} = useTranslation();

const [lang, setLang] = useState(language);

const handleChangeLanguage = () => {
  const newLang = lang === "en" ? "pt" : "en";
  changeLanguage(newLang);
  setLang(newLang);
};

<>
  <p>{t("test")}</p>
  <button type="button" onClick={handleChangeLanguage}></button>;
</>;
