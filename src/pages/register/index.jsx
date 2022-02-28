import { Container, Form } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { UsersContext } from "../../providers/users";
import { useContext, useState } from "react";
import { ViaCep } from "../../services/apis";

// import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [cep, setCep] = useState("");
  const { registerUser } = useContext(UsersContext);
  //   const navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório!"),
    email: yup.string().email("Email Inválido!").required("Campo Obrigatório!"),
    password: yup.string().min(4, "Mínimo de 4 caracteres!"),
    House_number: yup
      .number("deve ser um número")
      .required("Campo Obrigatório!"),
    cep: yup
      .string()
      .matches(/^[0-9]{5}-[0-9]{3}$/, "números no formato xxxxx-xxx")
      .required("cep obrigatório"),
  });

  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleData = (data) => {
    registerUser(data);
    // navigate("/");
  };

  const handleCheck = () => {
    let validCep = cep.replace(/\D/g, "");
    ViaCep.get(`/${validCep}/json/`)
      .then((response) => {
        setValue("street", response.data["logradouro"]);
        setValue("state", response.data["uf"]);
        setValue("district", response.data["bairro"]);
        setValue("city", response.data["localidade"]);
      })
      .catch((e) => console.log(e));
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleData)}>
        <div>
          <label>Nome</label>
          <input
            type="text"
            placeholder="Digite seu nome..."
            {...register("name")}
          />
          <span className="text-error">{errors.name?.message}</span>
        </div>

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

        <div className="cep">
          <div>
            <label>cep</label>
            <input
              type="text"
              placeholder="xxxxx-xxx"
              {...register("cep")}
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />
            <span className="text-error">{errors.cep?.message}</span>
          </div>
          <button type="button" onClick={handleCheck}>
            check
          </button>
        </div>

        <div className="address">
          <input
            type="text"
            readOnly
            {...register("state")}
            placeholder="Estado"
          />
          <input
            type="text"
            readOnly
            {...register("city")}
            placeholder="cidade"
          />
          <input
            type="text"
            readOnly
            {...register("district")}
            placeholder="bairro"
          />
          <input
            type="text"
            readOnly
            {...register("street")}
            placeholder="rua"
          />
        </div>

        <div className="number">
          <label>N° da casa: </label>
          <input
            type="text"
            placeholder="N° da casa..."
            {...register("House_number")}
          />
          <span className="text-error">{errors.House_number?.message}</span>
        </div>

        <button type="submit">Cadastrar</button>
      </Form>
    </Container>
  );
};
