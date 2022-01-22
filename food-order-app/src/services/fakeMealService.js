import { v4 as uuidv4 } from 'uuid';

const meals = [
  {
    id: uuidv4(),
    title: "Meal Platter",
    description: "1 Full chicken + 2 regular sides + 2 soft drinks",
    category: "Full Chicken",
    price: 954.00
  },
  {
    id: uuidv4(),
    title: "Espetada Rustica",
    description: "Flame-grilled PERi-PERi chicken thighs, stuffed with sun-dried tomato and skewered between grilled onion",
    category: "Espetada",
    price: 343.00
  },
  {
    id: uuidv4(),
    title: "Avo & Feta Smash Burger",
    description: "Tender chicken, crispy lettuce, sliced fresh tomato, pickled red onions and topped with smashed avo & feta on a Portuguese roll",
    category: "Burgers",
    price: 264.00
  },
  {
    id: uuidv4(),
    title: "10 Full Chicken Wings",
    description: "10 Full, juicy chicken wings in your choice of PERi-PERi flavour",
    category: "Chicken Wings",
    price: 464.00
  },
  {
    id: uuidv4(),
    title: "Chicken Cataplana",
    description: "Chicken thighs, chunky veg and Spicy Rice prepared in a Cataplana sauce",
    category: "Cataplana",
    price: 429.00
  },
  {
    id: uuidv4(),
    title: "Chicken Caesar Wrap",
    description: "Tender chicken, croutons, parmesan cheese, sundried tomatoes and Nando’s Caesar dressing served in a toasted wrap",
    category: "Wraps",
    price: 249.00
  }
];

export function getMeals() {
  return meals;
}

export function getMeal(id) {
  return meals.filter(meal => meal.id === id);
}

export function getMealByCategory(category) {
  return meals.filter(meal => meal.category === category);
}
