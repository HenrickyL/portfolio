"use client";
import { useTheme } from "@/styles/theme";
import { styled } from "styled-components"

const STY = styled.div`
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
    background-color: blue;
  }
`
const TestTheme = ()=>{
  const  {toggle} = useTheme()
  return(
    <STY>
      <button onClick={
        ()=>{console.log("troca");toggle()}
        }>T</button>
    </STY>
  )
}

export default TestTheme;