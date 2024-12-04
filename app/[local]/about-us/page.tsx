"use client";
import { Box, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import darbareImg from "@/public/images/darbareAboutUsPage.jpg";
import { useTranslation } from "react-i18next";

export default function page() {
  const widthAndHeight = { md: 500, sm: 300 };
  const { t } = useTranslation();

  return (
    <Box>
      <Typography variant="h6" width="100%" align="center">
        {t("aboutUsDescription")}
      </Typography>

      <Grid2 container justifyContent="space-around" gap={5} mt={4}>
        <Grid2 size={{ md: 5, sm: 12 }}>
          <Box
            component={Image}
            src={darbareImg}
            alt="about us کافه درباره"
            sx={{
              width: widthAndHeight,
              height: widthAndHeight,
            }}
          />
        </Grid2>
        <Grid2 size={{ md: 5, sm: 12 }}>
          <Box
            component="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1618.6610696795399!2d51.369833092511946!3d35.76746246992131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e07e79db69c2b%3A0x59fe212e3f9f5b5e!2sCafe%20Darbare!5e0!3m2!1sen!2sit!4v1732866390136!5m2!1sen!2sit"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            sx={{
              width: widthAndHeight,
              height: widthAndHeight,
            }}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
}
