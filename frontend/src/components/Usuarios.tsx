import React from "react";
import { useQuery } from "@apollo/client";
import { UsuariosDocument } from "../graphql/generated";
import { Usuario } from "../types";
import UsuarioInfo from "./Usuario";

const Usuarios = (): JSX.Element => {
  const { 
    data,
    loading,
    error
  } = useQuery(UsuariosDocument, {});
  
  return (
  <div>
    {loading && <p>Loading...</p>}
    {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
    {data && (
      <div>
        {data.usuarios?.map((usuario: Usuario, index: Number) => (
          <UsuarioInfo key={usuario.id} usuario={usuario} />
        ))}
      </div>
    )}
  </div>
  )
}

export default Usuarios;