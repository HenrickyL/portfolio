"use client";
import { StacksTypes } from '@/types/stacks';
import { createContext, useContext, useState, ReactNode } from 'react';
import { useLocalization } from './LocalizationProvider';
import { PerfilInfo } from '@/types/PerfilInfo';


interface PageContextType {
  pageInfo: PerfilInfo;
  setPageInfo: (info: PerfilInfo) => void;
}

const PageInfoContext = createContext<PageContextType | undefined>(undefined);

export function PageInfoProvider({ children }: { children: ReactNode }) {
  const {content:{pages}} =useLocalization()

  const [pageInfo, setPageInfo] = useState<PerfilInfo>(pages.professional.info);

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