"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import styles from "./page.module.css";
import MarketingPage from "@/components/MarketingPage";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

const theme = createTheme();
export default function Home() {
  return (
    <AppRouterCacheProvider>
      <main className={styles.main}>
        <ThemeProvider theme={theme}>
          <MarketingPage />
        </ThemeProvider>
      </main>
    </AppRouterCacheProvider>
  );
}
