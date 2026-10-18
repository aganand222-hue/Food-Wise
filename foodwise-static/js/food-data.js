// Single source of truth for all food-related data on the site.
// Every item has a "college" field so pages can filter/compare by canteen.
// Add a new canteen item? Just add one entry here — every page updates automatically.

const foods = [

    // ============ MVLU COLLEGE CANTEEN ============
    { college: "MVLU College", name: "Idli (2 pieces)", img: "idli", price: 30, price_note: "with sambar",
      ingredients: "Rice, Urad dal, Fenugreek seeds, Salt, Water",
      calories: 120, protein: 4, carbs: 25, fat: 0.5, vitamins: "Iron, Calcium, B vitamins" },

    { college: "MVLU College", name: "Plain Maggi (1 packet)", img: "plain-maggi", price: null,
      ingredients: "Maggi noodles, Tastemaker/seasoning, Water, Oil",
      calories: 300, protein: 7, carbs: 40, fat: 13, vitamins: "Iron, B vitamins, Sodium" },

    { college: "MVLU College", name: "Medu Vada (2 pieces)", img: "medu-vada", price: 40,
      ingredients: "Urad dal, Green chilli, Ginger, Curry leaves, Coriander, Black pepper, Cumin, Salt, Oil",
      calories: 280, protein: 10, carbs: 30, fat: 14, vitamins: "Iron, Magnesium, Potassium" },

    { college: "MVLU College", name: "Vada Pav (1)", img: "vada-pav", price: null,
      ingredients: "Potato, Gram flour (besan), Green chilli, Ginger, Garlic, Turmeric, Mustard seeds, Curry leaves, Salt, Oil, Pav bread, Green chutney, Dry garlic chutney",
      calories: 300, protein: 7, carbs: 45, fat: 11, vitamins: "Iron, Calcium, Potassium" },

    { college: "MVLU College", name: "Masala Dosa (1)", img: "masala-dosa", price: null,
      ingredients: "Rice, Urad dal, Fenugreek seeds, Potato, Onion, Green chilli, Ginger, Mustard seeds, Curry leaves, Turmeric, Salt, Oil, Water",
      calories: 350, protein: 8, carbs: 55, fat: 11, vitamins: "Iron, Calcium, Potassium" },

    { college: "MVLU College", name: "Misal Pav (1 plate)", img: "misal-pav", price: 40, price_note: "2 pav",
      ingredients: "Sprouted matki/moth beans, Onion, Tomato, Potato, Ginger, Garlic, Green chilli, Missal masala, Turmeric, Red chilli powder, Cumin, Mustard seeds, Curry leaves, Coriander, Farsan, Lemon, Pav, Oil, Salt",
      calories: 400, protein: 15, carbs: 55, fat: 14, vitamins: "Iron, Folate, Fiber, Potassium" },

    { college: "MVLU College", name: "Daal Vada (2 pieces)", img: "daal-vada", price: null,
      ingredients: "Chana dal, Green chilli, Ginger, Onion, Coriander, Curry leaves, Cumin, Fennel seeds, Salt, Oil",
      calories: 250, protein: 9, carbs: 28, fat: 12, vitamins: "Iron, Magnesium, Folate" },

    { college: "MVLU College", name: "Kanda Bhaji (1 serving)", img: "kanda-bhaji", price: null,
      ingredients: "Onion, Gram flour (besan), Green chilli, Coriander, Turmeric, Red chilli powder, Cumin, Salt, Oil",
      calories: 250, protein: 5, carbs: 28, fat: 13, vitamins: "Vitamin C, Iron, Folate" },

    { college: "MVLU College", name: "Onion Uttapam (1)", img: "onion-uttapam", price: 25,
      ingredients: "Rice, Urad dal, Fenugreek seeds, Onion, Green chilli, Coriander, Salt, Oil, Water",
      calories: 250, protein: 7, carbs: 42, fat: 7, vitamins: "Calcium, Iron, B vitamins" },

    { college: "MVLU College", name: "Samosa (1)", img: "samosa", price: 20, price_note: "sold as samosa pav on some days",
      ingredients: "Potato, Green peas, Onion, Green chilli, Ginger, Coriander, Cumin, Garam masala, Red chilli powder, Turmeric, Maida, Salt, Oil",
      calories: 250, protein: 4, carbs: 30, fat: 13, vitamins: "Potassium, Iron" },

    { college: "MVLU College", name: "Bread Pakoda (1)", img: "bread-pakoda", price: 20,
      ingredients: "Bread, Potato, Gram flour (besan), Green chilli, Ginger, Coriander, Turmeric, Red chilli powder, Cumin, Salt, Oil",
      calories: 220, protein: 5, carbs: 27, fat: 10, vitamins: "Iron, Calcium, B vitamins" },

    { college: "MVLU College", name: "Puri Bhaji (1 serving)", img: "puri-bhaji", price: null,
      ingredients: "Wheat flour, Potato, Onion, Green chilli, Ginger, Mustard seeds, Cumin, Curry leaves, Turmeric, Coriander, Salt, Oil, Water",
      calories: 350, protein: 7, carbs: 55, fat: 12, vitamins: "Potassium, Iron, Vitamin C" },

    { college: "MVLU College", name: "Poha (1 plate)", img: "poha", price: null,
      ingredients: "Flattened rice (poha), Onion, Potato, Green chilli, Mustard seeds, Cumin, Curry leaves, Turmeric, Peanuts, Coriander, Lemon, Salt, Oil",
      calories: 250, protein: 6, carbs: 40, fat: 8, vitamins: "Iron, Vitamin C, B vitamins, Magnesium" },

    { college: "MVLU College", name: "Veg Fried Rice (1 plate)", img: "veg-fried-rice", price: null,
      ingredients: "Rice, Carrot, Capsicum, Cabbage, Green peas, Spring onion, Garlic, Ginger, Soy sauce, Black pepper, Salt, Oil",
      calories: 350, protein: 8, carbs: 55, fat: 11, vitamins: "Vitamin A, Vitamin C, Iron, Potassium" },

    { college: "MVLU College", name: "Upma (1 plate)", img: "upma", price: 30, price_note: "vegetable upma",
      ingredients: "Semolina (rava/suji), Onion, Green chilli, Ginger, Mustard seeds, Cumin, Curry leaves, Chana dal, Urad dal, Coriander, Lemon, Salt, Oil, Water",
      calories: 220, protein: 6, carbs: 35, fat: 7, vitamins: "Iron, Magnesium, B vitamins" },

    { college: "MVLU College", name: "Cold Drink (250 ml)", img: "cold-drink", price: null,
      ingredients: "Carbonated water, Sugar, Flavouring",
      calories: 105, protein: 0, carbs: 27, fat: 0, vitamins: "Little nutritional value; high in added sugar" },

    { college: "MVLU College", name: "Sabudana Khichdi (1 plate)", img: "sabudana-khichdi", price: null,
      ingredients: "Sabudana (tapioca pearls), Potato, Peanuts, Green chilli, Cumin, Coriander, Lemon, Salt, Sugar, Oil/Ghee",
      calories: 350, protein: 6, carbs: 55, fat: 12, vitamins: "Calcium, Magnesium, Potassium" },

    { college: "MVLU College", name: "Chai (1 cup)", img: "chai", price: null,
      ingredients: "Water, Milk, Tea leaves, Sugar, Ginger, Cardamom",
      calories: 90, protein: 3, carbs: 12, fat: 3, vitamins: "Calcium, B vitamins; contains caffeine" },

    { college: "MVLU College", name: "Manchurian Roll (1)", img: "manchurian-roll", price: 30,
      ingredients: "Maida/roti, Cabbage, Carrot, Capsicum, Spring onion, Garlic, Ginger, Green chilli, Corn flour, Soy sauce, Chilli sauce, Tomato ketchup, Black pepper, Salt, Oil",
      calories: 350, protein: 7, carbs: 50, fat: 13, vitamins: "Vitamin A, Vitamin C, Iron" },

    { college: "MVLU College", name: "Hakka Noodles (1 plate)", img: "hakka-noodles", price: 30,
      ingredients: "Hakka noodles, Cabbage, Carrot, Capsicum, Spring onion, Onion, Garlic, Ginger, Soy sauce, Chilli sauce, Vinegar, Black pepper, Salt, Oil",
      calories: 350, protein: 8, carbs: 55, fat: 11, vitamins: "Vitamin A, Vitamin C, Iron" },

    { college: "MVLU College", name: "Masala Pasta (1 plate)", img: "masala-pasta", price: 30,
      ingredients: "Pasta, Onion, Tomato, Capsicum, Garlic, Ginger, Green chilli, Tomato sauce, Red chilli powder, Oregano/mixed herbs, Black pepper, Salt, Oil",
      calories: 330, protein: 9, carbs: 50, fat: 10, vitamins: "Vitamin A, Vitamin C, Iron, Calcium" },

    { college: "MVLU College", name: "Aloo Roll (2 pieces)", img: "aloo-roll", price: 30,
      ingredients: "Maida/roti, Potato, Onion, Green chilli, Ginger, Coriander, Cumin, Turmeric, Red chilli powder, Chaat masala, Lemon, Salt, Oil",
      calories: 300, protein: 6, carbs: 48, fat: 9, vitamins: "Potassium, Vitamin C, Iron" },

    { college: "MVLU College", name: "Vada Usal (1 serving)", img: "vada-usal", price: 40, price_note: "with 2 pav",
      ingredients: "Urad dal, Onion, Potato, Green chilli, Ginger, Garlic, Coriander, Mustard seeds, Cumin, Curry leaves, Turmeric, Red chilli powder, Garam masala, Salt, Oil",
      calories: 300, protein: 12, carbs: 40, fat: 10, vitamins: "Iron, Folate, Magnesium, Potassium" },

    { college: "MVLU College", name: "Burger (1)", img: "burger", price: 40,
      ingredients: "Burger bun, Potato/vegetable patty, Onion, Tomato, Cabbage/lettuce, Cheese, Mayonnaise, Tomato ketchup, Green/chilli sauce, Salt, Oil",
      calories: 350, protein: 10, carbs: 40, fat: 17, vitamins: "Calcium, Iron, Vitamin A" },

    { college: "MVLU College", name: "Toast Sandwich (1)", img: "toast-sandwich", price: 40,
      ingredients: "Bread, Potato, Onion, Tomato, Capsicum, Cucumber, Green chutney, Butter, Cheese (optional), Chaat masala, Black pepper, Salt",
      calories: 280, protein: 8, carbs: 38, fat: 10, vitamins: "Calcium, Iron, Vitamin C, B vitamins" },

    { college: "MVLU College", name: "Besan Chilla (2)", img: "besan-chilla", price: 30,
      ingredients: "Gram flour (besan), Onion, Tomato, Green chilli, Coriander, Ginger, Cumin, Turmeric, Red chilli powder, Salt, Water, Oil",
      calories: 250, protein: 11, carbs: 30, fat: 9, vitamins: "Iron, Magnesium, Folate, Calcium" },

    // ============ ARNOLD COLLEGE CANTEEN ============
    { college: "Arnold College", name: "Samosa / Samosa Pav", img: "samosa", price: 20,
      ingredients: "Potato, green peas, onion, spices, maida pastry, pav (if served with bread), oil",
      calories: 250, protein: 5, carbs: 32, fat: 12, vitamins: "Iron, Potassium, Magnesium" },

    { college: "Arnold College", name: "Vada Pav (1)", img: "vada-pav", price: 20,
      ingredients: "Potato, gram flour (besan), spices, pav bread, chutney, oil",
      calories: 300, protein: 7, carbs: 45, fat: 11, vitamins: "Iron, Calcium, Potassium" },

    { college: "Arnold College", name: "Bread Cutlet (1)", img: "bread-cutlet", price: 20,
      ingredients: "Bread, potato, vegetables, spices, oil",
      calories: 220, protein: 5, carbs: 28, fat: 9, vitamins: "Iron, Calcium, Potassium, Vitamin C" },

    { college: "Arnold College", name: "Idli Chutney (2 pieces)", img: "idli", price: 30,
      ingredients: "Rice, urad dal, fenugreek seeds, salt, water, coconut chutney",
      calories: 180, protein: 6, carbs: 32, fat: 4, vitamins: "Calcium, Iron, B vitamins, Magnesium" },

    { college: "Arnold College", name: "Bonda (1)", img: "bonda", price: 20,
      ingredients: "Potato, gram flour (besan), spices, oil",
      calories: 220, protein: 4, carbs: 28, fat: 10, vitamins: "Potassium, Iron, Magnesium" },

    { college: "Arnold College", name: "Onion Vada (1)", img: "onion-vada", price: 20,
      ingredients: "Onion, urad dal/gram flour, green chilli, spices, oil",
      calories: 250, protein: 6, carbs: 28, fat: 13, vitamins: "Iron, Magnesium, Folate, Potassium" },

    { college: "Arnold College", name: "Veg Burger (1)", img: "burger", price: 40,
      ingredients: "Burger bun, vegetable patty, onion, tomato, lettuce, sauces, oil",
      calories: 350, protein: 10, carbs: 42, fat: 15, vitamins: "Iron, Calcium, Vitamin A, Potassium" },

    { college: "Arnold College", name: "Veg Roll (1)", img: "veg-roll", price: 40,
      ingredients: "Roti/maida wrap, mixed vegetables, spices, sauces, oil",
      calories: 300, protein: 7, carbs: 42, fat: 10, vitamins: "Vitamin A, Vitamin C, Iron, Fiber" },

    { college: "Arnold College", name: "Veg Frankie (1)", img: "veg-frankie", price: 40,
      ingredients: "Roti wrap, mixed vegetables, paneer/potato filling, spices, sauces, oil",
      calories: 350, protein: 8, carbs: 48, fat: 13, vitamins: "Iron, Calcium, Vitamin A, Vitamin C" },

    { college: "Arnold College", name: "Chapati Bhaji (1 serving)", img: "chapati-bhaji", price: 40,
      ingredients: "Wheat chapati, mixed vegetable bhaji, spices, oil",
      calories: 300, protein: 8, carbs: 45, fat: 9, vitamins: "Iron, Calcium, Potassium, Vitamin A, Fiber" },
];

const colleges = ["MVLU College", "Arnold College"];

// Most-sold items reported by each canteen (from the offline data collection).
// Add a canteen here when you collect this for it; canteens without an entry show "Not recorded".
const topSellers = {
    "Arnold College": ["Samosa / Samosa Pav", "Veg Roll", "Vada Pav"]
};
