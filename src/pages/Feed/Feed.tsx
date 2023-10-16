import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import UserInfo from "../../components/UserInfo/UserInfo";

import { Container, Column, Title, TitleHighlight } from "./Styles";

const Feed = () => {
  return (
    <div>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>

        <Column flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo
            percentual={80}
            nome={"Lucas Fraporti"}
            image={"https://avatars.githubusercontent.com/u/41999999?v=4"}
          />
          <UserInfo
            percentual={27}
            nome={"Lucas Fraporti"}
            image={"https://avatars.githubusercontent.com/u/41999999?v=4"}
          />
          <UserInfo
            percentual={89}
            nome={"Lucas Fraporti"}
            image={"https://avatars.githubusercontent.com/u/41999999?v=4"}
          />
          <UserInfo
            percentual={57}
            nome={"Lucas Fraporti"}
            image={"https://avatars.githubusercontent.com/u/41999999?v=4"}
          />
          <UserInfo
            percentual={12}
            nome={"Lucas Fraporti"}
            image={"https://avatars.githubusercontent.com/u/41999999?v=4"}
          />
        </Column>
      </Container>
    </div>
  );
};

export default Feed;
