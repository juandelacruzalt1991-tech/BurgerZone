export type Category = 
  | "Charcoal & Mandi"
  | "Starters"
  | "Fried Rice & Noodles"
  | "Burgers"
  | "Grilled Sandwiches"
  | "Wraps"
  | "Club Sandwiches"
  | "Combos"
  | "Fried Chicken"
  | "Kids Meals"
  | "Appetizers"
  | "Poratta"
  | "Cheetos"
  | "Breakfast"
  | "Healthy"
  | "Combo Meals"
  | "New Launch"
  | "Desserts"
  | "Mojito & Smoothies"
  | "Fresh Juice"
  | "Milkshakes"
  | "Crush Milk"
  | "Shawarma";

export interface MenuItem {
  id: string;
  name: string;
  arabicName: string;
  price: string;
  category: Category;
  badge?: "Must Try" | "New Arrival" | "Gym Meal" | string;
}

export const CATEGORIES: Category[] = [
  "Charcoal & Mandi", "Starters", "Fried Rice & Noodles", "Burgers", 
  "Grilled Sandwiches", "Wraps", "Club Sandwiches", "Combos", 
  "Fried Chicken", "Kids Meals", "Appetizers", "Poratta", "Cheetos", 
  "Breakfast", "Healthy", "Combo Meals", "New Launch", "Desserts", 
  "Mojito & Smoothies", "Fresh Juice", "Milkshakes", "Crush Milk", "Shawarma"
];


