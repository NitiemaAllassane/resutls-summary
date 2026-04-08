# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Results summary component solution](#frontend-mentor---results-summary-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
    - [AI Collaboration](#ai-collaboration)
  - [Author](#author)

---

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Use the local JSON data to dynamically populate the content
- **Bonus**: Randomize scores to see different results dynamically

### Screenshot

![](/public/assets/screenshots/summary-desk.png)
![](/public/assets/screenshots/summary-mobile.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [https://resutls-summary.vercel.app/](https://resutls-summary.vercel.app/)

---

## My process

### Built with

- Semantic HTML5 markup
- [Tailwind CSS](https://tailwindcss.com/) – utility-first styling
- Flexbox for layout
- [React](https://reactjs.org/) – functional components and hooks
- [TypeScript](https://www.typescriptlang.org/) – for type safety
- Local JSON data for dynamic content

### What I learned

Working on this project helped me reinforce several key concepts:

- How to manage **component state** in React using `useState`
- How to calculate a **dynamic summary score** using `map` and `reduce`
- How to build **reusable components** (`StatItem`, `ResultDisplayer`, `CallToActionButton`)
- How to generate **random scores** and update the UI reactively

**Calculating the summary score:**

```ts
const scores = dataInfo.map(item => item.score);
const total = scores.reduce((acc, score) => acc + score, 0);
const summaryResult = Math.round(total / dataInfo.length);
```

**Determining the reaction label based on score:**

```ts
function getReaction(score: number): ReactionType {
  if (score < 50) return "Bad";
  if (score < 60) return "Medium";
  return "Great";
}
```

**Randomizing scores on button click:**

```ts
function randomizeScores() {
  const newData = dataInfo.map(item => ({
    ...item,
    score: Math.floor(Math.random() * 101),
  }));
  setDataInfo(newData);
}
```

### Continued development

In future projects, I want to focus on:

- Adding **animated transitions** when scores update
- Implementing a **dark mode toggle**
- Persisting scores using `localStorage`
- Improving **accessibility** (ARIA labels, keyboard navigation)
- Exploring **unit testing** for utility functions like `getReaction`

### Useful resources

- [React Docs – useState](https://react.dev/reference/react/useState) – Essential reference for managing component state.
- [Tailwind CSS Docs](https://tailwindcss.com/docs) – Great for quickly finding utility classes.
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) – Helped me understand how to type React props and functions properly.

### AI Collaboration

I used **ChapGPT** during this project in the following ways:

- **Brainstorming** the component architecture (`ResultCard`, `StatItem`, etc.)
- **Debugging** TypeScript type errors in props and state
- **Generating boilerplate** for the `randomizeScores` function and score calculation logic
- **Writing this README** from raw content

What worked well: Claude was very effective at explaining *why* certain TypeScript patterns work, not just *what* to write. What didn't: occasionally suggested overly complex solutions for simple UI tasks.

---

## Author

- Frontend Mentor – [@NitiemaAllassane](https://www.frontendmentor.io/profile/NitiemaAllassane)
- GitHub – [@NitiemaAllassane](https://github.com/yourusername)
- Blog – [@NitiemaAllassane](https://nitiema-allassane.vercel.app/)