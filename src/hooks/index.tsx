"use client";
import { ThemeProvider } from "@hooks/ThemeProvider";
import { PageInfoProvider } from "./PageInfoProvidere";
import { LocalizationProvider } from "./LocalizationProvider";


export const Providers = ({ children }: { children: React.ReactNode })=>{
    return (
        <ThemeProvider>
            <LocalizationProvider>
                <PageInfoProvider>
                    {children}
                </PageInfoProvider>
            </LocalizationProvider>
        </ThemeProvider>
    )
}