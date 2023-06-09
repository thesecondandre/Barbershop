import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { NovoServicoDocument } from "../graphql/generated";
import { Button } from "@mui/material"

const NovoServico = (): JSX.Element => {
  const [formState, setFormState] = useState({
    nome: '',
    valor: 0,
    duracao: 0
  });

  const navigate = useNavigate();

  const [criarServico] = useMutation(NovoServicoDocument, {
    variables: {
      entrada: {
        nome: formState.nome,
        valor: formState.valor,
        duracao: formState.duracao
      }
    }, onCompleted: () => navigate('/servicos')
  });

  return (
    <form
      onSubmit={ (e: React.FormEvent) => {
        e.preventDefault();
        criarServico();
      }}
    >
      <div>
        <input
          value={formState.nome}
          onChange={(e) => 
            setFormState({...formState, nome: e.target.value})
          }
          type="text"
          placeholder="O nome do serviço"
        />
        <input
          value={formState.valor}
          onChange={(e) =>
            setFormState({...formState, valor: Number(e.target.value)})
          }
          type="number"
          placeholder="Valor do serviço"
        />
        <input
          value={formState.duracao}
          onChange={(e) =>
            setFormState({...formState, duracao: Number(e.target.value)})
          }
          type="number"
          placeholder="Duração do serviço"
        />
      </div>
      <Button variant="contained">Adicionar</Button>
    </form>
  )
}

export default NovoServico;