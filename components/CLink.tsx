import React from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import MuiLink, { LinkProps as MuiLinkProps } from "@mui/material/Link";

type CLinkProps = Omit<MuiLinkProps, "href"> &
  Pick<
    NextLinkProps,
    "href" | "as" | "prefetch" | "replace" | "scroll" | "shallow" | "passHref" | "locale"
  >;

const MuiNextLink = React.forwardRef<HTMLAnchorElement, CLinkProps>((props, ref) => {
  const {
    href,
    as,
    prefetch,
    replace,
    scroll,
    shallow,
    passHref = true,
    locale,
    children,
    ...muiProps
  } = props;

  return (
    <MuiLink
      href={href}
      as={as}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      locale={locale}
      component={NextLink}
      ref={ref}
      {...muiProps}
    >
      {children}
    </MuiLink>
  );
});

MuiNextLink.displayName = "MuiNextLink";

export default MuiNextLink;
