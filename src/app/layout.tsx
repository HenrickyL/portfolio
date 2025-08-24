// import "./globals.css";
import { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import { Providers } from "@/hooks";
import TestTheme from "@/components/test";
import { TestNavs } from "./_menu";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { UrlLink } from "@/components/UrlLink";

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
              <TestNavs />
              <TestTheme />
              <Container.Root>
                {children}
              </Container.Root>
              <Footer.Root>
                <Footer.Text>Made by <UrlLink href="https://www.linkedin.com/in/henrickyl/">HenrickyL</UrlLink> | 2025</Footer.Text>
              </Footer.Root>
            </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}