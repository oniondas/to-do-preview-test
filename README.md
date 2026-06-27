# DailyBite 🍳

> **⚠️ Note:** This repository and application is just a test/proof-of-concept build.

DailyBite is a modern, playful, clay-infused culinary application designed to transform cooking preparation into a fun, data-driven, and visually delightful experience. Built with a "Warm Minimalism" aesthetic, it helps home chefs manage recipes, find ingredient substitutes, and track kitchen finances—all within a unified, interactive digital kitchen.

## 🌟 Key Features

The application is structured into three primary views, accessible via the top navigation bar:

### 1. Plan & Recipe View
* **Step-by-Step Guidance:** Interactive cooking steps with a built-in checklist. When a step is completed, it strikes through and fades out to keep focus on the next task.
* **Ingredient Management:** Clear, categorized ingredient lists with precise measurements.
* **Nutritional Insights:** High-level nutritional facts (Calories, Protein, Carbs, Fat) displayed in a bold, easy-to-read format.
* **Appliance Checker:** Quick tags indicating which tools and appliances are needed for the dish.

### 2. The Ingredient Switchboard (Substitutes)
* **Smart Swapping:** Search for ingredients and get immediate suggestions for substitutes (e.g., swapping Greek Yogurt for Sour Cream or Heavy Cream + Lemon).
* **Pros & Cons Analysis:** Detailed breakdowns of what happens when you substitute an ingredient (texture, tanginess, fat content).
* **Pantry Essentials Reference:** Quick-access cards for common swaps like eggs, dairy, and spices.

### 3. Kitchen Finance (Budget)
* **Budget Feasibility Index:** A visual tracker showing how much of your grocery budget has been utilized.
* **Cost Breakdown:** Categorized spending insights (Fresh Produce, Protein & Dairy, Pantry Staples, Beverages).
* **AI-Driven Savings:** Actionable insights suggesting smart swaps (e.g., buying in bulk) to reduce weekly expenses.
* **Price Trends & Coupon Wallet:** Visual charts for 30-day price trends and a digital wallet for storing expiration-tracked coupons.

## 🛠 Tech Stack

* **Framework:** React 19 (via Vite)
* **Language:** TypeScript
* **Styling:** Tailwind CSS (v4) with a custom `Clay-Infused Culinary` theme system.
* **Icons:** `lucide-react` for clean, scalable vector iconography.
* **Routing/State:** React state hook (`useState`) used for modular view switching.

## 🚀 Changes & Updates Made in the Deployed Version

The original static design prototypes were successfully transformed into a dynamic, production-ready React application. Key updates include:

* **Component Modularization:** Broke down the monolithic mockups into highly reusable and maintainable React components (`TopNav`, `Footer`, `RecipeView`, `SubstituteView`, `BudgetView`).
* **Interactive State Management:**
  * Implemented a seamless Single Page Application (SPA) navigation system using `useState` to switch between Plan, Substitutes, and Budget screens without page reloads.
  * Added functional state to the cooking steps in the Recipe View, allowing users to interactively check off stages of their meal prep.
* **Design System Integration:** 
  * Ported the comprehensive "Clay-Infused Culinary" design system into the Tailwind CSS configuration (`src/index.css`).
  * Implemented specific brand colors (`brand-pink`, `brand-teal`, `brand-lavender`, `brand-peach`, `brand-ochre`), typography scaling, and fluid spacing variables.
  * Applied the tactile "clay-shadow" effects to elevate 3D assets and create a warm, physical feel without harsh drop shadows.
* **Responsive Optimization:** Ensured all grid layouts and flexbox containers perfectly adapt to desktop, tablet, and mobile screens using Tailwind's responsive prefixes.
* **Icon Modernization:** Replaced legacy material icons with crisp, consistent `lucide-react` components for better rendering and maintainability in a React environment.
