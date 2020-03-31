import styled from "styled-components";

interface ButtonStyledProps {
  invert?: boolean;
  small?: boolean;
  loading?: boolean;
}

export const Wrapper = styled.div`
  padding: 8pt;
`;

export const ButtonStyled = styled.a<ButtonStyledProps>`
  position: relative;
  display: inline-flex;
  margin: -0.25rem -0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: 7px;
  background-color: transparent;
  color: ${props => props.theme.color.black};
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border: none;
  font-size: inherit;
  line-height: inherit;
  transition: all 0.2s ease;
  outline: none;
  cursor: pointer;
  user-select: none;
  text-transform: capitalize;

  &:hover {
    color: ${props => props.theme.color.black};
    background-color: rgba(0, 118, 255, 0.1);
  }

  ${props =>
    props.invert &&
    `
    margin: 0;
    padding: 0 3.5rem;
    height: 2.81rem;
    line-height: 2.8rem;
    border-radius: 7px;
    background-color: ${props.theme.color.black};
    box-shadow: ${props.theme.shadow.small};
    color: #fff;
    
    &:hover {
      color: #fff;
      background-color: ${props.theme.color.black};
      box-shadow: ${props.theme.shadow.medium};
      transform: translate3d(0px, -1px, 0px);
    }
  `};

  ${props =>
    props.small &&
    `
    font-size: 0.875rem;
    height: 1.5rem;
    padding: 0 0.75rem;
    line-height: inherit;
    border-radius: 5px;
  `};

  ${props =>
    props.loading &&
    `
    background: #fafafa;
    color: #888888;
    border: 1px solid #000;
    border-color: #eaeaea;
    box-shadow: none;
    cursor: default;
    pointer-events: none;

    & > .text {
      visibility: hidden;
    }

    & > .loading-dots {
      position: absolute;
    }
  `};
`;
