// src/lib/registry.tsx
"use client";

import React from "react";
import { ServerStyleSheet } from "styled-components";

// Este componente agora gerencia a coleta dos estilos sem sobrescrever createElement
export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const sheet = new ServerStyleSheet();

  if (typeof window === "undefined") {
    // Colete os estilos enquanto renderiza os filhos
    const collectedStyles = sheet.collectStyles(<>{children}</>);

    return (
      <>
        {collectedStyles}
        {/* Adiciona os estilos gerados no SSR */}
        <style
          dangerouslySetInnerHTML={{
            __html: sheet.getStyleTags(),
          }}
        />
      </>
    );
  }

  // No lado do cliente, basta renderizar normalmente
  return <>{children}</>;
}
