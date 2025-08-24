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
      <body>
        <StyledComponentsRegistry>
            <Providers>
              <LayoutComponent  children={children}/>              
            </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}