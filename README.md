# React Portfolio Site with Theme Switching

Build a responsive portfolio website using Next.js, React, and Tailwind CSS that supports dynamic theme switching (light and dark modes) and user preferences (e.g., font size, reduced motion). This project will utilize `useReducer` and `Context` for state management.

## Building Your Portfolio Site

- **Hero Section**: Introduce yourself with a compelling headline and a brief bio.
- **Projects Section**: Display your projects using cards or a grid layout. Each project should have a title, description, used tech and possibly a link to the live site or code repository.
- **Contact Section**: Provide your professional contact information.

[Example portfolio in figma](https://www.figma.com/community/file/1116246660507537002)

## Setup Project

```bash
npx create-next-app portfolio
```

Edit `tailwind.config.js` to enable dark mode:

```javascript
module.exports = {
  darkMode: "class",
  // other configurations...
};
```

## ThemeContext and ThemeProvider

Create `ThemeContext.js` to manage theme and user preferences:

````javascript
import React, { createContext, useContext, useReducer } from "react";

const ThemeContext = createContext();

const initialState = {
  theme: "light",
  userPreferences: {
    fontSize: "medium",
    reduceAnimations: false,
  },
};

function themeReducer(state, action) {
  // your code here
}

export const ThemeProvider = ({ children }) => {
  // your code here
};

// Create and use your own hook instead of using useContext in the components
export const useTheme = () => useContext(ThemeContext);
```git

## Applying the Theme Dynamically

In tailwind dark or light mode is set by adding or removing a class called `dark` in the root html tag. Use `ThemeContext` in `_app.js` to apply the theme class to the root element:

```javascript
import { useEffect } from "react";
import { ThemeProvider, useTheme } from "../contexts/ThemeContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { state } = useTheme();

  useEffect(() => {
    // Your code here. Add the dark class to the <html /> tag
    // with vanilla js.
  }, [state.theme]);

  return <Component {...pageProps} />;
}

export default ({ Component, pageProps }) => (
  <ThemeProvider>
    <MyApp Component={Component} pageProps={pageProps} />
  </ThemeProvider>
);
````

## Creating the ThemeSwitcher and Handling User Preferences

Implement a component to toggle the theme and adjust user preferences:

## Using User Preferences in Components

Demonstrate using `userPreferences` in a component, adjusting styles based on the context state:
