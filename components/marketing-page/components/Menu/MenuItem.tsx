import { ReactProps } from "@/types/defaultProps";
import { Card, CardContent, CardMedia, Tooltip, Typography } from "@mui/material";

export interface MenuItemProps extends ReactProps {
  name: string;
  id: string;
  image: string;
  description: string;
}

function MenuItem({ name, id, image, description, ...props }: MenuItemProps) {
  return (
    <Tooltip title={description}>
      <Card id={id} {...props}>
        <CardMedia component="img" width={40} height={100} src={image} image={image} alt={name} />
        <CardContent>
          <Typography textAlign="center" pt={1} variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </Card>
    </Tooltip>
  );
}

export default MenuItem;
