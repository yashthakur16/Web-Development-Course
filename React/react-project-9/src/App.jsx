import { createContext, useState } from 'react';
import './App.css';
import ChildA from './components/ChildA';

const ThemeContext = createContext();
const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ name: 'Yash' });
  const [theme, setTheme] = useState({ theme: 'light' });

  return (
    <div>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <UserContext.Provider value={user}>
          <div style={{ backgroundColor: theme.theme === 'light' ? 'beige' : 'black', color: theme.theme === 'light' ? 'black' : 'white' }}>
            <ChildA />
          </div>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
export { ThemeContext, UserContext };
