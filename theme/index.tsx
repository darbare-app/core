"use client";
import { createTheme, ThemeProvider, PaletteMode } from "@mui/material/styles";
import { createContext } from "react";
import { useState, useEffect, ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import getMPTheme from "./getMPTheme";

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

  const theme = createTheme(getMPTheme(mode, local));

  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode") as PaletteMode | null;
    if (savedMode) {
      setMode(savedMode);
    } else {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setMode(systemPrefersDark ? "dark" : "light");
    }
  }, []);

  const toggleColorMode = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    localStorage.setItem("themeMode", newMode);
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
