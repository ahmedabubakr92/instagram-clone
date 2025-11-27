# Oldagram - Instagram Clone 📸

A fully functional, responsive Instagram feed clone built as a solo project for the Scrimba Full Stack Developer Path.

This project transitions from static HTML/CSS to a dynamic JavaScript application, rendering post data from an array of objects and handling user interactions via the DOM.

**[🔴 LIVE DEMO LINK HERE](https://calm-hamster-c88118.netlify.app)** 

## 📱 Features

- **Data-Driven Rendering:** No hard-coded HTML for posts. All content is generated dynamically via JavaScript loops.
- **Interactive "Like" System:**
  - Double-tap the main image to like.
  - Single-tap the heart icon to like.
  - "Surgical" DOM updates (updates only the specific post's like count without re-rendering the entire feed).
  - Visual state change (Heart turns red on click).
- **Responsive Design:** Mobile-first layout that centers elegantly on larger desktop screens.
- **Accessibility:** Dynamic `alt` tags generated for every image.

## 🛠️ Built With

- **Semantic HTML5**
- **CSS3** (Flexbox, CSS Filters for icon coloring)
- **Vanilla JavaScript** (ES6+, DOM Manipulation)

## 💡 Key Learnings

### 1. Rendering Lists
Moved away from hard-coding repeated HTML blocks. Instead, I utilized a JavaScript array of objects to hold the data and a loop to generate the HTML structure dynamically.

### 2. The "Surgical" DOM Update
Initially, I re-rendered the entire application every time a user liked a post. I learned this was inefficient. I refactored the code to target specific elements using unique IDs (e.g., `like-count-${index}`), allowing for instant updates without rebuilding the DOM.

### 3. Event Handling
Managed different user expectations for interactions:
- `ondblclick` for the main image.
- `onclick` for the action buttons.

<img width="443" height="809" alt="Screenshot 2025-11-27 at 11 52 57 AM" src="https://github.com/user-attachments/assets/fad4f973-9968-4da5-b61a-cc5a292c86d8" />

![instagram-clone](https://github.com/user-attachments/assets/1ef7c683-5131-4185-9b64-e183a1be911c)




