import React from "react";
import { Usuario } from "../types";

type Props = {
  usuario: Usuario
}

const UsuarioInfo = ({ usuario }: Props): JSX.Element => {
  return (
    <p>
      {usuario.nome} ({usuario.telefone})
    </p>
  )
}

export default UsuarioInfo;