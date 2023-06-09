import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type Agendamento = {
  __typename?: 'Agendamento';
  cliente: Usuario;
  dthAgendamento: Scalars['Date']['output'];
  dthAtualizacao: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  profissional: Usuario;
  servico: Servico;
};

export type EntradaAtualizarServico = {
  duracao: Scalars['Float']['input'];
  id: Scalars['Int']['input'];
  nome: Scalars['String']['input'];
  valor: Scalars['Float']['input'];
};

export type EntradaNovoServico = {
  duracao: Scalars['Float']['input'];
  nome: Scalars['String']['input'];
  valor: Scalars['Float']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  atualizarServico?: Maybe<Servico>;
  novoServico: Servico;
};


export type MutationAtualizarServicoArgs = {
  entrada: EntradaAtualizarServico;
};


export type MutationNovoServicoArgs = {
  entrada: EntradaNovoServico;
};

export enum Perfil {
  Admin = 'admin',
  Cliente = 'cliente',
  Profissional = 'profissional'
}

export type PrestadorServico = {
  __typename?: 'PrestadorServico';
  dthAtualizacao: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  profissional: Usuario;
  servico: Servico;
  valor: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
  clientes?: Maybe<Array<Usuario>>;
  profissionais?: Maybe<Array<Usuario>>;
  servicos: Array<Servico>;
  usuario?: Maybe<Usuario>;
  usuarios: Array<Usuario>;
};


export type QueryUsuarioArgs = {
  id: Scalars['Int']['input'];
};

export type Servico = {
  __typename?: 'Servico';
  duracaoPadrao: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  nome: Scalars['String']['output'];
  valorPadrao: Scalars['Float']['output'];
};

export type Usuario = {
  __typename?: 'Usuario';
  agendamentos: Array<Agendamento>;
  compromissos: Array<Agendamento>;
  dthAtualizacao: Scalars['Date']['output'];
  dthCriacao: Scalars['Date']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  nome: Scalars['String']['output'];
  perfil: Perfil;
  servicos: Array<PrestadorServico>;
  telefone: Scalars['String']['output'];
};

export type NovoServicoMutationVariables = Exact<{
  entrada: EntradaNovoServico;
}>;


export type NovoServicoMutation = { __typename?: 'Mutation', novoServico: { __typename?: 'Servico', id: string } };

export type ServicosQueryVariables = Exact<{ [key: string]: never; }>;


export type ServicosQuery = { __typename?: 'Query', servicos: Array<{ __typename?: 'Servico', id: string, nome: string, valorPadrao: number, duracaoPadrao: number }> };

export type UsuariosQueryVariables = Exact<{ [key: string]: never; }>;


export type UsuariosQuery = { __typename?: 'Query', usuarios: Array<{ __typename?: 'Usuario', id: string, nome: string, telefone: string, perfil: Perfil, email?: string | null, servicos: Array<{ __typename?: 'PrestadorServico', servico: { __typename?: 'Servico', nome: string } }>, agendamentos: Array<{ __typename?: 'Agendamento', dthAgendamento: any, profissional: { __typename?: 'Usuario', nome: string }, servico: { __typename?: 'Servico', nome: string } }>, compromissos: Array<{ __typename?: 'Agendamento', cliente: { __typename?: 'Usuario', nome: string }, servico: { __typename?: 'Servico', nome: string } }> }> };


export const NovoServicoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NovoServico"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"entrada"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EntradaNovoServico"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"novoServico"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entrada"},"value":{"kind":"Variable","name":{"kind":"Name","value":"entrada"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<NovoServicoMutation, NovoServicoMutationVariables>;
export const ServicosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Servicos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"servicos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nome"}},{"kind":"Field","name":{"kind":"Name","value":"valorPadrao"}},{"kind":"Field","name":{"kind":"Name","value":"duracaoPadrao"}}]}}]}}]} as unknown as DocumentNode<ServicosQuery, ServicosQueryVariables>;
export const UsuariosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Usuarios"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usuarios"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nome"}},{"kind":"Field","name":{"kind":"Name","value":"telefone"}},{"kind":"Field","name":{"kind":"Name","value":"perfil"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"servicos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"servico"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nome"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"agendamentos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dthAgendamento"}},{"kind":"Field","name":{"kind":"Name","value":"profissional"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nome"}}]}},{"kind":"Field","name":{"kind":"Name","value":"servico"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nome"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"compromissos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cliente"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nome"}}]}},{"kind":"Field","name":{"kind":"Name","value":"servico"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nome"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UsuariosQuery, UsuariosQueryVariables>;