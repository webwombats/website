import { FC } from "react";
import Link from "next/link";

import { ButtonStyled, Wrapper } from "./styles";
import LoadingDots from "./LoadingDots";

interface Props {
  invert?: boolean;
  small?: boolean;
  href?: string;
  as?: string;
  amp?: boolean;
  loading?: boolean;
  [x: string]: any;
}

const Button: FC<Props> = ({
  children,
  invert = false,
  small = false,
  href,
  as,
  amp = false,
  loading = false,
  ...props
}) => {
  if (href) {
    const isExternal = href && href.startsWith("http");

    const a = (
      <ButtonStyled href={href} invert={invert} small={small} {...props}>
        {children}
      </ButtonStyled>
    );

    return amp || isExternal ? (
      a
    ) : (
      <Wrapper>
        <Link href={href} as={as}>
          {a}
        </Link>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <ButtonStyled
        type="button"
        invert={invert}
        small={small}
        loading={loading}
        {...props}
      >
        <span className="text">{children}</span>
        {loading && (
          <span className="loading-dots">
            <LoadingDots />
          </span>
        )}
      </ButtonStyled>
    </Wrapper>
  );
};

export default Button;
