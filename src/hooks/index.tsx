"use client";
import { ThemeProvider } from "@/styles/theme";


export const Providers = ({ children }: { children: React.ReactNode })=>{
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}