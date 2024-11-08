import { IconButton } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function ToggleLang() {
  const { i18n } = useTranslation();
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "fa" : "en");
  };

  return <IconButton onClick={toggleLang}>{i18n.language === "en" ? "Fa" : "En"}</IconButton>;
}
