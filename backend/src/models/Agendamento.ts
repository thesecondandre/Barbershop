import { builder } from "../builder";

builder.prismaObject("Agendamento", {
  fields: (t) => ({
    id: t.exposeID("id"),
    cliente: t.relation("cliente"),
    profissional: t.relation("profissional"),
    servico: t.relation("servico"),
    dthAgendamento: t.expose("dthAgendamento", {
      type: "Date",
    }),
    dthAtualizacao: t.expose("dthAtualizacao", {
      type: "Date",
    })
  })
})