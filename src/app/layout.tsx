import { Noto_Sans_Duployan } from "next/font/google";
// import "./globals.css";
import { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import { Providers } from "@/hooks";
import { LayoutComponent } from "@/components/Layout";

const noto = Noto_Sans_Duployan({ 
  subsets: ['latin'],
  weight: ['400', '700']
});


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
      </head>
      <body className={noto.className}>
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