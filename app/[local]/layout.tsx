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
  
  const urlParams = await params;
  const { resources } = await initTranslations();
  const isFa = urlParams.local === "fa";
  

  return (
    <html lang={urlParams.local} dir={isFa ? "rtl" : "ltr"}>
      <TranslationsProvider resources={resources} local={urlParams.local}>
        <RtlLayout>
          <Theme local={urlParams.local}>
            <body>
              <MainLayout>{children}</MainLayout>
            </body>
          </Theme>
        </RtlLayout>
      </TranslationsProvider>
    </html>
  );
}
