import { createContext } from "react";
import { ITheme } from "./types";
import { lightTheme } from "./themes";

interface IThemeContextProp {
    changeTheme: (theme: ITheme) => void,
    thisTheme: ITheme
}

export const ThemeContext = createContext<IThemeContextProp>({
    changeTheme: () => null, 
    thisTheme: lightTheme
})