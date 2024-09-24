import React, { useContext } from 'react';
import { ThemeContext, UserContext } from '../App';

const ChildC = () => {
  const { theme, setTheme } = useContext(ThemeContext); // Access the theme value from ThemeContext
  const user = useContext(UserContext); // Access the user value from UserContext

  // Function to toggle the theme
  function handleClick() {
    if (theme.theme === 'light') {
      setTheme({ theme: 'dark' }); // Set the theme to 'dark'
    } else {
      setTheme({ theme: 'light' }); // Set the theme to 'light'
    }
  }

  return (
    <div>
      <button onClick={handleClick}>
        Change Theme
      </button>
      <p>User: {user.name}</p> {/* Displays the user's name */}
      <p>Current Theme: {theme.theme}</p> {/* Displays the current theme */}
    </div>
  );
}

export default ChildC;
