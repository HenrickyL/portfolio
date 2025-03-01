"use client";
import { createContext, useCallback, useContext, useMemo, useState } from "react";
import GlobalStyle from "@/styles/globalStyle";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { Theme, ThemeContextData, ThemeType } from "@/types/theme";
import { darkTheme, lightTheme } from "@/styles/themes";



const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);


export const ThemeProvider = ({children}:{children:React.ReactNode})=>{
    const [theme, setTheme] = useState<Theme>(darkTheme)
    
    const changeToTheme = useCallback((theme: ThemeType): void => {
        setTheme(theme === 'dark'? darkTheme : lightTheme)
    }, []);
    
    const toggle = useCallback(():void => {
      changeToTheme(theme === lightTheme? ThemeType.Dark : ThemeType.Light )
  }, [theme, changeToTheme]);

    
    const providerData = useMemo<ThemeContextData>(
        () => ({
            theme,
            toggle,
            changeToTheme
        }),
        [theme, toggle, changeToTheme]
    );
    return (
        <ThemeContext.Provider value={providerData}>
            <StyledThemeProvider theme={providerData.theme}>
                <GlobalStyle />
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    )
}


export const useTheme = () :ThemeContextData =>{
    const context = useContext(ThemeContext);
    if (!context)
        throw new Error('useTheme must be used within an ThemeProvider');
    return context;
}



  
  

//   interface NotificationFieldProps {
//     theme: Theme;  // Usando o tipo 'Theme' definido acima
//   }
  
// export const notificationColors = {
//   success: (props: NotificationFieldProps) => props.theme.notification.success,
//   warning: (props: NotificationFieldProps) => props.theme.notification.warning,
//   error: (props: NotificationFieldProps) => props.theme.notification.error,
//   report: (props: NotificationFieldProps) => props.theme.notification.report
// };