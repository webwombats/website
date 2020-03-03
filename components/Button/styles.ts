import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 8pt;
`;

export const ButtonStyled = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  min-width: 200px;
  height: 50px;
  padding: 0 25px 0 25px;
  border-radius: 5px;
  font-size: 1rem;
  line-height: 38px;
  white-space: nowrap;
  margin: 0;
  text-transform: capitalize;
  font-weight: 400;
  box-shadow: ${props => props.theme.shadow.small};
  transition: all 0.2s ease;
  user-select: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  background-color: ${props => props.theme.color.black};
  color: ${props => props.theme.color.white};

  &:hover {
    box-shadow: ${props => props.theme.shadow.medium};
    transform: translate3d(0px, -1px, 0px);
  }
`;
