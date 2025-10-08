"use client";
import { DevStacksTypes, GameDevStacksTypes, ScholarStacksTypes } from '@/types/stacks';
import { createContext, useContext, useState, ReactNode } from 'react';

export interface PerfilInfo {
  perfilDescription: string,
  stacks: (DevStacksTypes | ScholarStacksTypes | GameDevStacksTypes)[]

}
interface PageContextType {
  pageInfo: PerfilInfo;
  setPageInfo: (info: PerfilInfo) => void;
}

const PageInfoContext = createContext<PageContextType | undefined>(undefined);

export function PageInfoProvider({ children }: { children: ReactNode }) {
  const [pageInfo, setPageInfo] = useState<PerfilInfo>({
    perfilDescription: "Desenvolvedor Fullstack",
    stacks: []
  });

  return (
    <PageInfoContext.Provider value={{ pageInfo, setPageInfo }}>
      {children}
    </PageInfoContext.Provider>
  );
}

export const usePageInfo = () => {
  const context = useContext(PageInfoContext);
  if (!context) throw new Error('usePageInfo must be used within PageInfoProvider');
  return context;
}