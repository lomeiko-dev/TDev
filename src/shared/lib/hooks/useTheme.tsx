import { useCallback, useContext } from "react"
import { ThemeContext } from "shared/config/theme"
import { ITheme } from "shared/config/theme/types";
import { localStorageKeys } from "shared/consts/local-storage-keys";

export const useTheme = () => {
    const {changeTheme, thisTheme} = useContext(ThemeContext);

    const changeThemeHandle = useCallback((theme: ITheme) => {
        changeTheme(theme);
        localStorage.setItem(localStorageKeys.theme, JSON.stringify(theme));
    }, [localStorageKeys.theme, changeTheme])

    return {changeThemeHandle, thisTheme}
}