import React from "react";
import { useTheme } from "../context/ThemeContext";

const initialState = {
  theme: "dark",
  userPreferences: {
    fontSize: "large",
    reduceAnimations: false,
  },
};

function ThemeSwitcher() {
  const { state, dispatch } = useTheme();

  function toggleTheme() {
    dispatch({ type: "TOGGLE_THEME" });
  }

  function updateUserPreferences(preference) {
    dispatch({ type: "UPDATE_USER_PREFERENCES", payload: preference });
  }

  return (
    <div className="flex justify-evenly text-2xl pt-20 mt-20 dark:bg-black dark:text-white ">
      <button onClick={toggleTheme}>
        Switch Theme: {state.theme === "dark" ? "Light" : "Dark"}
      </button>
      <div>
        <label>
          Font Size:
          <select
            className="dark:bg-black dark:text-white "
            value={state.userPreferences.fontSize}
            onChange={function (e) {
              updateUserPreferences({
                ...state.userPreferences,
                fontSize: e.target.value,
              });
            }}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Reduce Animations:
          <input
            className=" ml-2 h-5 w-5 dark:bg-black "
            type="checkbox"
            checked={state.userPreferences.reduceAnimations}
            onChange={function (e) {
              updateUserPreferences({
                ...state.userPreferences,
                reduceAnimations: e.target.checked,
              });
            }}
          />
        </label>
      </div>
    </div>
  );
}

export default ThemeSwitcher;
