import { FC } from "react";

import { ButtonStyled, Wrapper } from "./styles";

const Button: FC = ({ children }) => (
  <Wrapper>
    <ButtonStyled href="#" role="button">
      {children}
    </ButtonStyled>
  </Wrapper>
);

export default Button;
