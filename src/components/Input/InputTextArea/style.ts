import styled from "styled-components";

interface TextAreaStyProps {
  background?: string;
}

export const InputTextAreaSty = styled.div<TextAreaStyProps>`
  display: flex;
  flex-direction: row;
  width: 100%;

  & textarea {
    width: 100%;
    min-height: 100px;
    resize: vertical;
    border-radius: 8px;
    padding: 4px 6px;
    color: ${({ theme }) => theme.contrast};
    background-color: transparent;
    font-family: inherit;
    font-size: inherit;
    border: none;
    outline: none;

    &:disabled {
      color: ${({ theme }) => theme.gray};
      cursor: not-allowed;
    }
  }

  span {
    position: absolute;
    font-size: 10px;
    bottom: -30%;
    left: 8px;
    color: red;
  }
`;
