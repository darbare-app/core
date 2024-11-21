"use client";
import { useEffect } from "react";

// material-ui
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// third-party
import rtlPlugin from "stylis-plugin-rtl";
import { ReactProps } from "@/types/defaultProps";
import { useTranslation } from "react-i18next";

export default function RtlLayout({ children }: ReactProps) {
  const { i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.language === "fa" ? "rtl" : "ltr";
    document.dir = dir;
  }, [i18n.language]);

  const cacheRtl = createCache({
    key: i18n.language === "fa" ? "rtl" : "css",
    prepend: true,
    stylisPlugins: i18n.language === "fa" ? [rtlPlugin] : [],
  });

  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
}
