import React from "react";
import { useQuery } from "@apollo/client";
import { ServicosDocument } from "../graphql/generated";
import { Servico } from "../types";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const Servicos = (): JSX.Element => {
  const {
    data,
    loading,
    error
  } = useQuery(ServicosDocument, {});

  const formatter = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
      {data && (
        // <p>
        //   {servico.nome} - R${servico.valorPadrao}
        // </p>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Serviço</TableCell>
                <TableCell>Valor</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.servicos?.map((servico: Servico) => (
                <TableRow key={servico.id}>
                  <TableCell>{ servico.nome }</TableCell>
                  <TableCell>{ formatter.format(servico.valorPadrao) }</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  )
};

export default Servicos;