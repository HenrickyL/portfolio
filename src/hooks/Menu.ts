"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface MenuContextType {
  index: number;
  title: string;
  setActiveItem: (index: number, title:string) => void;
}

export const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu deve ser usado dentro de um <Menu.Root>");
  }
  return context;
};
