import { TabItem } from "@/components/marketing-page/components/Menu";
import { MenuItemProps } from "@/components/marketing-page/components/Menu/MenuItem";

export const CoffeeMockMenuItems: MenuItemProps[] = [
  {
    name: "Americano",
    id: "americano",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
    description: "A shot of espresso with hot water added",
  },
  {
    name: "Cappuccino",
    id: "cappuccino",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
    description: "A shot of espresso with steamed milk and milk foam",
  },
  {
    name: "Espresso",
    id: "espresso",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
    description: "A shot of espresso",
  },
  {
    name: "Latte",
    id: "latte",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
    description: "A shot of espresso with steamed milk",
  },
  {
    name: "Mocha",
    id: "mocha",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
    description: "A shot of espresso with steamed milk and chocolate",
  },
];

export const TeaMockMenuItems: MenuItemProps[] = [
  {
    name: "Green Tea",
    id: "green-tea",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
    description: "A cup of green tea",
  },
  {
    name: "Black Tea",
    id: "black-tea",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
    description: "A cup of black tea",
  },
  {
    name: "Herbal Tea",
    id: "herbal-tea",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
    description: "A cup of herbal tea",
  },
  {
    name: "Chai Tea",
    id: "chai-tea",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
    description: "A cup of chai tea",
  },
  {
    name: "Oolong Tea",
    id: "oolong-tea",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
    description: "A cup of oolong tea",
  },
];

export const tabItems: TabItem[] = [
  {
    name: "Coffee",
    menuItems: [
      ...CoffeeMockMenuItems,
      ...CoffeeMockMenuItems,
      ...CoffeeMockMenuItems,
      ...CoffeeMockMenuItems,
    ],
    id: "coffee",
  },
  {
    name: "Tea",
    menuItems: [...TeaMockMenuItems, ...TeaMockMenuItems, ...TeaMockMenuItems, ...TeaMockMenuItems],
    id: "tea",
  },
];
