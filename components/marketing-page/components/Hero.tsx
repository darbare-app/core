import { styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const StyledTypo = styled(Typography)(() => ({
  textAlign: "center",
  maxWidth: "500px",
  margin: "auto",
}));

export default function Hero() {
  const { t } = useTranslation();
  return <StyledTypo variant="h1">{t("hero")}</StyledTypo>;
}
