"use client";
import { ReactProps } from "@/types/defaultProps";
import { Box } from "@mui/material";
import React from "react";
import AppAppBar from "./AppAppBar";
import Footer from "./Footer";
import { styled } from "@mui/system";
import { usePathname } from "next/navigation";
import viewAddresses from "../utils/viewAddresses.json";

const Wrapper = styled(Box)(() => ({
  paddingTop: "6rem",
}));

export default function MainLayout({ children }: ReactProps) {
  const pathname = usePathname();

  if (pathname.match(viewAddresses.dashboard)) return children;

  return (
    <Wrapper>
      <AppAppBar />
      {children}
      <Footer />
    </Wrapper>
  );
}
