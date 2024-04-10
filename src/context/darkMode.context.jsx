import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext (ThemeContext);

export const ThemeProvieder = ({ children }) => {
    const [theme, setTheme] = useState('light');


    const toogleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'ligth'))
    }

    return (
        <ThemeContext.Provider value = {{ theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}