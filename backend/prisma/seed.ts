import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.agendamento.deleteMany({});
  await prisma.prestadorServico.deleteMany({});
  await prisma.usuario.deleteMany({});
  await prisma.servico.deleteMany({});

  await prisma.usuario.create({
    data: {
      nome: 'Andre',
      telefone: '61982651378',
      email: 'andrec.aac@gmail.com',
      perfil: 'ADMIN'
    }
  });

  // await prisma.servico.create({
  //   data: {
  //     nome: 'Corte',
  //     valorPadrao: 40,
  //     duracaoPadrao: 30
  //   }
  // });

  await prisma.usuario.create({
    data: {
      nome: 'Francisco',
      telefone: '61999999999',
      email: 'francisco@email.com',
      perfil: 'PROFISSIONAL',
      servicos: {
        create: [
          {
            valor: 40,
            servico: {
              connectOrCreate: {
                where: {
                  id: 1,
                },
                create: {
                  nome: 'Corte',
                  valorPadrao: 40,
                  duracaoPadrao: 30
                }
              },
            }
          }
        ]
      }
    }
  });

  await prisma.usuario.create({
    data: {
      nome: 'Joao',
      telefone: '61999999998',
      email: 'joaodasilva@email.com',
      perfil: 'CLIENTE',
      agendamentos: {
        create: [
          {
            dthAgendamento: new Date(),
            profissional: {
              connectOrCreate: {
                where: {
                  id: 2,
                },
                create: {
                  nome: 'Francisco',
                  telefone: '61999999999',
                  email: 'francisco@email.com',
                  perfil: 'PROFISSIONAL',
                }
              },
            },
            servico: {
              connectOrCreate: {
                where: {
                  id: 1,
                },
                create: {
                  nome: 'Corte',
                  valorPadrao: 40,
                  duracaoPadrao: 30
                }
              },
            }
          }
        ]
      }
    }
  });

}

main().then(() => {
  console.log('Data seeded...');
});