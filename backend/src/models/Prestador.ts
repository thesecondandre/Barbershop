import { builder } from "../builder";

builder.prismaObject("PrestadorServico", {
  fields: (t) => ({
    id: t.exposeID("id"),
    profissional: t.relation("profissional"),
    servico: t.relation("servico"),
    valor: t.exposeFloat("valor"),
    dthAtualizacao: t.expose("dthAtualizacao", {
      type: "Date",
    })
  })
});