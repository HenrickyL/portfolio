import { Theme } from "@/types/theme";

export const lightTheme: Theme = {
  text: '#2D2D2D',
  text2: '#5A5A5A',
  text3: '#888',
  contrast: '#000',
  contrastLight: '#888',
  noise: "noise3.png",
  noiseContrast: "noise2.png",
  background: '#F4F5F6',
  backgroundSnd: '#FFF',
  backgroundTer: '#F6B756ff',
  black: '#000',
  black2: '#3a3a3a',
  black3: '#5a5a5a',
  white: '#FEFFFE',
  white2: '#F0F0F0',
  white3: '#EFEFEF',
  gray: '#6C6C6D',
  primary: '#9757D7',
  primaryLight: '#9757D7',
  secondary: '#926386ff',
  secondaryLight: '#936625ff',
  tertiary: '#FB8C50ff',
  link: '#A15BF2', // Mais claro para melhor contraste no escuro
  linkHover: '#C18AFF', // Brilho suave no hover
  linkVisited: '#8A4CE6', // Mesmo do light como base
  input: {
    background: "#f0f0f0",
  },
  settings: {
    normalTransition: 400,
    iconSize: 20
  },
  notification: {
    success: {
      default: '#2ecc71',
      background: '#F0FFF0'
    },
    warning: {
      default: '#f39c12',
      background: '#fffff0'
    },
    error: {
      default: '#e74c3c',
      background: '#fff0f0'
    },
    report: {
      default: '#3498db',
      background: '#f0f0ff'
    }
  },
};
  
  export const darkTheme: Theme = {
    text: '#f8f8f8',
    text2: '#C5C5C5',
    text3: '#888', 
    contrast: '#fff',
    contrastLight: '#333',
    noise:"noise2.png",
    noiseContrast: "noise2.png",
    background: '#141516',
    backgroundSnd: '#272829',
    backgroundTer: '#666',
    black: '#000',
    black2: '#3a3a3a',
    black3: '#5a5a5a',
    white: '#FFF',
    white2: '#F0F0F0',
    white3: '#EFEFEF',
    gray: '#888',
    primary: '#914BF1',
    primaryLight: '#7942C0',
    secondary: '#5bc0de',
    secondaryLight: '#5bc0de',
    tertiary: '#5bc0de',
    link: '#8A4CE6', // Um roxo vibrante mas não cansativo
    linkHover: '#6E3AB5', // Um pouco mais escuro no hover
    linkVisited: '#5A2D99', // Para links já visitados
    settings:{
      normalTransition: 400,
      iconSize: 20
    },
    input:{
      background: '#272829'
    },
    notification:{
      success: {
        default: '#2ecc71',
      },
      warning: {
          default: '#f39c12',
      },
      error: {
          default: '#e74c3c',
      },
      report: {
          default: '#3498db',
      }
    }
  };