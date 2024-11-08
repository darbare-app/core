import CssBaseline from "@mui/material/CssBaseline";
import AppAppBar from "../AppAppBar";
import Hero from "./components/Hero";
import Footer from "../Footer";
import { Divider } from "@mui/material";

export default function MarketingPage() {
  return (
    <>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Hero />
      <Divider />
      <Footer />
    </>
  );
}
