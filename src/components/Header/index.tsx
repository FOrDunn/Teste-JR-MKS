import { Container, TitleBig, TitleDiv, TitleSmall } from "./styles";
import { CartButton } from "./CartButton";

export const Header: React.FC = () => {
  return (
    <Container>
      <TitleDiv>
        <TitleBig>MKS</TitleBig>
        <TitleSmall>Sistemas</TitleSmall>
      </TitleDiv>
      <CartButton />
    </Container>
  );
};

export default Header;
