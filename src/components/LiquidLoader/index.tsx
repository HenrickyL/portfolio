"use client";
import { LiquidLoaderSty } from './style';

interface LiquidLoaderProp{
    spinCount?: number
    color?: string
    children?: React.ReactNode
}

export const LiquidLoader = ({children,color, spinCount = 8}:LiquidLoaderProp)=>{
    
    return(
        <LiquidLoaderSty count={spinCount} color={color}>
            <main>
                {Array.from({ length: spinCount }, (_, index) => (
                    <span key={index} style={{ "--i": index } as React.CSSProperties}></span>
                ))}
            </main>
            {children}
            <svg>
                <filter id='Gooey'>
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
                    <feColorMatrix values='
                        1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        0 0 0 20 -10'/>
                </filter>
            </svg>

        </LiquidLoaderSty>
    )
}