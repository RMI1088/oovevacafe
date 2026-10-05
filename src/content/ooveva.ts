export const business = {
  name: "Ooveva – The In House Cafe",
  shortName: "Ooveva",
  addressLines: [
    "Back of Woodland, beside D-Mart",
    "Subedari, Hanamkonda",
    "Telangana 506001",
  ],
  directionsUrl: "https://maps.app.goo.gl/b1rK7KLvhA7gyPFp9?g_st=ac",
  phoneDisplay: "+91 89773 95454",
  phoneUrl: "tel:+918977395454",
  whatsappUrl: "https://wa.me/918977395454",
  instagramUrl: "https://www.instagram.com/cafe_ooveva/",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Ooveva%20The%20In%20House%20Cafe%2C%20Subedari%2C%20Hanamkonda%2C%20Telangana%20506001&output=embed",
} as const;

export type MenuItem = {
  name: string;
  price?: number;
  options?: boolean;
  description?: string;
};

export type MenuCategory = {
  name: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    name: "Sandwiches",
    items: [
      { name: "Paneer Tikka Sandwich", price: 279 },
      { name: "Garden Grill Sandwich", price: 249 },
      { name: "Tandoori Chicken Sandwich", price: 299 },
      { name: "Pesto Chicken Sandwich", price: 399 },
    ],
  },
  {
    name: "Pizza",
    items: [
      { name: "Margharita", price: 379 },
      { name: "Farmhouse Pizza", price: 419 },
      { name: "Paneer Tikka Pizza", price: 399 },
      { name: "Tandoori Chicken Pizza", price: 429 },
      { name: "Crispy Chicken Pesto Crunch", price: 449 },
      { name: "Barbecue Chicken Pizza" },
    ],
  },
  {
    name: "Continental Starters",
    items: [
      { name: "Cheesy Turkish Chicken", price: 329 },
      { name: "Thai Basil", price: 299 },
      { name: "Korean Fried Chicken", price: 369 },
      { name: "French Fries", price: 179 },
      { name: "French Fries Loaded", price: 249 },
    ],
  },
  {
    name: "Pasta",
    items: [
      { name: "Spaghetti Agilo E Olio", price: 299 },
      { name: "Arrabiatta", options: true },
      { name: "Alfredo", options: true },
      { name: "Pesto Genovese", options: true },
      { name: "Salsa Rosa", options: true },
    ],
  },
  {
    name: "Main Course",
    items: [
      { name: "Thai Red Curry Chicken", price: 349 },
      { name: "Tempered Curd Rice", price: 229 },
      { name: "Matka Dum Biryani Chicken", price: 349 },
      { name: "Matka Dum Biryani Paneer", price: 299 },
    ],
  },
  {
    name: "Desserts",
    items: [
      { name: "Hot Chocolate Fudge", price: 329 },
      { name: "Blueberry Cheese Cake", price: 249 },
    ],
  },
  { name: "Water", items: [{ name: "Water", price: 20 }] },
  {
    name: "Cold Beverages",
    items: [
      { name: "Minty Melon", price: 239 },
      { name: "Kitkat Shake", price: 229 },
      { name: "Berry Brew", price: 239 },
      { name: "Sweet & Spicy Peach Cooler", price: 239 },
      { name: "Sea Breeze", price: 249 },
      { name: "Mango Chilli Margarita", price: 249 },
      { name: "Oreo Shake", price: 239 },
      { name: "Iced Citrus Brew", price: 229 },
      { name: "Ooveva Cold Coffe", price: 249 },
    ],
  },
  {
    name: "Sliders",
    items: [
      { name: "Golden Crunch Chicken Burger", price: 299 },
      { name: "Korean Chicken Slider", price: 369 },
      { name: "Aloo Tikki Slider", price: 229 },
    ],
  },
  {
    name: "The Espresso Bar",
    items: [
      { name: "Cafe Latte", price: 179 },
      { name: "Espresso", price: 99 },
      { name: "Macchiato", price: 169 },
      { name: "Mochacciano", price: 219 },
      { name: "Affogato", price: 229 },
      { name: "Flat White", price: 189 },
      { name: "Americano", price: 189 },
      { name: "Double Espresso", price: 139 },
      { name: "Cappuccino", price: 229 },
      { name: "Spanish Latte", price: 239 },
    ],
  },
  {
    name: "The Chocolate Atelier",
    items: [
      { name: "Nutella Hot Chocolate", price: 249 },
      { name: "Hot Chocolate", price: 199 },
    ],
  },
];