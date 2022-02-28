import { MainHeader, Container } from "./styles";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Container>
      <MainHeader>
        <div className="menu-navegacao">
          <nav>
            <ul>
              <Link to="/register">
                <li>Cadastro</li>
              </Link>
              <Link to="/search">
                <li>Usuários</li>
              </Link>
              <Link to="/perfil">
                <li>Perfil</li>
              </Link>
            </ul>
          </nav>
        </div>
      </MainHeader>
    </Container>
  );
};
