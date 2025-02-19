// import "./globals.css";
import { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import { Providers } from "@/hooks";
import TestTheme from "@/hooks/test";

export const metadata: Metadata = {
  title: "Meu Portfólio",
  description: "Meu portfólio pessoal.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
            <Providers>
              {children}
              <TestTheme />
            </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}