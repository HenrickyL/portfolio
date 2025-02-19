// import "./globals.css";
import { Metadata } from "next";
import GlobalStyles from '@/styles/globalStyle'; // Importe o GlobalStyles
import StyledComponentsRegistry from "@/lib/registry";

StyledComponentsRegistry
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
            <GlobalStyles />
            {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}