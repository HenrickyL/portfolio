import styled from "styled-components";

export const LayoutWrapperSty = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 100dvh;
    min-height: 0;
    overflow: hidden;
    position: relative;


    @media screen and (max-width: 680px){
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        grid-template-rows: auto auto auto;
        grid-template-areas:
            "notice theme"
            "main main"
            "footer footer";
        align-items: start;
        align-content: start;
        height: auto;
        min-height: 100dvh;
        overflow: visible;
        padding-bottom: var(--shell-menu-space, 5.25rem);

        & > * {
            min-width: 0;
        }
    }
`

export const LayoutNoticeSty = styled.div`
    position: absolute;
    top: 30px;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 680px){
        position: static;
        grid-area: notice;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 0.35rem 0.75rem;
        width: 100%;
        padding: 0.75rem 0.75rem 0;

        h3 {
            font-size: 0.95rem;
            font-weight: 600;
        }
    }
`

export const LayoutContentSty = styled.div`
    min-height: 0;
    width: 120%;
    overflow-y: auto;
    padding-right: 8px;

    @media screen and (max-width: 680px){
        width: 100%;
        overflow-x: clip;
        overflow-y: visible;
        padding-right: 0;
    }
`