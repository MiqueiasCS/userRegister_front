import { createContext } from "react";
import userResgistrationApi from "../../services/apis";

export const UsersContext = createContext();

export const UsersProviders = ({ children }) => {
  const registerUser = (data) => {
    userResgistrationApi
      .post("/user", data)
      .then((response) => console.log(response))
      .catch((e) => console.log(e));
  };

  const login = (data) => {
    userResgistrationApi
      .post("/login", data)
      .then((response) => console.log(response))
      .catch((e) => console.log(e));
  };

  const users = () => {
    userResgistrationApi
      .get("/user")
      .then((response) => console.log(response))
      .catch((e) => console.log(e));
  };

  const user_by_id = (id) => {
    userResgistrationApi
      .get(`/user/${id}`)
      .then((response) => console.log(response))
      .catch((e) => console.log(e));
  };

  const users_by_cep = (cep) => {
    userResgistrationApi
      .get(`/user/${cep}`)
      .then((response) => console.log(response))
      .catch((e) => console.log(e));
  };

  return (
    <UsersContext.Provider
      value={{ registerUser, login, users, user_by_id, users_by_cep }}
    >
      {children}
    </UsersContext.Provider>
  );
};
