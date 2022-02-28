import { Container, ContainerChild } from "./styles";
import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../providers/users";
import userResgistrationApi from "../../services/apis";

export const Modal = ({ setOpenModal, userId, auth }) => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    userResgistrationApi
      .get(`/user/${userId}`, {
        headers: { Authorization: `Bearer ${auth}` },
      })
      .then((response) => {
        let { id, email, name, address } = response.data;
        setUser({ id, name, email, ...address });
      })
      .catch((e) => console.log(e.response));
  }, []);

  return (
    <Container>
      <ContainerChild>
        <h2>Perfil</h2>
        <p className="fields_labels">Nome:</p>
        <p>{user.name}</p>
        <p className="fields_labels">Email:</p>
        <p>{user.email}</p>
        <h3>Endereço</h3>
        <p>
          {user.street} N°:{user.House_number} - {user.district}
        </p>
        <p className="fields_labels">CEP:</p>
        <p> {user.cep}</p>
        <p className="fields_labels">Cidade/estado:</p>
        <p>
          {user.city}/{user.state}
        </p>
        <button onClick={() => setOpenModal(false)}>fechar</button>
      </ContainerChild>
    </Container>
  );
};
