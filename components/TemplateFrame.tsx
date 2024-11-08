import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { createTheme, PaletteMode, styled, ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import AppAppBar from "./AppAppBar";
import getMPTheme from "./marketing-page/theme/getMPTheme";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderBottom: "1px solid",
  borderColor: theme.palette.divider,
  backgroundColor: theme.palette.background.paper,
  boxShadow: "none",
  backgroundImage: "none",
  zIndex: theme.zIndex.drawer + 1,
  flex: "0 0 auto",
}));

interface TemplateFrameProps {
  showCustomTheme: boolean;
  toggleCustomTheme: (theme: boolean) => void;
  mode: PaletteMode;
  toggleColorMode: () => void;
  children: React.ReactNode;
}

export default function TemplateFrame({
  showCustomTheme,
  toggleCustomTheme,
  mode,
  toggleColorMode,
  children,
}: TemplateFrameProps) {
  const MPTheme = createTheme(getMPTheme(mode));

  return (
    <ThemeProvider theme={MPTheme}>
      <Box sx={{ height: "100dvh", display: "flex", flexDirection: "column" }}>
        <StyledAppBar>
          <AppAppBar
            toggleCustomTheme={toggleCustomTheme}
            showCustomTheme={showCustomTheme}
            mode={mode}
            toggleColorMode={toggleColorMode}
          />
        </StyledAppBar>
        <Box sx={{ flex: "1 1", overflow: "auto" }}>{children}</Box>
      </Box>
    </ThemeProvider>
  );
}
