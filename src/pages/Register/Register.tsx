import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { api } from "../../services/api";

import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";

import {
  Column,
  Container,
  LoginText,
  Row,
  SubtitleRegister,
  Terms,
  Title,
  TitleRegister,
  Wrapper,
} from "./Styles";
import { IFormData } from "./Types";

const schema = yup
  .object({
    name: yup
      .string()
      .min(8, "No mínimo 8 caracteres")
      .required("Campo obrigatório"),
    email: yup
      .string()
      .email("E-mail não é válido")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(3, "No mínimo 3 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

const Register = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (formData: IFormData) => {
    try {
      const { data } = await api.get(`users?email=${formData.email}`);
      if (data.length === 1) {
        alert("E-mail já cadastrado");
      } else {
        await api
          .post(
            "/users",
            {
              name: formData.name,
              email: formData.email,
              password: formData.password,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            if (response.status === 201) {
              navigate("/feed");
            } else {
              alert("Ocorreu um erro!");
            }
          });
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleRegister>Comece agora grátis</TitleRegister>
            <SubtitleRegister>
              Crie sua conta e make the change._
            </SubtitleRegister>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="name"
                errorMessage={errors?.name?.message}
                control={control}
                placeholder="Nome completo"
                leftIcon={<MdPerson />}
              />
              <Input
                name="email"
                errorMessage={errors?.email?.message}
                control={control}
                placeholder="E-mail"
                leftIcon={<MdEmail />}
              />
              <Input
                name="password"
                errorMessage={errors?.password?.message}
                control={control}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button
                title="Criar minha conta"
                variant="secondary"
                type="submit"
              />
            </form>
            <Terms>
              Ao clicar em "criar minha conta grátis", declaro que aceito as
              Políticas de Privacidade e os Termos de Uso da DIO.
            </Terms>
            <Row>
              <LoginText>
                Já tenho uma conta. <span>Fazer login</span>
              </LoginText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </div>
  );
};

export default Register;
