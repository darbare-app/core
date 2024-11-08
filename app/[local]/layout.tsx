import TranslationsProvider from "@/components/TranslationsProvider";
import Theme from "@/theme";
import { ReactProps } from "@/types/defaultProps";
import type { Metadata } from "next";
import { Inter, Vazirmatn } from "next/font/google";
import initTranslations from "../i18n";
import "./globals.css";
export const runtime = "edge";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Darbare App",
  description: "Simple Coffee Shop app",
};
const vazirmatn = Vazirmatn({ subsets: ["arabic"] });

export default async function RootLayout({ children, local = "fa" }: ReactProps) {
  const { resources } = await initTranslations();
  const fontClassName = local === "fa" ? vazirmatn.className : inter.className;

  return (
    <html lang={local} dir={local === "fa" ? "rtl" : "ltr"}>
      <TranslationsProvider resources={resources} local={local}>
        <Theme local={local}>
          <body className={fontClassName}>{children}</body>
        </Theme>
      </TranslationsProvider>
    </html>
  );
}
