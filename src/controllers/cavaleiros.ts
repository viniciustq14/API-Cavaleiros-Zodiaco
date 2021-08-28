import { Request, Response, NextFunction } from 'express';

interface Cavaleiro {
  id: Number,
  nome: String,
  casa: String,
  armadura: String,
  seculo: Number,
}

const cavaleiros: Array<Cavaleiro> = [
  {
    id: 1,
    nome: 'Shiryu',
    casa: 'Libra',
    armadura: 'Dragão',
    seculo: 20,
  },
  {
    id: 2,
    nome: 'Seiya',
    casa: 'Sagitario',
    armadura: 'Pegasus',
    seculo: 20,
  },
  {
    id: 3,
    nome: 'Shun',
    casa: 'Virgem',
    armadura: 'Andromeda',
    seculo: 20,
  },
  {
    id: 4,
    nome: 'Hyoga',
    casa: 'Aquario',
    armadura: 'Cisne',
    seculo: 20,
  },
  {
    id: 5,
    nome: 'Ikki',
    casa: 'Leão',
    armadura: 'Fenix',
    seculo: 20,
  }
];

function listar (req: Request, res: Response, next: NextFunction) {
  try {

    res.status(200).json({
      cavaleiros,
    });
  } catch (error) {
    next(error);
  }
}

function encontrar (req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;

    const cavaleiro = cavaleiros.find(cavaleiro => cavaleiro.id === Number(id));

    res.status(200).json({
      cavaleiro,
    });
  } catch (error) {
    next(error);
  }
}

export default {
  listar,
  encontrar,
};
