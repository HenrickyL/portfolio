"use client";
import { UrlLinkSty } from "./style";

type ExternalLinkProps = {
    href: string;
    children: React.ReactNode;
};


export const UrlLink = ({href, children}:ExternalLinkProps)=>{
    return(
        <UrlLinkSty href={href} target="_blank" rel="noopener noreferrer">
            {children}
        </UrlLinkSty>
    )
}
