// import "./globals.css";
import { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import { Providers } from "@/hooks";
import { LayoutComponent } from "@/components/Layout";

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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Duployan:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
            <Providers>
              <LayoutComponent>
                {children}
              </LayoutComponent>              
            </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}