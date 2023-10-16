import { useNavigate } from "react-router-dom";

import bannerImage from "../../assets/banner.png";

import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";

import { Container, TextContent, Title, TitleHighlight } from "./Styles";

const Home = () => {
  const navigate = useNavigate();

  const handleClickSignin = () => {
    navigate("/login");
  };

  return (
    <div>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>Implemente</TitleHighlight>
            <br />o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button
            title="Começar agora"
            variant="secondary"
            onClick={handleClickSignin}
          >
            Cadastrar
          </Button>
        </div>
        <div>
          <img src={bannerImage} alt="Imagem principal" />
        </div>
      </Container>
    </div>
  );
};

export default Home;
