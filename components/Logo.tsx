import Image from "next/image";
import logo from "/public/darbare.jpg";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import MuiNextLink from "./CLink";

export default function Logo() {
  const { t } = useTranslation();
  return (
    <MuiNextLink
      href="/"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: ".5rem",
        mr: 1,
        textDecoration: "none !important",
      }}
    >
      <Image alt="Darbare logo" src={logo} height={30} style={{ borderRadius: "50%" }} />
      <Typography sx={{ color: "hsl(210, 100%, 65%)" }}>{t("Darbare")}</Typography>
    </MuiNextLink>
  );
}
