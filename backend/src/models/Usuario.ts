import { builder } from "../builder";
import { prisma } from "../db";

enum Perfil {
  admin = 'ADMIN',
  cliente = 'CLIENTE',
  profissional = 'PROFISSIONAL'
}

builder.enumType(Perfil, {
  name: 'Perfil',
});

builder.prismaObject("Usuario", {
  fields: (t) => ({
    id: t.exposeID("id"),
    nome: t.exposeString("nome"),
    telefone: t.exposeString("telefone"),
    email: t.expose("email", {
      type: "String",
      nullable: true
    }),
    // perfil: t.exposeString("perfil"),
    perfil: t.field({
      type: Perfil,
      resolve: (usuario) => usuario.perfil as Perfil
    }),
    agendamentos: t.relation("agendamentos"),
    servicos: t.relation("servicos"),
    compromissos: t.relation("compromissos"),
    dthCriacao: t.expose("dthCriacao", {
      type: "Date",
    }),
    dthAtualizacao: t.expose("dthAtualizacao", {
      type: "Date",
    })
  })
});

builder.queryField("usuarios", (t) =>
  t.prismaField({
    type: ["Usuario"],
    resolve: async (query, root, args, ctx, info) => {
      return prisma.usuario.findMany({ ...query });
    }
  })
);

builder.queryField("usuario", (t) =>
  t.prismaField({
    type: "Usuario",
    nullable: true,
    args: {
      id: t.arg.int({ required: true })
    },
    resolve: async (query, root, args, ctx, info) => {
      return prisma.usuario.findUnique({
        ...query,
        where: {
          id: args.id,
        },
      })
    }
  })
);

builder.queryField("clientes", (t) =>
  t.prismaField({
    type: ["Usuario"],
    nullable: true,
    resolve: async (query, root, args, ctx, info) => {
      return prisma.usuario.findMany({
        ...query,
        where: {
          perfil: 'CLIENTE'
        },
      })
    }
  })
);

builder.queryField("profissionais", (t) =>
  t.prismaField({
    type: ["Usuario"],
    nullable: true,
    resolve: async (query, root, args, ctx, info) => {
      return prisma.usuario.findMany({
        ...query,
        where: {
          perfil: 'PROFISSIONAL'
        },
      })
    }
  })
);