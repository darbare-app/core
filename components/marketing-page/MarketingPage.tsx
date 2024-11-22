import CssBaseline from "@mui/material/CssBaseline";
import AppAppBar from "../AppAppBar";
import Footer from "../Footer";
import { Box, Divider } from "@mui/material";
import Menu from "./components/Menu";
import { styled } from "@mui/system";
import { tabItems } from "@/mocks/menu";
import Hero from "./components/Hero";

const StyledMenu = styled(Menu)(() => ({
}));

const Wrapper = styled(Box)(() => ({
  marginTop: "7rem !important",
  maxWidth: "1150px",
  margin: "auto",
}));

export default function MarketingPage() {
  return (
    <Wrapper>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Hero />
      <StyledMenu tabItems={tabItems} />
      <Divider />
      <Footer />
    </Wrapper>
  );
}
