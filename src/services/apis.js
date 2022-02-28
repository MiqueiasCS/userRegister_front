import axios from "axios";

const userResgistrationApi = axios.create({
  baseURL: "http://127.0.0.1:5000/api",
});

export default userResgistrationApi;

export const ViaCep = axios.create({
  baseURL: "http://viacep.com.br/ws",
});
