import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("Servico", {
  fields: (t) => ({
    id: t.exposeID("id"),
    nome: t.exposeString("nome"),
    valorPadrao: t.exposeFloat("valorPadrao"),
    duracaoPadrao: t.exposeFloat("duracaoPadrao")
  }),
});

builder.queryField("servicos", (t) => 
  t.prismaField({
    type: ["Servico"],
    resolve: async (query, root, ctx, info) => {
      return await prisma.servico.findMany({...query});
    }
  })
);

const EntradaNovoServico = builder.inputType('EntradaNovoServico', {
  fields: (t) => ({
    nome: t.string({ required: true }),
    valor: t.float({ required: true }),
    duracao: t.float({ required: true })
  })
});

const EntradaAtualizarServico = builder.inputType('EntradaAtualizarServico', {
  fields: (t) => ({
    id: t.int({ required: true }),
    nome: t.string({ required: true }),
    valor: t.float({ required: true }),
    duracao: t.float({ required: true })
  })
});

builder.mutationField("novoServico", (t) =>
  t.prismaField({
    type: "Servico",
    nullable: false,
    args: {
      entrada: t.arg({ type: EntradaNovoServico, required: true })
    },
    resolve: async (query, root, args, ctx, info) => {
      return await prisma.servico.create({
        ...query,
        data: {
          nome: args.entrada.nome,
          valorPadrao: args.entrada.valor,
          duracaoPadrao: args.entrada.duracao
        }
      })
    }
  })
);

builder.mutationField("atualizarServico", (t) =>
  t.prismaField({
    type: "Servico",
    nullable: true,
    args: {
      entrada: t.arg({ type: EntradaAtualizarServico, required: true })
    },
    resolve: async (query, root, args, ctx, info) => {
      return await prisma.servico.update({
        ...query,
        where: {
          id: args.entrada.id
        },
        data: {
          nome: args.entrada.nome,
          valorPadrao: args.entrada.valor,
          duracaoPadrao: args.entrada.duracao
        }
      })
    }
  })
);