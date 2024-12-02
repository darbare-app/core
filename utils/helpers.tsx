import viewAddresses from "@/utils/viewAddresses.json";
import { PaletteMode } from "@mui/material";

export function deepCopy(obj: object) {
  return JSON.parse(JSON.stringify(obj));
}

export function getLink(viewName: string) {
  return `/${(viewAddresses as any)[viewName]}/`;
}

export function getLocalSTheme(): PaletteMode {
  return (localStorage.getItem("themeMode") || "light") as PaletteMode;
}

export function setLocalThemeMode(mode: PaletteMode) {
  localStorage.setItem("themeMode", mode);
}
