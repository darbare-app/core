import { PaletteMode } from "@mui/material/styles";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";

interface ToggleColorModeProps extends IconButtonProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}
export default function ToggleColorMode({ mode, toggleColorMode, ...props }: ToggleColorModeProps) {
  return (
    <IconButton
      onClick={toggleColorMode}
      color="primary"
      aria-label="Theme toggle button"
      {...props}
    >
      {mode === "dark" ? <WbSunnyRoundedIcon /> : <ModeNightRoundedIcon />}
    </IconButton>
  );
}
