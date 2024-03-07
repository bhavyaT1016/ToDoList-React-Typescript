import React, { useState, createContext } from "react";
import "./App.css";
import ToDoList from "./TodoList";

// Define the type for the context value
type ThemeContextType = boolean;

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function App() {
  const [darkMode, setDarkMode] = useState<ThemeContextType>(false);

  function toggleTheme() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeContext.Provider value={darkMode}>
      <div className="App">
        <header className="App-header">
          <ToDoList toggleTheme={toggleTheme} darkMode={darkMode} />
        </header>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
