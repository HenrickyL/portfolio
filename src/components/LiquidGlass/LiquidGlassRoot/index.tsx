import React from "react"
import { LiquidGlassRootSty } from "./style"

interface LiquidGlassRootProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}
export const LiquidGlassRoot = ({children, ...rest}:LiquidGlassRootProps)=>{
    return(
        <>
        <LiquidGlassRootSty {...rest}>
            {children}
            
        </LiquidGlassRootSty>
        <svg style={{display: 'none'}}>
            <filter id="displacementFilter">
            <feTurbulence
                type="turbulence"
                baseFrequency="0.01"
                numOctaves="2"
                result="turbulence"
            />
            <feDisplacementMap
                in="SourceGraphic"
                in2="turbulence"
                scale="200"
                xChannelSelector="R"
                yChannelSelector="G"
            />
            </filter>
        </svg>
        </>
    )
}