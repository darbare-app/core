import { useCurrentLocale } from "next-i18n-router/client";
import viewAddresses from "@/utils/viewAddresses.json";
import i18nConfig from "@/i18nConfig";
export default function useLinkAddress() {
  const locale = useCurrentLocale(i18nConfig);

  return function getLink(viewName: string) {
    return `${locale}/${(viewAddresses as any)[viewName]}/`;
  };
}
