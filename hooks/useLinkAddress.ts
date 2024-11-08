import { useCurrentLocale } from "next-i18n-router/client";
import viewAddresses from "@/utils/viewAddresses.json";
import i18nConfig from "@/i18nConfig";
export default function useLinkAddress() {
  const local = useCurrentLocale(i18nConfig);

  return function getLink(viewName: string) {
    return `${local !== "fa" ? local : ""}/${(viewAddresses as any)[viewName]}/`;
  };
}
