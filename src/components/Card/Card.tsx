import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./Styles";

import { FiThumbsUp } from "react-icons/fi";

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://avatars.githubusercontent.com/u/41999999?v=4" />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/41999999?v=4" />
          <div>
            <h4>Lucas Fraporti</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>

        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>
            Projeto feito no curso de HTML e CSS no Bootcamp DIO do Global
            Avanade... <strong>Saiba mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #JavaScript</h4>
          <p>
            <FiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export default Card;
