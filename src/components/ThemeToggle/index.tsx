// "use client";
import { useTheme } from "@/hooks/ThemeProvider";
import { styled } from "styled-components"

import {FaSun as LightIcon} from "react-icons/fa"
import {FaMoon as DarkIcon} from "react-icons/fa"
import { darkTheme } from "@/styles/themes";

interface ThemeSwapProp{
  $isDark: boolean
}

const STY = styled.div<ThemeSwapProp>`
  position: absolute;
  display: flex;
  top: 4px;
  right: 4px;
  z-index: 5;

  button{
    width: 2rem;
    height: 2rem;
    padding: 8px;
    border-radius: 50%;
    background-color: ${prop=> prop.$isDark ? prop.theme.white : prop.theme.black};
    color: ${prop=> prop.$isDark ? prop.theme.black : prop.theme.white};
  }
`
const ThemeToggle = ()=>{
  const  {toggle,theme} = useTheme()
  return(
    <STY $isDark={theme == darkTheme}>
      <button onClick={
        ()=>{console.log("troca");toggle()}
        }>
          {theme == darkTheme? <LightIcon/> : <DarkIcon/>}
        </button>
    </STY>
  )
}

export default ThemeToggle;