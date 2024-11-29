import { Config } from "next-i18n-router/dist/types";

const i18nConfig: Config = {
  locales: ["fa", "en"],
  defaultLocale: "fa",
  localeDetector(request: any, config: any) {
    return request.cookies.NEXT_LOCALE || config.defaultLocale;
  },
};
export default i18nConfig;
