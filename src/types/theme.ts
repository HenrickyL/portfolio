export enum ThemeType {
    Dark = 'dark',
    Light = 'light',
}

export interface ThemeSettings {
    fastTransition?: number;
    normalTransition: number;
    slowTransition?: number;
    iconSize: number;
}
  
export interface ThemeNotificationFields {
    default: string;
    background?: string;
}
  
export interface ThemeNotification {
    success: ThemeNotificationFields;
    warning: ThemeNotificationFields;
    error: ThemeNotificationFields;
    report: ThemeNotificationFields;
}
  
export interface ThemeInputsSettings {
    background: string;
}
  
export interface Theme {
    text: string;
    text2: string;
    text3?: string;
    contrast: string;
    contrastLight?: string;
    settings: ThemeSettings;
    input: ThemeInputsSettings;
    notification: ThemeNotification;
    noise: string;
    noiseContrast: string;
    background: string;
    backgroundSnd: string;
    backgroundTer: string;
    black: string;
    black2: string;
    black3: string;
    white: string;
    white2: string;
    white3: string;
    gray: string;
    primary: string;
    primaryLight?: string;
    secondary: string;
    secondaryLight?: string;
    tertiary?: string;
    tertiaryLight?: string;
    link: string;
    linkHover: string;
    linkVisited: string;
}

export interface ThemeContextData {
    theme: Theme;
    toggle(): void;
    changeToTheme(theme: "dark" | "light"): void;
}