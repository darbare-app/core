import TranslationsProvider from "@/components/TranslationsProvider";
import Theme from "@/theme";
import { ReactProps } from "@/types/defaultProps";
import type { Metadata } from "next";
import initTranslations from "../i18n";
import "./globals.css";
import RtlLayout from "@/components/RtlLayout";
import MainLayout from "@/components/MainLayout";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "کافه درباره",
  description: "کافه ای در باره من و تو",
};
interface RootLayoutProps extends ReactProps {
  params: { local: "fa" | "en" };
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { local } = await params;
  
  const { resources } = await initTranslations();
  const isFa = local === "fa";

  return (
    <html lang={local} dir={isFa ? "rtl" : "ltr"}>
      <TranslationsProvider resources={resources} local={local}>
        <RtlLayout>
          <Theme local={local}>
            <body>
              <MainLayout>{children}</MainLayout>
            </body>
          </Theme>
        </RtlLayout>
      </TranslationsProvider>
    </html>
  );
}
