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

export const MENU_ITEMS: MenuItem[] = [
  // Charcoal & Mandi
  { id: "1", name: "Chicken Spicy Charcoal", arabicName: "دجاج على الفحم حار", price: "15/22/42", category: "Charcoal & Mandi", badge: "Must Try" },
  { id: "2", name: "Pepper Chicken Charcoal", arabicName: "دجاج على الفحم فلفل", price: "15/22/42", category: "Charcoal & Mandi" },
  { id: "3", name: "Green Chili Chicken Charcoal", arabicName: "دجاج على الفحم فلفل أخضر", price: "15/22/42", category: "Charcoal & Mandi" },
  { id: "4", name: "Eri Pori Chicken Charcoal", arabicName: "دجاج على الفحم ايري بوري", price: "15/22/42", category: "Charcoal & Mandi", badge: "Spicy" },
  { id: "5", name: "Dynamite Chicken Charcoal", arabicName: "دجاج على الفحم ديناميت", price: "16/22/42", category: "Charcoal & Mandi" },
  { id: "6", name: "Full Chicken Charcoal Mandi", arabicName: "دجاج مندي على الفحم كامل", price: "43.00", category: "Charcoal & Mandi" },
  { id: "7", name: "Half Chicken Charcoal Mandi", arabicName: "دجاج نصف مندي على الفحم", price: "23.00", category: "Charcoal & Mandi", badge: "New Arrival" },
  { id: "8", name: "Qtr Chicken Mandi", arabicName: "دجاج مندي ربع", price: "16.00", category: "Charcoal & Mandi" },
  { id: "9", name: "Chicken Wings Mandi", arabicName: "دجاج مندي اجنحة", price: "16.00", category: "Charcoal & Mandi" },
  { id: "10", name: "Chicken Tikka Mandi", arabicName: "دجاج مندي تكا", price: "16.00", category: "Charcoal & Mandi" },

  // Starters
  { id: "11", name: "Wings Plate", arabicName: "صحن اجنحة", price: "16.00", category: "Starters" },
  { id: "12", name: "Tikka Plate", arabicName: "صحن تكا", price: "18/28", category: "Starters" },
  { id: "13", name: "Mini Tikka", arabicName: "تكا ميني", price: "14.00", category: "Starters" },
  { id: "14", name: "Mini Mix", arabicName: "ميني مشكل", price: "20.00", category: "Starters" },

  // Fried Rice & Noodles
  { id: "15", name: "Fried Rice W. Full Charcoal", arabicName: "ارز مقلي مع على الفحم كامل", price: "42.00", category: "Fried Rice & Noodles" },
  { id: "16", name: "Fried Rice W. Half Charcoal", arabicName: "ارز مقلي مع على الفحم نصف", price: "23.00", category: "Fried Rice & Noodles" },
  { id: "17", name: "Fried Rice W. Qtr Charcoal", arabicName: "ارز مقلي مع على الفحم ربع", price: "15.00", category: "Fried Rice & Noodles" },
  { id: "18", name: "Chicken Fried Rice", arabicName: "ارز مقلي دجاج", price: "16.00", category: "Fried Rice & Noodles" },
  { id: "19", name: "Veg Fried Rice", arabicName: "ارز مقلي خضار", price: "13.00", category: "Fried Rice & Noodles" },
  { id: "20", name: "Chicken Noodles", arabicName: "معكرونة دجاج", price: "16.00", category: "Fried Rice & Noodles" },
  { id: "21", name: "Veg Noodles", arabicName: "معكرونة خضار", price: "13.00", category: "Fried Rice & Noodles" },
  { id: "22", name: "Fried Rice With Wings", arabicName: "ارز مقلي مع اجنحة", price: "15.00", category: "Fried Rice & Noodles" },
  { id: "23", name: "Broasted Fried Rice", arabicName: "ارز مقلي مع بروستد", price: "16.00", category: "Fried Rice & Noodles" },
  { id: "24", name: "Chicken Tikka Rice", arabicName: "ارز مقلي مع دجاج تكا", price: "15.00", category: "Fried Rice & Noodles" },
  { id: "25", name: "Gobi Manchurian Combo", arabicName: "كومبو جوبي منشوريان", price: "18.00", category: "Fried Rice & Noodles" },
  { id: "26", name: "Chicken Chilli Combo", arabicName: "كومبو دجاج تشيلي", price: "20.00", category: "Fried Rice & Noodles" },

  // Burgers
  { id: "33", name: "Chi./Beef Double Burger", arabicName: "برجر دبل لحم / دجاج", price: "12.00", category: "Burgers" },
  { id: "34", name: "Zinger Double", arabicName: "زنجر دبل", price: "15.00", category: "Burgers" },
  { id: "35", name: "Zinger Burger", arabicName: "برجر زنجر", price: "13.00", category: "Burgers" },
  { id: "36", name: "Chi. / Beef Burger", arabicName: "برجر دجاج / لحم", price: "7.00", category: "Burgers" },
  { id: "37", name: "Vegetable Burger", arabicName: "برجر خضار", price: "8.50", category: "Burgers" },
  { id: "38", name: "Nuggets Burger", arabicName: "برجر ناجتس", price: "8.00", category: "Burgers" },
  { id: "39", name: "Fillet Burger", arabicName: "برجر فيلية", price: "8.00", category: "Burgers" },
  { id: "40", name: "Lemon Burger", arabicName: "برجر ليمون", price: "9.00", category: "Burgers" },
  { id: "41", name: "Jumbo Prawns", arabicName: "جمبو روبيان", price: "9.00", category: "Burgers" },
  { id: "42", name: "Tikka Burger", arabicName: "برجر تكا", price: "9.00", category: "Burgers" },
  { id: "43", name: "Fish Burger", arabicName: "برجر سمك", price: "9.00", category: "Burgers" },

  // Grilled Sandwiches
  { id: "44", name: "Grilled Double Burger (Beef/Chicken)", arabicName: "برجر مشوي دبل", price: "19.00", category: "Grilled Sandwiches" },
  { id: "45", name: "Burger Zone Signature", arabicName: "برجر زون سيجنتشر", price: "17.00", category: "Grilled Sandwiches" },
  { id: "46", name: "Grill Burger", arabicName: "برجر مشوي", price: "16.00", category: "Grilled Sandwiches" },
  { id: "47", name: "Beef Mushroom", arabicName: "لحم مشروم", price: "16.00", category: "Grilled Sandwiches" },
  { id: "48", name: "Grill Chi. Wrap", arabicName: "راب دجاج مشوي", price: "15.00", category: "Grilled Sandwiches" },

  // Wraps
  { id: "49", name: "Zinger Wrap", arabicName: "راب زنجر", price: "12.00", category: "Wraps" },
  { id: "50", name: "Mathafi Wrap", arabicName: "راب مطافي", price: "12.00", category: "Wraps" },
  { id: "51", name: "Twister Wrap", arabicName: "راب تويستر", price: "8.00", category: "Wraps" },
  { id: "52", name: "Veg Wrap", arabicName: "راب خضار", price: "8.00", category: "Wraps" },
  { id: "53", name: "Tikka Wrap", arabicName: "راب تكا", price: "10.00", category: "Wraps" },

  // Club Sandwiches
  { id: "54", name: "Burger Zone Sp. Club", arabicName: "كلوب برجر زون خاص", price: "32.00", category: "Club Sandwiches" },
  { id: "55", name: "Club Sandwich", arabicName: "كلوب ساندويش", price: "15.00", category: "Club Sandwiches" },
  { id: "56", name: "International Club", arabicName: "كلوب انترناشونال", price: "37.00", category: "Club Sandwiches" },
  { id: "57", name: "Al Jazeera Family Club", arabicName: "كلوب عائلة الجزيرة", price: "24.00", category: "Club Sandwiches" },
  { id: "58", name: "Chicken Club", arabicName: "كلوب دجاج", price: "12.00", category: "Club Sandwiches" },
  { id: "59", name: "Veg Club", arabicName: "كلوب خضار", price: "12.00", category: "Club Sandwiches" },
  { id: "60", name: "Tikka Club", arabicName: "كلوب تكا", price: "12.00", category: "Club Sandwiches" },
  { id: "62", name: "Mega Club", arabicName: "كلوب عملاق", price: "12.00", category: "Club Sandwiches" },
  { id: "63", name: "Hotdog Club", arabicName: "كلوب نقانق", price: "10.00", category: "Club Sandwiches" },

  // Combos
  { id: "64", name: "Zinger Combo", arabicName: "كومبو زنجر", price: "12.00", category: "Combos" },
  { id: "65", name: "Mathafi Combo", arabicName: "كومبو مطافي", price: "13.00", category: "Combos" },
  { id: "66", name: "Chicken Fillet Combo", arabicName: "كومبو فيليه دجاج", price: "8.00", category: "Combos" },
  { id: "67", name: "Tikka Combo", arabicName: "كومبو تكا", price: "8.00", category: "Combos" },
  { id: "68", name: "Jumbo Prawns Combo", arabicName: "كومبو روبيان جمبو", price: "8.00", category: "Combos" },
  { id: "69", name: "Chicken Nuggets Combo", arabicName: "كومبو قطع دجاج", price: "8.00", category: "Combos" },
  { id: "70", name: "Kabab (Chi./Mut.)", arabicName: "كباب (دجاج/لحم)", price: "8.00", category: "Combos" },
  { id: "71", name: "Veg. Combo", arabicName: "كومبو خضار", price: "8.00", category: "Combos" },

  // Fried Chicken 
  { id: "72", name: "Wings Broast (10 pcs + fries + drink)", arabicName: "بروست أجنحة", price: "18.00", category: "Fried Chicken" },
  { id: "73", name: "Budget Meal (3 pcs)", arabicName: "وجبة اقتصادية", price: "15.00", category: "Fried Chicken" },
  { id: "74", name: "Mini Family Meal (9 pcs)", arabicName: "وجبة ميني عائلة", price: "48.00", category: "Fried Chicken" },
  { id: "75", name: "Family Meal (12 pcs)", arabicName: "وجبة عائلة", price: "62.00", category: "Fried Chicken" },
  { id: "76", name: "Party Meal (15 pcs)", arabicName: "وجبة بارتي", price: "74.00", category: "Fried Chicken" },
  { id: "77", name: "Snack Meal (2 pcs)", arabicName: "سناك ميل", price: "13.00", category: "Fried Chicken" },
  { id: "78", name: "Dinner Meal (3 pcs)", arabicName: "دينر ميل", price: "19.00", category: "Fried Chicken" },
  { id: "79", name: "Jumbo Meal (4 pcs)", arabicName: "جمبو ميل", price: "23.00", category: "Fried Chicken" },
  { id: "80", name: "Classic Meal (6 pcs)", arabicName: "كلاسيك ميل", price: "32.00", category: "Fried Chicken" },
  { id: "81", name: "Burger Zone Meal", arabicName: "برجر زون ميل", price: "20.00", category: "Fried Chicken" },
  { id: "82", name: "Strips Delight Meal (3/5 pcs)", arabicName: "ستريبس ديلايت ميل", price: "13/20", category: "Fried Chicken" },

  // Kids Meals
  { id: "83", name: "Kids Strips", arabicName: "ستريبس أطفال", price: "10.00", category: "Kids Meals" },
  { id: "84", name: "Kids Burger (Chi./Beef)", arabicName: "برجر أطفال", price: "9.00", category: "Kids Meals" },
  { id: "85", name: "Kids Mix", arabicName: "مشكل أطفال", price: "12.00", category: "Kids Meals" },
  { id: "86", name: "Kids Fried Chicken", arabicName: "دجاج بروست أطفال", price: "10.00", category: "Kids Meals" },

  // Appetizers
  { id: "87", name: "Loaded Fries", arabicName: "بطاطا مقلية لوداد", price: "16.00", category: "Appetizers" },
  { id: "88", name: "Mozzarella Sticks", arabicName: "ستيكس موزريلا", price: "14.00", category: "Appetizers" },
  { id: "89", name: "Crispy Chicken Dynamite", arabicName: "دجاج كريسبي ديناميت", price: "14.00", category: "Appetizers" },
  { id: "90", name: "Dynamite Fries", arabicName: "بطاطا ديناميت", price: "8/15", category: "Appetizers" },
  { id: "91", name: "Popcorn Dynamite", arabicName: "بوبكورن ديناميت", price: "12.00", category: "Appetizers" },
  { id: "92", name: "Spicy Fries", arabicName: "بطاطا حارة", price: "6/10", category: "Appetizers" },
  { id: "93", name: "Wedges", arabicName: "ويدجز", price: "6/10", category: "Appetizers" },
  { id: "94", name: "French Fries", arabicName: "بطاطا مقلي", price: "5/8/10", category: "Appetizers" },
  { id: "95", name: "Onion Rings", arabicName: "حلقات بصل", price: "6/10", category: "Appetizers" },
  { id: "96", name: "Potato Rings", arabicName: "حلقات بطاطس", price: "6/10", category: "Appetizers" },
  { id: "97", name: "Chicken Nuggets", arabicName: "قطع دجاج", price: "8/12", category: "Appetizers" },
  { id: "98", name: "Chicken Popcorn", arabicName: "دجاج بوب كورن", price: "6/10", category: "Appetizers" },
  { id: "99", name: "Jumbo Prawns Plate", arabicName: "صحن جمبو روبيان", price: "15.00", category: "Appetizers" },
  { id: "100", name: "Hotdog Plate", arabicName: "صحن نقانق", price: "10.00", category: "Appetizers" },

  // Poratta
  { id: "101", name: "Zinger Poratta", arabicName: "براتا زنجر", price: "10.00", category: "Poratta" },
  { id: "102", name: "Omelette Poratta", arabicName: "براتا اومليت", price: "5.00", category: "Poratta" },
  { id: "103", name: "Tikka Poratta", arabicName: "براتا تكا", price: "6.00", category: "Poratta" },
  { id: "104", name: "Veg. Poratta", arabicName: "براتا خضار", price: "5.00", category: "Poratta" },
  { id: "105", name: "Francisco", arabicName: "فرانسيسكو", price: "7.00", category: "Poratta" },

  // Healthy & New Launch
  { id: "106", name: "Zakis Kuku", arabicName: "زكيس كوكو", price: "17.00", category: "New Launch" },
  { id: "107", name: "Sheesh Tawook", arabicName: "شيش طاووق", price: "12.00", category: "New Launch" },
  { id: "108", name: "Grilled Chicken Breast + Juice + Salad", arabicName: "صدر دجاج مشوي + عصير + سلطة", price: "17.00", category: "Healthy", badge: "Gym Meal" },
  { id: "109", name: "Chicken Salad", arabicName: "سلطة دجاج", price: "15.00", category: "Healthy" },
  { id: "110", name: "Green Salad", arabicName: "سلطة خضراء", price: "8.00", category: "Healthy" },

  // Combo Meals
  { id: "111", name: "Wrap Meal (Zinger Wrap + Fries + Juice)", arabicName: "وجبة راب", price: "17.00", category: "Combo Meals" },
  { id: "112", name: "Shawarma Meal", arabicName: "وجبة شاورما", price: "11.00", category: "Combo Meals" },
  { id: "113", name: "Grilled Burger Meal", arabicName: "وجبة برجر مشوي", price: "22.00", category: "Combo Meals" },
  { id: "114", name: "Burger Meal", arabicName: "وجبة برجر", price: "12.00", category: "Combo Meals" },
  { id: "115", name: "Club Meal", arabicName: "وجبة كلوب", price: "18.00", category: "Combo Meals" },
  { id: "116", name: "Zinger Meal", arabicName: "وجبة زنجر", price: "18.00", category: "Combo Meals" },

  // Breakfast & Cheetos 
  { id: "117", name: "Grill Cheetos", arabicName: "شيتوس مشوي", price: "17.00", category: "Cheetos" },
  { id: "118", name: "Arabic Cheetos", arabicName: "شيتوس عربي", price: "20.00", category: "Cheetos" },
  { id: "119", name: "Zinger Cheetos", arabicName: "شيتوس زنجر", price: "15.00", category: "Cheetos" },
  { id: "120", name: "Mathafi Cheetos", arabicName: "شيتوس مطافي", price: "16.00", category: "Cheetos" },
  { id: "121", name: "Tikka Cheetos", arabicName: "شيتوس تكا", price: "14.00", category: "Cheetos" },
  { id: "122", name: "Avocado Chicken Sandwich", arabicName: "ساندوتش دجاج افوكادو", price: "13.00", category: "Breakfast" },
  { id: "123", name: "Peanut Cheese Sandwich", arabicName: "جبن فول سوداني", price: "4.00", category: "Breakfast" },
  { id: "124", name: "Nutella Slice", arabicName: "سلايس نوتيلا", price: "5.00", category: "Breakfast" },
  { id: "125", name: "Semi Hotdog", arabicName: "سيمي نقانق", price: "8.00", category: "Breakfast" },
  { id: "126", name: "Egg Cheese Burger", arabicName: "برجر بيض جبن", price: "6.00", category: "Breakfast" },
  { id: "127", name: "Omelette Sandwich", arabicName: "ساندوتش بيض مقلي", price: "4.00", category: "Breakfast" },
  { id: "128", name: "Grill Chicken Sandwich", arabicName: "ساندوتش دجاج مشوي", price: "12.00", category: "Breakfast" },
  { id: "129", name: "Peanut Butter Banana", arabicName: "فول سوداني وموز", price: "6.00", category: "Breakfast" },
  { id: "130", name: "Falafil Sandwich", arabicName: "ساندوتش فلافل", price: "5.00", category: "Breakfast" },

  // Desserts
  { id: "131", name: "Falooda Special", arabicName: "فالوده سبيشل", price: "12.00", category: "Desserts" },
  { id: "132", name: "Ice Cream Nuts", arabicName: "ايس كريم مكسرات", price: "12.00", category: "Desserts" },
  { id: "133", name: "Multy Dessert", arabicName: "ملتي ديزيرت", price: "14.00", category: "Desserts" },
  { id: "134", name: "Mix Fruits Plate", arabicName: "صحن فواكه مشكل", price: "15/25", category: "Desserts" },
  { id: "135", name: "Mix Ice Cream", arabicName: "ايس كريم مشكل", price: "7/10", category: "Desserts" },
  { id: "136", name: "Fruit Salad", arabicName: "سلطة فواكه", price: "10.00", category: "Desserts" },
  { id: "137", name: "Falooda", arabicName: "فالودة", price: "10.00", category: "Desserts" },

  // Smoothies & Mojito
  { id: "138", name: "Mango Smoothie", arabicName: "مانجو سموذي", price: "10.00", category: "Mojito & Smoothies" },
  { id: "139", name: "Strawberry Smoothie", arabicName: "فراولة سموذي", price: "10.00", category: "Mojito & Smoothies" },
  { id: "140", name: "Avocado Smoothie", arabicName: "افوكادو سموذي", price: "10.00", category: "Mojito & Smoothies" },
  { id: "144", name: "Passion Mojito", arabicName: "موهيتو باشن", price: "12.00", category: "Mojito & Smoothies" },
  { id: "145", name: "Strawberry Mojito", arabicName: "موهيتو فراولة", price: "12.00", category: "Mojito & Smoothies" },
  { id: "146", name: "Watermelon Mojito", arabicName: "موهيتو بطيخ", price: "12.00", category: "Mojito & Smoothies" },
  { id: "147", name: "Blueberry Mojito", arabicName: "موهيتو توت", price: "12.00", category: "Mojito & Smoothies" },

  // Crush Milk
  { id: "148", name: "Nutella Crush", arabicName: "كراش نوتيلا", price: "12.00", category: "Crush Milk" },
  { id: "149", name: "Kitkat Crush", arabicName: "كراش كيتكات", price: "12.00", category: "Crush Milk" },
  { id: "150", name: "Galaxy Crush", arabicName: "كراش جالاكسي", price: "12.00", category: "Crush Milk" },
  { id: "151", name: "Lotus Crush", arabicName: "كراش لوتس", price: "12.00", category: "Crush Milk" },
  { id: "152", name: "Peanut Crush", arabicName: "كراش فول سوداني", price: "12.00", category: "Crush Milk" },
  { id: "153", name: "Oreo Crush Milk", arabicName: "حليب كراش اوريو", price: "12.00", category: "Crush Milk" },

  // Fresh Juice & Milkshakes
  { id: "154", name: "Watermelon Juice", arabicName: "عصير بطيخ", price: "8/10/12", category: "Fresh Juice" },
  { id: "158", name: "Avocado Juice", arabicName: "عصير افوكادو", price: "8/10/12", category: "Fresh Juice" },
  { id: "159", name: "Mango Juice", arabicName: "عصير مانجو", price: "8/10/12", category: "Fresh Juice" },
  { id: "162", name: "Strawberry Juice", arabicName: "عصير فراولة", price: "8/10/12", category: "Fresh Juice" },
  { id: "171", name: "Bottle Juice", arabicName: "عصير غرشة", price: "35.00", category: "Fresh Juice" },
  { id: "172", name: "Strawberry Milkshake", arabicName: "ميلك شيك فراولة", price: "9/11", category: "Milkshakes" },
  { id: "174", name: "Chocolate Milkshake", arabicName: "ميلك شيك شوكولاتة", price: "9/11", category: "Milkshakes" },
  { id: "175", name: "Vanilla Milkshake", arabicName: "ميلك شيك فانيلا", price: "9/11", category: "Milkshakes" },
  { id: "185", name: "Burger Zone Sp. Juice", arabicName: "عصير برجر زون سبيشل", price: "12.00", category: "Fresh Juice" },

  // Shawarma
  { id: "186", name: "Shawarma Normal/Spicy", arabicName: "شاورما عادي/ حار", price: "6.00", category: "Shawarma" },
  { id: "187", name: "Shawarma Plate", arabicName: "صحن شاورما", price: "14/22", category: "Shawarma" },
  { id: "188", name: "Big Shawarma", arabicName: "شاورما كبير", price: "10.00", category: "Shawarma" },
  { id: "189", name: "Hassan Mathar", arabicName: "حسن مطر", price: "7.00", category: "Shawarma" },
  { id: "190", name: "Shawarma Club", arabicName: "كلوب شاورما", price: "12.00", category: "Shawarma" },
  { id: "191", name: "Shawarma Combo", arabicName: "كومبو شاورما", price: "9.00", category: "Shawarma" },
  { id: "192", name: "Arabic Shawarma", arabicName: "شاورما عربي", price: "12.00", category: "Shawarma" },
  { id: "193", name: "Shawarma Poratta", arabicName: "براتا شاورما", price: "7.00", category: "Shawarma" },
];
