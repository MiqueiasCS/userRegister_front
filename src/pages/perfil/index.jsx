import { useEffect, useState, useContext } from "react";
import jwt_decode from "jwt-decode";
import userResgistrationApi from "../../services/apis";
import { useNavigate } from "react-router-dom";
import { UsersContext } from "../../providers/users";
import { Container } from "./styles";
import { toast } from "react-toastify";

export const Perfil = () => {
  const { setToken } = useContext(UsersContext);

  const [userLogged, setUserLogged] = useState(false);

  const [auth] = useState(JSON.parse(localStorage.getItem("@token")) || false);

  const navigate = useNavigate();

  const HandleLogout = () => {
    localStorage.clear("@token");
    setToken(false);
    navigate("/");
  };

  useEffect(() => {
    if (auth) {
      let decode = jwt_decode(auth);

      userResgistrationApi
        .get(`/user/${decode.sub.id}`, {
          headers: { Authorization: `Bearer ${auth}` },
        })
        .then((response) => {
          let { id, email, name, address } = response.data;
          setUserLogged({ id, name, email, ...address });
        })
        .catch((e) => {
          toast.error("Algo deu errado!");
          console.log(e.response);
          navigate("/");
        });
    } else {
      navigate("/");
    }
  }, []);

  return (
    <Container>
      <h2>Perfil</h2>
      <p className="fields_labels">Nome:</p>
      <p>{userLogged.name}</p>
      <p className="fields_labels">Email:</p>
      <p>{userLogged.email}</p>
      <h3>Endereço</h3>
      <p>
        {userLogged.street} N°:{userLogged.House_number} - {userLogged.district}
      </p>
      <p className="fields_labels">CEP:</p>
      <p> {userLogged.cep}</p>
      <p className="fields_labels">Cidade/estado:</p>
      <p>
        {userLogged.city}/{userLogged.state}
      </p>

      <button onClick={HandleLogout}>Sair</button>
    </Container>
  );
};
