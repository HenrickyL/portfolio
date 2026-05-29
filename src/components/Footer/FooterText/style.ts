'use client';
import styled from "styled-components";

export const FooterTextSty = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 6px;
    font-family: 'Noto Sans Duployan', sans-serif;
    font-size: 0.82rem;
    line-height: 1.4;
    text-align: center;

    strong {
        color: ${p=>p.theme.text};
        font-weight: 600;
    }

    span {
        color: ${p=>p.theme.text3};
    }
`