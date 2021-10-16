import Prisma from '../db/prismaClient';
import IDeus from '../Interfaces/IDeus';

class DeusModel {
  public listar() {
    return Prisma.deuses.findMany();
  }

  public encontrar(id: number) {
    return Prisma.deuses.findUnique({
      where: { id }
    });
  }

  public salvar(deus: IDeus) {
    return Prisma.deuses.create({
      data: deus
    });
  }

  public editar(id: number, deus: IDeus) {
    return Prisma.deuses.update({
      where: { id },
      data: deus,
    });
  }

  public excluir(id: number) {
    return Prisma.deuses.delete({
      where: { id }
    });
  }
}

export default new DeusModel();
