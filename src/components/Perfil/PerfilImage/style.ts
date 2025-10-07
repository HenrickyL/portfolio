import Image from "next/image";
import styled from "styled-components";

export const PerfilImageSty = styled(Image)`
    width: 80%;
    height: auto;
    max-width: 18rem;
    border-radius: 12px;
    background-image: url(${(props) => props.theme.noise});
`