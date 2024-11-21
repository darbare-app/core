import TranslationsProvider from "@/components/TranslationsProvider";
import Theme from "@/theme";
import { ReactProps } from "@/types/defaultProps";
import type { Metadata } from "next";
import { Inter, Vazirmatn } from "next/font/google";
import initTranslations from "../i18n";
import "./globals.css";
import RtlLayout from "@/components/RtlLayout";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "کافه درباره",
  description: "کافه ای در باره من و تو",
};

// fonts
const inter = Inter({ subsets: ["latin"] });
const vazirmatn = Vazirmatn({ subsets: ["arabic"] });

interface RootLayoutProps extends ReactProps {
  params: { local: "fa" | "en" };
}

export default async function RootLayout({ children, params: { local } }: RootLayoutProps) {
  const { resources } = await initTranslations();
  const isFa = local === "fa";
  const fontClassName = isFa ? vazirmatn.className : inter.className;
  

  return (
    <html lang={local} dir={isFa ? "rtl" : "ltr"}>
      <TranslationsProvider resources={resources} local={local}>
        <RtlLayout>
          <Theme local={local}>
            <body className={fontClassName}>{children}</body>
          </Theme>
        </RtlLayout>
      </TranslationsProvider>
    </html>
  );
}
