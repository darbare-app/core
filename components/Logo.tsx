import Image from "next/image";
import logo from "/public/darbare.jpg";
import { IconButton } from "@mui/material";
import MuiNextLink from "./CLink";

export default function Logo() {
  return (
    <IconButton
      sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%" }}
    >
      <MuiNextLink
        href="/"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&::before": {
            height: 0,
          },
        }}
      >
        <Image alt="Darbare logo" src={logo} height={30} style={{ borderRadius: "50%" }} />
      </MuiNextLink>
    </IconButton>
  );
}
