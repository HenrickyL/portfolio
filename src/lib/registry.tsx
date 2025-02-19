"use client";

import React from "react";
import { ServerStyleSheet } from "styled-components";

// Este componente é para garantir a correção do SSR
export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  if (typeof window === "undefined") {
    const sheet = new ServerStyleSheet();
    const originalRender = React.createElement;

    // React.createElement = (...args: any[]) => {
    //   const element = originalRender(...args);
    //   sheet.collectStyles(element);
    //   return element;
    // };

    return (
      <>
        {children}
        <style
          dangerouslySetInnerHTML={{
            __html: sheet.getStyleTags(),
          }}
        />
      </>
    );
  }

  return <>{children}</>;
}