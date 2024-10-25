"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import styles from "./page.module.css";
import MarketingPage from "@/components/marketing-page/MarketingPage";
export default function Home() {
  return (
    <AppRouterCacheProvider>
      <main className={styles.main}>
        <MarketingPage />
      </main>
    </AppRouterCacheProvider>
  );
}
