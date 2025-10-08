"use client";
import { ThemeProvider } from "@hooks/ThemeProvider";
import { PageInfoProvider } from "./PageInfoProvidere";


export const Providers = ({ children }: { children: React.ReactNode })=>{
    return (
        <ThemeProvider>
            <PageInfoProvider>
                {children}
            </PageInfoProvider>
        </ThemeProvider>
    )
}