import React, { useState } from "react"
import { ThemeContext, lightTheme } from "shared/config/theme"
import { ITheme } from "shared/config/theme/types"
import { localStorageKeys } from "shared/consts/local-storage-keys"

interface IThemeProvider {
    children: React.ReactNode
}

const savedTheme = localStorage.getItem(localStorageKeys.theme) ?? lightTheme

export const ThemeProvider: React.FC<IThemeProvider> = ({children}) => {
    const [theme, setTheme] = useState<ITheme>(savedTheme as ITheme);

    return(
        <ThemeContext.Provider value={{changeTheme: setTheme, thisTheme: theme}}>
            {children}
        </ThemeContext.Provider>
    )
}