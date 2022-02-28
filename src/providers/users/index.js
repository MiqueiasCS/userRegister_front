import { createContext, useState, useEffect } from "react";
import userResgistrationApi from "../../services/apis";
import { toast } from "react-toastify";

export const UsersContext = createContext();

export const UsersProviders = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@token")) || ""
  );
  const [usersList, setUsersList] = useState([]);

  const registerUser = (data) => {
    userResgistrationApi
      .post("/user", data)
      .then((response) => {
        toast.success("usuário cadastrado!");
        console.log(response);
        setUsersList([...usersList, response.data]);
      })
      .catch((e) => {
        toast.error("Algo deu errado!");
        console.log(e.response);
      });
  };

  const users_by_cep = (cep) => {
    userResgistrationApi
      .get(`/user/${cep}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => console.log(response))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    userResgistrationApi
      .get("/user")
      .then((response) => {
        setUsersList(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <UsersContext.Provider
      value={{
        registerUser,
        setToken,
        usersList,
        // user_by_id,
        users_by_cep,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
