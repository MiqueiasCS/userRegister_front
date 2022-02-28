import { Container } from "./styles";
import { useState, useContext, useEffect } from "react";
import { UsersContext } from "../../providers/users";
import { Modal } from "../../components/modal";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const { usersList } = useContext(UsersContext);
  const [openModal, setOpenModal] = useState(false);
  const [userId, setUserId] = useState(false);
  const [auth] = useState(JSON.parse(localStorage.getItem("@token")) || false);

  const navigate = useNavigate();

  const handleModalClick = (id) => {
    setUserId(id);
    setOpenModal(true);
  };

  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  }, []);

  return (
    <Container>
      {usersList.map((item, index) => (
        <div key={index} className="card">
          <div>
            <p>{item.name}</p>
            <p>{item.email}</p>
          </div>
          <button onClick={() => handleModalClick(item.id)}>Verificar</button>
        </div>
      ))}
      {openModal && (
        <Modal setOpenModal={setOpenModal} userId={userId} auth={auth} />
      )}
    </Container>
  );
};
