// import enum { Perfil } from "./graphql/generated";
import type { UsuariosQuery } from "./graphql/generated";
import type { ServicosQuery } from "./graphql/generated";

// export enum Perfil {
//   admin = 'ADMIN',
//   cliente = 'CLIENTE',
//   profissional = 'PROFISSIONAL'
// }
// export enum Perfil;

// export type Usuario = {
//   id: number
//   nome: string
//   telefone: string
//   email?: string,
//   perfil: Perfil,
//   dtCriacao: Date,
//   agendamentos?: Agendamentos[],
//   servicos?: PrestadoresServicos[]
// }

export type Usuario = UsuariosQuery["usuarios"][0];

// export type Servico = {
//   id: number,
//   nome: string,
//   valorPadrao: number,
//   duracaoPadrao: number,
//   prestadores: PrestadoresServicos[]
// }
export type Servico = ServicosQuery["servicos"][0];

// export type PrestadoresServicos = {
//   id: number,
//   profissional: Usuario,
//   servico: Servico,
//   valor: number,
//   agendamentos: Agendamentos[],
//   ultimaAtualizacao: Date
// }
export type PrestadorServico = UsuariosQuery["usuarios"][0]["servicos"][0];

// export type Agendamentos = {
//   id: number,
//   cliente: Usuario,
//   profissional: PrestadoresServicos,
//   dthAgendamento: Date,
//   dthAtualizacao: Date
// }
export type Agendamento = UsuariosQuery["usuarios"][0]["agendamentos"][0]