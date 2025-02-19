// import "./globals.css";
import { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}