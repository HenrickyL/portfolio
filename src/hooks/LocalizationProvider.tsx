import { LocalizationEN, LocalizationPT } from '@/Data/Localization';
import { LocalizationSupported } from '@/types/LocalizationSupported';
import { LocalizationTexts } from '@/types/LocalizationTexts';
import React, { createContext, useContext, useState } from 'react';

type LanguageContextType = {
  content: LocalizationTexts;
  currentLanguage: LocalizationSupported,
  setLanguage: (lang: LocalizationSupported) => void;
};

const LocalizationContext = createContext<LanguageContextType | undefined>(undefined);

export const LocalizationProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<LocalizationSupported>(LocalizationSupported.PT);

  const contentByLanguage: Record<LocalizationSupported, LocalizationTexts> = {
    [LocalizationSupported.EN]: LocalizationEN,
    [LocalizationSupported.PT]: LocalizationPT,
  };

  return (
    <LocalizationContext.Provider
      value={{
        currentLanguage: language,
        content: contentByLanguage[language],
        setLanguage,
      }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
