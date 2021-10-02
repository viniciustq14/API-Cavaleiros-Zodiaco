import Prisma from '../db/prismaClient';
import ICavaleiro from '../Interfaces/CavaleiroI';

class CavaleiroModel {
  public listar() {
    return Prisma.cavaleiros.findMany();
  }

  public encontrar(id: number) {
    return Prisma.cavaleiros.findUnique({
      where: { id }
    });
  }

  public salvar(cavaleiro: ICavaleiro) {
    return Prisma.cavaleiros.create({
      data: cavaleiro
    });
  }

  public editar(id: number, cavaleiro: ICavaleiro) {
    return Prisma.cavaleiros.update({
      where: { id },
      data: cavaleiro,
    });
  }

  public excluir(id: number) {
    return Prisma.cavaleiros.delete({
      where: { id }
    });
  }
}

export default new CavaleiroModel();