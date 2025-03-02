import styled, { keyframes } from "styled-components";


const spin = (count: number, color:string)=>keyframes`
  0%,10% {
    width: 6.3rem;
    height: 6.3rem;
    transform: rotate(0deg) translateX(7.5rem);
  }

  40%,70% {
    width: 2.5rem;
    height: 2.5rem;
    transform: rotate(calc(360deg/${count} * var(--i)));
    box-shadow: 0 0 0 10px ${color};
  }
  90%,100% {
    width: 6.3rem;
    height: 6.3rem;
    transform: rotate(0deg) translateX(7.5rem);
  }
`;

const animate = keyframes`
  0%,10% {
    opacity: 0;
  }

  40%,70% {
    opacity: 1;
  }
  90%,100% {
    opacity: 0;
  }
`;

interface LiquidLoaderStyProps{
    color?: string
    count: number
}

export const LiquidLoaderSty = styled.div<LiquidLoaderStyProps>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    & h2{
        position: absolute;
        color: #fff;
        font-size: 1.75em;
        font-weight: 500;
        animation: ${animate} 5s ease-in-out infinite;
        opacity: 1;
        transition: 0.3s;
    }

    svg{    
        width: 0;
        height: 0;
    }

    /* &::after{
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url(noise2.png);
      background-size: 500%;
    } */


    & main{
        position: relative;
        width: 18.75rem;
        height: 18.75rem;
        display: flex;
        justify-content: center;
        align-items: center;
        /* background-color: rgba(0,0,0,0.25); */
        filter: url(#Gooey);

        & span{
            position: absolute;
            left: 0;
            transform-origin: 9.375rem;
            width: 6.25rem;
            height: 6.25rem;
            background-color: ${prop=> prop.color ?? prop.theme.primary};
            border-radius: 50%;
            animation: ${prop=> spin(prop.count, prop.color?? prop.theme.primary)} 5s ease-in-out infinite;
            animation-delay: calc(0.15s *var(--i));
            overflow: hidden;
        }
    }
`