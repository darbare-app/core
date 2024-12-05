import { ReactProps } from "@/types/defaultProps";
import { Box } from "@mui/material";

export default function layout({ children }: ReactProps) {
  return <Box>{children}</Box>;
}
