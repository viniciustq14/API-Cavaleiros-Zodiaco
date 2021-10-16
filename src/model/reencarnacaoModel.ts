import Prisma from '../db/prismaClient';
import IReencarnacao from '../Interfaces/IReencarnacao';

class ReencarnacaoModel {
  public listar() {
    return Prisma.reencarnacoes.findMany();
  }

  public encontrar(id: number) {
    return Prisma.reencarnacoes.findUnique({
      where: { id },
      include: {
        Deuses: {
          select: {
            nome: true,
          }
        }
      }
    });
  }

  public salvar(reencarnacao: IReencarnacao) {
    return Prisma.reencarnacoes.create({
      data: reencarnacao
    });
  }

  public editar(id: number, reencarnacao: IReencarnacao) {
    return Prisma.reencarnacoes.update({
      where: { id },
      data: reencarnacao,
    });
  }

  public excluir(id: number) {
    return Prisma.reencarnacoes.delete({
      where: { id }
    });
  }
}

export default new ReencarnacaoModel();
