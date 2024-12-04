import Image from "next/image";
import logo from "/public/images/darbare.jpg";
import { IconButton, IconButtonProps } from "@mui/material";
import MuiNextLink from "./CLink";

export default function Logo({ sx, ...props }: IconButtonProps) {
  return (
    <IconButton
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        ...sx,
      }}
      {...props}
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
