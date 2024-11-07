import { useContext, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button, { ButtonProps } from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Logo from "@/components/Logo";
import { useTranslation } from "react-i18next";
import useLinkAddress from "@/hooks/useLinkAddress";
import Link from "next/link";
import { ColorModeContext } from "@/theme";
import ToggleColorMode from "./ToggleColorMode";
import ToggleLang from "./ToggleLang";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.shadows[1],
  padding: "8px 12px",
}));

function SignUpButton(props: ButtonProps) {
  const { t } = useTranslation();
  const getLink = useLinkAddress();
  return (
    <Button href={getLink("signIn")} color="primary" variant="contained" {...props}>
      {t("signUp")}
    </Button>
  );
}

function SignInButton(props: ButtonProps) {
  const { t } = useTranslation();
  const getLink = useLinkAddress();
  return (
    <Button href={getLink("signUp")} color="primary" variant="outlined" {...props}>
      {t("signIn")}
    </Button>
  );
}

export interface navItem {
  name: string;
  link: string;
}
export default function AppAppBar() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const getLink = useLinkAddress();
  const { toggleColorMode, mode } = useContext(ColorModeContext);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const navItems: navItem[] = [
    {
      name: t("blog"),
      link: getLink("blog"),
    },
    {
      name: t("dashboard"),
      link: getLink("dashboard"),
    },
  ];

  const navElements = navItems.map(({ name, link }) => (
    <Button key={link} component={Link} variant="text" color="info" size="small" href={link}>
      {name}
    </Button>
  ));

  const navElementsMobile = navItems.map(({ name, link }) => (
    <MenuItem key={link} component={Link} href={link}>
      {name}
    </MenuItem>
  ));

  return (
    <AppBar
      position="fixed"
      sx={{ boxShadow: 0, bgcolor: "transparent", backgroundImage: "none", mt: 2 }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}>
            <Logo />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>{navElements}</Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            <SignInButton />
            <SignUpButton variant="contained" />
            <ToggleColorMode
              data-screenshot="toggle-mode"
              mode={mode}
              toggleColorMode={toggleColorMode}
            />
            <ToggleLang />
          </Box>
          <Box sx={{ display: { sm: "flex", md: "none" } }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                <Divider sx={{ my: 3 }} />

                {navElementsMobile}
                <MenuItem>
                  <SignUpButton />
                </MenuItem>
                <MenuItem>
                  <SignInButton />
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
