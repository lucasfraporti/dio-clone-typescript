import { ButtonContainer } from "./Styles";

import { IButton } from "./Types";

const Button = ({ title, variant = "primary", onClick }: IButton) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  );
};

export default Button;
