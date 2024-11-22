import { ReactProps } from "@/types/defaultProps";
import { Chip, Divider, Grid2, Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import { ReactNode, useState } from "react";
import { styled } from "@mui/material/styles";
import MenuItem, { MenuItemProps } from "./MenuItem";

export interface TabItem {
  name: string;
  id: string;
  menuItems: MenuItemProps[];
}

interface MenuProps extends ReactProps {
  tabItems: TabItem[];
}

const TabsWrapper = styled(Tabs)(() => ({
  display: "inline-flex",
  flexDirection: "row",
  gap: 3,
  overflow: "auto",
}));

const Wrapper = styled(Box)(() => ({ width: "100%", marginTop: "1rem" }));

type ReducerInitVal = [JSX.Element[], ReactNode[]];

const reducerInitVal: ReducerInitVal = [[], []];

export default function Menu({ tabItems, ...props }: MenuProps) {
  const [currentTab, setCurrentTab] = useState(0);

  const handleClick = (newVal: number) => {
    setCurrentTab(newVal);
  };

  const [tabs, menuItems] = tabItems.reduce(
    (prev, item, index, array) => {
      const zero = (
        <Tab
          value={+index}
          key={item.id}
          label={<Chip size="medium" label={item.name} />}
          onClick={() => handleClick(+index)}
        />
      );

      const one =
        prev[1].length === 0
          ? array[currentTab].menuItems.map((menuItem, index) => (
              <Grid2 key={index} size={{ sm: 4, md: 3, xs: 12 }}>
                <MenuItem {...menuItem} />
              </Grid2>
            ))
          : prev[1];

      return [prev[0].concat(zero), one as any];
    },
    [...reducerInitVal],
  );

  return (
    <Wrapper {...props}>
      <TabsWrapper value={currentTab}>{tabs}</TabsWrapper>
      <Divider />
      <Grid2 container spacing={2} p={2} justifyContent="space-between" alignItems="center">
        {menuItems}
      </Grid2>
    </Wrapper>
  );
}
