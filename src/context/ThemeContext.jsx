import { createContext, useContext, useState, useEffect } from "react";


//  (1) create new context for theme handling
export const ThemeContext = createContext([]);

function ThemeProvider ({ children }) {
    // (2) set the context's state & logic
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme; // used for body style themes that will be configured/set
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        // (3) provide values to context provider
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}


export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);