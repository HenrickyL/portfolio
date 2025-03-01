import { Theme } from "@/types/theme";

export const lightTheme: Theme = {
    contrast: '#000',
    contrastLight: '#888',
    text: '#000',
    noise:"noise3.png",
    background: '#fff',
    backgroundSnd: '#dff0df',
    backgroundTer: '#F6B756ff',
    black: '#000',
    black2: '#3a3a3a',
    black3: '#5a5a5a',
    white: '#FEFFFE',
    white2: '#F0F0F0',
    white3: '#EFEFEF',
    gray: '#6C6C6D',
    primary: '#0f0',
    primaryLight: '#29fd53',
    secondary: '#926386ff',
    secondaryLight: '#936625ff',
    tertiary: '#FB8C50ff',
  
    input: {
      background: "#f0f0f0",
    },
    settings:{
      normalTransition: 400,
      iconSize: 20
    },
    notification:{
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
    }
  };
  
  export const darkTheme: Theme = {
    text: '#fff',
    contrast: '#fff',
    contrastLight: '#777',
    background: '#25252b',
    noise:"noise2.png",
    backgroundSnd: '#2a2d39',
    backgroundTer: '#666',
    black: '#000',
    black2: '#3a3a3a',
    black3: '#5a5a5a',
    white: '#FFF',
    white2: '#F0F0F0',
    white3: '#EFEFEF',
    gray: '#888',
    primary: '#0f0',
    primaryLight: '#3f3',
    secondary: '#5bc0de',
    secondaryLight: '#5bc0de',
    tertiary: '#5bc0de',
  
    settings:{
      normalTransition: 400,
      iconSize: 20
    },
    input:{
      background: '#4a5a4a'
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