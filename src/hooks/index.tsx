"use client";
import {ThemeProvider} from './theme';


export const Providers = ({ children }: { children: React.ReactNode })=>{
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}