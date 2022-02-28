import { Routes as Switch, Route } from "react-router-dom";
import { Login } from "../pages/login";
import { Perfil } from "../pages/perfil";
import { Search } from "../pages/search";
import { Register } from "../pages/register";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/perfil" element={<Perfil />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/search" element={<Search />} />
    </Switch>
  );
};
