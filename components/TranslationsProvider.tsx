"use client";
import { I18nextProvider } from "react-i18next";
import initTranslations from "@/app/i18n";
import { createInstance, Resource } from "i18next";
import { ReactProps } from "@/types/defaultProps";

interface Props extends ReactProps {
  resources: Resource;
}
export default function TranslationsProvider({ children, local, resources }: Props) {
  const i18n = createInstance();

  initTranslations(local, i18n, resources);
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
