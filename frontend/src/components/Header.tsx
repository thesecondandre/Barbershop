import React from "react";
import { Link } from "react-router-dom";

const Header = (): JSX.Element => {
  return (
    <div>
      <div>
        <Link to="/">
          <div>Barbershop</div>
        </Link>
        <div>|</div>
        <Link to="/usuarios">
          <div>Usuários</div>
        </Link>
        <div>|</div>
        <Link to="/servicos">
          <div>Serviços</div>
        </Link>
        <div>|</div>
        <Link to="/novoservico">
          <div>Cadastrar Serviço</div>
        </Link>
      </div>
    </div>
  )
}

export default Header;