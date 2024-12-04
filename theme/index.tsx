"use client";
import { createTheme, ThemeProvider, PaletteMode } from "@mui/material/styles";
import { createContext } from "react";
import { useState, useEffect, ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import getTheme from "./getTheme";
import { getLocalSTheme, setLocalThemeMode } from "@/utils/helpers";

interface ThemeProviderProps {
  children: ReactNode;
  local: Local;
}

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: "dark" as PaletteMode,
});

export default function CustomThemeProvider({ children, local }: ThemeProviderProps) {
  const [mode, setMode] = useState<PaletteMode>("light");

  useEffect(() => {
    const savedMode = getLocalSTheme();
    if (savedMode) {
      setMode(savedMode);
    } else {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const systemPreferMode = systemPrefersDark ? "dark" : "light";
      setLocalThemeMode(systemPreferMode);
      setMode(systemPreferMode);
    }
  }, []);

  const theme = createTheme(getTheme(mode, local));

  const toggleColorMode = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    setLocalThemeMode(newMode);
  };

  return (
    <ColorModeContext.Provider value={{ toggleColorMode, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
