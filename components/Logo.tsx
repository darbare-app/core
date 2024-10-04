import Image from "next/image";
import logo from "/public/darbare.jpg";
import { Box, Typography } from "@mui/material";

export default function Logo() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: ".5rem", mr: 1 }}>
      <Image alt="Darbare logo" src={logo} height={30} style={{ borderRadius: "50%" }} />
      <Typography sx={{ color: "hsl(210, 100%, 65%)" }}>ABOUT</Typography>
    </Box>
  );
}
