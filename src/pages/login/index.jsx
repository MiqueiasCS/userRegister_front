import { Container, Form } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { UsersContext } from "../../providers/users";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import userResgistrationApi from "../../services/apis";
import { toast } from "react-toastify";

export const Login = () => {
  const { setToken } = useContext(UsersContext);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email("Email Inválido!").required("Campo Obrigatório!"),
    password: yup.string().min(4, "Mínimo de 4 caracteres!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleLogin = (data) => {
    userResgistrationApi
      .post("/login", data)
      .then((response) => {
        toast.success("login realizado!");
        setToken(response.data.acess_token);

        localStorage.setItem(
          "@token",
          JSON.stringify(response.data.acess_token)
        );

        navigate("/perfil");
      })
      .catch((e) => {
        toast.error("Algo deu errado!");
        console.log(e.response);
      });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleLogin)}>
        <div>
          <label>E-mail</label>
          <input
            type="email"
            placeholder="Digite seu Email..."
            {...register("email")}
          />
          <span className="text-error">{errors.email?.message}</span>
        </div>

        <div>
          <label>Senha </label>
          <input
            type="password"
            placeholder="Digite sua Senha..."
            {...register("password")}
          />
          <span className="text-error">{errors.password?.message}</span>
        </div>
        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
};
