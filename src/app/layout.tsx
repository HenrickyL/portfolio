// import "./globals.css";
import { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import { Providers } from "@/hooks";
import TestTheme from "@/components/test";

export const metadata: Metadata = {
  title: "Henricky Dev",
  description: "Meu portfólio pessoal.",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
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