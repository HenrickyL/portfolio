"use client";
import { ThemeProvider } from "@hooks/ThemeProvider";


export const Providers = ({ children }: { children: React.ReactNode })=>{
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}